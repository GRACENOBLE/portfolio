export const scrollToSection = (sectionId: string, offset: number = 200) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

// Handle scrolling to hash on page load
export const handleHashOnLoad = (offset: number = 200) => {
  const hash = window.location.hash;
  if (hash) {
    // Small delay to ensure page is fully rendered
    setTimeout(() => {
      const sectionId = hash.substring(1);
      scrollToSection(sectionId, offset);
    }, 500);
  }
};

export const handleAnchorClick = (
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string,
  offset: number = 200
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
      scrollToSection(sectionId, offset);
    }
  }
};

export const handleMobileAnchorClick = (
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string,
  offset: number = 200,
  onClose?: () => void
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
        scrollToSection(sectionId, offset);
      }, 100);
    }
  }
};
