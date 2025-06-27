import Container from "../common/container";
import SkillSetCard from "../skill-set-card";

const SkillSetSection = () => {
  return (
    <section className="py-16">
      <Container>
        <div className="flex items-baseline gap-4 justify-center mb-10">
          <h2 className="text-4xl font-semibold">My skill set</h2>
          <p className="text-xl text-muted/60">
            Everything I use to build software
          </p>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {[
            {
              skill: "Frontend Development",
              description:
                "Expert in HTML5, CSS3, JavaScript (ES6+), TypeScript, React/Angular/Vue – builds responsive, accessible UIs optimized for performance.",
            },
            {
              skill: "Backend Development",
              description:
                "Proficient in Node.js/Express, Python (Django/Flask), or Java (Spring Boot) – crafts APIs and business logic with clean, scalable server architecture.",
            },
            {
              skill: "Database Architecture",
              description:
                "Designs and optimizes relational (PostgreSQL/MySQL) and NoSQL (MongoDB/Redis) schemas; implements caching, indexing, and complex queries.",
            },
            {
              skill: "API & Integration",
              description:
                "Builds RESTful & GraphQL APIs; secures endpoints with JWT/OAuth; integrates third‑party services and WebSocket real‑time feeds.",
            },
            {
              skill: "DevOps & Cloud",
              description:
                "Deploys to AWS/Azure/GCP using Docker, Kubernetes, Terraform; sets up CI/CD pipelines, monitoring, logging, and auto‑scaling.",
            },
            {
              skill: "Security & Performance",
              description:
                "Implements best practices (SSL/TLS, OWASP, input validation, rate‑limiting); conducts profiling, caching, logging for high‑throughput apps.",
            },
            {
              skill: "Testing & Quality Assurance",
              description:
                "Writes unit, integration, end‑to‑end tests using Jest, Mocha, PyTest; enforces linting, code coverage, TDD in agile workflows.",
            },
            {
              skill: "Scalable Architecture",
              description:
                "Designs microservices, event‑driven systems, load‑balanced services with message queues (Kafka/RabbitMQ) and CDN support.",
            },
            {
              skill: "Version Control & Collaboration",
              description:
                "Expert with Git, branching strategies (GitFlow), code reviews, and collaboration in cross‑functional agile teams.",
            },
            {
              skill: "Soft Skills",
              description:
                "Strong problem‑solving, communication, project planning; mentors juniors, writes clear documentation, liaises with stakeholders.",
            },
          ].map(({ skill, description }) => (
            <SkillSetCard key={skill} skill={skill} description={description} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SkillSetSection;
