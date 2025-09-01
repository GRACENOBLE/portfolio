import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { PortableText } from "@portabletext/react";

import Container from "@/components/common/container";
import H2 from "@/components/common/heading-two";
import { Button } from "@/components/ui/button";
import { client } from "@/sanity/lib/client";
import { GetProjectBySlugData } from "@/lib/queries/get-project-by-slug";
import { GetAllProjectsData } from "@/lib/queries/get-all-projects";
import { Project } from "@/types/project";
import { portableTextComponents } from "@/components/portable-text-components";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all projects
export async function generateStaticParams() {
  try {
    const projects: Project[] = await client.fetch(GetAllProjectsData);

    return projects.map((project) => ({
      slug: project.slug.current,
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

// Generate metadata for each project page
export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  
  try {
    const project: Project = await client.fetch(GetProjectBySlugData, { slug });
    
    if (!project) {
      return {
        title: "Project Not Found",
      };
    }
    
    return {
      title: `${project.name} - Project Details`,
      description: project.description,
      openGraph: {
        title: project.name,
        description: project.description,
        images: project.image?.url ? [{ url: project.image.url }] : [],
      },
    };
  } catch (error) {
    return {
      title: "Project Details",
    };
  }
}

const ProjectPage = async ({ params }: ProjectPageProps) => {
  const { slug } = await params;  let project: Project | null = null;
  let error: string | null = null;

  try {
    project = await client.fetch(GetProjectBySlugData, { slug });

    if (!project) {
      notFound();
    }
  } catch (err) {
    error = err instanceof Error ? err.message : String(err);
    console.error("Error fetching project:", err);
  }

  if (error) {
    return (
      <div className="bg-black min-h-screen pt-20">
        <Container size="lg">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            <strong>Error fetching project:</strong> {error}
          </div>
        </Container>
      </div>
    );
  }

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-black min-h-screen pt-20">
      <section className="pt-20 pb-32">
        <Container size="lg">
          {/* Back Navigation */}
          <div className="mb-8">
            <Link href="/all-projects">
              <Button
                variant="outline"
                className="text-white border-white/20 hover:bg-white/10"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Projects
              </Button>
            </Link>
          </div>

          {/* Project Header */}
          <div className="mb-12">
            <H2 className="mb-4">{project.name}</H2>
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Project Links */}
            <div className="flex gap-4 mb-8">
              {project.link && (
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-white text-black hover:bg-white/90">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live Project
                  </Button>
                </Link>
              )}
              {project.githubLink && (
                <Link
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="text-white border-white/20 hover:bg-white/10"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Source Code
                  </Button>
                </Link>
              )}
            </div>

            {/* Tags and Technologies */}
            <div className="space-y-4">
              {project.tags && project.tags.length > 0 && (
                <div>
                  <h3 className="text-white/60 text-sm font-medium mb-2">
                    Categories
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-white/10 text-white px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {project.technologies && project.technologies.length > 0 && (
                <div>
                  <h3 className="text-white/60 text-sm font-medium mb-2">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Main Project Image */}
          {project.image?.url && (
            <div className="mb-12">
              <div className="relative aspect-video rounded-2xl overflow-hidden">
                <Image
                  src={project.image.url}
                  alt={project.image.alt || project.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          )}

          {/* Project Content */}
          {project.content && (
            <div className="mb-12">
              <div className="prose prose-invert prose-lg max-w-none">
                <PortableText
                  value={project.content}
                  components={portableTextComponents}
                />
              </div>
            </div>
          )}

          {/* Project Gallery */}
          {project.gallery && project.gallery.length > 0 && (
            <div className="mb-12">
              <h3 className="text-white text-2xl font-semibold mb-6">
                Project Gallery
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {project.gallery.map((image, index) => (
                  <div key={index} className="space-y-3">
                    <div className="relative aspect-video rounded-xl overflow-hidden">
                      <Image
                        src={image.url}
                        alt={image.alt || `Gallery image ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    {image.caption && (
                      <p className="text-white/60 text-sm text-center">
                        {image.caption}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Related Projects or Call to Action */}
          <div className="text-center">
            <Link href="/all-projects">
              <Button
                variant="outline"
                className="text-white border-white/20 hover:bg-white/10"
              >
                View All Projects
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default ProjectPage;
