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
  {
    skill: "Security & Performance",
    description:
      "Implements best practices and conducts profiling, caching, logging for high-throughput apps.",
    technologies: ["SSL/TLS", "OWASP", "Input Validation", "Rate-limiting"],
  },
  {
    skill: "Testing & Quality Assurance",
    description:
      "Writes tests and enforces linting, code coverage, TDD in agile workflows.",
    technologies: [
      "Jest",
      "Mocha",
      "PyTest",
      "Linting",
      "Code Coverage",
      "TDD",
    ],
  },
  {
    skill: "Scalable Architecture",
    description:
      "Designs microservices, event-driven systems, load-balanced services, and CDN support.",
    technologies: ["Microservices", "Event-driven", "Kafka", "RabbitMQ", "CDN"],
  },
  {
    skill: "Version Control & Collaboration",
    description:
      "Uses Git, branching strategies, code reviews, and collaborates in agile teams.",
    technologies: ["Git", "GitFlow", "Code Reviews", "Agile"],
  },
  {
    skill: "Soft Skills",
    description:
      "Mentors juniors, writes documentation, and liaises with stakeholders.",
    technologies: [
      "Problem-solving",
      "Communication",
      "Project Planning",
      "Mentoring",
      "Documentation",
      "Stakeholder Liaison",
    ],
  },
];

const SkillSetSection = () => {
  return (
    <section className="py-16">
      <Container size="sm">
        <H2 className="text-center"> My skill set</H2>

        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-0"
        >
          {skills.map(({ skill, description, technologies }, idx) => (
            <AccordionItem className="" key={skill} value={`item-${idx}`}>
              <AccordionTrigger>{skill}</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>{description}</p>
                <ul className="list-disc list-inside ml-4">
                  {technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  );
};

export default SkillSetSection;
