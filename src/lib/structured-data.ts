/**
 * JSON-LD `@graph` builders for structured data.
 *
 * Every page renders a single `@graph` whose nodes are linked by stable `@id`
 * anchors. Grace (`PERSON_ID`) is the hub: the home page is a ProfilePage
 * about her, she authors the WebSite, founded Monarc and works for
 * Amplified Access. Modelled on the Monarc Engineering site.
 *
 * Types are limited to ones that validate cleanly in Google's Rich Results
 * Test: Person, Organization, WebSite, ProfilePage, ItemList and CreativeWork.
 */

import { alsoLeading, monarc, MONARC_URL } from "@/data/profile";
import { abs, SITE } from "./site";

export const PERSON_ID = `${SITE.url}/#person`;
export const WEBSITE_ID = `${SITE.url}/#website`;
const MONARC_ID = `${SITE.url}/#monarc`;
const AMPLIFIED_ACCESS_ID = `${SITE.url}/#amplified-access`;

type Node = Record<string, unknown>;

/** Grace. Author of the site, founder of Monarc. */
export function personNode(): Node {
  return {
    "@type": "Person",
    "@id": PERSON_ID,
    name: SITE.name,
    alternateName: SITE.alternateName,
    url: SITE.url,
    description: SITE.description,
    image: { "@type": "ImageObject", url: abs(SITE.image) },
    jobTitle: ["Founder & CEO", "Engineering Manager"],
    worksFor: [{ "@id": MONARC_ID }, { "@id": AMPLIFIED_ACCESS_ID }],
    alumniOf: { "@type": "CollegeOrUniversity", name: "ISBAT University" },
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.address.locality,
      addressRegion: SITE.address.region,
      addressCountry: SITE.address.country,
    },
    knowsAbout: [...SITE.knowsAbout],
    sameAs: SITE.socials.map((social) => social.url),
  };
}

function monarcNode(): Node {
  return {
    "@type": "Organization",
    "@id": MONARC_ID,
    name: monarc.name,
    url: MONARC_URL,
    slogan: monarc.tagline,
    founder: { "@id": PERSON_ID },
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.address.locality,
      addressCountry: SITE.address.country,
    },
  };
}

function amplifiedAccessNode(): Node {
  return {
    "@type": "Organization",
    "@id": AMPLIFIED_ACCESS_ID,
    name: alsoLeading.name,
    url: alsoLeading.url,
  };
}

export function websiteNode(): Node {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE.url,
    name: SITE.name,
    alternateName: SITE.alternateName,
    description: SITE.description,
    author: { "@id": PERSON_ID },
    publisher: { "@id": PERSON_ID },
    inLanguage: "en",
  };
}

type WebPageOptions = {
  path: string;
  name: string;
  description: string;
  type?: "WebPage" | "ProfilePage";
  primaryImage?: string;
};

export function webPageNode({
  path,
  name,
  description,
  type = "WebPage",
  primaryImage,
}: WebPageOptions): Node {
  const url = abs(path);
  const node: Node = {
    "@type": type,
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": PERSON_ID },
    inLanguage: "en",
  };
  if (type === "ProfilePage") node.mainEntity = { "@id": PERSON_ID };
  if (primaryImage) {
    node.primaryImageOfPage = { "@type": "ImageObject", url: abs(primaryImage) };
  }
  return node;
}

/** Wraps nodes in a schema.org `@graph` document. */
export function graph(nodes: Node[]): Node {
  return { "@context": "https://schema.org", "@graph": nodes };
}

// ---------------------------------------------------------------------------
// Per-page graph builders
// ---------------------------------------------------------------------------

export function homeGraph(): Node {
  const work = [
    ...monarc.ventures.map((v) => ({ ...v, org: MONARC_ID })),
    ...alsoLeading.projects.map((p) => ({ ...p, org: AMPLIFIED_ACCESS_ID })),
  ];

  return graph([
    personNode(),
    monarcNode(),
    amplifiedAccessNode(),
    websiteNode(),
    webPageNode({
      path: "/",
      name: SITE.title,
      description: SITE.description,
      type: "ProfilePage",
      primaryImage: SITE.image,
    }),
    {
      "@type": "ItemList",
      "@id": `${SITE.url}/#building`,
      name: `What ${SITE.name} is building`,
      itemListElement: work.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "CreativeWork",
          name: item.name,
          description: item.description,
          about: item.sector,
          image: abs(item.image),
          ...(item.url && { url: item.url }),
          creator: { "@id": item.org },
          contributor: { "@id": PERSON_ID },
        },
      })),
    },
  ]);
}
