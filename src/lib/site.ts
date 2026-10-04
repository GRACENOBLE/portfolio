/**
 * Canonical, single-source-of-truth site metadata.
 *
 * Used by the Next.js Metadata API (titles, canonicals, Open Graph), the
 * JSON-LD builders in `structured-data.ts`, the sitemap, robots.txt and the
 * llms.txt routes. Keep production facts here so they stay consistent.
 */
export const SITE = {
  url: "https://asiimwenoble.com",
  name: "Grace Noble",
  /** Full name, so searches for either form resolve to the same person. */
  alternateName: "Asiimwe Grace Noble",
  title: "Grace Noble | Founder, Monarc Engineering",
  description:
    "Grace Noble is a Kampala-based technical founder and engineering manager. Founder & CEO of Monarc Engineering, building software that solves the physical-world inefficiencies holding economies back, and Engineering Manager at Amplified Access.",
  jobTitle: "Founder & CEO, Monarc Engineering",
  /** Portrait used for the Person entity and as a fallback share image. */
  image: "/images/me.png",
  address: {
    locality: "Kampala",
    region: "Central Region",
    country: "UG",
  },
  /** Topics the Person entity is associated with in structured data. */
  knowsAbout: [
    "Software engineering",
    "Engineering management",
    "Systems architecture",
    "Natural language processing",
    "Logistics technology",
    "Fintech",
    "Blockchain",
    "Entrepreneurship",
  ],
  socials: [
    {
      name: "Twitter",
      handle: "@graceno75417321",
      url: "https://x.com/graceno75417321",
    },
    {
      name: "Linkedin",
      handle: "Grace Noble",
      url: "https://www.linkedin.com/in/mr-grace-noble",
    },
    {
      name: "Instagram",
      handle: "@i_am_grace_noble",
      url: "https://www.instagram.com/i_am_grace_noble/",
    },
    {
      name: "Roadmap.sh",
      handle: "grace noble",
      url: "https://roadmap.sh/u/gracenoble",
    },
    {
      name: "Dev Community",
      handle: "grace noble",
      url: "https://dev.to/grace_noble",
    },
    {
      name: "Github",
      handle: "ASIIMWE GRACE NOBLE",
      url: "https://github.com/GRACENOBLE",
    },
  ],
  twitterHandle: "@graceno75417321",
} as const;

/** Absolute URL for a site-relative path, e.g. `abs("/all-projects")`. */
export function abs(path: string): string {
  return new URL(path, SITE.url).toString();
}
