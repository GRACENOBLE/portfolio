import type Lenis from "lenis";

// Pass the Lenis instance (from useLenis) so the jump uses its easing instead
// of fighting it with a native smooth scroll.
export const scrollToSection = (
  sectionId: string,
  offset: number = 200,
  lenis?: Lenis
) => {
  const element = document.getElementById(sectionId);
  if (element) {
    if (lenis) {
      lenis.scrollTo(element, { offset: -offset });
      return;
    }
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

export const handleAnchorClick = (
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string,
  offset: number = 200,
  lenis?: Lenis
) => {
  // Check if it's an anchor link (starts with #)
  if (href.startsWith("#") || href.includes("#")) {
    e.preventDefault();

    // Check if we're on the home page
    const isHomePage =
      window.location.pathname === "/" || window.location.pathname === "";

    if (!isHomePage) {
      // If we're not on home page, navigate to home page with the hash
      // Extract the hash part and ensure proper URL format
      const hash = href.startsWith("#") ? href : "#" + href.split("#")[1];
      window.location.href = "/" + hash;
      return;
    }

    // Extract the section ID from the href
    const sectionId = href.includes("#")
      ? href.split("#")[1]
      : href.substring(1);

    if (sectionId) {
      scrollToSection(sectionId, offset, lenis);
    }
  }
};

export const handleMobileAnchorClick = (
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string,
  offset: number = 200,
  onClose?: () => void,
  lenis?: Lenis
) => {
  // Check if it's an anchor link (starts with #)
  if (href.startsWith("#") || href.includes("#")) {
    e.preventDefault();

    // Close the mobile menu first if callback provided
    if (onClose) {
      onClose();
    }

    // Check if we're on the home page
    const isHomePage =
      window.location.pathname === "/" || window.location.pathname === "";

    if (!isHomePage) {
      // If we're not on home page, navigate to home page with the hash
      window.location.href = "/" + href;
      return;
    }

    // Extract the section ID from the href
    const sectionId = href.includes("#")
      ? href.split("#")[1]
      : href.substring(1);

    if (sectionId) {
      // Add a small delay to allow sheet to close before scrolling
      setTimeout(() => {
        scrollToSection(sectionId, offset, lenis);
      }, 100);
    }
  }
};
