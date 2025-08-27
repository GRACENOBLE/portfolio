import AboutMe from "@/components/home/about-me-section";
import ContactMe from "@/components/home/contact-me";
import HeroSection from "@/components/home/hero-section";
import ProjectShowcaseSection from "@/components/home/project-showcase-section";
import ServicesSection from "@/components/home/services-section";
import SkillSetSection from "@/components/home/skill-set-section";

export default function ScrollSnapSections() {
  return (
    <div className="">
      <HeroSection />
      <AboutMe />
      <SkillSetSection />
      <ServicesSection />
      <ProjectShowcaseSection />
      <ContactMe />
    </div>
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
