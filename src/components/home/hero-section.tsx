import { cn } from "@/lib/utils";
import Container from "../common/container";
import { Button } from "../ui/button";
import { HexagonBackground } from "../backgrounds/hexagon";

const HeroSection = () => {
  return (
    <section className=" pt-60 pb-50 flex flex-col items-center justify-center text-center">
      {/* <HexagonBackground className="absolute inset-0 flex items-center justify-center rounded-xl opacity-50" /> */}
      <h1 className="text-6xl font-semibold font-title pb-6 max-w-3xl  ">
        A software development artist and scientist.
      </h1>
      <p className="text-lg font-medium max-w-2xl mb-8">
        I build software that looks good, functions great and scales perfectly.
      </p>
      <div className="flex gap-4">
        <Button size={"lg"}>Lets talk</Button>
        <Button size={"lg"} variant={"secondary"}>Explore my work</Button>
      </div>
    </section>
  );
};

export default HeroSection;
