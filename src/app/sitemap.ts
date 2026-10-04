import { type MetadataRoute } from "next";
import { client } from "@/sanity/lib/client";

type SitemapItem = {
  url: string;
  lastModified?: string | Date;
  changeFrequency?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority?: number;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://asiimwenoble.com"; // Your actual domain

  // Static routes with strategic SEO priorities
  const staticRoutes: SitemapItem[] = [
    // Homepage - highest priority for portfolio
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },

    // All projects page - high importance for showcasing work
    {
      url: `${baseUrl}/all-projects`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}#about-me`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}#building`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}#connect`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },

  ];

  // Fetch dynamic routes from Sanity CMS
  try {
    // Individual project pages - these are key for SEO and showcasing work
    // Plain client rather than sanityFetch, which needs a request to run
    const projects = await client.fetch(`*[_type == "project"] {
      "slug": slug.current,
      _updatedAt,
      featured
    }`);

    const projectRoutes = projects.map(
      (project: { slug: string; _updatedAt: string; featured: boolean }) => ({
        url: `${baseUrl}/projects/${project.slug}`,
        lastModified: project._updatedAt || new Date(),
        changeFrequency: "monthly" as const,
        // Featured projects get higher priority
        priority: project.featured ? 0.9 : 0.8,
      })
    );

    // Combine all routes
    return [...staticRoutes, ...projectRoutes].sort(
      (a, b) => (b.priority || 0) - (a.priority || 0)
    ); // Sort by priority descending
  } catch (error) {
    console.error("Error generating sitemap:", error);
    // If Sanity fetch fails, return static routes only
    return staticRoutes;
  }
}
