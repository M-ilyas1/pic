import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const inquiries = sqliteTable("inquiries", {
  id: text("id").primaryKey(),
  formType: text("form_type").notNull(),
  fullName: text("full_name"),
  email: text("email").notNull(),
  phone: text("phone"),
  organisation: text("organisation"),
  payloadJson: text("payload_json").notNull(),
  status: text("status").notNull().default("new"),
  consent: integer("consent", { mode: "boolean" }).notNull().default(true),
  attachmentKey: text("attachment_key"),
  attachmentName: text("attachment_name"),
  attachmentType: text("attachment_type"),
  attachmentSize: integer("attachment_size"),
  retainedUntil: text("retained_until").notNull(),
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text("updated_at").notNull().default(sql`CURRENT_TIMESTAMP`),
});

