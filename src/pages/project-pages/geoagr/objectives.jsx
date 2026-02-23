import {
  Globe,
  Share2,
  MapPinned,
  Network,
  FileBarChart,
  Layers,
} from "lucide-react"

const objectives = [
  {
    icon: Globe,
    text: "Provide an online interactive Management Information System (MIS) portal to consolidate, store/manage, process, and analyze GIS-based data of FMR Projects.",
  },
  {
    icon: Share2,
    text: "Provide an avenue for transparency, inter-agency data sharing, science-based approach planning, and harmonization of FMR implementation.",
  },
  {
    icon: MapPinned,
    text: "Facilitate the visualization of robust spatial data available online and provide a visual assessment of the road network.",
  },
  {
    icon: Network,
    text: "Address the issues on FMR location, interconnectivity, elimination of duplication, and build an FMR information system among implementing agencies.",
  },
]

const services = [
  {
    icon: FileBarChart,
    title: "Reports Generation",
    description: "Enhanced reporting capabilities with specific user dashboards.",
  },
  {
    icon: Layers,
    title: "Interactive Geo-Mapping",
    description:
      "Visualization of roads and connectivity with automated FMR prioritization based on set criteria.",
  },
]

export function GeoagriObjectives() {
  return (
    <section className="relative mx-auto px-4 py-20 sm:px-6 lg:px-8">
      {/* Background accents (subtle, no cards) */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 -left-28 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute top-28 -right-28 h-96 w-96 rounded-full bg-sky-400/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-foreground/5 blur-3xl" />
      </div>

      <div className="space-y-14">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            GEOAGRI Objectives
          </p>
          <h2 className="text-3xl font-bold md:text-4xl">
            Objectives & Services
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            A GIS-powered MIS that strengthens transparency, interconnectivity,
            and data-driven planning for Farm-to-Market Road projects.
          </p>
        </div>

        {/* Objectives list with connector line */}
        <div className="mx-auto grid max-w-6xl justify-items-center gap-x-14 gap-y-10 md:grid-cols-2">
          {objectives.map((obj) => {
            const Icon = obj.icon
            return (
              <div key={obj.text} className="group relative flex w-full max-w-xl gap-4">
                {/* Connector line */}
                <div className="absolute left-5 top-12 hidden h-[calc(100%-2.25rem)] w-px bg-linear-to-b from-border to-transparent md:block" />

                {/* Icon */}
                <div className="relative mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-primary/15 to-sky-400/15 ring-1 ring-border/60 transition-all duration-300 group-hover:ring-primary/30">
                  <Icon className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110" />
                </div>

                {/* Text */}
                <div className="space-y-1">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {obj.text}
                  </p>
                  <div className="h-1 w-12 rounded-full bg-linear-to-r from-primary/70 to-sky-400/70 opacity-0 transition-all duration-300 group-hover:w-20 group-hover:opacity-100" />
                </div>
              </div>
            )
          })}
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-linear-to-r from-transparent via-border to-transparent" />

        {/* SERVICES */}
        <div className="space-y-5">
          <div className="text-center space-y-2 ">
            <h3 className="text-2xl font-bold text-foreground">Services</h3>
            <p className="mx-auto mb-10 max-w-4xl text-base leading-relaxed text-muted-foreground">
              GEOAGRI is an enhanced IROAD that provides additional
              functionalities including reports generation, specific user
              dashboards, enhanced GUI for ease-of-use, and API functions for
              supporting agencies.
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl justify-items-center gap-x-14 gap-y-10 md:grid-cols-2">
            {services.map((svc) => {
              const Icon = svc.icon
              return (
                <div key={svc.title} className="group flex w-full max-w-xl items-start gap-4">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-primary/15 to-sky-400/15 ring-1 ring-border/60 transition-all duration-300 group-hover:ring-primary/30">
                    <Icon className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  <div className="space-y-1">
                    <h4 className="font-semibold text-foreground">
                      {svc.title}
                    </h4>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {svc.description}
                    </p>
                    <div className="h-1 w-12 rounded-full bg-linear-to-r from-primary/70 to-sky-400/70 opacity-0 transition-all duration-300 group-hover:w-20 group-hover:opacity-100" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
