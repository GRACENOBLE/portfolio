import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import Link from "next/link";
import Container from "../common/container";
import { CornerMarks, Tab } from "../blueprint";

const TITLE_BLOCK = [
  { label: "Drawn by", value: "Grace Noble" },
  { label: "Role", value: "Founder & CEO, Monarc" },
  { label: "Location", value: "Kampala, Uganda" },
  { label: "Coordinates", value: "0.3476° N, 32.5825° E" },
];

const HeroSection = () => {
  return (
    <section className="relative pt-16">
      <Container size="sm">
        <div className="min-h-[calc(100svh-4rem)] flex flex-col justify-center py-16 md:py-20">
          <div className="relative border border-line bg-paper/50 bp-hatch">
            <CornerMarks />
            <Tab className="bg-paper">Sheet 00 · General arrangement</Tab>
            <div className="px-6 md:px-14 py-16 md:py-24">
              <h1 className="font-title text-5xl md:text-7xl font-semibold leading-[0.95] tracking-tight pb-10 max-w-4xl">
                A visionary builder
              </h1>
              <p className="text-base md:text-lg max-w-2xl mb-12 border-l-2 border-ink pl-5 text-ink/80 bg-paper/70 py-1">
                I dream of a world where the technological fantasies of today
                become the reality of tomorrow. I am doing my part to make that
                happen by building the future of technology, one innovation at
                a time.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={"/#connect"}
                  className={cn(buttonVariants({ variant: "default" }))}
                >
                  Connect with me
                </Link>
                <Link
                  href={"/#building"}
                  className={cn(buttonVariants({ variant: "outline" }))}
                >
                  What I&apos;m building
                </Link>
              </div>
            </div>
            <dl className="grid grid-cols-2 md:grid-cols-4 border-t border-line bg-paper">
              {TITLE_BLOCK.map((cell, idx) => (
                <div
                  key={cell.label}
                  className={cn(
                    "px-4 py-3 border-line",
                    idx % 2 === 1 && "border-l",
                    idx >= 2 && "border-t md:border-t-0",
                    idx === 2 && "md:border-l"
                  )}
                >
                  <dt className="text-[10px] uppercase tracking-[0.2em] text-ink/50">
                    {cell.label}
                  </dt>
                  <dd className="text-xs pt-1">{cell.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
