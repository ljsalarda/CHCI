export function MarvelRationale() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mx-auto max-w-3xl text-center space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
          Marvel Methodology
        </p>
        <h2 className="text-3xl font-bold md:text-4xl">Methodology & Rationale</h2>
      </div>

      {/* Content Card */}
      <div className="mt-12 rounded-3xl border border-white/20 bg-white/75 p-6 shadow-xl backdrop-blur-md md:p-10">
        <div className="mx-auto max-w-4xl space-y-8 text-base leading-relaxed text-muted-foreground">
          <p className="relative pl-6 before:absolute before:left-0 before:top-2 before:h-6 before:w-1 before:rounded-full before:bg-primary">
            Industry 4.0 is characterized by a combination of cyber-physical systems that uses
            modern control systems and embedded software systems connected using IoT. Mining
            industries already employ these concepts to optimize their processes. However, the
            delivery of training and instruction for mining education has largely remained
            traditional. The Industry 4.0 Learning Factory bridges this gap through a Digital
            Training Center making use of VR and AR.
          </p>

          <p className="relative pl-6 before:absolute before:left-0 before:top-2 before:h-6 before:w-1 before:rounded-full before:bg-sky-400">
            Mine safety involves a broad array of related risks and hazards associated with mining,
            including blasting explosives, ergonomics, diesel and dust control, fire and explosion
            safety, structural safety in mine construction and geologic characterization, and
            environmental safety.
          </p>

          <p className="relative pl-6 before:absolute before:left-0 before:top-2 before:h-6 before:w-1 before:rounded-full before:bg-primary">
            With these issues, it is imperative to limit or eliminate human activities in the mining
            sites by implementing AR/VR that mimics mining management, especially on safety. AR and
            VR technologies will enable schools and mining companies to implement laboratory and
            site management through simulation, saving costs with the same efficiency. Equipment
            only available to the mine site can also be simulated to continue the delivery of
            necessary coursework even outside the physical classroom. This also ensures continuous
            delivery of training even during unforeseen events like the COVID-19 pandemic.
          </p>
        </div>
      </div>
    </section>
  );
}
