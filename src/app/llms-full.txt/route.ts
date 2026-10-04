import { buildLlmsFull } from "@/lib/llms";
import { GetAllProjectsData } from "@/lib/queries/get-all-projects";
import { client } from "@/sanity/lib/client";
import type { Project } from "@/types/project";

// Prerendered at build time from the profile data and Sanity projects
export const dynamic = "force-static";

export async function GET() {
  let projects: Project[] = [];
  try {
    // Plain client rather than sanityFetch, which needs a request to run
    projects = await client.fetch(GetAllProjectsData);
  } catch (error) {
    console.error("llms-full.txt: could not load projects:", error);
  }

  return new Response(buildLlmsFull(projects), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
