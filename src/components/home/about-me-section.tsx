import Image from "next/image";
import Container from "../common/container";
import H2 from "../common/heading-two";

const AboutMe = ({ aboutMeData }: { aboutMeData: any }) => {
  return (
    <section className="snap-start py-20 md:py-40" id="about-me">
      <Container size="sm" className="h-full">
        <div className="flex items-center h-full gap-20">
          {" "}
          <div className="aspect-square max-h-96 p-2 border border-white/20 rounded-[20px]">
            {/* <World data={kampalaPoint} globeConfig={globeConfig} /> */}
            <Image
              src={"/images/me.png"}
              alt={""}
              width={500}
              height={500}
              className="w-full h-full rounded-xl object-cover object-top grayscale hover:grayscale-0 transition-all duration-300 bg-muted"
            />
          </div>
          <div className=" flex flex-col gap-6">
            <div className=" w-fit mx-auto">
              <H2 className="">{aboutMeData.title}</H2>
              <div className="flex flex-col gap-6 font-medium text-white/70 max-w-md">
                {aboutMeData.description.map((paragraph: string) => (
                  <p>{paragraph}</p>
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
