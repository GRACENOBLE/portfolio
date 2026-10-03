"use client";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import Beams from "../backgrounds/beams";
import Link from "next/link";

const HeroSection = () => {
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
      {/* <p className="font-title text-sm uppercase tracking-[0.2em] text-white/60 pb-6 mx-4">
        Grace Noble · Founder, Monarc Engineering
      </p> */}
      <h1 className="text-5xl md:text-6xl leading-tight font-semibold font-title pb-8 max-w-3xl mx-4">
        A visionary builder
      </h1>
      <p className="text-lg font-medium max-w-3xl mb-12 mx-4 text-white/80">
        I dream of a world where the technological fantasies of today become the
        reality of tomorrow. I am doing my part to make that happen by building
        the future of technology, one innovation at a time.
      </p>
      <div className="flex flex-wrap justify-center gap-4 mx-4">
        <Link
          href={"/#connect"}
          className={cn("", buttonVariants({ variant: "default" }))}
        >
          Connect with me
        </Link>
        <Link
          href={"/#building"}
          className={cn("", buttonVariants({ variant: "outline" }))}
        >
          What I&apos;m building
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
