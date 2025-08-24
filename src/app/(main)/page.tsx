import AboutMe from "@/components/home/about-me-section";
import HeroSection from "@/components/home/hero-section";
import ProjectShowcaseSection from "@/components/home/project-showcase-section";
import SkillSetSection from "@/components/home/skill-set-section";

export default function ScrollSnapSections() {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <SkillSetSection />
      <ProjectShowcaseSection />
    </>
  );
}

// const page = () => {
//   return (
//     <main className="h-screen overflow-y-scroll scroll-auto snap-always">
//
//       <AboutMe />
//       <SkillSetSection />
//       <ProjectShowcaseSection />
//       {/* <LoadingSection /> */}
//     </main>
//   );
// };

// export default page;
