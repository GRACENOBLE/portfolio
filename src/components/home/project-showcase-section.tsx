import Container from "../common/container";
import ShowcaseCard from "../showcase-card";

const ProjectShowcaseSection = () => {
  return (
    <Container>
      <div>
        <h2 className="text-4xl font-semibold">Project showcase</h2>
      </div>
      <ShowcaseCard />
    </Container>
  );
};

export default ProjectShowcaseSection;
