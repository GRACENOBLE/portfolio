"use client";
import Container from "../common/container";
import ShowcaseCard from "../showcase-card";
import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";
import Autoplay from "embla-carousel-autoplay";
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
      <section className="py-20 flex items-center">
        <Container size="xl" className="relative">
          <div
            style={{ height: "600px", position: "relative" }}
            className="w-full font-title"
          >
            {" "}
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 2000,
                  stopOnInteraction: false,
                }),
              ]}
            >
              <div className="absolute left-0 top-10 z-1 h-full bg-linear-to-r from-black via-black/80  to-transparent w-40" />
              <div className="absolute right-0 top-20 z-1 h-full bg-linear-to-l from-black via-black/80  to-transparent w-40 " />
              <div className="flex justify-between max-w-[1040px] mx-auto px-4">
                <H2 className="pb-12">Project showcase</H2>
                <div className="flex gap-6">
                  <CarouselPrevious className="relative left-0 w-10 h-10" />
                  <CarouselNext className="relative left-0 w-10 h-10 -translate-x-0" />
                </div>
              </div>
              <CarouselContent className="">
                <CarouselItem className="basis-1/4">
                  <ProjectShowcaseCard />
                </CarouselItem>
                <CarouselItem className="basis-1/4">
                  <ProjectShowcaseCard />
                </CarouselItem>
                <CarouselItem className="basis-1/4">
                  <ProjectShowcaseCard />
                </CarouselItem>
                <CarouselItem className="basis-1/4">
                  <ProjectShowcaseCard />
                </CarouselItem>
                <CarouselItem className="basis-1/4">
                  <ProjectShowcaseCard />
                </CarouselItem>
                <CarouselItem className="basis-1/4">
                  <ProjectShowcaseCard />
                </CarouselItem>
                <CarouselItem className="basis-1/4">
                  <ProjectShowcaseCard />
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ProjectShowcaseSection;
