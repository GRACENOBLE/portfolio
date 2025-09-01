// queries/getHomePageData.ts
import { groq } from "next-sanity";

export const GetHomePageData = groq`
  *[_type == "homePage"][0]{
    heroSection{
      heroTitle,
      heroSubtitle
    },
    aboutMeSection{
      title,
      description
    },
    skills{
      title,
      skills[]{
        title,
        description,
        technologies
      }
    },
    services{
      title,
      services[]{
        title,
        description
      }
    },
    "featuredProjects": featuredProjects[]->{
      _id,
      name,
      slug,
      description,
      "image": {
        "url": image.asset->url,
        "alt": image.alt
      },
      link
    }
  }
`;
