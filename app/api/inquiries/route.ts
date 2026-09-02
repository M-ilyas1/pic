import { getDb } from "@/db";
import { inquiries } from "@/db/schema";

const allowedFormTypes = new Set([
  "general",
  "proposal",
  "patient",
  "partnership",
  "expert",
  "newsletter",
]);

const allowedExtensions = new Set(["pdf", "doc", "docx", "xlsx"]);
const maximumFileSize = 8 * 1024 * 1024;

type RuntimeEnv = {
  DB?: D1Database;
  BUCKET?: R2Bucket;
  FORM_NOTIFICATION_WEBHOOK?: string;
};

function textValue(form: FormData, key: string, maximum = 10_000) {
  const value = form.get(key);
  return typeof value === "string" ? value.trim().slice(0, maximum) : "";
}

function validEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 254;
}

function safeFileName(name: string) {
  return name
    .normalize("NFKD")
    .replace(/[^a-zA-Z0-9._-]+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 120);
}

function retentionDate() {
  const date = new Date();
  date.setUTCDate(date.getUTCDate() + 180);
  return date.toISOString();
}

export async function POST(request: Request) {
  const requestUrl = new URL(request.url);
  const origin = request.headers.get("origin");
  if (origin && new URL(origin).host !== requestUrl.host) {
    return Response.json({ error: "Invalid request origin." }, { status: 403 });
  }

  try {
    const { env } = await import("cloudflare:workers");
    const form = await request.formData();
    const formType = textValue(form, "formType", 40);
    const honeypot = textValue(form, "companyWebsite", 200);
    const startedAt = Number(textValue(form, "formStartedAt", 30));

    if (honeypot || (startedAt && Date.now() - startedAt < 1_200)) {
      return Response.json({
        message: "Thank you. Your request has been received.",
      });
    }
    if (!allowedFormTypes.has(formType)) {
      return Response.json({ error: "Invalid form type." }, { status: 400 });
    }
    if (textValue(form, "consent", 10) !== "yes") {
      return Response.json(
        { error: "Consent is required before submitting this form." },
        { status: 400 },
      );
    }

    const email = textValue(form, "email", 254).toLowerCase();
    const fullName = textValue(form, "fullName", 200);
    if (!validEmail(email)) {
      return Response.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }
    if (formType !== "newsletter" && !fullName) {
      return Response.json({ error: "Full name is required." }, { status: 400 });
    }

    const runtime = env as unknown as RuntimeEnv;
    if (!runtime.DB) {
      return Response.json(
        { error: "The secure form service is not configured yet." },
        { status: 503 },
      );
    }

    const recent = await runtime.DB.prepare(
      `SELECT COUNT(*) AS count
       FROM inquiries
       WHERE email = ? AND form_type = ?
         AND created_at >= datetime('now', '-30 seconds')`,
    )
      .bind(email, formType)
      .first<{ count: number }>();
    if ((recent?.count ?? 0) > 0) {
      return Response.json(
        { error: "Please wait briefly before sending another request." },
        { status: 429 },
      );
    }

    const attachment = form.get("attachment");
    let attachmentKey: string | null = null;
    let attachmentName: string | null = null;
    let attachmentType: string | null = null;
    let attachmentSize: number | null = null;
    const id = `PIC-${new Date().toISOString().slice(0, 10).replaceAll("-", "")}-${crypto
      .randomUUID()
      .slice(0, 8)
      .toUpperCase()}`;

    if (attachment instanceof File && attachment.size > 0) {
      if (attachment.size > maximumFileSize) {
        return Response.json(
          { error: "The uploaded file exceeds the 8 MB limit." },
          { status: 400 },
        );
      }
      const extension = attachment.name.split(".").pop()?.toLowerCase() ?? "";
      if (!allowedExtensions.has(extension)) {
        return Response.json(
          { error: "Only PDF, DOC, DOCX and XLSX files are accepted." },
          { status: 400 },
        );
      }
      if (!runtime.BUCKET) {
        return Response.json(
          { error: "Secure file upload is not configured yet." },
          { status: 503 },
        );
      }
      attachmentName = safeFileName(attachment.name);
      attachmentType = attachment.type || "application/octet-stream";
      attachmentSize = attachment.size;
      attachmentKey = `private-inquiries/${formType}/${id}/${attachmentName}`;
      await runtime.BUCKET.put(attachmentKey, await attachment.arrayBuffer(), {
        httpMetadata: { contentType: attachmentType },
        customMetadata: { inquiryId: id, uploadedFor: formType },
      });
    }

    const excluded = new Set([
      "attachment",
      "companyWebsite",
      "consent",
      "formStartedAt",
      "formType",
    ]);
    const payload: Record<string, string> = {};
    for (const [key, value] of form.entries()) {
      if (!excluded.has(key) && typeof value === "string") {
        payload[key] = value.trim().slice(0, 10_000);
      }
    }

    try {
      const db = await getDb();
      await db.insert(inquiries).values({
        id,
        formType,
        fullName: fullName || null,
        email,
        phone: textValue(form, "phone", 80) || null,
        organisation: textValue(form, "organisation", 250) || null,
        payloadJson: JSON.stringify(payload),
        consent: true,
        attachmentKey,
        attachmentName,
        attachmentType,
        attachmentSize,
        retainedUntil: retentionDate(),
      });
    } catch (error) {
      if (attachmentKey && runtime.BUCKET) {
        await runtime.BUCKET.delete(attachmentKey);
      }
      throw error;
    }

    if (runtime.FORM_NOTIFICATION_WEBHOOK) {
      try {
        await fetch(runtime.FORM_NOTIFICATION_WEBHOOK, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            reference: id,
            formType,
            fullName,
            email,
            receivedAt: new Date().toISOString(),
            hasAttachment: Boolean(attachmentKey),
          }),
        });
      } catch {
        // The inquiry remains safely stored even when the optional alert fails.
      }
    }

    return Response.json(
      {
        message: "Thank you. Your request has been received.",
        reference: id,
      },
      { status: 201 },
    );
  } catch (error) {
    const message =
      error instanceof Error && error.message.includes("no such table")
        ? "The secure form service is being initialized. Please try again shortly."
        : "We could not process your request. Please try again.";
    return Response.json({ error: message }, { status: 500 });
  }
}
