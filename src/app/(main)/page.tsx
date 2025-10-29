import AboutMe from "@/components/home/about-me-section";
import HeroSection from "@/components/home/hero-section";
import ProjectShowcaseSection from "@/components/home/project-showcase-section";
import ServicesSection from "@/components/home/services-section";
import SkillSetSection from "@/components/home/skill-set-section";
import { GetHomePageData } from "@/lib/queries/get-homepage-data";
import { sanityFetch } from "@/sanity/lib/live";

export default async function page() {
  let homePageData = null;
  let error = null;

  try {

    homePageData = await sanityFetch({ query: GetHomePageData }).then(
      (res) => res.data
    );

  } catch (err) {
    error = err;
    console.error("Error fetching homepage data:", err);
  }

  return (
    <div className="scroll-smooth">
      <HeroSection heroData={homePageData.heroSection} />
      <AboutMe aboutMeData={homePageData.aboutMeSection} />
      <SkillSetSection skillSetData={homePageData.skills} />
      <ServicesSection services={homePageData.services} />
      <ProjectShowcaseSection
        projectShowcaseData={homePageData.featuredProjects}
      />
    </div>
  );
}