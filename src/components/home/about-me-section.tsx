import Image from "next/image";
import Container from "../common/container";
import H2 from "../common/heading-two";
import { about } from "@/data/profile";

const AboutMe = () => {
  return (
    <section className="snap-start py-28 md:py-40" id="about-me">
      <Container size="sm" className="h-full">
        <div className="flex flex-col md:flex-row items-center h-full gap-10 md:gap-20">
          <div className="aspect-square w-full p-2 border border-white/20 rounded-[20px]">
            <div className="w-full h-full aspect-square rounded-xl overflow-hidden bg-muted">
              <Image
                src={"/images/me.png"}
                alt={"Grace Noble"}
                width={500}
                height={500}
                className="w-full h-full object-cover scale-[1.2] origin-[45%_20%] transition-all duration-500"
              />
            </div>
          </div>
          <div className=" flex flex-col gap-6 w-full px-2 md:px-0">
            <div className=" w-fit mx-auto">
              <H2 className="">{about.title}</H2>
              <div className="flex flex-col gap-6 font-medium text-white/70 max-w-md">
                {about.paragraphs.map((paragraph, key) => (
                  <p key={key}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutMe;
