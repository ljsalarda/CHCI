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
        <div className="relative z-10 max-w-6xl">
          <p className="hero-subtitle mb-5 text-sm font-semibold uppercase text-white/90">
            We Interact in the Modern World
          </p>
          <h2 className="hero-title text-3xl font-bold text-white md:text-5xl">
            Farm to Market Road Impact Assessment (FAMRIA)
          </h2>
          <p className="mx-auto mt-10 text-base leading-relaxed text-white/85 md:text-sm">
            2nd Flr. Hiraya Building, Caraga State University, Ampayon, Butuan City, Philippines
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

        <div>
          <FamriaFramework />
        </div>
      </div>
    </section>
  );
}

export default FamriaPage;
