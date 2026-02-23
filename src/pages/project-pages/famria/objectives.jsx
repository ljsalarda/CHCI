import {
  Target,
  Database,
  Users,
  MapPin,
  BarChart3,
  FileText,
  MessageSquare,
  Scale,
} from "lucide-react"

const objectives = [
  {
    icon: Target,
    title: "Evaluate the Impact of FMRs",
    description:
      "Conduct a comprehensive analysis to assess the effects and outcomes of implementing FMRs in rural areas, focusing on socio-economic factors, agricultural productivity, and community well-being.",
  },
  {
    icon: Database,
    title: "Baseline Data Collection",
    description:
      "Gather baseline data on the socio-economic conditions of target rural areas before and after the construction or improvement of FMRs, including agricultural productivity, income levels, and market access.",
  },
  {
    icon: Users,
    title: "Stakeholder Engagement",
    description:
      "Engage with local communities, farmers, government agencies, NGOs, and other relevant stakeholders to incorporate their perspectives and feedback into the assessment process.",
  },
  {
    icon: MapPin,
    title: "Road Infrastructure Assessment",
    description:
      "Conduct a detailed assessment of FMR infrastructure, including the condition of existing roads, road upgrades, length and connectivity, and their impact on transportation efficiency.",
  },
  {
    icon: BarChart3,
    title: "Impact Evaluation",
    description:
      "Evaluate the impact of FMRs on agricultural productivity, income generation, employment opportunities, and market access using surveys, interviews, and data analysis.",
  },
  {
    icon: FileText,
    title: "Policy Recommendations",
    description:
      "Provide recommendations for policy interventions, infrastructure investments, and community development initiatives to maximize the positive impact of FMRs.",
  },
  {
    icon: MessageSquare,
    title: "Feedback Collection and Mitigation",
    description:
      "Gather stakeholder feedback, comments, and suggestions to identify potential negative outcomes and enhance positive ones, facilitating the mitigation of adverse effects.",
  },
  {
    icon: Scale,
    title: "Technical and Legal Basis for Reform",
    description:
      "Offer technical and legal insights to inform the development of reformed policies, structural changes, and new projects related to FMR interventions.",
  },
]

export function FamriaObjectives() {
  return (
    <section className=" mx-auto py-16 md:py-20 max-w-7xl space-y-8">
      {/* Section Header */}
      <div className="text-center space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
          FAMRIA Objectives
        </p>
        <h2 className="text-2xl font-bold md:text-3xl">
          Strategic Monitoring & Evaluation Goals
        </h2>
        {/* <p className="mx-auto max-w-3xl text-muted-foreground">
          These objectives guide the evaluation of Farm-to-Market Road (FMR)
          projects, focusing on infrastructure performance, socio-economic
          impact, stakeholder participation, and long-term policy development.
        </p> */}
      </div>

      {/* Objectives Grid */}
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {objectives.map((obj, index) => {
          const Icon = obj.icon

          return (
            <div
              key={obj.title}
              className="group relative overflow-hidden rounded-2xl border border-white/20 bg-linear-to-br from-white/90 to-white/70 p-6 shadow-md backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Glow Hover Effect */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -top-10 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
              </div>

              {/* Number Badge */}
              <div className="absolute right-4 top-4 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                {index + 1}
              </div>

              {/* Icon */}
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-primary/15 to-sky-400/20 transition-transform duration-300 group-hover:scale-110">
                <Icon className="h-5 w-5 text-primary" />
              </div>

              {/* Title */}
              <h3 className="mb-2 pr-10 text-lg font-semibold text-foreground">
                {obj.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-muted-foreground md:text-[0.95rem]">
                {obj.description}
              </p>

              {/* Accent Line */}
              <div className="mt-5 h-1 w-16 rounded-full bg-linear-to-r from-primary to-sky-400 transition-all duration-300 group-hover:w-24" />
            </div>
          )
        })}
      </div>
    </section>
  )
}