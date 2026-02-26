import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { FileEdit, Search, PieChart, Clock, User } from "lucide-react";

const ICONS = {
  FileEdit,
  Search,
  PieChart,
  Clock,
  User,
};

export function SmartDirectory() {
  const [section, setSection] = useState(null);
  const [directories, setDirectories] = useState([]);

  useEffect(() => {
    const fetchAll = async () => {
      const sectionRes = await supabase
        .from("smart_directory_section")
        .select("*")
        .limit(1)
        .single();

      if (!sectionRes.error) setSection(sectionRes.data);
      else console.error(sectionRes.error);

      const dirRes = await supabase
        .from("smart_directory_items")
        .select("id, sort_order, icon_name, title, description")
        .eq("is_active", true)
        .order("sort_order", { ascending: true });

      if (!dirRes.error) setDirectories(dirRes.data || []);
      else console.error(dirRes.error);
    };

    fetchAll();
  }, []);

  return (
    <div className="mx-auto max-w-5xl space-y-3 py-16 md:py-16">
      <div className="mx-auto max-w-3xl text-center space-y-3">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.25em] text-primary">
          {section?.section_label}
        </p>

        <h2 className="text-center text-2xl font-bold md:text-3xl">
          {section?.title}
        </h2>

        <p className="text-center text-base leading-relaxed text-muted-foreground md:text-lg">
          {section?.description}
        </p>
      </div>

      <div className="grid mt-10 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {directories.map((dir) => {
          const Icon = ICONS[dir.icon_name] || FileEdit;

          return (
            <div key={dir.id} className="rounded-xl border border-border bg-card p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Icon className="h-5 w-5 text-primary" />
              </div>

              <h4 className="mb-1 font-heading font-semibold text-card-foreground">
                {dir.title}
              </h4>

              <p className="text-sm leading-relaxed text-muted-foreground">
                {dir.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}