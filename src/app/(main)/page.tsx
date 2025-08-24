import AboutMe from "@/components/home/about-me-section";
import HeroSection from "@/components/home/hero-section";
import LoadingSection from "@/components/home/loading-section";
import ProjectShowcaseSection from "@/components/home/project-showcase-section";
import SkillSetSection from "@/components/home/skill-set-section";

const page = () => {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <SkillSetSection />
      <LoadingSection />
      {/* <WhoIAmSection />
      <ProjectShowcaseSection /> */}
    </>
  );
};

export default page;
