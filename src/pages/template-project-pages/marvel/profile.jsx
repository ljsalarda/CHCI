import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Target, ShieldCheck, Cog } from "lucide-react";

const ICONS = {
  Target,
  ShieldCheck,
  Cog,
};

export function MarvelProfile() {
  const [section, setSection] = useState(null);
  const [details, setDetails] = useState([]);
  const [specificObjectives, setSpecificObjectives] = useState([]);

  useEffect(() => {
    const fetchAll = async () => {
      // 1) section header + general objective
      const sectionRes = await supabase
        .from("marvel_profile_section")
        .select("*")
        .limit(1)
        .single();

      if (!sectionRes.error) setSection(sectionRes.data);
      else console.error(sectionRes.error);

      // 2) details
      const detailsRes = await supabase
        .from("marvel_profile_details")
        .select("id, sort_order, label, value")
        .eq("is_active", true)
        .order("sort_order", { ascending: true });

      if (!detailsRes.error) setDetails(detailsRes.data || []);
      else console.error(detailsRes.error);

      // 3) specific objectives
      const objRes = await supabase
        .from("marvel_profile_objectives")
        .select("id, sort_order, icon_name, title, description")
        .eq("is_active", true)
        .order("sort_order", { ascending: true });

      if (!objRes.error) setSpecificObjectives(objRes.data || []);
      else console.error(objRes.error);
    };

    fetchAll();
  }, []);

  return (
    <section className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      {/* Header */}
      <header className="mx-auto max-w-3xl text-center space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
          {section?.section_label}
        </p>
        <h2 className="text-3xl font-bold md:text-4xl">{section?.title}</h2>
      </header>

      {/* Main container */}
      <div className="mt-10 rounded-3xl border border-white/20 bg-white/75 p-6 shadow-xl backdrop-blur-md md:p-10">
        {/* Details */}
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h3 className="text-xl font-semibold">{section?.details_heading}</h3>
          </div>
        </div>

        {/* Info grid instead of plain table */}
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {details.map((d) => (
            <div
              key={d.id}
              className="group rounded-2xl border border-border bg-background/60 p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {d.label}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-foreground">{d.value}</p>
            </div>
          ))}
        </div>

        {/* Objectives */}
        <div className="mt-12">
          <h3 className="text-xl font-bold">{section?.objectives_heading}</h3>
          <p className="mt-2 max-w-4xl text-base leading-relaxed text-muted-foreground">
            {section?.general_objective}
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {specificObjectives.map((obj) => {
              const Icon = ICONS[obj.icon_name] || Target;

              return (
                <div
                  key={obj.id}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-background/60 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  {/* tiny glow */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="absolute -top-10 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full bg-primary/15 blur-2xl" />
                  </div>

                  <div className="relative mb-4 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-primary/15 to-sky-400/15">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="h-px flex-1 bg-linear-to-r from-border to-transparent" />
                  </div>

                  <h4 className="relative text-base font-semibold text-foreground">
                    {obj.title}
                  </h4>
                  <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                    {obj.description}
                  </p>

                  <div className="relative mt-5 h-1 w-14 rounded-full bg-linear-to-r from-primary to-sky-400 transition-all duration-300 group-hover:w-24" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}