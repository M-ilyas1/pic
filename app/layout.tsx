import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { CookieBanner } from "@/components/CookieBanner";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.shortName} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.shortName,
  keywords: [
    "Public health consultancy Pakistan",
    "Healthcare consultancy Islamabad",
    "Research consultancy Pakistan",
    "Monitoring and evaluation consultants Pakistan",
    "Health project management Pakistan",
    "Public health research services",
    "Healthcare training and capacity building",
    "Health-system strengthening Pakistan",
    "Patient-navigation support Pakistan",
    "NGO consultancy services Pakistan",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: siteConfig.url,
    siteName: siteConfig.shortName,
    title: `${siteConfig.shortName} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [
      {
        url: "/images/partners-in-care-og.jpg",
        width: 1200,
        height: 630,
        alt: "Partners in Care public health professionals collaborating",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.shortName} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: ["/images/partners-in-care-og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b3148",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": `${siteConfig.url}/#organization`,
                name: siteConfig.name,
                alternateName: siteConfig.shortName,
                url: siteConfig.url,
                logo: `${siteConfig.url}/favicon.svg`,
                description: siteConfig.description,
                foundingDate: "2026-07-30",
                slogan: siteConfig.tagline,
                legalName: siteConfig.name,
                taxID: siteConfig.legal.cuin,
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Office, Basement 12, Plaza 2000, I-8 Markaz",
                  addressLocality: "Islamabad",
                  addressRegion: "Islamabad Capital Territory",
                  addressCountry: "PK",
                },
                areaServed: "Pakistan",
                knowsAbout: [
                  "Public health",
                  "Health research",
                  "Monitoring and evaluation",
                  "Project management",
                  "Capacity building",
                  "Health-system strengthening",
                  "Patient navigation",
                ],
              },
              {
                "@type": "ProfessionalService",
                "@id": `${siteConfig.url}/#localbusiness`,
                name: siteConfig.name,
                image: `${siteConfig.url}/images/partners-in-care-og.jpg`,
                url: siteConfig.url,
                description: siteConfig.description,
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Office, Basement 12, Plaza 2000, I-8 Markaz",
                  addressLocality: "Islamabad",
                  addressCountry: "PK",
                },
                priceRange: "Project-based",
              },
            ],
          }}
        />
        <Header />
        {children}
        <Footer />
        <Link
          className="whatsapp-float"
          href="/contact"
          aria-label="Contact Partners in Care by WhatsApp after the approved number is added"
          title="WhatsApp number will be added after approval"
        >
          <span aria-hidden="true">◔</span>
          <b>WhatsApp</b>
        </Link>
        <CookieBanner />
        {/* Add the approved analytics script here only after consent configuration. */}
      </body>
    </html>
  );
}
