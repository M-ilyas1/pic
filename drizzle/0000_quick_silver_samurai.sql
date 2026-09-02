CREATE TABLE `inquiries` (
	`id` text PRIMARY KEY NOT NULL,
	`form_type` text NOT NULL,
	`full_name` text,
	`email` text NOT NULL,
	`phone` text,
	`organisation` text,
	`payload_json` text NOT NULL,
	`status` text DEFAULT 'new' NOT NULL,
	`consent` integer DEFAULT true NOT NULL,
	`attachment_key` text,
	`attachment_name` text,
	`attachment_type` text,
	`attachment_size` integer,
	`retained_until` text NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`updated_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
