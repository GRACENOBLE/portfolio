import Container from "../common/container";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-black pt-32">
      <Container className="py-36 text-center text-white flex flex-col items-center">
        <h1 className=" text-7xl font-semibold">I BRING SOFTWARE TO LIFE</h1>
        <p className="py-10 max-w-2xl">
          I'm a software developer who turns ideas into scalable, user-focused
          applications. From backend architecture to pixel-perfect interfaces.
        </p>
        <div className="flex gap-3">
          <Button size={"lg"}>Start a conversation</Button>
          <Button size={"lg"}>I need proof</Button>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
