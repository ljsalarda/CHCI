import { StickyNavbar } from "@/components/navbar";
import { GeoagriAbout } from "./about";
import { GeoagriObjectives } from "./objectives";
import { GeoagriGoal } from "./goal";

export function GeoagrPage() {
  return (
    <section id="geoagr" className="relative ">
      <StickyNavbar />

      <div  className="relative flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat px-4 text-center"
        style={{ backgroundImage: "url('/geoagribg.jpg')" }}>
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 max-w-6xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-white/90">
            WE INTERACT IN THE MODERN WORLD
          </p>
          <h2 className="text-3xl font-bold text-white md:text-5xl">
            Geographic Information System for Agricultural and Fisheries Machinery and Infrastructure (GEOAGRI)
          </h2>
          <p className="mx-auto mt-4 text-base leading-relaxed text-white/85 md:text-lg">
            2nd Flr. Hiraya Building, Caraga State University, Ampayon, Butuan City, Philippines
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
