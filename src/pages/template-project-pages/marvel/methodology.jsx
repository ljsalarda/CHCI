import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

const ACCENT_CLASS = {
  primary: "before:bg-primary",
  sky: "before:bg-sky-400",
};

export function MarvelRationale() {
  const [section, setSection] = useState(null);
  const [paragraphs, setParagraphs] = useState([]);

  useEffect(() => {
    const fetchAll = async () => {
      // header
      const sectionRes = await supabase
        .from("marvel_methodology_section")
        .select("*")
        .limit(1)
        .single();

      if (!sectionRes.error) setSection(sectionRes.data);
      else console.error(sectionRes.error);

      // paragraphs
      const paraRes = await supabase
        .from("marvel_methodology_paragraphs")
        .select("id, sort_order, accent, content")
        .eq("is_active", true)
        .order("sort_order", { ascending: true });

      if (!paraRes.error) setParagraphs(paraRes.data || []);
      else console.error(paraRes.error);
    };

    fetchAll();
  }, []);

  return (
    <section className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mx-auto max-w-3xl text-center space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
          {section?.section_label}
        </p>
        <h2 className="text-3xl font-bold md:text-4xl">{section?.title}</h2>
      </div>

      {/* Content Card */}
      <div className="mt-12 rounded-3xl border border-white/20 bg-white/75 p-6 shadow-xl backdrop-blur-md md:p-10">
        <div className="mx-auto max-w-4xl space-y-8 text-base leading-relaxed text-muted-foreground">
          {paragraphs.map((p) => (
            <p
              key={p.id}
              className={`relative pl-6 before:absolute before:left-0 before:top-2 before:h-6 before:w-1 before:rounded-full ${
                ACCENT_CLASS[p.accent] || "before:bg-primary"
              }`}
            >
              {p.content}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}