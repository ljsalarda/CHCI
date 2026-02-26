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
import FamriaPage from "./pages/template-project-pages/famria/page";
import MarvelPage from "./pages/template-project-pages/marvel/page";
import GeoagrPage from "./pages/template-project-pages/geoagr/page";
import SmartPage from "./pages/template-project-pages/smart/page";

function App() {
  const pathname = typeof window !== "undefined" ? window.location.pathname : "/";
  const normalizedPath = pathname !== "/" ? pathname.replace(/\/+$/, "") : pathname;
  const routePath = normalizedPath.toLowerCase();

  useEffect(() => {
    if (typeof window === "undefined" || window.location.pathname !== "/") {
      return;
    }

    const params = new URLSearchParams(window.location.search);
    const section = params.get("section");
    if (!section) return;

    const raf = window.requestAnimationFrame(() => {
      const target = document.getElementById(section);
      if (target) {
        const nav = document.querySelector("header");
        const navOffset = nav ? nav.getBoundingClientRect().height : 0;
        const top = target.getBoundingClientRect().top + window.scrollY - navOffset;
        window.scrollTo({ top });
      }
      window.history.replaceState({}, "", "/");
    });

    return () => window.cancelAnimationFrame(raf);
  }, [pathname]);

  if (routePath === "/famriapage" || routePath === "/famria") {
    return <FamriaPage />;
  }
  if (routePath === "/marvelpage" || routePath === "/marvel") {
    return <MarvelPage />;
  }
  if (routePath === "/geoagrpage" || routePath === "/geoagr" || routePath === "/geoagri") {
    return <GeoagrPage />;
  }
  if (routePath === "/smartpage" || routePath === "/smart") {
    return <SmartPage />;
  }

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
