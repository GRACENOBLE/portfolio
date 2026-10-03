import AboutMe from "@/components/home/about-me-section";
import BuildingSection from "@/components/home/building-section";
import HeroSection from "@/components/home/hero-section";
import JourneySection from "@/components/home/journey-section";

export default function page() {
  return (
    <div>
      <HeroSection />
      <AboutMe />
      <BuildingSection />
      <JourneySection />
    </div>
  );
}
