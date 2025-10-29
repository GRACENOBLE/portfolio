import { client } from "@/sanity/lib/client";

export async function testSanityConnection() {
  try {
    // Test basic connection
    // console.log("Testing Sanity connection...");
    const result = await client.fetch(`*[_type == "homePage"]`);
    // console.log("Raw homePage documents:", result);

    // Test if any documents exist
    const allDocs = await client.fetch(
      `*[_type == "homePage"] | order(_createdAt desc)`
    );
    // console.log("All homePage documents:", allDocs);

    return result;
  } catch (error) {
    console.error("Sanity connection error:", error);
    throw error;
  }
}

// Test your specific query
export async function testHomePageQuery() {
  try {
    const GetHomePageData = `
      *[_type == "homePage"][0]{
        heroSection,
        aboutMeSection,
        skills,
        services,
        "featuredProjects": featuredProjects[]->{
          _id,
          name,
          slug,
          company,
          "mainImage": {
            "url": mainImage.asset->url,
            "alt": mainImage.alt
          },
          link
        }
      }
    `;

    const result = await client.fetch(GetHomePageData);
    // console.log("Homepage query result:", result);
    return result;
  } catch (error) {
    console.error("Homepage query error:", error);
    throw error;
  }
}
