import { FileEdit, Search, PieChart, Clock, User } from "lucide-react"

const directories = [
  {
    icon: FileEdit,
    title: "Manage Records Page",
    description: "Data entry page of the system.",
  },
  {
    icon: Search,
    title: "Search Records Page",
    description: "Search facility page of the system.",
  },
  {
    icon: PieChart,
    title: "Reports Page",
    description:
      "Graphical and statistical representation of data are featured in this page.",
  },
  {
    icon: Clock,
    title: "Transaction Logs",
    description:
      "Significant changes made in the system are logged and can be viewed here.",
  },
  {
    icon: User,
    title: "User Menu",
    description: "Contains user-specific details.",
  },
]

export function SmartDirectory() {
  return (
    <div className="mx-auto max-w-5xl space-y-3 py-16 md:py-16">
      <div className="mx-auto max-w-3xl text-center space-y-3">
            <p className="text-center text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                SMART Functional Directory
            </p>
            <h2 className="text-center text-2xl font-bold md:text-3xl">
                System Functional Directory
            </h2>
            <p className="text-center text-base leading-relaxed text-muted-foreground md:text-lg">The system's navigation bar contains five major functional buttons: Manage Records, Search Records, Reports, Transaction Logs, and User Menu.</p>
          </div>
      <div className="grid mt-10 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {directories.map((dir) => {
          const Icon = dir.icon
          return (
            <div
              key={dir.title}
              className="rounded-xl border border-border bg-card p-6"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <h4 className="mb-1 font-heading font-semibold text-card-foreground">
                {dir.title}
              </h4>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {dir.description}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
