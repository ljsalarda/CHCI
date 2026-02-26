import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export function GeoagriGoal() {
  const [goal, setGoal] = useState(null);

  useEffect(() => {
    const fetchGoal = async () => {
      const { data, error } = await supabase
        .from("geoagri_goal_section")
        .select("*")
        .limit(1)
        .single();

      if (!error) setGoal(data);
      else console.error(error);
    };

    fetchGoal();
  }, []);

  return (
    <section className="mx-auto max-w-5xl space-y-3 py-16 md:py-28">
      <p className="text-center text-sm font-semibold uppercase tracking-[0.25em] text-primary">
        {goal?.section_label}
      </p>

      <h2 className="text-center text-2xl font-bold md:text-3xl">
        {goal?.title}
      </h2>

      <p className="mb-10 max-w-7xl text-base leading-relaxed text-muted-foreground">
        {goal?.description}
      </p>

      <div className="overflow-hidden rounded-xl border border-border bg-card">
        <img
          src={
            goal?.image_url ||
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/geoagri-IndABmbsvSFhHXC9riTWthUgsxiSaI.png"
          }
          alt="GEOAGRI platform features"
          className="w-full"
        />
      </div>

      <div className="mt-3 flex justify-center">
        <a
          href={goal?.button_link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          {goal?.button_text}
        </a>
      </div>
    </section>
  );
}