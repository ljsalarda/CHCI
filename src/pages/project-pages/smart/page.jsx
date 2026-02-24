import { StickyNavbar } from "@/components/navbar";
import { SmartDescription } from "./description";
import { SmartWorkflow } from "./worklow";
import { SmartFeatures } from "./features";
import { SmartDirectory } from "./directory";

export function SmartPage() {
  return (
    <section id="smart" className="relative bg-linear-to-b  from-white via-blue-50/40 to-white">
      <StickyNavbar />

      <div
        className="relative flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat px-4 text-center"
        style={{ backgroundImage: "url('/CCIS.jpg')" }}
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(58,124,195,0.2),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(10,61,145,0.2),transparent_45%)]" />
        <div className="max-w-4xl ">
          <p className="hero-subtitle mb-5 text-sm font-semibold uppercase text-white/90">
            WE INTERACT IN THE MODERN WORLD
          </p>
          <h1 className="hero-title text-3xl text-white font-bold md:text-5xl">
            Smart - Records Management System for DSWD
          </h1>
          <p className="mx-auto mt-10 max-w-3xl text-base leading-relaxed text-white/85 md:text-sm">
            2nd Flr. Hiraya Building, Caraga State University, Ampayon, Butuan City, Philippines
          </p>
        </div>
      </div>

      <div className="container mx-auto space-y-12 px-4 py-12 md:py-16">
        <section>
          <SmartDescription />
        </section>

        <section>
          <SmartWorkflow />
        </section>

        <section>
          <SmartFeatures />
        </section>

        <section>
          <SmartDirectory />
        </section>
      </div>
    </section>
  );
}

export default SmartPage;
