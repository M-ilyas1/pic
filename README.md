# Partners in Care Website

Production-ready corporate website for Partners in Care (Private) Limited.

## Stack

- Next.js
- TypeScript
- Tailwind build pipeline with project-specific responsive CSS
- Cloudflare D1 for secure structured form records
- Cloudflare R2 for private file uploads

## Run locally

```bash
npm ci
cp .env.example .env.local
npm run dev
```

Create a production build:

```bash
npm run build
```

## Content

Structured public content is maintained in `lib/site.ts`. Reusable interface and
form components are in `components/`.

## Forms

The `/api/inquiries` endpoint validates and stores general, proposal,
partnership, patient-support, expert-network and newsletter submissions.
Optional server-side notifications can be connected through the
`FORM_NOTIFICATION_WEBHOOK` environment variable.

Do not place secrets in frontend code or commit `.env.local`.

## Before launch

Read `WEBSITE_STRATEGY_AND_LAUNCH_GUIDE.md` and complete its Pre-Launch
Information Checklist. All legal-policy pages are drafts requiring qualified
legal review.

