import Link from "next/link";
import { Logo } from "./Logo";
import { primaryNavigation, secondaryNavigation } from "@/lib/site";

export function Header() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <div className="announcement">
        <div className="container announcement-inner">
          <span className="announcement-dot" aria-hidden="true" />
          <p>
            Partners in Care (Private) Limited is now incorporated and ready to
            build meaningful partnerships in public health, research and
            community care.
          </p>
          <Link href="/about#legal-status">View legal status</Link>
        </div>
      </div>
      <header className="site-header">
        <div className="container header-inner">
          <Logo />
          <nav className="desktop-nav" aria-label="Primary navigation">
            {primaryNavigation.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
            <details className="nav-more">
              <summary>More</summary>
              <div className="nav-popover">
                {secondaryNavigation.map((item) => (
                  <Link href={item.href} key={item.href}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </details>
            <Link className="nav-search" href="/search" aria-label="Search website">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="11" cy="11" r="6.5" />
                <path d="m16 16 4 4" />
              </svg>
            </Link>
            <Link className="button button-small" href="/contact#request-proposal">
              Request a Proposal
            </Link>
          </nav>
          <details className="mobile-menu">
            <summary aria-label="Open navigation">
              <span />
              <span />
              <span />
            </summary>
            <nav aria-label="Mobile navigation">
              {[...primaryNavigation, ...secondaryNavigation].map((item) => (
                <Link href={item.href} key={item.href}>
                  {item.label}
                </Link>
              ))}
              <Link href="/search">Search website</Link>
              <Link className="button" href="/contact#request-proposal">
                Request a Proposal
              </Link>
            </nav>
          </details>
        </div>
      </header>
    </>
  );
}

