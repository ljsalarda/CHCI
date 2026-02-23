export function MarvelAR() {
  return (<section className="  relative mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center space-y-3">
            <p className="text-center text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                Marvel Augmented Reality
            </p>
            <h2 className="text-center text-2xl font-bold md:text-3xl">
                Augmented Reality
            </h2>
          </div>
    <div className="mt-12 rounded-3xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-xl md:p-10">
            <div className="grid items-center gap-10 md:grid-cols-2">
      <div className="overflow-hidden rounded-xl border border-border">
        <div className="aspect-video bg-secondary">
          <iframe
            src="https://www.youtube.com/embed/0XlkjM-Bwu8"
            title="MARVEL AR Demo Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full"
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4 text-base leading-relaxed text-muted-foreground">
          <p>
            Augmented Reality (AR) is a technology that blends digital elements
            with the real world, allowing users to experience enhanced
            environments through devices like smartphones, tablets, or
            specialized AR glasses. Unlike Virtual Reality (VR), which immerses
            users in entirely digital worlds, AR overlays digital content such as
            images, sounds, or 3D models onto the physical environment in real
            time.
          </p>
          <p>
            The technology has applications in various fields, including
            entertainment, education, healthcare, and marketing, offering
            immersive, interactive experiences that enhance how people perceive
            and interact with the world around them. In MARVEL, AR is used to
            enhance mining training with interactive simulations overlaid on
            real-world equipment and environments.
          </p>
        </div>
      </div>
    </div>
    </div>
    </section>
  )
}
