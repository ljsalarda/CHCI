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
        style={{ backgroundImage: "url('/famriabg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 max-w-3xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-white/90">
            Mining Beyond Reality
          </p>
          <h2 className="text-3xl font-bold text-white md:text-5xl">
            MARVEL Technologies 
          </h2>
          <p className="mx-auto mt-4 mb-4 text-base leading-relaxed text-white/85 md:text-lg">
            Industry 4.0 Learning Factory for Mining Engineering and Geology using Augmented Reality and Virtual Reality Technologies
          </p>
          <span className="text-white">2nd Flr. Hiraya Building, Caraga State University, Ampayon, Butuan City, Philippines</span>
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
