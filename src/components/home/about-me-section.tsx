import Image from "next/image";
import Container from "../common/container";
import H2 from "../common/heading-two";

const AboutMe = ({ aboutMeData }: { aboutMeData: any }) => {
  return (
    <section className="snap-start py-28 md:py-40" id="about-me">
      <Container size="sm" className="h-full">
        <div className="flex flex-col md:flex-row items-center h-full gap-10 md:gap-20">
          {" "}
          <div className="aspect-square w-full p-2 border border-white/20 rounded-[20px]">
            {/* <World data={kampalaPoint} globeConfig={globeConfig} /> */}
            <Image
              src={"/images/me.jpg"}
              alt={""}
              width={500}
              height={500}
              className="w-full h-full aspect-square rounded-xl object-cover grayscale hover:grayscale-0 transition-all duration-500 bg-muted"
            />
          </div>
          <div className=" flex flex-col gap-6 w-full px-2 md:px-0">
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
