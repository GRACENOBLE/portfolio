import Container from "../common/container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import H2 from "../common/heading-two";

type Skill = {
  title: string;
  skill: string;
  description: string;
  technologies: string[];
};

type SkillSetSectionProps = {
  skillSetData: {
    skills: Skill[];
  };
};

const SkillSetSection = ({ skillSetData }: SkillSetSectionProps) => {
  return (
    <section className="pb-28 md:pb-40 flex items-center" id="skill-set">
      <Container size="sm" className="">
        <H2 className="text-center pb-12"> My technical proficiency</H2>
        <div className="border border-white/20 rounded-[20px] p-2">
          <div className="bg-muted backdrop-blur-lg py-8 md:py-16 px-8 md:px-20 rounded-xl">
            <Accordion type="single" collapsible className="w-full">
              {skillSetData.skills.map(
                ({ title, skill, description, technologies }, idx) => (
                  <AccordionItem className="" key={skill} value={`item-${idx}`}>
                    <AccordionTrigger className="hover:cursor-pointer text-base font-title">
                      {title}
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance text-white/60">
                      <p>{description}</p>
                      <ul className="list-disc list-inside ">
                        {technologies.map((tech) => (
                          <li key={tech}>{tech}</li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                )
              )}
            </Accordion>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SkillSetSection;
