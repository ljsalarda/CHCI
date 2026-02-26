import { Facebook } from "lucide-react";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export function MarvelIntro() {
  const [intro, setIntro] = useState(null);

  useEffect(() => {
    const fetchIntro = async () => {
      const { data, error } = await supabase
        .from("marvel_intro")
        .select("*")
        .limit(1)
        .single();

      if (!error) setIntro(data);
      else console.error(error);
    };

    fetchIntro();
  }, []);

  return (
    <section className="relative mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mx-auto max-w-3xl text-center space-y-3">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.25em] text-primary">
          {intro?.section_label}
        </p>
        <h2 className="text-center text-2xl font-bold md:text-3xl">
          {intro?.title}
        </h2>
      </div>

      <div className="mt-12 rounded-3xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-xl md:p-10">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold mb-3">
              {intro?.heading}
            </h2>

            <p className="text-base leading-relaxed text-muted-foreground">
              {intro?.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={intro?.facebook_link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#0A3D91] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#3A7CC3]/90"
              >
                <Facebook className="h-4 w-4" />
                Visit our Facebook Page
              </a>
            </div>
          </div>

          {/* Right column iframe */}
          <div className="overflow-hidden rounded-xl border border-border">
            <div className="aspect-video">
              <iframe
                src={intro?.video_url}
                title="MARVEL Technologies Introduction Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}