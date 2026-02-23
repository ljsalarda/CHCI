import { StickyNavbar } from "@/components/navbar";
import { SmartDescription } from "./description";
import { SmartWorkflow } from "./worklow";
import { SmartFeatures } from "./features";
import { SmartDirectory } from "./directory";

export function SmartPage() {
  return (
    <section id="smart" className="relative bg-linear-to-b  from-white via-blue-50/40 to-white">
      <StickyNavbar />

      <div className="relative flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat px-4 text-center" style={{ backgroundImage: "url('/CCIS.jpg')" }}>
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(58,124,195,0.2),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(10,61,145,0.2),transparent_45%)]" />
        <div className="max-w-4xl ">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-white/90">
            WE INTERACT IN THE MODERN WORLD
          </p>
          <h1 className="text-3xl text-white font-bold md:text-5xl">
            Records Management System
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-white/85 md:text-lg">
            Digital archiving and indexing of documents for the DSWD.
          </p>
        </div>
      </div>

      <div className="container mx-auto space-y-12 px-4 py-12 md:py-16">
        <section>
          <h2 className="mb-6 text-2xl font-semibold text-foreground">General Description</h2>
          <SmartDescription />
        </section>

        <section>
          <h2 className="mb-6 text-2xl font-semibold text-foreground">How It Works</h2>
          <SmartWorkflow />
        </section>

        <section>
          <h2 className="mb-6 text-2xl font-semibold text-foreground">System Features</h2>
          <SmartFeatures />
        </section>

        <section>
          <h2 className="mb-6 text-2xl font-semibold text-foreground">System Functional Directory</h2>
          <SmartDirectory />
        </section>
      </div>
    </section>
  );
}

export default SmartPage;
