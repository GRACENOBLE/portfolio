import { type MetadataRoute } from "next";
import { sanityFetch } from "@/sanity/lib/live";

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
  const baseUrl = "https://www.asiimwenoble.com"; // Your actual domain

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

    // Contact page - important for business inquiries
    {
      url: `${baseUrl}#contact-me`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // About section - important for personal branding
    {
      url: `${baseUrl}#about-me`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // Services section - showcase capabilities
    {
      url: `${baseUrl}#services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // Skills section - technical expertise
    {
      url: `${baseUrl}#skills`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // Studio (Sanity CMS) - lower priority, mainly for admin
    {
      url: `${baseUrl}/studio`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.1,
    },
  ];

  // Fetch dynamic routes from Sanity CMS
  try {
    // Individual project pages - these are key for SEO and showcasing work
    const projectsResult = await sanityFetch({
      query: `*[_type == "project"] {
        "slug": slug.current,
        _updatedAt,
        featured
      }`,
    });

    const projects = projectsResult.data;

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
