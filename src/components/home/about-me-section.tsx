import Container from "../common/container";
import H2 from "../common/heading-two";
import DotGlobe from "../dot-globe";

const AboutMe = () => {
  return (
    <section className="h-screen">
      <Container className="h-full">
        <div className="flex justify-between items-center h-full ">
          <div className=" flex flex-col gap-6 w-full">
            <div className=" w-fit mx-auto">
              <H2 className="">About me</H2>
              <div className="flex flex-col gap-6 font-medium text-white/70 max-w-sm">
                <p>
                  I started out 3 years ago and have spent time hoaning my skill
                  set by tackling real-world problems with companies,
                  individuals and businesses of all sizes, Bringing their ideas
                  to life by doing what I do best.
                </p>

                <p>
                  Currently affiliated with Xapisoft, I specialize in backend
                  development, full-stack development, and DevOps practices. I
                  also handle the role of COO where i manage the day to day
                  operations of the company and ensure operational excellence.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full aspect-square max-w-1/2 hover:cursor-grab active:cursor-grabbing">
            <DotGlobe />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutMe;
