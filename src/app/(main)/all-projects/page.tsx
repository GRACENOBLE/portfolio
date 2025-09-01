import Container from "@/components/common/container";
import H2 from "@/components/common/heading-two";
import ProjectShowcaseCard from "@/components/project-showcase-card";

const page = () => {
  return (
    <div className="bg-black min-h-screen pt-20">
      <section className="py-20">
        <Container>
          <H2>All projects</H2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 9 }).map(() => (
              <ProjectShowcaseCard />
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default page;
