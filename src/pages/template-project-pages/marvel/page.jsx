import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { StickyNavbar } from "@/components/navbar";
import { MarvelIntro } from "./intro";
import { MarvelProfile } from "./profile";
import { MarvelRationale } from "./methodology";
import { MarvelAR } from "./ar-section";

export function MarvelPage() {
  const [hero, setHero] = useState(null);

  useEffect(() => {
    const fetchHero = async () => {
      const { data, error } = await supabase
        .from("marvel_page_content")
        .select("*")
        .eq("page_key", "marvel")
        .single();

      if (!error) setHero(data);
      else console.error(error);
    };

    fetchHero();
  }, []);

  return (
    <section
      id="marvel"
      className="relative bg-linear-to-b from-white via-blue-50/40 to-white"
    >
      <StickyNavbar />

      <div
        className="relative flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat px-4 text-center"
        style={{
          backgroundImage: `url('${
            hero?.hero_background_image_url || "/marvelbg.jpg"
          }')`,
        }}
      >
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 max-w-3xl">
          <p className="hero-subtitle mb-5 text-sm font-semibold uppercase text-white/90">
            {hero?.hero_subtitle}
          </p>

          <h2 className="hero-title text-3xl mb-15 font-bold text-white md:text-5xl">
            {hero?.hero_title}
          </h2>

          <a
            href={hero?.button_link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-medium text-card-foreground transition-colors hover:bg-secondary"
          >
            {hero?.button_text}
          </a>
        </div>
      </div>

      <div className="container">
        <section>
         <MarvelIntro/>
        </section>

        <section>
       <MarvelProfile/>
        </section>

        <section>
         <MarvelRationale/> 
        </section>

        <section>
          <MarvelAR/>
        </section>
      </div>
    </section>
  );
}

export default MarvelPage;