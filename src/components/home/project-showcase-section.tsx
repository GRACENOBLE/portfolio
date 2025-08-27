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
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import { MoveRight } from "lucide-react";

const ProjectShowcaseSection = () => {
  return (
    <>
      <section id="project-showcase" className="pb-20 flex items-center">
        <Container size="xl" className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 2550,
              }),
            ]}
            className="hidden md:block"
          >
            <div className="absolute left-0 top-10 z-1 h-full bg-linear-to-r from-black via-black/80  to-transparent w-40" />
            <div className="absolute right-0 top-20 z-1 h-full bg-linear-to-l from-black via-black/80  to-transparent w-40 " />
            <div className="flex justify-between items-center max-w-[1040px] mx-auto px-4  mb-10">
              <H2 className=" pb-0">Featured projects</H2>
              <Link
                href={""}
                className={cn("flex items-center h-fit gap-2 group")}
              >
                <span>See all</span>
                <MoveRight
                  size={20}
                  strokeWidth={1.5}
                  className="group-hover:translate-x-1 transition-transform ease-in-out duration-300"
                />
              </Link>
            </div>
            <div className="flex gap-6">
              <CarouselPrevious className="left-8 z-10 translate-y-1/2" />
              <CarouselNext className="right-8 z-10 translate-y-1/2" />
            </div>
            <CarouselContent className="">
              {Array.from({ length: 7 }).map((_, idx) => (
                <CarouselItem className="basis-1/3 lg:basis-1/4" key={idx}>
                  <ProjectShowcaseCard />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="flex justify-center pt-10"></div>

          <div className="md:hidden">
            <H2 className="mb-12 text-center">Featured projects</H2>
            <div className="flex flex-col gap-8">
              {Array.from({ length: 7 }).map((_, idx) => (
                <ProjectShowcaseCard />
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ProjectShowcaseSection;
