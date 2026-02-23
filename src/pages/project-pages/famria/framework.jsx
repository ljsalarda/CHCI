export function FamriaFramework() {
  return (
    <section className="mx-auto max-w-5xl space-y-3 py-16 md:py-16">
         <p className="text-center text-sm font-semibold uppercase tracking-[0.25em] text-primary">
          FAMRIA Objectives
        </p>
        <h2 className="text-center text-2xl font-bold md:text-3xl">
          Conceptual Framework
      </h2>
      {/* Image Card */}
      <div className="rounded-2xl border border-white/20 bg-linear-to-br from-white/80 to-white/60 p-5 shadow-xl backdrop-blur-md transition hover:shadow-2xl">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/conceptualframework-2l9ABOwAWsGSH7YQsR8VQ1Nt4SQNyC.png"
          alt="FAMRIA Conceptual Framework diagram showing monitoring and evaluation phases including outputs, results, impact, policy adjustments, and project optimization"
          className="mx-auto w-full max-w-4xl rounded-xl border border-border object-contain"
        />
      </div>
      <div className="mt-3 flex justify-center">
          <a
            href="https://geoagri.da.gov.ph/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Visit GEOAGRI Website
          </a>
        </div>
    </section>
  )
}
