"use client";

import { FormEvent, useRef, useState } from "react";
import Link from "next/link";

type Field = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "date" | "url" | "file";
  required?: boolean;
  placeholder?: string;
  options?: string[];
  full?: boolean;
  accept?: string;
};

const fieldsByType: Record<string, Field[]> = {
  general: [
    { name: "fullName", label: "Full name", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    { name: "phone", label: "Phone", type: "tel" },
    { name: "organisation", label: "Organization" },
    {
      name: "subject",
      label: "Inquiry type",
      options: ["General inquiry", "Service question", "Media or speaking", "Other"],
      required: true,
    },
  ],
  proposal: [
    { name: "organisation", label: "Organization name", required: true },
    { name: "fullName", label: "Contact person", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    { name: "phone", label: "Phone", type: "tel" },
    { name: "countryCity", label: "Country and city", required: true },
    {
      name: "organisationType",
      label: "Type of organization",
      options: [
        "Government",
        "Donor / development partner",
        "NGO / civil society",
        "Healthcare organization",
        "University / research institution",
        "Private sector",
        "Other",
      ],
      required: true,
    },
    {
      name: "requiredService",
      label: "Required service",
      options: [
        "Public health consultancy",
        "Research and data services",
        "Monitoring, evaluation and learning",
        "Project design and management",
        "Training and capacity building",
        "Health-system strengthening",
        "Patient navigation and support",
        "Institutional development",
        "Community and humanitarian support",
      ],
      required: true,
    },
    { name: "projectLocation", label: "Project location" },
    { name: "expectedStartDate", label: "Expected start date", type: "date" },
    {
      name: "budgetRange",
      label: "Indicative budget range",
      options: [
        "To be discussed",
        "Under PKR 500,000",
        "PKR 500,000–2,000,000",
        "PKR 2,000,001–10,000,000",
        "Above PKR 10,000,000",
      ],
    },
    { name: "proposalDeadline", label: "Proposal deadline", type: "date" },
    {
      name: "attachment",
      label: "Relevant file (PDF, DOC, DOCX, XLSX; max 8 MB)",
      type: "file",
      accept: ".pdf,.doc,.docx,.xlsx",
      full: true,
    },
  ],
  patient: [
    { name: "fullName", label: "Full name", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    { name: "phone", label: "Phone", type: "tel" },
    { name: "city", label: "City", required: true },
    {
      name: "preferredContact",
      label: "Preferred contact",
      options: ["Email", "Phone", "WhatsApp"],
      required: true,
    },
    {
      name: "supportNeeded",
      label: "Support needed",
      options: [
        "Understanding service options",
        "Referral information",
        "Appointment information",
        "Health education",
        "Continuity-of-care support",
        "Other non-emergency guidance",
      ],
      required: true,
    },
  ],
  partnership: [
    { name: "organisation", label: "Organization name", required: true },
    { name: "fullName", label: "Contact person", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    { name: "phone", label: "Phone", type: "tel" },
    { name: "countryCity", label: "Country and city" },
    {
      name: "partnershipType",
      label: "Partnership type",
      options: [
        "Government collaboration",
        "Donor-funded project",
        "Academic collaboration",
        "NGO partnership",
        "Healthcare partnership",
        "Corporate social responsibility",
        "Independent consultant collaboration",
      ],
      required: true,
    },
  ],
  expert: [
    { name: "fullName", label: "Full name", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    { name: "phone", label: "Phone", type: "tel", required: true },
    { name: "countryCity", label: "City and country", required: true },
    { name: "discipline", label: "Professional discipline", required: true },
    { name: "qualification", label: "Highest qualification", required: true },
    { name: "experienceYears", label: "Years of experience", required: true },
    { name: "expertise", label: "Areas of expertise", required: true },
    { name: "languages", label: "Languages", required: true },
    {
      name: "availability",
      label: "Availability",
      options: ["Available now", "Within one month", "Future assignments only"],
      required: true,
    },
    { name: "linkedin", label: "LinkedIn profile", type: "url" },
    {
      name: "attachment",
      label: "CV (PDF or DOCX; max 8 MB)",
      type: "file",
      accept: ".pdf,.doc,.docx",
      required: true,
      full: true,
    },
  ],
};

const textAreasByType: Record<string, { name: string; label: string; required?: boolean }[]> = {
  general: [{ name: "message", label: "How can we help?", required: true }],
  proposal: [
    { name: "projectSummary", label: "Project summary", required: true },
    { name: "expectedDeliverables", label: "Expected deliverables", required: true },
  ],
  patient: [
    {
      name: "message",
      label: "Briefly describe the non-emergency guidance you need",
      required: true,
    },
  ],
  partnership: [
    {
      name: "message",
      label: "Partnership idea and proposed contribution",
      required: true,
    },
  ],
  expert: [
    {
      name: "profileSummary",
      label: "Short professional profile",
      required: true,
    },
  ],
};

export function InquiryForm({
  type,
  submitLabel = "Send Request",
}: {
  type: "general" | "proposal" | "patient" | "partnership" | "expert";
  submitLabel?: string;
}) {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");
  const startedAt = useRef(0);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");
    const data = new FormData(event.currentTarget);
    data.set("formType", type);
    data.set(
      "formStartedAt",
      String(startedAt.current || Date.now() - 3_000),
    );

    const file = data.get("attachment");
    if (file instanceof File && file.size > 8 * 1024 * 1024) {
      setStatus("error");
      setMessage("The selected file is larger than 8 MB.");
      return;
    }

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        body: data,
      });
      const result = (await response.json()) as {
        message?: string;
        reference?: string;
        error?: string;
      };
      if (!response.ok) throw new Error(result.error || "Unable to submit the form.");
      setStatus("success");
      setMessage(
        `${result.message ?? "Thank you. Your request has been received."}${
          result.reference ? ` Reference: ${result.reference}` : ""
        }`,
      );
      formRef.current?.reset();
      startedAt.current = Date.now();
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "We could not send your request. Please try again.",
      );
    }
  }

  return (
    <form
      className="inquiry-form"
      onSubmit={onSubmit}
      onFocusCapture={() => {
        if (!startedAt.current) startedAt.current = Date.now();
      }}
      ref={formRef}
    >
      <input
        className="honeypot"
        name="companyWebsite"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />
      <div className="form-grid">
        {fieldsByType[type].map((field) => (
          <label className={field.full ? "full" : ""} key={field.name}>
            <span>
              {field.label}
              {field.required && <b aria-label="required"> *</b>}
            </span>
            {field.options ? (
              <select name={field.name} required={field.required} defaultValue="">
                <option value="" disabled>
                  Select an option
                </option>
                {field.options.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            ) : (
              <input
                name={field.name}
                type={field.type ?? "text"}
                required={field.required}
                placeholder={field.placeholder}
                accept={field.accept}
              />
            )}
          </label>
        ))}
        {textAreasByType[type].map((field) => (
          <label className="full" key={field.name}>
            <span>
              {field.label}
              {field.required && <b aria-label="required"> *</b>}
            </span>
            <textarea name={field.name} rows={5} required={field.required} />
          </label>
        ))}
        <label className="consent full">
          <input name="consent" type="checkbox" value="yes" required />
          <span>
            I consent to Partners in Care processing this information to respond
            to my request. I have read the{" "}
            <Link href="/privacy">Privacy Policy</Link>.
          </span>
        </label>
      </div>
      <p className="retention-note">
        Please submit only necessary information. Inactive inquiries are
        normally retained for no longer than 180 days, subject to approved policy
        and legal requirements.
      </p>
      {type === "patient" && (
        <p className="form-safety-note">
          Do not submit emergency information, detailed medical records or
          identity documents through this form.
        </p>
      )}
      <button className="button" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : submitLabel}
        <span aria-hidden="true">→</span>
      </button>
      <div
        className={`form-status ${status}`}
        role={status === "error" ? "alert" : "status"}
        aria-live="polite"
      >
        {message}
      </div>
    </form>
  );
}

export function NewsletterForm() {
  const [status, setStatus] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    data.set("formType", "newsletter");
    data.set("consent", "yes");
    data.set("formStartedAt", String(Date.now() - 3000));
    try {
      const response = await fetch("/api/inquiries", { method: "POST", body: data });
      if (!response.ok) throw new Error();
      setStatus("You’re on the list.");
      form.reset();
    } catch {
      setStatus("Subscription is temporarily unavailable.");
    }
  }

  return (
    <form className="newsletter-form" onSubmit={submit}>
      <label>
        <span className="sr-only">Email address</span>
        <input name="email" type="email" placeholder="Work email address" required />
      </label>
      <input
        className="honeypot"
        name="companyWebsite"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />
      <button type="submit" aria-label="Subscribe to newsletter">
        Subscribe
      </button>
      <span className="newsletter-status" role="status">
        {status}
      </span>
    </form>
  );
}
