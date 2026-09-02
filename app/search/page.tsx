import type { Metadata } from "next";
import { Suspense } from "react";
import { SearchResults } from "@/components/SearchResults";
import { PageHero } from "@/components/UI";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = {
  title: pageMetadata.search.title,
  description: pageMetadata.search.description,
  robots: { index: false, follow: true },
};

export default function SearchPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Website search"
        title="Find services, sectors and resources"
        copy="Search the current Partners in Care website. As projects and publications are approved, they will also become discoverable here."
        current="Search"
      />
      <section className="section">
        <div className="container narrow-container">
          <Suspense fallback={<p>Loading search…</p>}>
            <SearchResults />
          </Suspense>
        </div>
      </section>
    </main>
  );
}

