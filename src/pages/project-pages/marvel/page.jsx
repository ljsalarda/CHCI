import { StickyNavbar } from "@/components/navbar";
import { MarvelIntro } from "./intro";
import { MarvelProfile } from "./profile";
import { MarvelRationale } from "./methodology";
import { MarvelAR } from "./ar-section";

export function MarvelPage() {
  return (
    <section id="marvel" className="relative bg-linear-to-b from-white via-blue-50/40 to-white">
      <StickyNavbar />

      <div
        className="relative flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat px-4 text-center"
        style={{ backgroundImage: "url('/marvelbg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 max-w-3xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-widest text-white/90">
            Mining Beyond Reality
          </p>
          <h2 className="text-3xl mb-15 font-bold text-white md:text-5xl">
            MARVEL Technologies 
          </h2>
          
        <a
            href="https://drive.google.com/drive/folders/1jp9FA4NitzAyFPpBm_VgIm_tw_FAdedq"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-medium text-card-foreground transition-colors hover:bg-secondary"
          >
            Download Application
          </a>
        </div>
      </div>

      <div className="container">
        <section>
          <MarvelIntro />
        </section>

        <section>
          <MarvelProfile />
        </section>

        <section>
          <MarvelRationale />
        </section>

        <section>
          <MarvelAR />
        </section>
      </div>
    </section>
  );
}

export default MarvelPage;
