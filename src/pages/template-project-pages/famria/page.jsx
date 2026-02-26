import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { StickyNavbar } from "@/components/navbar";
import { FamriaAbout } from "./about";
import { FamriaObjectives } from "./objectives";
import { FamriaFramework } from "./framework"

export function FamriaPage() {
  const [heroContent, setHeroContent] = useState(null);

  useEffect(() => {
    const fetchHero = async () => {
      const { data, error } = await supabase
        .from("famria_content")
        .select("*")
        .eq("key", "home-hero")
        .single();

      if (!error) setHeroContent(data);
      else console.error(error);
    };

    fetchHero();
  }, []);

  return (
    <section id="famria" className="relative">
      <StickyNavbar />

      <div
        className="relative flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat px-4 text-center"
        style={{
          backgroundImage: `url('${
            heroContent?.background_image_url || "/famriabg.jpg"
          }')`,
        }}
      >
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 max-w-6xl">
          <p className="hero-subtitle mb-5 text-sm font-semibold uppercase text-white/90">
            {heroContent?.subtitle}
          </p>

          <h2 className="hero-title text-3xl font-bold text-white md:text-5xl">
            {heroContent?.title}
          </h2>

          <p className="mx-auto mt-10 text-base leading-relaxed text-white/85 md:text-sm">
            {heroContent?.address}
          </p>
        </div>
      </div>

      <div className="container min-h-screen">
        <section>
       <FamriaAbout />
       </section>
       <section>
        <FamriaObjectives/>
       </section>
       <section>
        <FamriaFramework/>
       </section>
      </div>
    </section>
  );
}

export default FamriaPage;