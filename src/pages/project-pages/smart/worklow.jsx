export function SmartWorkflow() {
  return (
    <section className="mx-auto max-w-2xl space-y-3 py-16 md:py-16">
      <p className="text-center text-sm font-semibold uppercase tracking-[0.25em] text-primary">
        SMART Workflow
      </p>
      <h2 className="text-center text-2xl  font-bold md:text-3xl">Conceptual Framework</h2>
      {/* Image Card */}
      <div className="rounded-2xl mt-10 border border-white/20 bg-linear-to-br from-white/80 to-white/60 p-5 shadow-xl backdrop-blur-md transition hover:shadow-2xl">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/smart1-tty6tfR53nCisgMSlWTgx3gGwfTWkR.png"
          alt="SMART workflow showing 5 steps: Import (digital document files), Extract (OCR text recognition), Classify (N-Grams based linear classification), Index/Archive (expert-assisted archiving), and Export (view and print digital copy)"
          className="w-full"
        />
      </div>
    </section>
  );
}
