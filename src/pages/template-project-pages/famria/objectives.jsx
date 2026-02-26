import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import {
  Target,
  Database,
  Users,
  MapPin,
  BarChart3,
  FileText,
  MessageSquare,
  Scale,
} from "lucide-react";

// ✅ map icon_name (string from DB) -> icon component
const ICONS = {
  Target,
  Database,
  Users,
  MapPin,
  BarChart3,
  FileText,
  MessageSquare,
  Scale,
};

export function FamriaObjectives() {
  const [objectives, setObjectives] = useState([]);

  useEffect(() => {
    const fetchObjectives = async () => {
      const { data, error } = await supabase
        .from("famria_objectives")
        .select("id, sort_order, icon_name, title, description")
        .eq("is_active", true)
        .order("sort_order", { ascending: true });

      if (!error) setObjectives(data || []);
      else console.error(error);
    };

    fetchObjectives();
  }, []);

  return (
    <section className="mx-auto py-16 md:py-20 max-w-6xl space-y-8">
      {/* Section Header */}
      <div className="text-center space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
          FAMRIA Objectives
        </p>
        <h2 className="text-2xl font-bold md:text-3xl">Objectives</h2>
      </div>

      {/* Objectives Grid */}
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {objectives.map((obj, index) => {
          const Icon = ICONS[obj.icon_name] || Target; // fallback icon

          return (
            <div
              key={obj.id}
              className="group relative overflow-hidden rounded-2xl border border-white/20 bg-linear-to-br from-white/90 to-white/70 p-6 shadow-md backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Glow Hover Effect */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -top-10 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
              </div>

              {/* Number Badge */}
              <div className="absolute right-4 top-4 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                {index + 1}
              </div>

              {/* Icon */}
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-primary/15 to-sky-400/20 transition-transform duration-300 group-hover:scale-110">
                <Icon className="h-5 w-5 text-primary" />
              </div>

              {/* Title */}
              <h3 className="mb-2 pr-10 text-lg font-semibold text-foreground">
                {obj.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-muted-foreground md:text-[0.95rem]">
                {obj.description}
              </p>

              {/* Accent Line */}
              <div className="mt-5 h-1 w-16 rounded-full bg-linear-to-r from-primary to-sky-400 transition-all duration-300 group-hover:w-24" />
            </div>
          );
        })}
      </div>
    </section>
  );
}