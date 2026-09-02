import Link from "next/link";
import { Logo } from "./Logo";
import {
  legalNavigation,
  primaryNavigation,
  secondaryNavigation,
  services,
  siteConfig,
} from "@/lib/site";
import { NewsletterForm } from "./InquiryForm";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <Logo />
          <p>{siteConfig.positioning}</p>
          <address>{siteConfig.address}</address>
          <p className="footer-contact">
            <span>{siteConfig.email}</span>
            <span>{siteConfig.phone}</span>
          </p>
        </div>
        <div>
          <h2>Company</h2>
          {[...primaryNavigation.slice(1), ...secondaryNavigation].map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <div>
          <h2>Services</h2>
          {services.slice(0, 6).map((service) => (
            <Link href={`/services#${service.slug}`} key={service.slug}>
              {service.title}
            </Link>
          ))}
        </div>
        <div className="footer-newsletter">
          <h2>Useful updates, thoughtfully shared</h2>
          <p>
            Subscribe for research insights, opportunities and organizational
            news. No promotional overload.
          </p>
          <NewsletterForm />
          <div className="social-placeholders" aria-label="Social media links">
            <span>LinkedIn [Add link]</span>
            <span>Facebook [Add link]</span>
            <span>X [Add link]</span>
          </div>
        </div>
      </div>
      <div className="container footer-legal">
        <p>
          © {new Date().getFullYear()} Partners in Care (Private) Limited. All
          rights reserved.
        </p>
        <div>
          {legalNavigation.slice(0, 5).map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

