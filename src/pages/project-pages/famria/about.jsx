import { Facebook } from "lucide-react"

export function FamriaAbout() {
  return (
        <section className="  relative mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center space-y-3">
            <p className="text-center text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                FAMRIA About
            </p>
            <h2 className="text-center text-2xl font-bold md:text-3xl">
                About 
            </h2>
          </div>

          {/* Main Card */}
          <div className="mt-12 rounded-3xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-xl md:p-10">
            <div className="grid items-center gap-10 md:grid-cols-2">
              {/* Left */}
              <div>
                <h2 className="text-xl font-semibold mb-3">
                  Project Overview
                </h2>

                <p className="text-base leading-relaxed">
                  The Farm to Market Road Impact Assessment (FaMRIA) Project is a
                  comprehensive evaluation aimed at analyzing the effects and outcomes
                  of implementing Farm-to-Market Roads (FMRs) in rural areas. This
                  project involves a structured methodology to assess the impact of
                  these roads on various socio-economic factors, agricultural
                  productivity, and the overall well-being of local communities.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="https://www.facebook.com/csuchci/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#0A3D91] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#3A7CC3]/90"
                  >
                    <Facebook className="h-4 w-4" />
                    Visit our Facebook Page
                  </a>
                </div>
              </div>

              {/* Right */}
              <div className="overflow-hidden rounded-2xl border border-white/20 bg-white/10">
                 <div className="aspect-video w-full overflow-hidden rounded-lg shadow-lg">
                    <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="CHCI Introduction Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full"
                    />
              </div>

                {/* small footer accent */}
                <div className="h-1 w-full bg-linear-to-r from-white/60 to-white/10" />
              </div>
            </div>
          </div>
        </section>

  )
}