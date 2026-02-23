import { FamriaAbout } from "./about";
import { FamriaObjectives } from "./objectives";
import { FamriaFramework } from "./framework";
import { StickyNavbar } from "@/components/navbar";

export function FamriaPage() {
  return (
    <section id="famria" className="relative">
        <StickyNavbar />
      <div
        className="relative flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat px-4 text-center"
        style={{ backgroundImage: "url('/famriabg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 max-w-3xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-white/90">
            We Interact in the Modern World
          </p>
          <h2 className="text-3xl font-bold text-white md:text-5xl">
            Farm to Market Road Impact Assessment (FAMRIA)
          </h2>
          <p className="mx-auto mt-4 text-base leading-relaxed text-white/85 md:text-lg">
            A comprehensive evaluation analyzing the effects and outcomes of
            implementing Farm-to-Market Roads in rural areas.
          </p>
        </div>
      </div>

      <div className="container min-h-screen">
          <div>
            <FamriaAbout />
          </div>

          <div>
            <FamriaObjectives />
          </div>

          <div >
            <FamriaFramework />
          </div>
      </div>
    </section>
  );
}

export default FamriaPage;
