import Link from "next/link";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link className="brand" href="/" aria-label="Partners in Care home">
      <span className="brand-mark" aria-hidden="true">
        <svg viewBox="0 0 64 64" role="img">
          <circle cx="32" cy="32" r="29" fill="currentColor" opacity=".1" />
          <circle cx="22" cy="21" r="5" fill="currentColor" />
          <circle cx="42" cy="21" r="5" fill="currentColor" />
          <path
            d="M13 44c1.6-10 7-15 15-15 1.2 0 2.6.2 4 .7 1.4-.5 2.8-.7 4-.7 8 0 13.4 5 15 15"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="6"
          />
          <path
            d="M24 35c3.7 0 6.3 2.2 8 5.4 1.7-3.2 4.3-5.4 8-5.4"
            fill="none"
            stroke="white"
            strokeLinecap="round"
            strokeWidth="3"
          />
        </svg>
      </span>
      <span className="brand-copy">
        <strong>Partners in Care</strong>
        {!compact && <small>Working Together for Healthier Communities</small>}
      </span>
    </Link>
  );
}

