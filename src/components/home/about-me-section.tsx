"use client";
import Container from "../common/container";
import H2 from "../common/heading-two";
import DotGlobe from "../dot-globe";

const AboutMe = ({ aboutMeData }: { aboutMeData: any }) => {
  return (
    <section className="snap-start py-20 md:py-28" id="about-me">
      <Container className="h-full">
        <div className="flex justify-between items-center h-full ">
          <div className=" flex flex-col gap-6 w-full">
            <div className=" w-fit mx-auto">
              <H2 className="">{aboutMeData.title}</H2>
              <div className="flex flex-col gap-6 font-medium text-white/70 max-w-sm">
                {aboutMeData.description.map((paragraph: string) => (
                  <p>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden lg:block w-full aspect-square max-w-1/2 hover:cursor-grab active:cursor-grabbing">
            <DotGlobe />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutMe;
