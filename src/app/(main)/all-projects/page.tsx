import Container from "@/components/common/container";
import H2 from "@/components/common/heading-two";
import ProjectShowcaseCard from "@/components/project-showcase-card";
import { sanityFetch } from "@/sanity/lib/live";
import { GetAllProjectsData } from "@/lib/queries/get-all-projects";
import { Project } from "@/types/project";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My project showcase - Asiimwe Grace Noble",
  description:
    "View my comprehensive portfolio of projects. Discover work in front-end development, back-end development, and more.",
  alternates: {
    canonical: "https://asiimwenoble.com/all-projects",
  },
  openGraph: {
    title: "My project showcase - Asiimwe Grace Noble",
    description:
      "View my comprehensive portfolio of projects. Discover work in front-end development, back-end development, and more.",
    url: "https://asiimwenoble.com/all-projects",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "My project showcase - Asiimwe Grace Noble",
    description:
      "View my comprehensive portfolio of projects. Discover work in front-end development, back-end development, and more.",
  },
};

const page = async () => {
  let projects: Project[] = [];
  let error: string | null = null;

  try {
    const result = await sanityFetch({ query: GetAllProjectsData });
    projects = result.data;
    console.log("Successfully fetched projects:", projects);
  } catch (err) {
    error = err instanceof Error ? err.message : String(err);
    console.error("Error fetching projects:", err);
  }

  return (
    <div className="bg-black min-h-screen pt-20">
      <section className="pt-20 pb-32">
        <Container size="lg">
          <H2>All projects</H2>
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
            <p className="text-white/60 text-center py-8">
              No projects found. Create some projects in your Sanity Studio!
            </p>
          )}
        </Container>
      </section>
    </div>
  );
};

export default page;
