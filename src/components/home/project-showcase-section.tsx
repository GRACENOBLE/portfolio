"use client";
import Container from "../common/container";
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
import Link from "next/link";
import { cn } from "@/lib/utils";
import { MoveRight } from "lucide-react";
import { Key } from "react";

const ProjectShowcaseSection = ({
  projectShowcaseData,
}: {
  projectShowcaseData: any;
}) => {
  return (
    <>
      <section id="project-showcase" className="pb-20 flex items-center">
        <Container size="sm" className="relative">
          {/* <div className="absolute left-0 top-10 z-1 h-full bg-linear-to-r from-black via-black/80  to-transparent w-40" />
            <div className="absolute right-0 top-20 z-1 h-full bg-linear-to-l from-black via-black/80  to-transparent w-40 " /> */}
          <div className="flex justify-between items-end max-w-[1040px] mx-auto px-4  mb-12">
            <H2 className="pb-0">Featured projects</H2>
            <Link
              href={"/all-projects"}
              className={cn("hidden md:flex items-center h-fit gap-2 group")}
            >
              <span>See all</span>
              <MoveRight
                size={20}
                strokeWidth={1.5}
                className="group-hover:translate-x-1 transition-transform ease-in-out duration-300"
              />
            </Link>
          </div>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
            className="hidden md:block border rounded-[24px] border-white/20 p-2"
          >
            <div className="flex gap-6">
              <CarouselPrevious className=" z-10" />
              <CarouselNext className=" z-10" />
            </div>
            <div className="rounded-xl overflow-hidden">
              <CarouselContent className="">
                {projectShowcaseData.map(
                  (
                    project: {
                      _id: string;
                      image: { url: string };
                      name: string;
                      description: string;
                      slug?: { current: string };
                      link?: string;
                    },
                    idx: Key | null | undefined
                  ) => (
                    <CarouselItem className="basis-1/3" key={idx}>
                      <ProjectShowcaseCard
                        image={project.image.url}
                        title={project.name}
                        description={project.description}
                        link={project.link || ""}
                        slug={project.slug?.current}
                      />
                    </CarouselItem>
                  )
                )}
              </CarouselContent>
            </div>
          </Carousel>
          <div className="flex flex-col gap-12 md:hidden">
            {projectShowcaseData.map(
              (
                project: {
                  _id: string;
                  image: { url: string };
                  name: string;
                  description: string;
                  slug?: { current: string };
                  link?: string;
                },
                idx: Key | null | undefined
              ) => (
                <ProjectShowcaseCard
                  key={idx}
                  image={project.image.url}
                  title={project.name}
                  description={project.description}
                  link={project.link || ""}
                  slug={project.slug?.current}
                />
              )
            )}
          </div>
          <div className="flex justify-center pt-10"></div>
        </Container>
      </section>
    </>
  );
};

export default ProjectShowcaseSection;
