import { groq } from "next-sanity";

export const GetProjectBySlugData = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    description,
    tags,
    technologies,
    featured,
    content,
    "image": {
      "url": image.asset->url,
      "alt": image.alt
    },
    "gallery": gallery[]{
      "url": asset->url,
      alt,
      caption
    },
    link,
    githubLink,
    _createdAt,
    _updatedAt
  }
`;
