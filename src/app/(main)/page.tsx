import AboutMe from "@/components/home/about-me-section";
import ContactMe from "@/components/home/contact-me";
import HeroSection from "@/components/home/hero-section";
import ProjectShowcaseSection from "@/components/home/project-showcase-section";
import ServicesSection from "@/components/home/services-section";
import SkillSetSection from "@/components/home/skill-set-section";
import HashScrollHandler from "@/components/hash-scroll-handler";
import { GetHomePageData } from "@/lib/queries/get-homepage-data";
import { sanityFetch } from "@/sanity/lib/live";

export default async function page() {
  let homePageData = null;
  let error = null;

  try {
    // Use regular client instead of sanityFetch to isolate the issue
    homePageData = await sanityFetch({ query: GetHomePageData }).then(
      (res) => res.data
    );
    // console.log("Successfully fetched homepage data:", homePageData);
  } catch (err) {
    error = err;
    console.error("Error fetching homepage data:", err);
  }

  return (
    <div className="">
      <HashScrollHandler />
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
