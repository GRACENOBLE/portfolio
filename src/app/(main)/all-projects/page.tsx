import Container from "@/components/common/container";
import ProjectShowcaseCard from "@/components/project-showcase-card";
import { sanityFetch } from "@/sanity/lib/live";
import { GetAllProjectsData } from "@/lib/queries/get-all-projects";
import { Project } from "@/types/project";
import { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { openGraphDefaults, twitterDefaults } from "@/lib/metadata";
import { SITE } from "@/lib/site";
import { projectsGraph } from "@/lib/structured-data";

const description = `Software projects built by ${SITE.name}, the founder of Monarc Engineering, from product platforms to client systems.`;

export const metadata: Metadata = {
  title: "Projects",
  description,
  alternates: { canonical: "/all-projects" },
  openGraph: {
    ...openGraphDefaults,
    title: `Projects | ${SITE.name}`,
    description,
    url: "/all-projects",
  },
  twitter: { ...twitterDefaults, title: `Projects | ${SITE.name}`, description },
};

const page = async () => {
  let projects: Project[] = [];
  let error: string | null = null;
  // console.log(projects);

  try {
    const result = await sanityFetch({ query: GetAllProjectsData });
    projects = result.data as Project[];
    // console.log("Successfully fetched projects:", projects);
  } catch (err) {
    error = err instanceof Error ? err.message : String(err);
    console.error("Error fetching projects:", err);
  }

  return (
    <div className="min-h-screen pt-20">
      <JsonLd data={projectsGraph(projects)} />
      <section className="pt-20 pb-32">
        <Container size="lg">
          <h1 className="font-title text-4xl font-semibold pb-8">
            All projects
          </h1>
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              <strong>Error fetching projects:</strong> {error}
            </div>
          )}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project: Project) => (
              <ProjectShowcaseCard
                key={project._id}
                image={project.image?.url || "/images/projects/placeholder.png"}
                title={project.name}
                description={project.description}
                link={project.link || "#"}
                slug={project.slug?.current}
              />
            ))}
          </div>
          {projects.length === 0 && !error && (
            <p className="text-ink/60 text-center py-8">
              No projects found. Create some projects in your Sanity Studio!
            </p>
          )}
        </Container>
      </section>
    </div>
  );
};

export default page;
