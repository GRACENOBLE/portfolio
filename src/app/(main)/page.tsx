import HeroSection from "@/components/home/hero-section";
import ProjectShowcaseSection from "@/components/home/project-showcase-section";
import SkillSetSection from "@/components/home/skill-set-section";
import WhoIAmSection from "@/components/home/who-i-am-section";

const page = () => {
  return (
    <>
      <HeroSection />
      <WhoIAmSection />
      <SkillSetSection />
      <ProjectShowcaseSection />
    </>
  );
};

export default page;
