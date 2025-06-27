import { cn } from "@/lib/utils";
import Container from "../common/container";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <section className="">
      <div className="relative flex h-[50rem] w-full items-center justify-center bg-black">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:20px_20px]",
            "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
            "[background-image:radial-gradient(#404040_1px,transparent_1px)]"
          )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] bg-black" />
        <div className="flex flex-col z-10 items-center text-center">
          <h1 className="relative  bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-4xl font-bold text-transparent sm:text-7xl">
            I BRING SOFTWARE TO LIFE
          </h1>{" "}
          <p className="py-10 max-w-3xl text-xl text-muted/60">
            I'm a software developer who turns ideas into{" "}
            <span className="text-white">
              scalable, user-focused applications.
            </span>{" "}
            From backend architecture to pixel-perfect interfaces.
          </p><div className="flex gap-3">
        <Button
          size={"lg"}
          className="bg-background text-foreground hover:bg-background/70"
        >
          Start a conversation
        </Button>
        <Button size={"lg"} variant={"outline"}>
          I need proof
        </Button>
      </div>
        </div>
      </div>

      
    </section>
  );
};

export default HeroSection;
