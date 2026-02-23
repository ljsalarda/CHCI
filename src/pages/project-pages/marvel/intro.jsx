import { Facebook } from "lucide-react"

export function MarvelIntro() {
  return (
   <section className="  relative mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center space-y-3">
            <p className="text-center text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                Marvel About
            </p>
            <h2 className="text-center text-2xl font-bold md:text-3xl">
                About 
            </h2>
          </div>
    <div className="mt-12 rounded-3xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-xl md:p-10">
            <div className="grid items-center gap-10 md:grid-cols-2">
      <div>
        <h2 className="text-xl font-semibold mb-3">
          Project Overview
        </h2>
        <p className="text-base leading-relaxed text-muted-foreground">
          Industry 4.0 is characterized by a combination of cyber-physical
          systems that uses modern control systems and embedded software systems
          connected using IoT. Mining industries already employ these concepts to
          optimize their processes through embedded sensors, automation, and
          robotization. However, the delivery of training and instruction for
          mining education has largely remained traditional. The Industry 4.0
          Learning Factory bridges this gap through a Digital Training Center
          making use of Virtual Reality (VR) and Augmented Reality (AR). It
          envisions an augmented miner with senses and memory extended through
          technology.
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
          <a
            href="https://drive.google.com/drive/folders/1jp9FA4NitzAyFPpBm_VgIm_tw_FAdedq"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-medium text-card-foreground transition-colors hover:bg-secondary"
          >
            Download Application
          </a>
        </div>
      </div>
      <div className="overflow-hidden rounded-xl border border-border">
        <div className="aspect-video">
          <iframe
            src="https://www.youtube.com/embed/0XlkjM-Bwu8"
            title="MARVEL Technologies Introduction Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full"
          />
        </div>
      </div>
    </div>
  </div>
  </section>
  )
}
