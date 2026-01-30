
import { StickyNavbar } from "./components/navbar";
import { HeroSection } from "./pages/home";
import { AboutSection } from "./pages/about";
import { VisionMissionSection } from "./pages/missionandvision";
import { ResearchAreasSection } from "./pages/research-areas";
import { ProjectsSection } from "./pages/project-and-partners";


export default function App() {
  return (
    <div>
      <StickyNavbar />
      <main>
        <HeroSection />  
        <AboutSection />
        <VisionMissionSection />
        <ResearchAreasSection />
        <ProjectsSection />
        <InfoSection />
      </main>
    </div>
  );
}
