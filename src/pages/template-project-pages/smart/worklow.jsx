import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export function SmartWorkflow() {
  const [workflow, setWorkflow] = useState(null);

  useEffect(() => {
    const fetchWorkflow = async () => {
      const { data, error } = await supabase
        .from("smart_workflow_section")
        .select("*")
        .limit(1)
        .single();

      if (!error) setWorkflow(data);
      else console.error(error);
    };

    fetchWorkflow();
  }, []);

  return (
    <section className="mx-auto max-w-2xl space-y-3 py-16 md:py-16">
      <p className="text-center text-sm font-semibold uppercase tracking-[0.25em] text-primary">
        {workflow?.section_label}
      </p>

      <h2 className="text-center text-2xl font-bold md:text-3xl">
        {workflow?.title}
      </h2>

      {/* Image Card */}
      <div className="rounded-2xl mt-10 border border-white/20 bg-linear-to-br from-white/80 to-white/60 p-5 shadow-xl backdrop-blur-md transition hover:shadow-2xl">
        <img
          src={
            workflow?.image_url ||
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/smart1-tty6tfR53nCisgMSlWTgx3gGwfTWkR.png"
          }
          alt="SMART workflow diagram"
          className="w-full"
        />
      </div>
    </section>
  );
}