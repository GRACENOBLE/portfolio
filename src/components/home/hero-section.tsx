"use client";
import { cn } from "@/lib/utils";
import Container from "../common/container";
import { Button, buttonVariants } from "../ui/button";
import { HexagonBackground } from "../backgrounds/hexagon";
import Beams from "../backgrounds/beams";
import Link from "next/link";

const HeroSection = ({ heroData }: { heroData: any }) => {
  return (
    <section className="h-[100vh] flex flex-col items-center justify-center text-center relative isolate text-white">
      {/* <HexagonBackground className="absolute inset-0 flex items-center justify-center rounded-xl opacity-50" /> */}
      <div
        style={{ width: "100%", height: "100%", position: "absolute" }}
        className="-z-1"
      >
        <Beams
          beamWidth={2}
          beamHeight={20}
          beamNumber={12}
          lightColor="#ffffff"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={30}
          
        />
      </div>
      <h1 className="text-5xl md:text-6xl font-semibold font-title pb-8 max-w-3xl">
        An engineer <br /> who creates art
      </h1>
      <p className="text-lg font-medium max-w-2xl mb-12 mx-2">
        I build software that <span>looks good</span>,{" "}
        <span>functions great</span> and <span>scales perfectly</span>.
      </p>
      <div className="flex gap-4">
        <Link
          href={"/#contact-me"}
          className={cn("", buttonVariants({ variant: "default" }))}
        >
          Lets talk
        </Link>
        <Link
          href={""}
          className={cn(
            "/all-projects",
            buttonVariants({ variant: "outline" })
          )}
        >
          Explore my work
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
