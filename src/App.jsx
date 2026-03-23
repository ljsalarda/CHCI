import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import { useEffect } from "react";

import { StickyNavbar } from "./components/navbar";
import { Home } from "./pages/home";
import AboutSection from "./pages/about";
import { ResearchAreasSection } from "./pages/research-areas";
import { PartnersSection } from "./pages/partners";
import { ProjectsSection } from "./pages/projects";
import { Footer } from "./components/footer";
import ServicesSection from "./pages/services";
import AffiliationSection from "./pages/affiliation";
import ContactSection from "./pages/contact";

const PROJECTS_SECTION_ID = "projects";

const getSectionScrollTop = (sectionId) => {
  const target = document.getElementById(sectionId);
  if (!target) return null;

  const nav = document.querySelector("header");
  const navOffset = nav ? nav.getBoundingClientRect().height : 0;
  const targetTop = target.getBoundingClientRect().top + window.scrollY - navOffset;

  if (sectionId !== PROJECTS_SECTION_ID) {
    return targetTop;
  }

  const availableHeight = window.innerHeight - navOffset;
  const sectionHeight = target.getBoundingClientRect().height;
  const overflow = Math.max(sectionHeight - availableHeight, 0);

  return targetTop + overflow;
};

function App() {
  const pathname = typeof window !== "undefined" ? window.location.pathname : "/";

  useEffect(() => {
    if (typeof window === "undefined" || window.location.pathname !== "/") {
      return;
    }

    const params = new URLSearchParams(window.location.search);
    const section = params.get("section");
    if (!section) return;

    const raf = window.requestAnimationFrame(() => {
      const top = getSectionScrollTop(section);
      if (top !== null) {
        window.scrollTo({ top });
      }
      window.history.replaceState({}, "", "/");
    });

    return () => window.cancelAnimationFrame(raf);
  }, [pathname]);

  return (
    <div>
      <main>
        <StickyNavbar />
        <Home />
        <AboutSection />
        <ResearchAreasSection />
        <ServicesSection />
        <AffiliationSection />
        <ProjectsSection />
        <PartnersSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}

export { App };
export default App;
