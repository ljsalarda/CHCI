"use client";

import { FileText, Calendar, User, Hash, BookOpen } from "lucide-react";
import { StatusBadge } from "./status-badge";

function formatFileSize(bytes) {
  if (!bytes) return "N/A";
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function PublicationDetailDialog({
  publication,
  open,
  onOpenChange,
}) {
  if (!publication || !open) return null;

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-lg rounded-lg border bg-background shadow-xl">
        <div className="border-b p-4">
          <div className="flex items-center justify-between gap-2">
            <h2 className="flex items-center gap-2 text-foreground">
              <BookOpen className="h-5 w-5 text-[#0A3D91]" />
              <span className="font-semibold">Publication Details</span>
            </h2>
            <button
              type="button"
              className="rounded-md px-2 py-1 text-sm text-muted-foreground hover:bg-accent"
              onClick={() => onOpenChange(false)}
            >
              Close
            </button>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            Detailed information about this publication output
          </p>
        </div>

        <div className="flex flex-col gap-4 p-4">
          <div className="rounded-lg border bg-secondary/50 p-4">
            <h3 className="font-semibold leading-relaxed text-foreground">{publication.project_title}</h3>
            <div className="mt-2">
              <StatusBadge status={publication.status} />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <DetailItem
              icon={<User className="h-4 w-4" />}
              label="Lead Researcher"
              value={publication.lead_researcher ?? "Not assigned"}
            />
            <DetailItem
              icon={<Calendar className="h-4 w-4" />}
              label="Year"
              value={publication.year.toString()}
            />
            <DetailItem
              icon={<Hash className="h-4 w-4" />}
              label="Target Count"
              value={publication.target_count.toString()}
            />
            <DetailItem
              icon={<FileText className="h-4 w-4" />}
              label="File"
              value={
                publication.file_name
                  ? `${publication.file_name} (${formatFileSize(publication.file_size)})`
                  : "No file attached"
              }
            />
          </div>

          {publication.notes ? (
            <div className="rounded-lg border p-4">
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">
                Notes
              </p>
              <p className="text-sm text-foreground leading-relaxed">
                {publication.notes}
              </p>
            </div>
          ) : null}

          <div className="flex items-center justify-between border-t pt-3 text-xs text-muted-foreground">
            <span>Created: {formatDate(publication.created_at)}</span>
            <span>Updated: {formatDate(publication.updated_at)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function DetailItem({ icon, label, value }) {
  return (
    <div className="flex items-start gap-2">
      <span className="mt-0.5 text-[#3A7CC3]">{icon}</span>
      <div>
        <p className="text-xs font-medium text-muted-foreground">{label}</p>
        <p className="text-sm text-foreground">{value}</p>
      </div>
    </div>
  );
}
