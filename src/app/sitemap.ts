import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

/**
 * Generates /sitemap.xml. The site is a single page, and its sections are
 * anchors on that one URL, so the home page is the only entry.
 * Deliberately excluded: /api and /email-preview.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  // SITE.url without a trailing path, matching the homepage canonical
  return [{ url: SITE.url, changeFrequency: "monthly", priority: 1 }];
}
