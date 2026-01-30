
import { StickyNavbar } from "./components/navbar";
import { HeroSection } from "./pages/home";

export default function App() {
  return (
    <div>
      <StickyNavbar />
      <main>
        <HeroSection />  
      </main>
    </div>
  );
}
