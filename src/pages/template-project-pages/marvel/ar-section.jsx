import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export function MarvelAR() {
  const [section, setSection] = useState(null);
  const [paragraphs, setParagraphs] = useState([]);

  useEffect(() => {
    const fetchAll = async () => {
      const sectionRes = await supabase
        .from("marvel_ar_section")
        .select("*")
        .limit(1)
        .single();

      if (!sectionRes.error) setSection(sectionRes.data);
      else console.error(sectionRes.error);

      const paraRes = await supabase
        .from("marvel_ar_paragraphs")
        .select("id, sort_order, content")
        .eq("is_active", true)
        .order("sort_order", { ascending: true });

      if (!paraRes.error) setParagraphs(paraRes.data || []);
      else console.error(paraRes.error);
    };

    fetchAll();
  }, []);

  const driveVideoId = section?.drive_video_id || "1qRv9vodADQwbYpc_Gk-IB_Y2ju6BS5ny";

  return (
    <section className="relative mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mx-auto max-w-3xl text-center space-y-3">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.25em] text-primary">
          {section?.section_label}
        </p>
        <h2 className="text-center text-2xl font-bold md:text-3xl">
          {section?.title}
        </h2>
      </div>

      <div className="mt-12 rounded-3xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-xl md:p-10">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="overflow-hidden rounded-xl border border-border">
            <div className="aspect-video bg-secondary">
              <iframe
                className="h-full w-full"
                src={`https://drive.google.com/file/d/${driveVideoId}/preview`}
                title="MARVEL AR Demo Video"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-4 text-base leading-relaxed text-muted-foreground">
              {paragraphs.map((p) => (
                <p key={p.id}>{p.content}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}