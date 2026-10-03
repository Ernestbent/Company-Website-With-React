const API_BASE = "/api/erpnext";
const ITEM_FIELDS = [
  "name",
  "item_name",
  "item_group",
  "brand",
  "image",
  "description",
  "stock_uom",
];

async function request(path, signal) {
  const response = await fetch(`${API_BASE}${path}`, { signal });

  if (!response.ok) {
    let message = `ERPNext request failed (${response.status})`;
    try {
      const payload = await response.json();
      message = payload.exception || payload.message || message;
    } catch {
      // Keep the HTTP status message when ERPNext does not return JSON.
    }
    throw new Error(message);
  }

  return response.json();
}

function buildItemFilters({ brand = "all", group = "all" } = {}) {
  const filters = [["disabled", "=", 0]];
  if (brand !== "all") filters.push(["brand", "=", brand]);
  if (group !== "all") filters.push(["item_group", "=", group]);
  return filters;
}

export async function getItems({ start = 0, limit = 12, brand = "all", group = "all", signal } = {}) {
  const params = new URLSearchParams({
    fields: JSON.stringify(ITEM_FIELDS),
    filters: JSON.stringify(buildItemFilters({ brand, group })),
    limit_start: String(start),
    limit_page_length: String(limit),
    order_by: "modified desc",
  });
  const payload = await request(`/resource/Item?${params}`, signal);
  return Array.isArray(payload.data) ? payload.data : [];
}

export async function searchItems({ query, brand = "all", group = "all", signal } = {}) {
  const searchTerm = query?.trim();
  if (!searchTerm) return [];

  const searchableFields = [
    "name",
    "item_name",
    "description",
    "custom_luganda_name",
    "custom_oe_part_no",
  ];

  const responses = await Promise.all(
    searchableFields.map(async (fieldname) => {
      const filters = [
        ...buildItemFilters({ brand, group }),
        [fieldname, "like", `%${searchTerm}%`],
      ];
      const params = new URLSearchParams({
        fields: JSON.stringify(ITEM_FIELDS),
        filters: JSON.stringify(filters),
        limit_start: "0",
        limit_page_length: "500",
        order_by: "modified desc",
      });
      const payload = await request(`/resource/Item?${params}`, signal);
      return Array.isArray(payload.data) ? payload.data : [];
    }),
  );

  const uniqueItems = new Map();
  responses.flat().forEach((item) => uniqueItems.set(item.name, item));
  return [...uniqueItems.values()];
}

export async function getEnabledItemCount({ brand = "all", group = "all", signal } = {}) {
  const params = new URLSearchParams({
    doctype: "Item",
    filters: JSON.stringify(buildItemFilters({ brand, group })),
  });
  const payload = await request(`/method/frappe.client.get_count?${params}`, signal);
  const count = Number(payload.message);

  if (!Number.isFinite(count)) {
    throw new Error("ERPNext returned an invalid Item count");
  }
  return count;
}

async function getNames(doctype, filters, signal) {
  const params = new URLSearchParams({
    fields: JSON.stringify(["name"]),
    limit_page_length: "0",
    order_by: "name asc",
  });
  if (filters) params.set("filters", JSON.stringify(filters));

  const payload = await request(`/resource/${encodeURIComponent(doctype)}?${params}`, signal);
  return (Array.isArray(payload.data) ? payload.data : []).map((record) => record.name).filter(Boolean);
}

export function getBrands(signal) {
  return getNames("Brand", null, signal);
}

export function getItemGroups(signal) {
  return getNames("Item Group", [["is_group", "=", 0]], signal);
}

export function getItemImageUrl(image) {
  if (!image) return null;
  if (/^https?:\/\//i.test(image)) return image;
  const imagePath = image.startsWith("/") ? image : `/${image}`;
  return `/erpnext-file${imagePath}`;
}
