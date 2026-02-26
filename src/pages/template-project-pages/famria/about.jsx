import { Facebook } from "lucide-react";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export function FamriaAbout() {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    const fetchAbout = async () => {
      const { data, error } = await supabase
        .from("famria_about")   // ✅ table
        .select("*")
        .limit(1)
        .single();

      if (!error) setAbout(data);
      else console.error(error);
    };

    fetchAbout();
  }, []);

  return (
    <section className="relative mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mx-auto max-w-3xl text-center space-y-3">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.25em] text-primary">
          {about?.section_label}
        </p>
        <h2 className="text-center text-2xl font-bold md:text-3xl">
          {about?.title}
        </h2>
      </div>

      {/* Main Card */}
      <div className="mt-12 rounded-3xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-xl md:p-10">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Left */}
          <div>
            <h2 className="text-xl font-semibold mb-3">
              {about?.heading}
            </h2>

            <p className="text-base leading-relaxed">
              {about?.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={about?.facebook_link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#0A3D91] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#3A7CC3]/90"
              >
                <Facebook className="h-4 w-4" />
                Visit our Facebook Page
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="overflow-hidden rounded-2xl border border-white/20 bg-white/10">
            <div className="aspect-video w-full overflow-hidden rounded-lg shadow-lg">
              <img
                src={about?.image_url || "/famriaabout.jpg"}
                alt="FaMRIA project overview"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="h-1 w-full bg-linear-to-r from-white/60 to-white/10" />
          </div>
        </div>
      </div>
    </section>
  );
}