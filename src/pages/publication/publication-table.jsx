"use client";

import { useState, useMemo } from "react";
import { Eye, FileText, ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "./status-badge";
import { PublicationDetailDialog } from "./publication-detail-dialog";

const sortableFields = ["project_title", "lead_researcher", "year", "status", "target_count"];

function formatFileSize(bytes) {
  if (!bytes) return "N/A";
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export function PublicationsTable({ publications }) {
  const [selectedPub, setSelectedPub] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [sortField, setSortField] = useState("year");
  const [sortDirection, setSortDirection] = useState("desc");

  const handleSort = (field) => {
    if (!sortableFields.includes(field)) return;

    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const sortedPublications = useMemo(() => {
    return [...publications].sort((a, b) => {
      const dir = sortDirection === "asc" ? 1 : -1;
      const valA = a[sortField];
      const valB = b[sortField];

      if (valA == null && valB == null) return 0;
      if (valA == null) return 1;
      if (valB == null) return -1;

      if (typeof valA === "string" && typeof valB === "string") {
        return valA.localeCompare(valB) * dir;
      }
      if (typeof valA === "number" && typeof valB === "number") {
        return (valA - valB) * dir;
      }
      return 0;
    });
  }, [publications, sortField, sortDirection]);

  const handleView = (pub) => {
    setSelectedPub(pub);
    setDialogOpen(true);
  };

  const SortableHeader = ({ field, children }) => (
    <button
      type="button"
      onClick={() => handleSort(field)}
      className="flex items-center gap-1 font-medium transition-colors hover:text-[#3A7CC3]"
    >
      {children}
      <ArrowUpDown
        className={`h-3 w-3 ${sortField === field ? "text-[#0A3D91]" : "text-muted-foreground/50"}`}
      />
    </button>
  );

  if (publications.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-lg border border-dashed py-16">
        <FileText className="h-10 w-10 text-muted-foreground/40" />
        <p className="mt-3 text-sm font-medium text-muted-foreground">No publication outputs found</p>
        <p className="mt-1 text-xs text-muted-foreground/70">Try adjusting your search or filters</p>
      </div>
    );
  }

  return (
    <>
      <div className="overflow-hidden rounded-lg border bg-card shadow-sm">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#0A3D91] hover:bg-[#0A3D91]">
              <th className="w-10 px-3 py-3 text-left font-semibold text-white">#</th>
              <th className="min-w-62.5 px-3 py-3 text-left font-semibold text-white">
                <SortableHeader field="project_title">
                  <span className="text-white">Project Title</span>
                </SortableHeader>
              </th>
              <th className="px-3 py-3 text-left font-semibold text-white">
                <SortableHeader field="lead_researcher">
                  <span className="text-white">Lead Researcher</span>
                </SortableHeader>
              </th>
              <th className="px-3 py-3 text-center font-semibold text-white">
                <SortableHeader field="year">
                  <span className="text-white">Year</span>
                </SortableHeader>
              </th>
              <th className="px-3 py-3 text-center font-semibold text-white">
                <SortableHeader field="target_count">
                  <span className="text-white">Target</span>
                </SortableHeader>
              </th>
              <th className="px-3 py-3 text-center font-semibold text-white">
                <SortableHeader field="status">
                  <span className="text-white">Status</span>
                </SortableHeader>
              </th>
              <th className="px-3 py-3 text-left font-semibold text-white">File</th>
              <th className="px-3 py-3 text-center font-semibold text-white">Action</th>
            </tr>
          </thead>
          <tbody>
            {sortedPublications.map((pub, index) => (
              <tr key={pub.id} className="transition-colors hover:bg-[#E8F0FE]/50">
                <td className="px-3 py-3 font-medium text-muted-foreground">{index + 1}</td>
                <td className="px-3 py-3">
                  <p className="line-clamp-2 font-medium leading-snug text-foreground">{pub.project_title}</p>
                </td>
                <td className="px-3 py-3 text-foreground">
                  {pub.lead_researcher ?? <span className="italic text-muted-foreground">Unassigned</span>}
                </td>
                <td className="px-3 py-3 text-center font-medium text-foreground">{pub.year}</td>
                <td className="px-3 py-3 text-center">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#E8F0FE] text-xs font-bold text-[#0A3D91]">
                    {pub.target_count}
                  </span>
                </td>
                <td className="px-3 py-3 text-center">
                  <StatusBadge status={pub.status} />
                </td>
                <td className="px-3 py-3">
                  {pub.file_name ? (
                    <div className="flex items-center gap-1.5">
                      <FileText className="h-4 w-4 text-[#3A7CC3]" />
                      <span className="max-w-25 truncate text-xs text-foreground">{pub.file_name}</span>
                      <span className="text-xs text-muted-foreground">({formatFileSize(pub.file_size)})</span>
                    </div>
                  ) : (
                    <span className="text-xs italic text-muted-foreground">No file</span>
                  )}
                </td>
                <td className="px-3 py-3 text-center">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleView(pub)}
                    className="h-8 w-8 p-0 text-[#3A7CC3] hover:bg-[#E8F0FE] hover:text-[#0A3D91]"
                  >
                    <Eye className="h-4 w-4" />
                    <span className="sr-only">View details</span>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <PublicationDetailDialog
        publication={selectedPub}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </>
  );
}
