import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import {
  ButtonLink,
  CtaBand,
  Eyebrow,
  MedicalNotice,
  SectionHeading,
} from "@/components/UI";
import {
  focusAreas,
  insightExamples,
  projects,
  services,
  siteConfig,
  trustIndicators,
  workSteps,
} from "@/lib/site";

export default function Home() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: siteConfig.shortName,
          url: siteConfig.url,
          potentialAction: {
            "@type": "SearchAction",
            target: `${siteConfig.url}/search?q={search_term_string}`,
            "query-input": "required name=search_term_string",
          },
        }}
      />
      <main id="main-content">
        <section className="home-hero">
          <div className="hero-image" aria-hidden="true">
            {/* The source asset is already compressed to a 69 KB WebP. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/partners-in-care-hero.webp"
              alt=""
              width="1586"
              height="992"
              fetchPriority="high"
            />
          </div>
          <div className="hero-overlay" aria-hidden="true" />
          <div className="container hero-inner">
            <div className="hero-copy">
              <Eyebrow>Public health · Research · Care support</Eyebrow>
              <h1>Evidence, Expertise and Compassion for Better Health</h1>
              <p>
                Partners in Care is a multidisciplinary consultancy and
                care-support company helping institutions, programmes,
                researchers and communities design evidence-based solutions,
                strengthen health systems and improve lives.
              </p>
              <div className="button-row">
                <ButtonLink href="/contact#request-proposal">
                  Request a Proposal
                </ButtonLink>
                <ButtonLink href="/services" variant="secondary">
                  Explore Our Services
                </ButtonLink>
              </div>
            </div>
          </div>
        </section>

        <section className="trust-strip" aria-label="Company trust indicators">
          <div className="container trust-grid">
            {trustIndicators.map((item) => (
              <div key={item}>
                <span aria-hidden="true">✓</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section who-section">
          <div className="container split-layout">
            <div>
              <Eyebrow>Who we are</Eyebrow>
              <h2>A dependable partner for complex health and development work</h2>
            </div>
            <div className="lead-copy">
              <p>{siteConfig.positioning}</p>
              <p>
                We bring together fit-for-purpose teams across public health,
                research, monitoring and evaluation, programme delivery,
                institutional development and non-clinical patient support. Our
                role is to help clients move from a well-defined need to
                practical, accountable action.
              </p>
              <Link className="text-link" href="/about">
                Learn about Partners in Care <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="section section-soft" id="services">
          <div className="container">
            <div className="section-topline">
              <SectionHeading
                eyebrow="What we do"
                title="Support across the evidence-to-action pathway"
                copy="Focused services for institutions, programmes, professionals, researchers, patients and families."
              />
              <ButtonLink href="/services" variant="text">
                View all services
              </ButtonLink>
            </div>
            <div className="service-card-grid">
              {services.slice(0, 8).map((service) => (
                <Link
                  className="service-card"
                  href={`/services#${service.slug}`}
                  key={service.slug}
                >
                  <span className="service-number">{service.number}</span>
                  <h3>{service.title}</h3>
                  <p>{service.summary}</p>
                  <span className="card-arrow" aria-hidden="true">
                    ↗
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="Where we focus"
              title="Sectors and priorities that shape healthier communities"
              copy="Our capabilities can be configured around a defined population, system challenge or delivery setting."
              align="center"
            />
            <div className="focus-cloud" aria-label="Focus areas">
              {focusAreas.map((area, index) => (
                <span className={index < 4 ? "featured" : ""} key={area}>
                  {area}
                </span>
              ))}
            </div>
            <div className="center-action">
              <ButtonLink href="/sectors" variant="secondary">
                See who we support
              </ButtonLink>
            </div>
          </div>
        </section>

        <section className="section process-section">
          <div className="container">
            <SectionHeading
              eyebrow="How we work"
              title="A collaborative cycle, built for learning"
              copy="Every assignment is tailored, but our core way of working keeps decisions, responsibilities and evidence visible."
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

        <section className="section projects-preview">
          <div className="container">
            <div className="section-topline">
              <SectionHeading
                eyebrow="Projects"
                title="A transparent portfolio from the beginning"
                copy="As a newly incorporated company, we will publish project information only after client, partner and internal authorization."
              />
              <ButtonLink href="/projects" variant="text">
                Explore projects
              </ButtonLink>
            </div>
            <div className="project-grid">
              {projects.slice(0, 3).map((project) => (
                <article className="project-card" key={project.category}>
                  <div className="placeholder-visual">
                    <span>Project details pending approval</span>
                  </div>
                  <p className="card-label">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p>{project.status}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section why-section">
          <div className="container why-grid">
            <div className="why-intro">
              <Eyebrow>Why Partners in Care</Eyebrow>
              <h2>Professional discipline, human understanding</h2>
              <p>
                Health and development challenges rarely fit within one
                discipline. We shape the team and method around the problem,
                while keeping quality, ethics and accountability consistent.
              </p>
            </div>
            <div className="why-list">
              {[
                [
                  "Multidisciplinary expertise",
                  "Flexible teams can combine research, programme, health-system, learning and care-support perspectives.",
                ],
                [
                  "Locally grounded understanding",
                  "We design for Pakistan’s institutional, service-delivery and community realities.",
                ],
                [
                  "Evidence-based methods",
                  "Recommendations are linked to appropriate evidence, data and transparent reasoning.",
                ],
                [
                  "End-to-end project support",
                  "One partner can help connect design, implementation, measurement, reporting and learning.",
                ],
                [
                  "Ethics, quality and accountability",
                  "We set clear boundaries, protect information and avoid claims that cannot be verified.",
                ],
              ].map(([title, copy], index) => (
                <article key={title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-soft insights-preview">
          <div className="container">
            <div className="section-topline">
              <SectionHeading
                eyebrow="Research & insights"
                title="Useful knowledge for better decisions"
                copy="The knowledge hub is being prepared. These titles demonstrate the intended editorial format and are not published organizational research."
              />
              <ButtonLink href="/insights" variant="text">
                Visit knowledge hub
              </ButtonLink>
            </div>
            <div className="insight-grid">
              {insightExamples.map((insight) => (
                <article key={insight.title}>
                  <div className="insight-meta">
                    <span>{insight.type}</span>
                    <span>{insight.year}</span>
                  </div>
                  <h3>{insight.title}</h3>
                  <p>{insight.summary}</p>
                  <span className="topic-tag">{insight.topic}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="container home-medical-note">
          <MedicalNotice compact />
        </section>
        <CtaBand />
      </main>
    </>
  );
}
