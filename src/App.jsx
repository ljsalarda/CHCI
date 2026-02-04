import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'


import { StickyNavbar } from "./components/navbar";
import { Home } from "./pages/home";
import { AboutSection } from "./pages/about";
import { VisionMissionSection } from "./pages/missionandvision";
import { ResearchAreasSection } from "./pages/research-areas";
import { PartnersSection } from "./pages/partners";
import { ProjectsSection } from "./pages/projects";
import { InfoSection } from "./pages/info-section";
import { Footer } from "./components/footer";
import { PersonnelSection } from "./pages/personnel";

export default function App() {
  return (
    <div>
      
      <main>
        <StickyNavbar />
        <Home />  
        <AboutSection />
        <VisionMissionSection />
        <ResearchAreasSection />
        <PartnersSection />
        <ProjectsSection />
        <PersonnelSection />
        <InfoSection />
        <Footer />
      </main>
    </div>
  );
}
