import { groq } from "next-sanity";

export const GetAllProjectsData = groq`
  *[_type == "project"] | order(_createdAt desc) {
    _id,
    name,
    slug,
    description,
    tags,
    technologies,
    featured,
    "image": {
      "url": image.asset->url,
      "alt": image.alt
    },
    link,
    githubLink
  }
`;
