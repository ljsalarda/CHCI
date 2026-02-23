import { Globe, Share2, MapPinned, Network, FileBarChart, Layers } from "lucide-react"

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
    description: "Visualization of roads and connectivity with automated FMR prioritization based on set criteria.",
  },
]

export function GeoagriObjectives() {
  return (
    <div>
      <div className="mb-10 grid gap-4 md:grid-cols-2">
        {objectives.map((obj) => {
          const Icon = obj.icon
          return (
            <div
              key={obj.text}
              className="flex gap-4 rounded-xl border border-border bg-card p-5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {obj.text}
              </p>
            </div>
          )
        })}
      </div>

      <h3 className="mb-6 font-heading text-xl font-bold text-foreground">
        Services
      </h3>
      <p className="mb-6 text-base leading-relaxed text-muted-foreground">
        GEOAGRI is an enhanced IROAD that provides additional functionalities
        including reports generation, specific user-dashboards, enhanced GUI for
        user ease-of-use, and API functions for supporting agencies.
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        {services.map((svc) => {
          const Icon = svc.icon
          return (
            <div
              key={svc.title}
              className="rounded-xl border border-border bg-card p-6"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <Icon className="h-5 w-5 text-accent" />
              </div>
              <h4 className="mb-1 font-heading font-semibold text-card-foreground">
                {svc.title}
              </h4>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {svc.description}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
