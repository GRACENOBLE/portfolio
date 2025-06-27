import Image from "next/image";
import Container from "../common/container";
import DotGlobe from "../dot-globe";

const WhoIAmSection = () => {
  return (
    <section className="py-20">
      <Container>
        <div className="flex items-baseline gap-4 justify-center mb-10">
          <h2 className="text-4xl font-semibold">Who I am</h2>
          <p className="text-xl text-muted/60">
            A little more about Grace Noble
          </p>
        </div>
        <div className="flex justify-between items-center pe-20">
          <div className="max-w-lg flex flex-col gap-8">
            <p>
              I started out 3 years ago and have spent time hoaning my skill set
              by tackling real-world problems with companies, individuals and
              businesses of all sizes, Bringing their ideas to life by doing
              what I do best.
            </p>
            <p>
              Currently affiliated with Xapisoft, I specialize in backend
              development, full-stack development, and DevOps practices. I also
              handle the role of COO where i manage the day to day operations of
              the company and ensure operational excellence.
            </p>
          </div>
          <div className="h-[500px] w-[500px]">
            <DotGlobe />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhoIAmSection;
