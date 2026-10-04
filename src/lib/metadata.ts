import type { Metadata } from "next";
import { SITE } from "./site";

// The blueprint share card in src/app (source: scripts/og-image.html). Listed
// explicitly because a page that sets openGraph drops the file-based image.
const shareImage = {
  url: "/opengraph-image.png",
  width: 1200,
  height: 630,
  alt: "Portrait of Grace Noble beside the title Grace Noble, Founder & CEO of Monarc Engineering and Engineering Manager at Amplified Access, Kampala, Uganda",
};

// Next merges metadata shallowly, so a page that sets `openGraph` replaces the
// layout's whole object. Pages spread these defaults to keep the shared fields.
export const openGraphDefaults = {
  siteName: SITE.name,
  title: SITE.title,
  description: SITE.description,
  url: SITE.url,
  locale: "en_US",
  images: [shareImage],
} satisfies NonNullable<Metadata["openGraph"]>;

export const twitterDefaults = {
  card: "summary_large_image",
  title: SITE.title,
  description: SITE.description,
  creator: SITE.twitterHandle,
  images: [shareImage.url],
} satisfies NonNullable<Metadata["twitter"]>;
