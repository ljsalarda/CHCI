import { BookOpen } from "lucide-react";

export function PageHeader({
  totalCount,
  completedCount,
  ongoingCount,
}) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
          <BookOpen className="h-5 w-5 text-primary-foreground" />
        </div>
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">
            Publication Outputs
          </h1>
          <p className="text-sm text-muted-foreground">
            Track and manage research publication deliverables
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatCard label="Total Publications" value={totalCount} color="primary" />
        <StatCard label="Completed" value={completedCount} color="completed" />
        <StatCard label="Ongoing" value={ongoingCount} color="ongoing" />
      </div>
    </div>
  );
}

function StatCard({ label, value, color }) {
  const colorMap = {
    primary: "border-l-[#0A3D91] bg-card",
    completed: "border-l-emerald-500 bg-card",
    ongoing: "border-l-[#3A7CC3] bg-card",
  };

  return (
    <div
      className={`rounded-lg border border-l-4 p-4 shadow-sm ${colorMap[color]}`}
    >
      <p className="text-sm font-medium text-muted-foreground">{label}</p>
      <p className="mt-1 text-2xl font-bold text-foreground">{value}</p>
    </div>
  );
}
