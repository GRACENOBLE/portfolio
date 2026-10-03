import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Container from "../common/container";
import H2 from "../common/heading-two";
import H3 from "../common/heading-three";
import { alsoLeading, monarc, MONARC_URL } from "@/data/profile";

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <span className="text-xs uppercase tracking-[0.2em] text-white/50">
    {children}
  </span>
);

type Project = {
  name: string;
  image: string;
  sector: string;
  description: string;
};

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="group bg-muted rounded-2xl p-2 flex flex-col">
    <div className="relative aspect-[16/10] rounded-xl overflow-hidden">
      <Image
        src={project.image}
        alt=""
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        className="object-cover group-hover:scale-[1.03] transition-transform ease-in-out duration-500"
      />
    </div>
    <div className="px-6 pt-6 pb-6 flex flex-col gap-3">
      <Eyebrow>{project.sector}</Eyebrow>
      <h4 className="sr-only">{project.name}</h4>
      <p className="text-sm text-white/60 leading-relaxed">
        {project.description}
      </p>
    </div>
  </div>
);

const BuildingSection = () => {
  return (
    <section id="building" className="pb-28 md:pb-40">
      <Container size="sm">
        <H2 className="text-center pb-12">What I&apos;m building</H2>
        {/* <p className="text-center text-white/60 max-w-xl mx-auto pb-12">
          Monarc is where most of my energy goes: a company that builds
          specialised systems for the industries where friction costs the
          most.
        </p> */}

        <div className="border border-white/20 rounded-[24px] p-2 flex flex-col gap-2">
          <div className="bg-muted rounded-2xl px-8 py-10 md:px-12 md:py-14 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div className="flex flex-col gap-4 max-w-lg">
              <Eyebrow>{monarc.role}</Eyebrow>
              <H3 className="pb-0 text-3xl md:text-4xl">{monarc.name}</H3>
              <p className="font-title text-lg text-white/80">
                {monarc.tagline}
              </p>
            </div>
            <a
              href={MONARC_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 group w-fit shrink-0"
            >
              <span>Visit Monarc</span>
              <ArrowUpRight
                size={20}
                strokeWidth={1.5}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform ease-in-out duration-300"
              />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {monarc.ventures.map((venture) => (
              <ProjectCard key={venture.name} project={venture} />
            ))}
            <div className="bg-muted rounded-2xl p-8 flex flex-col gap-3">
              <Eyebrow>Monarc Lab</Eyebrow>
              <h4 className="font-title text-xl font-semibold">Research</h4>
              <ul className="flex flex-col gap-3 text-sm text-white/60">
                {monarc.lab.research.map((item) => (
                  <li key={item.name} className="flex items-center gap-3">
                    <div className="relative size-10 shrink-0 rounded-lg overflow-hidden">
                      <Image
                        src={item.image}
                        alt=""
                        fill
                        sizes="40px"
                        className="object-cover"
                      />
                    </div>
                    <span className="flex-1">{item.name}</span>
                    <span className="text-white/40 shrink-0">{item.area}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-muted rounded-2xl px-8 py-10 md:px-12 flex flex-col gap-4">
            <Eyebrow>From the lab</Eyebrow>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
              {monarc.lab.papers.map((paper) => (
                <li key={paper.title} className="flex items-center gap-4">
                  <div className="relative size-16 shrink-0 rounded-xl overflow-hidden">
                    <Image
                      src={paper.image}
                      alt=""
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>
                  <span className="font-title text-white/80">
                    {paper.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 border border-white/20 rounded-[24px] p-2 flex flex-col gap-2">
          <div className="bg-muted rounded-2xl px-8 py-10 md:px-12 flex flex-col gap-4">
            <Eyebrow>{alsoLeading.role}</Eyebrow>
            <H3 className="pb-0">{alsoLeading.name}</H3>
            <p className="text-white/60 max-w-2xl">{alsoLeading.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {alsoLeading.projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BuildingSection;
