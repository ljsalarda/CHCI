import { StickyNavbar } from "@/components/navbar";
import { GeoagriAbout } from "./about";
import { GeoagriObjectives } from "./objectives";
import { GeoagriGoal } from "./goal";

export function GeoagrPage() {
  return (
    <section id="geoagr" className="relative ">
      <StickyNavbar />

      <div  className="relative flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat px-4 text-center"
        style={{ backgroundImage: "url('/geoagr.png')" }}>
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 max-w-3xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-white/90">
            We Interact in the Modern World
          </p>
          <h2 className="text-3xl font-bold text-white md:text-5xl">
            GEOAGRI
          </h2>
          <p className="mx-auto mt-4 text-base leading-relaxed text-white/85 md:text-lg">
            Geographic Information System for Agricultural and Fisheries Machinery and Infrastructure
          </p>
        </div>
      </div>

     
          <GeoagriAbout />
          <GeoagriObjectives />
          <GeoagriGoal />
     
    </section>
  );
}

export default GeoagrPage;
