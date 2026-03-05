"use client";

import { Search } from "lucide-react";

export function TableToolbar({
  searchQuery,
  onSearchChange,
  statusFilter,
  onStatusFilterChange,
  yearFilter,
  onYearFilterChange,
  availableYears,
}) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="relative w-full max-w-sm">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          placeholder="Search by title or researcher..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="h-10 w-full rounded-md border border-input bg-background pl-9 pr-3 text-sm outline-none ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        />
      </div>

      <div className="flex items-center gap-3">
        <select
          value={statusFilter}
          onChange={(e) => onStatusFilterChange(e.target.value)}
          className="h-10 w-35 rounded-md border border-input bg-background px-3 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <option value="all">All Status</option>
          <option value="proposal">Proposal</option>
          <option value="ongoing">Ongoing</option>
          <option value="completed">Completed</option>
          <option value="rejected">Rejected</option>
        </select>

        <select
          value={yearFilter}
          onChange={(e) => onYearFilterChange(e.target.value)}
          className="h-10 w-30 rounded-md border border-input bg-background px-3 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <option value="all">All Years</option>
          {availableYears.map((year) => (
            <option key={year} value={year.toString()}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
