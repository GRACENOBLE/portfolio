import type { MetadataRoute } from "next";
import { abs, SITE } from "@/lib/site";

/**
 * AI and LLM crawlers we explicitly welcome, so assistants like ChatGPT,
 * Claude and Perplexity can read the site and answer questions about Grace.
 *
 * A crawler that finds its own named group obeys only that group and ignores
 * the wildcard, so each gets the same access rules as everyone else. Mirrors
 * the Monarc Engineering site.
 */
const AI_CRAWLERS = [
  // OpenAI
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  // Anthropic
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "anthropic-ai",
  // Perplexity
  "PerplexityBot",
  "Perplexity-User",
  // Google and Apple AI extensions
  "Google-Extended",
  "Applebot-Extended",
  // Meta, Amazon and other model crawlers
  "meta-externalagent",
  "Amazonbot",
  "CCBot",
  "cohere-ai",
  "Bytespider",
  "MistralAI-User",
  "DuckAssistBot",
  "YouBot",
];

/**
 * Generates /robots.txt: the whole public site is open, while the Sanity
 * Studio, API routes and the internal email preview are kept out.
 */
export default function robots(): MetadataRoute.Robots {
  const access = {
    allow: "/",
    disallow: ["/studio/", "/api/", "/email-preview"],
  };
  return {
    rules: [
      { userAgent: "*", ...access },
      { userAgent: AI_CRAWLERS, ...access },
    ],
    sitemap: abs("/sitemap.xml"),
    host: SITE.url,
  };
}
