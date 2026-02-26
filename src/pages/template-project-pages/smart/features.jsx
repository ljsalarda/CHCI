import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import {
  ShieldCheck,
  Scan,
  Upload,
  FileText,
  Sparkles,
  Search,
  Pencil,
  Hash,
  Droplets,
  Download,
  BarChart3,
  ScrollText,
  Monitor,
  Plug,
} from "lucide-react";

const ICONS = {
  ShieldCheck,
  Scan,
  Upload,
  FileText,
  Sparkles,
  Search,
  Pencil,
  Hash,
  Droplets,
  Download,
  BarChart3,
  ScrollText,
  Monitor,
  Plug,
};

export function SmartFeatures() {
  const [section, setSection] = useState(null);
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    const fetchAll = async () => {
      const sectionRes = await supabase
        .from("smart_features_section")
        .select("*")
        .limit(1)
        .single();

      if (!sectionRes.error) setSection(sectionRes.data);
      else console.error(sectionRes.error);

      const featuresRes = await supabase
        .from("smart_features_items")
        .select("id, sort_order, icon_name, label")
        .eq("is_active", true)
        .order("sort_order", { ascending: true });

      if (!featuresRes.error) setFeatures(featuresRes.data || []);
      else console.error(featuresRes.error);
    };

    fetchAll();
  }, []);

  return (
    <section className="relative mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mx-auto max-w-3xl text-center space-y-3">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.25em] text-primary">
          {section?.section_label}
        </p>
        <h2 className="text-center text-2xl font-bold md:text-3xl">
          {section?.title}
        </h2>
      </div>

      {/* Main Card */}
      <div className="mt-12 p-6 md:p-10">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="grid grid-cols-2 gap-3">
            {features.map((f) => {
              const Icon = ICONS[f.icon_name] || ShieldCheck;

              return (
                <div
                  key={f.id}
                  className="flex items-start gap-3 rounded-lg border border-border bg-card p-3"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/10">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-xs font-medium leading-tight text-card-foreground sm:text-sm">
                    {f.label}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="overflow-hidden rounded-xl border border-border bg-card">
            <img
              src={
                section?.image_url ||
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/smart2-Gxj3IZBK22CJIQtNf88kpc7R0ZOsOG.png"
              }
              alt="SMART system interface"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}