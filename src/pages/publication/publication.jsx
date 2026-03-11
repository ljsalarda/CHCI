"use client";

import { useMemo, useState } from "react";
import { StickyNavbar } from "@/components/navbar";
import { PageHeader } from "./page-header";
import { TableToolbar } from "./table-toolbar";
import { PublicationsTable } from "./publication-table";

export default function PublicationOutputsPage() {
  const [publications] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [yearFilter, setYearFilter] = useState("all");

  const availableYears = useMemo(() => {
    const years = [...new Set(publications.map((p) => p.year))];
    return years.sort((a, b) => b - a);
  }, [publications]);

  const filteredPublications = useMemo(() => {
    return publications.filter((pub) => {
      const matchesSearch =
        searchQuery === "" ||
        pub.project_title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (pub.lead_researcher && pub.lead_researcher.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesStatus = statusFilter === "all" || pub.status === statusFilter;
      const matchesYear = yearFilter === "all" || pub.year.toString() === yearFilter;

      return matchesSearch && matchesStatus && matchesYear;
    });
  }, [publications, searchQuery, statusFilter, yearFilter]);

  const completedCount = filteredPublications.filter((p) => p.status === "completed").length;
  const ongoingCount = filteredPublications.filter((p) => p.status === "ongoing").length;

  return (
    <>
      <StickyNavbar />
      <main className="min-h-screen bg-background">
        <div className="h-1 bg-linear-to-r from-[#0A3D91] to-[#3A7CC3]" />

        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8">
            <PageHeader
              totalCount={filteredPublications.length}
              completedCount={completedCount}
              ongoingCount={ongoingCount}
            />

            <div className="flex flex-col gap-4">
              <TableToolbar
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                statusFilter={statusFilter}
                onStatusFilterChange={setStatusFilter}
                yearFilter={yearFilter}
                onYearFilterChange={setYearFilter}
                availableYears={availableYears}
              />

              <PublicationsTable publications={filteredPublications} />

              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <p>
                  Showing <span className="font-medium text-foreground">{filteredPublications.length}</span> of{" "}
                  <span className="font-medium text-foreground">{publications.length}</span> publication outputs
                </p>
                <p className="text-[#3A7CC3]">Research Output Management System</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
