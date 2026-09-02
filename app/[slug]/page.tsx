import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { InsightFilter, ProjectFilter } from "@/components/ContentFilters";
import { InquiryForm } from "@/components/InquiryForm";
import { JsonLd } from "@/components/JsonLd";
import {
  Breadcrumbs,
  ButtonLink,
  CompanyFacts,
  CtaBand,
  EmergencyNotice,
  Eyebrow,
  LegalDraftNotice,
  MedicalNotice,
  PageHero,
  SectionHeading,
} from "@/components/UI";
import {
  expertCategories,
  focusAreas,
  legalPolicies,
  opportunityTypes,
  pageMetadata,
  partnershipTypes,
  patientFaqs,
  sectors,
  services,
  siteConfig,
  values,
  workSteps,
} from "@/lib/site";

const mainSlugs = [
  "about",
  "services",
  "sectors",
  "projects",
  "insights",
  "opportunities",
  "patient-support",
  "experts",
  "partnerships",
  "contact",
];

export function generateStaticParams() {
  return [...mainSlugs, ...Object.keys(legalPolicies)].map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const policy = legalPolicies[slug];
  const meta = pageMetadata[slug];
  const title = meta?.title ?? policy?.title;
  const description = meta?.description ?? policy?.summary;
  if (!title || !description) return {};
  return {
    title,
    description,
    keywords: meta?.keywords,
    alternates: { canonical: `/${slug}` },
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}/${slug}`,
      type: "website",
      images: [{ url: "/images/partners-in-care-og.jpg", width: 1200, height: 630 }],
    },
  };
}

function BreadcrumbSchema({ slug, title }: { slug: string; title: string }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteConfig.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: title,
            item: `${siteConfig.url}/${slug}`,
          },
        ],
      }}
    />
  );
}

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Care is our purpose. Partnership is how we work."
        copy="Partners in Care (Private) Limited is a multidisciplinary Pakistani company created to connect evidence, professional expertise and compassionate support with the health and development challenges that matter."
        current="About Us"
        aside={
          <blockquote>
            “Working Together for Healthier Communities”
            <cite>Our founding commitment</cite>
          </blockquote>
        }
      />
      <section className="section">
        <div className="container split-layout">
          <div>
            <Eyebrow>Company overview</Eyebrow>
            <h2>A new organization with a clear professional mandate</h2>
          </div>
          <div className="lead-copy">
            <p>
              Incorporated in Islamabad in July 2026, Partners in Care provides
              consultancy, research, capacity-building, project-management,
              institutional-development and non-clinical care-support services.
            </p>
            <p>
              We aim to work with government departments, development partners,
              donors, international institutions, healthcare organizations,
              NGOs, academic institutions, private-sector organizations,
              communities and individuals. Every engagement is expected to have
              a defined scope, appropriate expertise and clear accountability.
            </p>
          </div>
        </div>
      </section>
      <section className="section section-soft">
        <div className="container story-grid">
          <article>
            <span className="story-index">01</span>
            <h2>Our story</h2>
            <p>
              Partners in Care was established around a simple observation:
              better health outcomes depend not only on clinical care, but also
              on good research, capable institutions, reliable programmes,
              informed communities and support that helps people navigate
              complex systems.
            </p>
          </article>
          <article>
            <span className="story-index">02</span>
            <h2>What our name means</h2>
            <p>
              “Partners” reflects collaboration, shared responsibility and
              long-term trust. “Care” reflects attention to quality, dignity,
              context and the people affected by decisions. Together, the name
              expresses how we intend to work.
            </p>
          </article>
        </div>
      </section>
      <section className="section vision-section">
        <div className="container vision-grid">
          <article>
            <Eyebrow>Vision</Eyebrow>
            <h2>
              To become a trusted partner in developing healthier, more resilient
              and equitable communities through evidence, innovation and
              compassionate action.
            </h2>
          </article>
          <article>
            <Eyebrow>Mission</Eyebrow>
            <h2>
              To provide high-quality consultancy, research, capacity-building,
              project-management and care-support services that enable
              institutions, professionals and communities to improve health and
              development outcomes.
            </h2>
          </article>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Core values"
            title="The standards we intend to make visible"
            copy="Values matter when they shape decisions, working relationships and the quality of delivery."
            align="center"
          />
          <div className="value-grid">
            {values.map(([title, copy]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-navy">
        <div className="container">
          <SectionHeading
            eyebrow="Strategic objectives"
            title="What we are building toward"
          />
          <div className="objective-grid">
            {[
              "Deliver credible, context-responsive health and development advisory services.",
              "Strengthen research quality, use of evidence and accessible knowledge sharing.",
              "Support institutions and workforces to improve capability, systems and accountability.",
              "Design and implement measurable projects with communities and partners.",
              "Develop safe, ethical pathways for non-clinical patient navigation and continuity support.",
              "Build a multidisciplinary network able to respond flexibly to approved assignments.",
            ].map((objective, index) => (
              <article key={objective}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{objective}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Our approach"
            title="Built around co-design, implementation and learning"
          />
          <div className="process-grid">
            {workSteps.map((step) => (
              <article key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-soft">
        <div className="container governance-grid">
          <article>
            <Eyebrow>Governance & accountability</Eyebrow>
            <h2>Clear authority, documented decisions</h2>
            <p>
              The company intends to use approved policies, defined delegations,
              conflict-of-interest controls, financial oversight, quality review,
              data protection and project-level risk management. Governance
              materials will be published only after formal approval.
            </p>
          </article>
          <article>
            <Eyebrow>Leadership</Eyebrow>
            <h2>[Insert approved leadership profiles]</h2>
            <p>
              Names, biographies, qualifications and photographs will appear only
              after verification and consent. Private identity and incorporation
              information will not be published.
            </p>
            <ButtonLink href="/experts" variant="text">
              View team framework
            </ButtonLink>
          </article>
          <article>
            <Eyebrow>Advisory & technical network</Eyebrow>
            <h2>Multidisciplinary by design</h2>
            <p>
              Approved consultants and advisers may be engaged according to the
              competencies, safeguards and independence requirements of each
              assignment.
            </p>
            <ButtonLink href="/opportunities#expert-network" variant="text">
              Join our expert network
            </ButtonLink>
          </article>
          <article>
            <Eyebrow>Ethics & safeguarding</Eyebrow>
            <h2>Professional boundaries matter</h2>
            <p>
              We aim to protect dignity, confidentiality, informed participation
              and safety, with appropriate escalation for research, safeguarding
              and clinical risks.
            </p>
            <ButtonLink href="/research-ethics" variant="text">
              Read our draft statements
            </ButtonLink>
          </article>
        </div>
      </section>
      <section className="section" id="legal-status">
        <div className="container legal-status-grid">
          <div>
            <Eyebrow>Legal status</Eyebrow>
            <h2>Public company information</h2>
            <p>
              Only information appropriate for public disclosure is presented
              here. Directors’ identity documents, residential addresses,
              signatures and shareholding information are not published.
            </p>
          </div>
          <CompanyFacts />
        </div>
      </section>
      <CtaBand />
    </>
  );
}

function ServicesPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Partners in Care services",
          itemListElement: services.map((service, index) => ({
            "@type": "Service",
            position: index + 1,
            name: service.title,
            description: service.summary,
            provider: {
              "@type": "Organization",
              name: siteConfig.name,
            },
            areaServed: "Pakistan",
          })),
        }}
      />
      <PageHero
        eyebrow="Our services"
        title="Expert support, shaped around the work that needs to be done"
        copy="From research and strategy to implementation, learning and non-clinical care support, our services can be commissioned individually or combined into an integrated assignment."
        current="Services"
        aside={
          <div className="metric-aside">
            <strong>9</strong>
            <span>connected service areas</span>
          </div>
        }
      />
      <section className="section">
        <div className="container service-accordion">
          {services.map((service) => (
            <details id={service.slug} key={service.slug} open={service.number === "01"}>
              <summary>
                <span>{service.number}</span>
                <div>
                  <h2>{service.title}</h2>
                  <p>{service.summary}</p>
                </div>
                <b aria-hidden="true">+</b>
              </summary>
              <div className="service-detail">
                <div>
                  <h3>What this service covers</h3>
                  <ul>
                    {service.covers.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3>Who it is for</h3>
                  <ul>
                    {service.audiences.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3>Typical deliverables</h3>
                  <ul>
                    {service.deliverables.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3>Our process</h3>
                  <ol>
                    {service.process.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ol>
                </div>
                <div>
                  <h3>Expected benefits</h3>
                  <ul>
                    {service.benefits.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="service-action">
                  <p>
                    Scope, timeline, team and deliverables are agreed for each
                    assignment.
                  </p>
                  <ButtonLink
                    href={`/contact#request-proposal`}
                    variant="primary"
                  >
                    Request This Service
                  </ButtonLink>
                </div>
                {service.slug === "patient-navigation-support" && (
                  <div className="full-span">
                    <MedicalNotice />
                  </div>
                )}
              </div>
            </details>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}

function SectorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Sectors we support"
        title="Different mandates. Shared commitment to better outcomes."
        copy="We adapt the scope, team, language and governance of our support to the responsibilities of each client and the people their work serves."
        current="Sectors"
      />
      <section className="section">
        <div className="container sector-detail-grid">
          {sectors.map((sector, index) => (
            <article key={sector.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h2>{sector.title}</h2>
              <p>{sector.description}</p>
              <Link href="/contact#request-proposal">
                Discuss your needs <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </section>
      <section className="section section-soft">
        <div className="container">
          <SectionHeading
            eyebrow="Health & development priorities"
            title="Configured around context, population and purpose"
            copy="These themes indicate areas of interest, not claims of completed organizational experience."
            align="center"
          />
          <div className="focus-cloud">
            {focusAreas.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}

function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="A portfolio that will grow through transparent, authorized work"
        copy="Partners in Care is newly established. We do not claim projects, clients, partners, results or impact figures that have not been formally approved for publication."
        current="Projects"
      />
      <section className="section">
        <div className="container">
          <ProjectFilter />
        </div>
      </section>
      <section className="section section-soft">
        <div className="container">
          <SectionHeading
            eyebrow="Project template"
            title="What every authorized project page will show"
            copy="A consistent case-study format will help partners understand context, methods, delivery and learning."
          />
          <div className="template-grid">
            {[
              "Project title",
              "Client or partner",
              "Location",
              "Duration",
              "Problem addressed",
              "Services provided",
              "Methodology",
              "Deliverables",
              "Results",
              "Lessons learned",
              "Relevant documents",
            ].map((item, index) => (
              <div key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand title="Have a project that needs the right team?" />
    </>
  );
}

function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Research & insights"
        title="A knowledge hub for evidence, practice and opportunity"
        copy="This developing resource will bring together accessible articles, technical materials, organizational news and opportunities relevant to health and development work."
        current="Research & Insights"
      />
      <section className="section">
        <div className="container">
          <div className="content-type-grid">
            {[
              "Articles",
              "Policy briefs",
              "Research summaries",
              "Technical reports",
              "Tools & templates",
              "Training resources",
              "News & updates",
              "Calls for consultants",
              "Grant & research opportunities",
            ].map((item) => (
              <div key={item}>{item}</div>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-soft">
        <div className="container">
          <SectionHeading
            eyebrow="Example content"
            title="Editorial format in development"
            copy="The following are draft website-content examples only. They are not published Partners in Care research, reports or evidence claims."
          />
          <InsightFilter />
        </div>
      </section>
      <section className="section">
        <div className="container editorial-principles">
          <SectionHeading
            eyebrow="Editorial principles"
            title="Useful, transparent and responsible"
          />
          <div>
            {[
              "Clearly identify authors, contributors and publication status.",
              "Distinguish evidence, interpretation and organizational opinion.",
              "Cite sources and disclose relevant conflicts of interest.",
              "Use accessible language without overstating certainty.",
              "Review technical and sensitive content before publication.",
            ].map((item) => (
              <p key={item}>
                <span aria-hidden="true">✓</span>
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>
      <CtaBand title="Have evidence worth translating into action?" />
    </>
  );
}

function OpportunitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Opportunities"
        title="Build meaningful work with Partners in Care"
        copy="We are developing a network of professionals, researchers, organizations, vendors and volunteers who may contribute to future approved assignments."
        current="Opportunities"
      />
      <section className="section">
        <div className="container opportunity-grid">
          {opportunityTypes.map(([title, copy]) => (
            <article key={title}>
              <h2>{title}</h2>
              <p>{copy}</p>
              <span>Opportunities will be added after authorization.</span>
            </article>
          ))}
        </div>
      </section>
      <section className="section section-soft" id="expert-network">
        <div className="container form-layout">
          <div className="form-intro">
            <Eyebrow>Join our expert network</Eyebrow>
            <h2>Register your professional interest</h2>
            <p>
              Submit a concise professional profile for possible future
              consultancy or collaboration. Registration does not guarantee an
              assignment, shortlisting or employment.
            </p>
            <div className="privacy-card">
              <h3>Privacy and retention</h3>
              <p>
                CVs and profile data will be accessed only by authorized
                personnel for legitimate opportunity matching. Inactive
                expressions of interest should be reviewed within 180 days and
                retained longer only with an approved basis or renewed consent.
              </p>
            </div>
          </div>
          <div className="form-card">
            <InquiryForm type="expert" submitLabel="Register Interest" />
          </div>
        </div>
      </section>
      <CtaBand title="Looking for an institutional collaboration?" />
    </>
  );
}

function PatientSupportPage() {
  return (
    <>
      <EmergencyNotice />
      <PageHero
        eyebrow="Patient support"
        title="Clearer next steps when healthcare feels difficult to navigate"
        copy="Our planned patient-support pathway offers compassionate, non-clinical help to understand service options, locate relevant providers and organize referral or appointment information."
        current="Patient Support"
        aside={
          <div className="care-aside">
            <span aria-hidden="true">♥</span>
            <p>Confidential. Respectful. Focused on practical next steps.</p>
          </div>
        }
      />
      <section className="section">
        <div className="container patient-help-grid">
          {[
            ["Healthcare navigation", "Understand types of services that may be relevant to your stated need."],
            ["Referral guidance", "Receive information about possible referral pathways and provider types."],
            ["Appointment support", "Get practical information that may help you plan or follow up an appointment."],
            ["Health education", "Access plain-language materials from appropriate sources."],
            ["Continuity of care", "Organize non-clinical next steps across referrals, visits and follow-up."],
            ["Family support", "Help caregivers understand the agreed navigation plan and available resources."],
          ].map(([title, copy], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h2>{title}</h2>
              <p>{copy}</p>
            </article>
          ))}
        </div>
        <div className="container medical-notice-wrap">
          <MedicalNotice />
        </div>
      </section>
      <section className="section section-soft" id="support-form">
        <div className="container form-layout">
          <div className="form-intro">
            <Eyebrow>Request support</Eyebrow>
            <h2>Tell us what non-emergency guidance you need</h2>
            <p>
              Keep your message brief and avoid uploading identity documents or
              detailed medical records. A request does not create a clinical
              relationship and availability must be confirmed.
            </p>
            <EmergencyNotice />
          </div>
          <div className="form-card">
            <InquiryForm type="patient" submitLabel="Request Patient Support" />
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container faq-layout">
          <SectionHeading
            eyebrow="Frequently asked questions"
            title="Important things to know"
          />
          <div className="faq-list">
            {patientFaqs.map((faq) => (
              <details key={faq.question}>
                <summary>
                  {faq.question}
                  <span aria-hidden="true">+</span>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: patientFaqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }}
      />
    </>
  );
}

function ExpertsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our experts"
        title="Multidisciplinary expertise, assembled with purpose"
        copy="This page will present verified leadership, staff and technical-network profiles after qualifications, biographies, photographs and publication permissions are approved."
        current="Our Experts"
      />
      <section className="section">
        <div className="container">
          <div className="filter-bar static" aria-label="Expertise filters">
            {[
              "All expertise",
              "Public health",
              "Research",
              "MEL",
              "Clinical advice",
              "Training",
              "Project delivery",
            ].map((item, index) => (
              <span className={index === 0 ? "active" : ""} key={item}>
                {item}
              </span>
            ))}
          </div>
          <div className="expert-grid">
            {expertCategories.map(([title, placeholder], index) => (
              <article key={title}>
                <div className="expert-photo" aria-hidden="true">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <p className="card-label">{title}</p>
                <h2>{placeholder}</h2>
                <p>
                  Biography, relevant qualifications and areas of expertise will
                  be added after verification and consent.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-navy">
        <div className="container network-cta">
          <div>
            <Eyebrow>Professional network</Eyebrow>
            <h2>Could your expertise strengthen a future assignment?</h2>
            <p>
              Register your interest for technically aligned, ethically governed
              opportunities.
            </p>
          </div>
          <ButtonLink href="/opportunities#expert-network" variant="light">
            Join Our Expert Network
          </ButtonLink>
        </div>
      </section>
    </>
  );
}

function PartnershipsPage() {
  return (
    <>
      <PageHero
        eyebrow="Partnerships"
        title="Better work begins with shared purpose and clear roles"
        copy="We welcome conversations with institutions and professionals whose mandates align with ethical, evidence-driven health and development work."
        current="Partnerships"
      />
      <section className="section">
        <div className="container partnership-grid">
          {partnershipTypes.map(([title, copy]) => (
            <article key={title}>
              <h2>{title}</h2>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section section-soft" id="partnership-form">
        <div className="container form-layout">
          <div className="form-intro">
            <Eyebrow>Partnership inquiry</Eyebrow>
            <h2>Start with the purpose, contribution and next decision</h2>
            <p>
              Tell us what you hope to achieve, the contribution each party might
              bring and any key timing or governance considerations.
            </p>
          </div>
          <div className="form-card">
            <InquiryForm type="partnership" submitLabel="Submit Partnership Inquiry" />
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Tell us what you are trying to achieve"
        copy="Whether you need technical support, a proposal, a partnership discussion or non-emergency navigation guidance, use the pathway that best matches your request."
        current="Contact"
      />
      <section className="section contact-overview">
        <div className="container contact-grid">
          <article>
            <span>Office</span>
            <h2>Islamabad</h2>
            <address>{siteConfig.address}</address>
            <p>Business hours: [Insert approved business hours]</p>
          </article>
          <article>
            <span>General inquiries</span>
            <h2>{siteConfig.email}</h2>
            <p>Telephone: {siteConfig.phone}</p>
            <p>WhatsApp: {siteConfig.whatsapp}</p>
          </article>
          <article>
            <span>Careers</span>
            <h2>{siteConfig.careersEmail}</h2>
            <p>Use the Opportunities page for expert registration.</p>
          </article>
        </div>
        <div className="container map-placeholder" role="img" aria-label="Map placeholder">
          <div>
            <strong>Map location</strong>
            <p>Embed an approved map after launch settings and consent are confirmed.</p>
          </div>
          <span>I-8 Markaz · Islamabad</span>
        </div>
      </section>
      <section className="section section-soft contact-forms">
        <div className="container">
          <SectionHeading
            eyebrow="Choose a contact pathway"
            title="The right form helps us respond efficiently"
          />
          <div className="contact-accordion">
            <details open>
              <summary>
                <div>
                  <span>General inquiry</span>
                  <h2>Ask a question</h2>
                </div>
                <b aria-hidden="true">+</b>
              </summary>
              <div className="form-card">
                <InquiryForm type="general" submitLabel="Send General Inquiry" />
              </div>
            </details>
            <details id="request-proposal">
              <summary>
                <div>
                  <span>Organizations and programmes</span>
                  <h2>Request a proposal</h2>
                </div>
                <b aria-hidden="true">+</b>
              </summary>
              <div className="form-card">
                <InquiryForm type="proposal" submitLabel="Submit Proposal Request" />
              </div>
            </details>
            <details>
              <summary>
                <div>
                  <span>Institutions and collaborators</span>
                  <h2>Partnership inquiry</h2>
                </div>
                <b aria-hidden="true">+</b>
              </summary>
              <div className="form-card">
                <InquiryForm type="partnership" submitLabel="Submit Partnership Inquiry" />
              </div>
            </details>
            <details>
              <summary>
                <div>
                  <span>Patients and families</span>
                  <h2>Patient-support request</h2>
                </div>
                <b aria-hidden="true">+</b>
              </summary>
              <div className="form-card">
                <EmergencyNotice />
                <InquiryForm type="patient" submitLabel="Request Patient Support" />
              </div>
            </details>
          </div>
        </div>
      </section>
    </>
  );
}

function LegalPage({ slug }: { slug: string }) {
  const policy = legalPolicies[slug];
  return (
    <>
      <section className="legal-hero">
        <div className="container">
          <Breadcrumbs current={policy.title} />
          <Eyebrow>Legal & policy</Eyebrow>
          <h1>{policy.title}</h1>
          <p>{policy.summary}</p>
          <LegalDraftNotice />
        </div>
      </section>
      <section className="section">
        <div className="container legal-layout">
          <aside>
            <strong>On this page</strong>
            {policy.sections.map((section) => (
              <a href={`#${section.heading.toLowerCase().replaceAll(" ", "-")}`} key={section.heading}>
                {section.heading}
              </a>
            ))}
            <span>Draft version: 31 July 2026</span>
          </aside>
          <article className="legal-copy">
            {policy.sections.map((section) => (
              <section
                id={section.heading.toLowerCase().replaceAll(" ", "-")}
                key={section.heading}
              >
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.bullets && (
                  <ul>
                    {section.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
            <section>
              <h2>Contact</h2>
              <p>
                Questions about this draft may be directed to [Insert official
                legal or privacy contact email].
              </p>
            </section>
          </article>
        </div>
      </section>
    </>
  );
}

export default async function SlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const title =
    pageMetadata[slug]?.title ?? legalPolicies[slug]?.title ?? "Partners in Care";

  let content: React.ReactNode;
  switch (slug) {
    case "about":
      content = <AboutPage />;
      break;
    case "services":
      content = <ServicesPage />;
      break;
    case "sectors":
      content = <SectorsPage />;
      break;
    case "projects":
      content = <ProjectsPage />;
      break;
    case "insights":
      content = <InsightsPage />;
      break;
    case "opportunities":
      content = <OpportunitiesPage />;
      break;
    case "patient-support":
      content = <PatientSupportPage />;
      break;
    case "experts":
      content = <ExpertsPage />;
      break;
    case "partnerships":
      content = <PartnershipsPage />;
      break;
    case "contact":
      content = <ContactPage />;
      break;
    default:
      if (!legalPolicies[slug]) notFound();
      content = <LegalPage slug={slug} />;
  }

  return (
    <>
      <BreadcrumbSchema slug={slug} title={title} />
      <main id="main-content">{content}</main>
    </>
  );
}

