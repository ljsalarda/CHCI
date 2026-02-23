export function GeoagriGoal() {
  return (
    <section className=" py-16 md:py-28 mx-auto max-w-5xl space-y-3">
         <p className="text-center text-sm font-semibold uppercase tracking-[0.25em] text-primary">
          GEOARGI Goal
        </p>
        <h2 className="text-center text-2xl font-bold md:text-3xl">
           Statement of Goal
        </h2>
      <p className="mb-10 max-w-7xl text-base leading-relaxed text-muted-foreground">
        Utilizing human sciences, computational, engineering and information
        technologies and fostering research and development on the area of
        artificial intelligence, augmented reality, and other HCI-related fields
        of specialization to deploy computing Research Development Innovation
        outputs for the development of Caraga region and beyond.
      </p>
      <div className="overflow-hidden rounded-xl border border-border bg-card">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/geoagri-IndABmbsvSFhHXC9riTWthUgsxiSaI.png"
          alt="GEOAGRI platform showing three main features: Data Management for road and GIS data, Public Map for transparent reporting and map views, and Grievance and Requests for community feedback"
          className="w-full"
        />
      </div>
    </section>
  )
}
