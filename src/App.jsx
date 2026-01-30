
import { StickyNavbar } from "./components/navbar";
import { HeroSection } from "./pages/home";
import { AboutSection } from "./pages/about";

export default function App() {
  return (
    <div>
      <StickyNavbar />
      <main>
        <HeroSection />  
        <AboutSection />
      </main>
    </div>
  );
}
