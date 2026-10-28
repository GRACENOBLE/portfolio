import { abs } from "@/lib/site";

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
 * How the content may be used once fetched (https://contentsignals.org).
 * Search, answers and training are all welcome: the point of the site is
 * that people and assistants can find out who Grace is.
 */
const CONTENT_SIGNAL = "search=yes, ai-input=yes, ai-train=yes";

const DISALLOW = ["/api/", "/email-preview"];

const group = (agents: string[]) =>
  [
    ...agents.map((agent) => `User-Agent: ${agent}`),
    `Content-Signal: ${CONTENT_SIGNAL}`,
    "Allow: /",
    ...DISALLOW.map((path) => `Disallow: ${path}`),
  ].join("\n");

/**
 * /robots.txt. A route rather than robots.ts because Next's robots API has no
 * way to emit the Content-Signal directive. The whole public site is open,
 * while API routes and the internal email preview are kept out.
 */
export const dynamic = "force-static";

export function GET() {
  const body = [
    "# Content signals: https://contentsignals.org",
    `# ${CONTENT_SIGNAL}`,
    "",
    group(["*"]),
    "",
    group(AI_CRAWLERS),
    "",
    `Sitemap: ${abs("/sitemap.xml")}`,
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
