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
    <div>
      <p className="mb-8 max-w-3xl text-base leading-relaxed text-muted-foreground">
        {"The system's navigation bar contains the four major functional buttons: Manage Records, Search, Reports, Activity Logs, and User Menu."}
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
