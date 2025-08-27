import Container from "../common/container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import H2 from "../common/heading-two";

const skills = [
  {
    skill: "Frontend Development",
    description: "Builds responsive, accessible UIs optimized for performance.",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "TypeScript",
      "React",
      "Angular",
      "Vue",
    ],
  },
  {
    skill: "Backend Development",
    description:
      "Crafts APIs and business logic with clean, scalable server architecture.",
    technologies: [
      "Node.js",
      "Express",
      "Python (Django/Flask)",
      "Java (Spring Boot)",
    ],
  },
  {
    skill: "Database Architecture",
    description:
      "Designs and optimizes schemas; implements caching, indexing, and complex queries.",
    technologies: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },
  {
    skill: "API & Integration",
    description:
      "Builds APIs, secures endpoints, and integrates third-party services and real-time feeds.",
    technologies: ["RESTful API", "GraphQL", "JWT", "OAuth", "WebSocket"],
  },
  {
    skill: "DevOps & Cloud",
    description:
      "Sets up deployments, CI/CD pipelines, monitoring, logging, and auto-scaling.",
    technologies: [
      "AWS",
      "Azure",
      "GCP",
      "Docker",
      "Kubernetes",
      "Terraform",
      "CI/CD",
    ],
  },
];

const SkillSetSection = () => {
  return (
    <section className=" pb-20 md:pb-28 flex items-center" id="skill-set">
      <Container size="sm" className="">
        <div className="bg-muted backdrop-blur-lg py-12 px-8 md:px-20 rounded-2xl">
          <H2 className="text-center"> My technical proficiency</H2>

          <Accordion type="single" collapsible className="w-full">
            {skills.map(({ skill, description, technologies }, idx) => (
              <AccordionItem className="" key={skill} value={`item-${idx}`}>
                <AccordionTrigger className="hover:cursor-pointer">
                  {skill}
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance text-white/60 px-4">
                  <p>{description}</p>
                  <ul className="list-disc list-inside ">
                    {technologies.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
};

export default SkillSetSection;
