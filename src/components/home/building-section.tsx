import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { alsoLeading, monarc, MONARC_URL } from "@/data/profile";
import { CornerMarks, Section, Tab } from "../blueprint";

type Project = {
  name: string;
  image: string;
  sector: string;
  description: string;
  url?: string;
};

// Cells draw their own right and bottom rules and the grid draws the left
// one, so neighbouring cells share a single hairline
const cellGrid =
  "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-l border-line";
const cell = "border-r border-b border-line bg-paper flex flex-col";

const ProjectCard = ({ project }: { project: Project }) => {
  const content = (
    <>
      <Tab>{project.sector}</Tab>
      {project.url && (
        <ArrowUpRight
          aria-hidden="true"
          size={16}
          strokeWidth={1.5}
          className="absolute top-2.5 right-3 text-ink/50 group-hover:text-ink group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
        />
      )}
      <div className="p-3">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={project.image}
            alt=""
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover group-hover:scale-[1.03] transition-transform ease-in-out duration-500"
          />
        </div>
      </div>
      <div className="px-5 pb-6 pt-2">
        <h4 className="sr-only">{project.name}</h4>
        <p className="text-sm text-ink/65 leading-relaxed">
          {project.description}
        </p>
        {project.url && <span className="sr-only">(opens in a new tab)</span>}
      </div>
    </>
  );

  if (!project.url) {
    return <div className={`group relative ${cell}`}>{content}</div>;
  }

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative ${cell} hover:bg-ink/[0.03] transition-colors`}
    >
      {content}
    </a>
  );
};

const VisitLink = ({ href, label }: { href: string; label: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 group w-fit shrink-0 border border-ink bg-paper px-4 h-11 text-xs uppercase tracking-[0.18em] hover:bg-ink hover:text-paper transition-colors"
  >
    <span>{label}</span>
    <ArrowUpRight
      size={16}
      strokeWidth={1.5}
      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform ease-in-out duration-300"
    />
  </a>
);

// Hatched header panel that opens each organisation's block
const Masthead = ({
  role,
  children,
}: {
  role: string;
  children: React.ReactNode;
}) => (
  <div className="border border-line bg-paper bp-hatch">
    <Tab className="bg-paper">{role}</Tab>
    <div className="px-6 py-14 md:px-12 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
      {children}
    </div>
  </div>
);

const BuildingSection = () => {
  return (
    <Section id="building" title={<>What I&apos;m building</>}>
      <div className="relative">
        <CornerMarks />
        <Masthead role={monarc.role}>
          <div className="flex flex-col gap-4 max-w-lg">
            <h3 className="font-title text-3xl md:text-4xl font-semibold">
              {monarc.name}
            </h3>
            <p className="font-title text-lg text-ink/75">{monarc.tagline}</p>
          </div>
          <VisitLink href={MONARC_URL} label="Visit Monarc" />
        </Masthead>

        <div className={cellGrid}>
          {monarc.ventures.map((venture) => (
            <ProjectCard key={venture.name} project={venture} />
          ))}
          <div className={cell}>
            <Tab>Monarc Lab</Tab>
            <div className="px-5 py-6 flex flex-col gap-4">
              <h4 className="font-title text-xl font-semibold">Research</h4>
              <ul className="flex flex-col text-sm text-ink/70 border-t border-line">
                {monarc.lab.research.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center gap-3 border-b border-line py-3"
                  >
                    <div className="relative size-10 shrink-0 overflow-hidden">
                      <Image
                        src={item.image}
                        alt=""
                        fill
                        sizes="40px"
                        className="object-cover"
                      />
                    </div>
                    <span className="flex-1">{item.name}</span>
                    <span className="text-[10px] uppercase tracking-[0.15em] text-ink/50 shrink-0">
                      {item.area}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-x border-b border-line bg-paper">
          <Tab>From the lab</Tab>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 px-6 py-8 md:px-12">
            {monarc.lab.papers.map((paper) => (
              <li key={paper.title} className="flex items-center gap-4">
                <div className="relative size-16 shrink-0 overflow-hidden border border-line">
                  <Image
                    src={paper.image}
                    alt=""
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
                <span className="font-title text-ink/85">{paper.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative mt-16">
        <CornerMarks />
        <Masthead role={alsoLeading.role}>
          <div className="flex flex-col gap-4">
            <h3 className="font-title text-3xl font-semibold">
              {alsoLeading.name}
            </h3>
            <p className="text-ink/70 max-w-2xl bg-paper/70">
              {alsoLeading.description}
            </p>
          </div>
          <VisitLink href={alsoLeading.url} label="Visit Amplified Access" />
        </Masthead>
        <div className={cellGrid}>
          {alsoLeading.projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default BuildingSection;
