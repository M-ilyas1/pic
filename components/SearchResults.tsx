"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FormEvent, useMemo, useState } from "react";
import { searchItems } from "@/lib/site";

export function SearchResults() {
  const params = useSearchParams();
  const initial = params.get("q") ?? "";
  const [query, setQuery] = useState(initial);
  const [submitted, setSubmitted] = useState(initial);

  const results = useMemo(() => {
    const needle = submitted.trim().toLowerCase();
    if (!needle) return [];
    return searchItems.filter((item) =>
      `${item.title} ${item.description}`.toLowerCase().includes(needle),
    );
  }, [submitted]);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(query);
    window.history.replaceState(null, "", `/search?q=${encodeURIComponent(query)}`);
  }

  return (
    <div className="search-experience">
      <form className="site-search" onSubmit={onSubmit}>
        <label htmlFor="site-search">Search services, sectors and resources</label>
        <div>
          <input
            id="site-search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Try “research”, “training” or “patient support”"
          />
          <button className="button" type="submit">
            Search
          </button>
        </div>
      </form>
      {submitted && (
        <section aria-live="polite">
          <p className="result-count">
            {results.length} result{results.length === 1 ? "" : "s"} for “{submitted}”
          </p>
          {results.length ? (
            <div className="search-results">
              {results.map((item, index) => (
                <article key={`${item.href}-${index}`}>
                  <p>{new URL(item.href, "https://partnersincare.example").pathname}</p>
                  <h2>
                    <Link href={item.href}>{item.title}</Link>
                  </h2>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <h2>No matching pages found</h2>
              <p>
                Try a broader term, or <Link href="/contact">contact our team</Link>.
              </p>
            </div>
          )}
        </section>
      )}
    </div>
  );
}

