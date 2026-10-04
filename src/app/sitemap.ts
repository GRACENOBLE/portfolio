import type { MetadataRoute } from "next";
import { client } from "@/sanity/lib/client";
import { abs, SITE } from "@/lib/site";

/**
 * Generates /sitemap.xml with every indexable, canonical page. Homepage
 * sections are anchors on one URL, so they aren't listed separately.
 * Deliberately excluded: /studio, /api and /email-preview.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages: MetadataRoute.Sitemap = [
    // SITE.url without a trailing path, matching the homepage canonical
    { url: SITE.url, changeFrequency: "monthly", priority: 1 },
    { url: abs("/all-projects"), changeFrequency: "monthly", priority: 0.6 },
  ];

  try {
    // Plain client rather than sanityFetch, which needs a request to run
    const projects: { slug: string; _updatedAt: string }[] =
      await client.fetch(`*[_type == "project" && defined(slug.current)] {
        "slug": slug.current,
        _updatedAt
      }`);

    const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
      url: abs(`/projects/${project.slug}`),
      lastModified: project._updatedAt,
      changeFrequency: "yearly",
      priority: 0.5,
    }));

    return [...staticPages, ...projectPages];
  } catch (error) {
    console.error("Error generating sitemap:", error);
    return staticPages;
  }
}
