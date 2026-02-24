import { Target, ShieldCheck, Cog } from "lucide-react";

const details = [
  {
    label: "Title",
    value:
      "Industry 4.0 Learning Factory for Mining Engineering and Geology in the Academe and Mining Industry using AR and VR Technologies",
  },
  { label: "Alias", value: "MARVEL (Mining AR and Virtual ELearning)" },
  { label: "Project Leader", value: "Dr. Jaymer M. Jayoma" },
  { label: "Cost", value: "PHP 10,748,125" },
  { label: "Start Date", value: "June 1, 2022" },
  { label: "End Date", value: "December 31, 2024" },
  { label: "Implementing Agency", value: "CHCI, CSU, Ampayon, Butuan City" },
];

const specificObjectives = [
  {
    icon: Target,
    title: "AR/VR for Anatomy of a Mine",
    description: "Develop AR/VR technologies for understanding mine anatomy and structure.",
  },
  {
    icon: ShieldCheck,
    title: "Mine Safety Training and Drills",
    description: "Develop AR/VR for mine emergency rescue and evacuation training simulations.",
  },
  {
    icon: Cog,
    title: "Mining Machine Operations",
    description:
      "Develop AR/VR for operating mining equipment like Jack Leg Rock Drilling Machine.",
  },
];

export function MarvelProfile() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      {/* Header */}
      <header className="mx-auto max-w-3xl text-center space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
          Marvel Profile
        </p>
        <h2 className="text-3xl font-bold md:text-4xl">Project Profile</h2>
      </header>

      {/* Main container */}
      <div className="mt-10 rounded-3xl border border-white/20 bg-white/75 p-6 shadow-xl backdrop-blur-md md:p-10">
        {/* Details */}
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h3 className="text-xl font-semibold">Project Details</h3>
          </div>
        </div>

        {/* Info grid instead of plain table */}
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {details.map((d) => (
            <div
              key={d.label}
              className="group rounded-2xl border border-border bg-background/60 p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {d.label}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-foreground">{d.value}</p>
            </div>
          ))}
        </div>

        {/* Objectives */}
        <div className="mt-12">
          <h3 className="text-xl font-bold">Statement of Objectives</h3>
          <p className="mt-2 max-w-4xl text-base leading-relaxed text-muted-foreground">
            The general objective is to develop Augmented or Virtual Reality technologies for Mining
            Processes that can aid in the simulation and training of mining scenarios, including
            training for high-risk situations.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {specificObjectives.map((obj) => {
              const Icon = obj.icon;
              return (
                <div
                  key={obj.title}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-background/60 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  {/* tiny glow */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="absolute -top-10 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full bg-primary/15 blur-2xl" />
                  </div>

                  <div className="relative mb-4 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-primary/15 to-sky-400/15">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="h-px flex-1 bg-linear-to-r from-border to-transparent" />
                  </div>

                  <h4 className="relative text-base font-semibold text-foreground">{obj.title}</h4>
                  <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                    {obj.description}
                  </p>

                  <div className="relative mt-5 h-1 w-14 rounded-full bg-linear-to-r from-primary to-sky-400 transition-all duration-300 group-hover:w-24" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
