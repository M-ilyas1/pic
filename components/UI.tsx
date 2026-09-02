import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

export function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`section-heading ${align === "center" ? "centered" : ""}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "light" | "text";
}) {
  return (
    <Link className={`button button-${variant}`} href={href}>
      {children}
      <span aria-hidden="true">→</span>
    </Link>
  );
}

export function Breadcrumbs({
  current,
  items,
}: {
  current: string;
  items?: { label: string; href: string }[];
}) {
  const crumbs = [{ label: "Home", href: "/" }, ...(items ?? [])];
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol>
        {crumbs.map((crumb) => (
          <li key={crumb.href}>
            <Link href={crumb.href}>{crumb.label}</Link>
          </li>
        ))}
        <li aria-current="page">{current}</li>
      </ol>
    </nav>
  );
}

export function PageHero({
  eyebrow,
  title,
  copy,
  current,
  aside,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  current: string;
  aside?: React.ReactNode;
}) {
  return (
    <section className="page-hero">
      <div className="container">
        <Breadcrumbs current={current} />
        <div className="page-hero-grid">
          <div>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1>{title}</h1>
            <p>{copy}</p>
          </div>
          {aside && <div className="page-hero-aside">{aside}</div>}
        </div>
      </div>
    </section>
  );
}

export function CtaBand({
  title = "Let’s Build Better Health Solutions Together",
  copy = "Bring us your challenge, planned project or partnership idea. We’ll help clarify a practical way forward.",
}: {
  title?: string;
  copy?: string;
}) {
  return (
    <section className="cta-band">
      <div className="container cta-band-inner">
        <div>
          <Eyebrow>Start a conversation</Eyebrow>
          <h2>{title}</h2>
          <p>{copy}</p>
        </div>
        <div className="button-row">
          <ButtonLink href="/contact#request-proposal" variant="light">
            Discuss a Project
          </ButtonLink>
          <ButtonLink href="/partnerships#partnership-form" variant="secondary">
            Become a Partner
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

export function LegalDraftNotice() {
  return (
    <div className="draft-notice" role="note">
      <strong>Draft for legal review</strong>
      <p>
        This page is an operational draft and must be reviewed by qualified
        Pakistani legal counsel before public launch.
      </p>
    </div>
  );
}

export function MedicalNotice({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`medical-notice ${compact ? "compact" : ""}`} role="note">
      <strong>Important medical notice</strong>
      <p>
        Partners in Care does not replace licensed medical professionals,
        emergency services or direct clinical diagnosis and treatment. Patients
        should consult appropriately licensed healthcare providers.
      </p>
    </div>
  );
}

export function EmergencyNotice() {
  return (
    <div className="emergency-notice" role="alert">
      <strong>This website is not an emergency service.</strong>
      <p>
        In a medical emergency, immediately contact your nearest emergency
        department or the relevant local emergency service.
      </p>
    </div>
  );
}

export function CompanyFacts() {
  return (
    <dl className="company-facts">
      <div>
        <dt>Legal name</dt>
        <dd>{siteConfig.name}</dd>
      </div>
      <div>
        <dt>Corporate Unique Identification Number</dt>
        <dd>{siteConfig.legal.cuin}</dd>
      </div>
      <div>
        <dt>Incorporated</dt>
        <dd>{siteConfig.legal.incorporated}</dd>
      </div>
      <div>
        <dt>Jurisdiction</dt>
        <dd>{siteConfig.legal.jurisdiction}</dd>
      </div>
      <div>
        <dt>Legal basis</dt>
        <dd>Incorporated under the {siteConfig.legal.act}</dd>
      </div>
      <div>
        <dt>Structure</dt>
        <dd>{siteConfig.legal.structure}</dd>
      </div>
    </dl>
  );
}

