import type { MetadataRoute } from "next";
import {
  allPageLinks,
  legalNavigation,
  siteConfig,
} from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = new Set([
    "/",
    ...allPageLinks.map((item) => item.href),
    ...legalNavigation.map((item) => item.href),
  ]);
  return [...routes].map((route) => ({
    url: `${siteConfig.url}${route === "/" ? "" : route}`,
    lastModified: new Date("2026-07-31"),
    changeFrequency:
      route === "/" ? ("weekly" as const) : ("monthly" as const),
    priority: route === "/" ? 1 : route.startsWith("/services") ? 0.9 : 0.7,
  }));
}

