import { Badge } from "@/components/ui/badge";

const statusConfig = {
  proposal: {
    label: "Proposal",
    className: "bg-amber-100 text-amber-800 border-amber-200",
  },
  ongoing: {
    label: "Ongoing",
    className: "bg-[#E8F0FE] text-[#0A3D91] border-[#3A7CC3]/30",
  },
  completed: {
    label: "Completed",
    className: "bg-emerald-100 text-emerald-800 border-emerald-200",
  },
  rejected: {
    label: "Rejected",
    className: "bg-red-100 text-red-800 border-red-200",
  },
};

export function StatusBadge({ status }) {
  const config = statusConfig[status] || statusConfig.proposal;
  return (
    <Badge variant="outline" className={config.className}>
      {config.label}
    </Badge>
  );
}
