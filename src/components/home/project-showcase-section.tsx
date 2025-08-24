import Container from "../common/container";
import ShowcaseCard from "../showcase-card";
import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";
import H2 from "../common/heading-two";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProjectShowcaseCard from "../project-showcase-card";

const ProjectShowcaseSection = () => {
  return (
    <>
      <section>
        <Container className="relative" size="sm">
          <H2 className="text-center translate-x-1/2 right-[50%] absolute">
            Project showcase
          </H2>
          <div
            style={{ height: "600px", position: "relative" }}
            className="w-full font-title"
          >
            <Carousel>
              <CarouselContent>
                <CarouselItem className="basis-1/3">
                  <ProjectShowcaseCard />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ProjectShowcaseSection;
