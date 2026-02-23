import { StickyNavbar } from "@/components/navbar";
import { GeoagriAbout } from "./about";
import { GeoagriObjectives } from "./objectives";
import { GeoagriGoal } from "./goal";

export function GeoagrPage() {
  return (
    <section id="geoagr" className="relative bg-linear-to-b from-white via-blue-50/40 to-white">
      <StickyNavbar />

      <div className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-4 text-center">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{ backgroundImage: "url('/geoagr.png')" }}
        />
        <div className="absolute inset-0 -z-10 bg-white/75" />
        <div className="max-w-4xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">
            We Interact in the Modern World
          </p>
          <h1 className="text-3xl font-bold text-foreground md:text-5xl">GEOAGR</h1>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Geographic Information System for Agricultural and Fisheries
            Machinery and Infrastructure.
          </p>
        </div>
      </div>

      <div className="container mx-auto space-y-12 px-4 py-12 md:py-16">
        <section>
          <h2 className="mb-6 text-2xl font-semibold text-foreground">About GEOAGR</h2>
          <GeoagriAbout />
        </section>

        <section>
          <h2 className="mb-6 text-2xl font-semibold text-foreground">Objectives & Services</h2>
          <GeoagriObjectives />
        </section>

        <section>
          <h2 className="mb-6 text-2xl font-semibold text-foreground">Statement of Goal</h2>
          <GeoagriGoal />
        </section>
      </div>
    </section>
  );
}

export default GeoagrPage;
