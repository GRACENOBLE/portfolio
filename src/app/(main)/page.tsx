import type { Metadata } from "next";
import AboutMe from "@/components/home/about-me-section";
import BuildingSection from "@/components/home/building-section";
import HeroSection from "@/components/home/hero-section";
import JourneySection from "@/components/home/journey-section";
import { JsonLd } from "@/components/json-ld";
import { openGraphDefaults } from "@/lib/metadata";
import { homeGraph } from "@/lib/structured-data";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
    // The same page as Markdown, for AI agents
    types: { "text/markdown": "/index.md" },
  },
  openGraph: {
    ...openGraphDefaults,
    type: "profile",
    firstName: "Grace",
    lastName: "Noble",
  },
};

export default function page() {
  return (
    <div>
      <JsonLd data={homeGraph()} />
      <HeroSection />
      <AboutMe />
      <BuildingSection />
      <JourneySection />
    </div>
  );
}
