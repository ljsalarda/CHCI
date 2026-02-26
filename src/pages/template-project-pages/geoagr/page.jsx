import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { StickyNavbar } from "@/components/navbar";
import { GeoagriAbout } from "./about";
import { GeoagriObjectives } from "./objectives";
import { GeoagriGoal } from "./goal";

export function GeoagrPage() {
  const [hero, setHero] = useState(null);

  useEffect(() => {
    const fetchHero = async () => {
      const { data, error } = await supabase
        .from("geoagri_page_content")
        .select("*")
        .eq("page_key", "geoagr")
        .single();

      if (!error) setHero(data);
      else console.error(error);
    };

    fetchHero();
  }, []);

  return (
    <section id="geoagr" className="relative ">
      <StickyNavbar />

      <div
        className="relative flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat px-4 text-center"
        style={{
          backgroundImage: `url('${hero?.hero_background_image_url || "/geoagribg.jpg"}')`,
        }}
      >
        <div
          className="absolute inset-0 bg-black"
          style={{ opacity: hero?.hero_overlay_opacity ?? 0.45 }}
        />

        <div className="relative z-10 max-w-6xl">
          <p className="hero-subtitle mb-5 text-sm font-semibold uppercase text-white/90">
            {hero?.hero_subtitle}
          </p>

          <h2 className="hero-title font-bold text-white md:text-4xl">
            {hero?.hero_title}
          </h2>

          <p className="mx-auto mt-10 text-base leading-relaxed text-white/85 md:text-SM">
            {hero?.hero_address}
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