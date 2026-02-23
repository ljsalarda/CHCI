import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";

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
import FamriaPage from "./pages/project-pages/famria/page";
import MarvelPage from "./pages/project-pages/marvel/page";
import GeoagrPage from "./pages/project-pages/geoagr/page";


function App() {
  const pathname = typeof window !== "undefined" ? window.location.pathname : "/";

  if (pathname === "/famria") {
    return <FamriaPage />;
  }
  if (pathname === "/marvel") {
    return <MarvelPage />;
  }
  if (pathname === "/geoagr") {
    return <GeoagrPage />;
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
