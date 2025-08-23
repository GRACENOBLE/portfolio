import Image from "next/image";
import Container from "../common/container";
import DotGlobe from "../dot-globe";

const WhoIAmSection = () => {
  return (
    <section className="py-20 bg-white/30">
      <Container>
        <div className="flex justify-between items-center ">
          <div className=" flex flex-col gap-6 w-full">
            <div className=" w-fit mx-auto">
              <h2 className="text-5xl pb-6 font-semibold font-title">
                Who I am
              </h2>
              <div className="flex flex-col gap-6 font-medium text-noble-dark/70 max-w-md">
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
          <div className="h-full w-full aspect-square">
            <DotGlobe />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhoIAmSection;
