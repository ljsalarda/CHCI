
import { StickyNavbar } from "./components/navbar";
import { HeroSection } from "./pages/home";
import { AboutSection } from "./pages/about";
import { VisionMissionSection } from "./pages/missionandvision";

export default function App() {
  return (
    <div>
      <StickyNavbar />
      <main>
        <HeroSection />  
        <AboutSection />
        <VisionMissionSection />
      </main>
    </div>
  );
}
