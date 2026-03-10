const CKAN_ACTION_PATH = "/api/3/action";
const KNOWN_STATUSES = new Set(["proposal", "ongoing", "completed", "rejected"]);

function toNumber(value, fallback = 0) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function normalizeStatus(status) {
  if (!status) return "proposal";
  const value = String(status).trim().toLowerCase();
  return KNOWN_STATUSES.has(value) ? value : "proposal";
}

function getCkanConfig() {
  const baseUrl = String(import.meta.env.VITE_CKAN_BASE_URL ?? "").replace(/\/+$/, "");
  return {
    baseUrl,
    apiKey: import.meta.env.VITE_CKAN_API_KEY ?? "",
    resourceId: import.meta.env.VITE_CKAN_RESOURCE_ID ?? "",
    packageId: import.meta.env.VITE_CKAN_PACKAGE_ID ?? "",
    publicationsUrl: import.meta.env.VITE_CKAN_PUBLICATIONS_URL ?? "",
    limit: toNumber(import.meta.env.VITE_CKAN_LIMIT, 1000),
  };
}

function buildHeaders(apiKey) {
  const headers = { "Content-Type": "application/json" };
  if (apiKey) headers.Authorization = apiKey;
  return headers;
}

async function ckanAction(baseUrl, actionName, payload, apiKey = "") {
  const response = await fetch(`${baseUrl}${CKAN_ACTION_PATH}/${actionName}`, {
    method: "POST",
    headers: buildHeaders(apiKey),
    body: JSON.stringify(payload ?? {}),
  });

  if (!response.ok) {
    throw new Error(`CKAN HTTP ${response.status}`);
  }

  const json = await response.json();
  if (!json?.success) {
    throw new Error(`CKAN action failed: ${actionName}`);
  }

  return json.result;
}

function normalizePublication(item, index) {
  const nowIso = new Date().toISOString();
  const yearRaw = item.year ?? item.publication_year ?? item.target_year;

  return {
    id: item.id ?? item._id ?? `publication-${index + 1}`,
    project_title: item.project_title ?? item.title ?? item.name ?? "Untitled Project",
    lead_researcher: item.lead_researcher ?? item.researcher ?? item.author ?? null,
    year: toNumber(yearRaw, new Date().getFullYear()),
    target_count: toNumber(item.target_count ?? item.target, 0),
    status: normalizeStatus(item.status),
    file_name: item.file_name ?? item.filename ?? item.name ?? null,
    file_size: toNumber(item.file_size ?? item.size, 0),
    notes: item.notes ?? item.description ?? "",
    created_at: item.created_at ?? item.created ?? item.metadata_created ?? nowIso,
    updated_at: item.updated_at ?? item.last_modified ?? item.metadata_modified ?? nowIso,
  };
}

async function fetchRowsFromPublicEndpoint(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Public endpoint HTTP ${response.status}`);
  }

  const payload = await response.json();
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.result?.records)) return payload.result.records;
  if (Array.isArray(payload?.result)) return payload.result;
  return [];
}

async function fetchRowsFromDatastore(config) {
  const result = await ckanAction(
    config.baseUrl,
    "datastore_search",
    { resource_id: config.resourceId, limit: config.limit },
    config.apiKey,
  );

  return Array.isArray(result?.records) ? result.records : [];
}

async function fetchRowsFromPackage(config) {
  const result = await ckanAction(
    config.baseUrl,
    "package_show",
    { id: config.packageId },
    config.apiKey,
  );

  return Array.isArray(result?.resources) ? result.resources : [];
}

export async function fetchPublicationsFromCKAN() {
  const config = getCkanConfig();

  try {
    let rows = [];

    if (config.publicationsUrl) {
      rows = await fetchRowsFromPublicEndpoint(config.publicationsUrl);
    } else if (config.baseUrl && config.resourceId) {
      rows = await fetchRowsFromDatastore(config);
    } else if (config.baseUrl && config.packageId) {
      rows = await fetchRowsFromPackage(config);
    } else {
      return [];
    }

    return rows.map((item, index) => normalizePublication(item, index));
  } catch (error) {
    console.error("Unexpected error while fetching CKAN publications.", error);
    return [];
  }
}

export async function testCkanConnection() {
  const config = getCkanConfig();
  if (!config.baseUrl) return false;

  try {
    await ckanAction(config.baseUrl, "site_read", {}, config.apiKey);
    return true;
  } catch (_error) {
    return false;
  }
}
