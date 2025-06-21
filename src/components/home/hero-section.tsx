import Container from "../common/container";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <section className="pt-32">
      <Container className="py-36 text-center text-white flex flex-col items-center">
        <h1 className=" text-7xl font-semibold">I BRING SOFTWARE TO LIFE</h1>
        <p className="py-10 max-w-3xl text-xl text-muted/60">
          I'm a software developer who turns ideas into <span className="text-white">scalable, user-focused
          applications.</span> From backend architecture to pixel-perfect interfaces.
        </p>
        <div className="flex gap-3">
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
      </Container>
    </section>
  );
};

export default HeroSection;
