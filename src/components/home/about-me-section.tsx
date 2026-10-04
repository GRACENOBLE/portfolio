import Image from "next/image";
import { about } from "@/data/profile";
import { CornerMarks, Section, Tab } from "../blueprint";

const AboutMe = () => {
  return (
    <Section id="about-me" title={about.title}>
      <div className="flex flex-col md:flex-row md:items-start gap-12 md:gap-20">
        <figure className="w-full md:max-w-sm shrink-0">
          <div className="relative border border-line bg-paper">
            <CornerMarks />
            <Tab>Fig. 01 · Portrait</Tab>
            <div className="p-3">
              <div className="aspect-square overflow-hidden bg-muted">
                <Image
                  src={"/images/me.png"}
                  alt={"Grace Noble"}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover scale-[1.2] origin-[45%_20%] transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* Dimension line under the frame */}
          <figcaption className="relative mt-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-ink/60">
            <span className="h-3 w-px bg-line-strong" />
            <span className="h-px flex-1 bg-line-strong" />
            <span>Grace Noble · Kampala</span>
            <span className="h-px flex-1 bg-line-strong" />
            <span className="h-3 w-px bg-line-strong" />
          </figcaption>
        </figure>
        <div className="flex flex-col gap-6 text-ink/75 max-w-xl px-4 md:px-0">
          {about.paragraphs.map((paragraph, key) => (
            <p key={key}>{paragraph}</p>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default AboutMe;
