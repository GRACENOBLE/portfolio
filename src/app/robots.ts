import { type MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://www.asiimwenoble.com"; // Your actual domain

  return {
    rules: [
      // Main rules for all crawlers
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/studio/", // Disallow Sanity studio
          "/studio/*", // Disallow all studio paths
          "/api/", // Disallow API routes
          "/api/*", // Disallow all API endpoints
          "/_admin/", // Disallow admin pages
          "/admin/", // Alternative admin path
          "/api/draft-mode/", // Disallow draft mode
          "/api/revalidate/", // Disallow revalidation endpoints
          "/api/contact/", // Keep contact API private from crawlers
          "/test/", // Disallow test pages
          "/email-preview/", // Disallow email preview page
          "/_next/", // Disallow Next.js internal files
          "/favicon.ico", // Not needed in search results
          "/.env", // Security - block env files
          "/.env.*", // Block all env variants
          "/package.json", // Block package info
          "/pnpm-lock.yaml", // Block lock files
          "/tsconfig.json", // Block config files
          "/next.config.*", // Block Next.js config
          "/sanity.config.*", // Block Sanity config
          "/sanity.cli.*", // Block Sanity CLI config
        ],
        crawlDelay: 1, // Be respectful - 1 second delay between requests
      },

      // Specific rules for major search engines (optimized for portfolio visibility)
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: [
          "/studio/",
          "/studio/*",
          "/api/",
          "/api/*",
          "/_admin/",
          "/admin/",
          "/test/",
          "/email-preview/",
          "/.env*",
          "/package.json",
          "/pnpm-lock.yaml",
          "/tsconfig.json",
          "/next.config.*",
          "/sanity.config.*",
        ],
        // No crawl delay for Google - they're efficient and we want good indexing
      },

      // Allow Bingbot with same rules as Google
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: [
          "/studio/",
          "/studio/*",
          "/api/",
          "/api/*",
          "/_admin/",
          "/admin/",
          "/test/",
          "/email-preview/",
          "/.env*",
          "/package.json",
          "/pnpm-lock.yaml",
          "/tsconfig.json",
          "/next.config.*",
          "/sanity.config.*",
        ],
      },

      // LinkedIn bot - important for professional portfolio visibility
      {
        userAgent: "LinkedInBot",
        allow: "/",
        disallow: ["/studio/", "/api/", "/test/", "/email-preview/"],
      },

      // Twitter/X bot - for social sharing
      {
        userAgent: "Twitterbot",
        allow: "/",
        disallow: ["/studio/", "/api/", "/test/", "/email-preview/"],
      },

      // Block aggressive SEO crawlers that might hurt performance
      {
        userAgent: [
          "SemrushBot",
          "AhrefsBot",
          "MJ12bot",
          "DotBot",
          "SiteAuditBot",
          "ScreamingFrogSEOSpider",
        ],
        disallow: "/",
        crawlDelay: 10, // Slow them down significantly
      },

      // Block AI training crawlers (protect your creative work)
      {
        userAgent: [
          "ChatGPT-User",
          "OpenAI-SearchBot",
          "Claude-Web",
          "anthropic-ai",
          "Applebot-Extended", // Apple AI training
          "Meta-ExternalAgent", // Meta AI training
          "PerplexityBot",
          "YouBot",
          "Claude-Web",
        ],
        disallow: "/", // Block AI training on your portfolio content
      },

      // Block other unwanted bots
      {
        userAgent: [
          "SerpstatBot",
          "DataForSeoBot",
          "PetalBot",
          "YandexBot", // Unless you're targeting Russian market
          "BaiduSpider", // Unless you're targeting Chinese market
        ],
        disallow: "/",
      },
    ],

    sitemap: `${baseUrl}/sitemap.xml`,

    host: baseUrl, // Preferred domain (helps with canonicalization)
  };
}
