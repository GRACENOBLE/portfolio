// Content for the homepage. Edit here to update the site.

export const MONARC_URL = "https://monarcengineering.com";
export const MONARC_EMAIL = "info@monarcengineering.com";

export const about = {
  title: "About me",
  paragraphs: [
    "I'm a technical founder based in Kampala, Uganda.",
    "I founded Monarc Engineering to build software that solves the physical-world inefficiencies holding economies back. We find the problems causing the most friction and build the specialised systems that solve them at scale.",
    "Alongside Monarc, I'm Engineering Manager at Amplified Access, where we research and develop solutions in Natural Language Processing and its applications in community agency.",
  ],
};

export const monarc = {
  name: "Monarc Engineering",
  role: "Founder & CEO",
  tagline: "Architecting the next era",
  description:
    "We start with the smallest variable that breaks at scale, use data to shape the system and move deliberately, only where the impact is real.",
  ventures: [
    {
      name: "Blaze",
      image: "/images/monarc/ventures/blaze.webp",
      sector: "Logistics",
      description:
        "Fleet management and route optimisation for delivery operations: automated dispatch, multi-stop routing, live driver tracking and proof of delivery.",
    },
    {
      name: "Gigz",
      image: "/images/monarc/ventures/gigz.webp",
      sector: "Human Resource",
      description:
        "HR management and recruitment in one platform. Source, hire and onboard staff, then manage records, leave and performance from a single system.",
    },
    {
      name: "Zones",
      image: "/images/monarc/ventures/zones.webp",
      sector: "Real Estate",
      description:
        "Blockchain-backed land and property management with precision GIS mapping. Verifiable ownership, transacted without intermediaries.",
    },
    {
      name: "Beta",
      image: "/images/monarc/ventures/beta.webp",
      sector: "Fintech",
      description:
        "A peer-to-peer prediction market where users create and trade positions on any real-world outcome.",
    },
    {
      name: "Occurances",
      image: "/images/monarc/ventures/occurances.webp",
      sector: "Media",
      description:
        "Clean, distraction-free content across the topics that matter, delivered straight to your devices.",
    },
  ],
  lab: {
    papers: [
      {
        title: "How We Approach Building With AI",
        image: "/images/monarc/lab/alan-turing.webp",
      },
      {
        title: "Unicorn vs Elephant: Two Models for Building Enduring Companies",
        image: "/images/monarc/lab/elephant.webp",
      },
      {
        title: "The Economic Cost of Legacy Infrastructure",
        image: "/images/monarc/lab/legacy.webp",
      },
      {
        title: "How to Choose the Right Tech Stack",
        image: "/images/monarc/lab/stack.webp",
      },
    ],
    research: [
      {
        name: "Autonomous Driving System",
        area: "IoT",
        image: "/images/monarc/lab/self-driving.webp",
      },
      {
        name: "Semiconductor & AI Compute Mega-Factory",
        area: "AI",
        image: "/images/monarc/lab/datacenters.webp",
      },
      {
        name: "Immutable Document Registries",
        area: "Blockchain",
        image: "/images/monarc/lab/blockchain.webp",
      },
      {
        name: "Autonomous Delivery System",
        area: "Project",
        image: "/images/monarc/lab/autodelivery.webp",
      },
    ],
  },
};

export const alsoLeading = {
  name: "Amplified Access",
  role: "Engineering Manager",
  description:
    "Leading the engineering team on AI research into Natural Language Processing and how it can give communities more agency.",
  projects: [
    {
      name: "Watchtower",
      image: "/images/amplified-access/watchtower.webp",
      sector: "Civic Tech",
      description:
        "Incident monitoring and reporting for civil society organisations: structured reports, real-time alerts, geolocated incident maps and AI-assisted analysis, in 10 languages.",
    },
    {
      name: "CommonMind",
      image: "/images/amplified-access/common-mind.webp",
      sector: "AI Research",
      description:
        "Open AI infrastructure for civic speech. Models, corpora, benchmarks and tools for understanding public discourse in languages beyond the mainstream.",
    },
    {
      name: "The Action Challenge",
      image: "/images/amplified-access/action-challenge.webp",
      sector: "Community",
      description:
        "Turns ideas into practical community action. Spot something that could be better, plan a fix, act on it and share the story to inspire others.",
    },
  ],
};

export type JourneyItem = {
  role: string;
  org: string;
  period: string;
  note?: string;
};

export const journey: JourneyItem[] = [
  {
    role: "Founder & CEO",
    org: "Monarc Engineering",
    period: "May 2026 – Present",
    note: "Leadership and business development",
  },
  {
    role: "Back End Developer",
    org: "A2SV | Africa to Silicon Valley",
    period: "Jan 2026 – Jun 2026",
    note: "Contract, remote",
  },
  {
    role: "Engineering Manager",
    org: "Amplified Access",
    period: "Oct 2025 – Present",
    note: "AI research into NLP and its applications in community agency",
  },
  {
    role: "Independent Consultant",
    org: "Amplified Access",
    period: "May 2025 – Oct 2025",
  },
  {
    role: "Chief Technology Officer",
    org: "Xapisoft",
    period: "Nov 2024 – Oct 2025",
  },
  {
    role: "Full Stack Engineer",
    org: "Xapisoft",
    period: "May 2024 – Nov 2024",
  },
  {
    role: "Software Engineer",
    org: "KisoFresh",
    period: "Jan 2024 – May 2024",
  },
];
