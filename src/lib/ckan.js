function toNumber(value, fallback = 0) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function normalizeStatus(status) {
  if (!status) return "proposal";
  const value = String(status).trim().toLowerCase();
  if (["proposal", "ongoing", "completed", "rejected"].includes(value)) {
    return value;
  }
  return "proposal";
}

function normalizePublication(item, index) {
  const nowIso = new Date().toISOString();
  return {
    id: item.id ?? `publication-${index + 1}`,
    project_title: item.project_title ?? item.title ?? "Untitled Project",
    lead_researcher: item.lead_researcher ?? item.researcher ?? null,
    year: toNumber(item.year, new Date().getFullYear()),
    target_count: toNumber(item.target_count ?? item.target, 0),
    status: normalizeStatus(item.status),
    file_name: item.file_name ?? item.filename ?? null,
    file_size: toNumber(item.file_size, 0),
    notes: item.notes ?? "",
    created_at: item.created_at ?? nowIso,
    updated_at: item.updated_at ?? nowIso,
  };
}

export async function fetchPublicationsFromCKAN() {
  const endpoint = import.meta.env.VITE_CKAN_PUBLICATIONS_URL;
  if (!endpoint) {
    return [];
  }

  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      console.error("Failed to fetch publication data from CKAN.", response.status);
      return [];
    }

    const payload = await response.json();
    const rows = Array.isArray(payload)
      ? payload
      : Array.isArray(payload?.result)
        ? payload.result
        : Array.isArray(payload?.result?.records)
          ? payload.result.records
          : [];

    return rows.map((item, index) => normalizePublication(item, index));
  } catch (error) {
    console.error("Unexpected error while fetching CKAN publications.", error);
    return [];
  }
}
