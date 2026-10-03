// api/erpnext.js - proxy to ERPNext, keys stay on the server
const ALLOWED_DOCTYPES = ["Item", "Brand", "Item Group", "Customer", "Sales Person"]; // doctypes the site may read

export default async function handler(req, res) {
  if (req.method !== "GET") return res.status(405).json({ message: "Method not allowed" }); // read-only

  const url = new URL(req.url, "http://localhost"); // parse query string
  const path = "/" + (url.searchParams.get("path") || ""); // path sent by the rewrite
  url.searchParams.delete("path"); // keep only the real ERPNext params
  const qs = url.searchParams.toString(); // rebuilt query string

  const resourceMatch = path.match(/^\/resource\/([^/]+)$/); // /resource/<Doctype>
  const isCount = path === "/method/frappe.client.get_count"; // only allowed method

  if (!isCount && !(resourceMatch && ALLOWED_DOCTYPES.includes(resourceMatch[1]))) {
    return res.status(403).json({ message: "Path not allowed" }); // block everything else
  }

  const { ERPNEXT_URL, ERPNEXT_API_KEY, ERPNEXT_API_SECRET } = process.env; // from Vercel settings
  if (!ERPNEXT_URL || !ERPNEXT_API_KEY || !ERPNEXT_API_SECRET) {
    return res.status(500).json({ message: "Missing ERPNext env vars" }); // debugging help
  }

  const safePath = path.split("/").map(encodeURIComponent).join("/"); // encodes "Item Group"

  try {
    const r = await fetch(`${ERPNEXT_URL}/api${safePath}${qs ? "?" + qs : ""}`, {
      headers: { Authorization: `token ${ERPNEXT_API_KEY}:${ERPNEXT_API_SECRET}` }, // token auth
    });
    const data = await r.json(); // parse ERPNext response
    res.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate=300"); // edge cache
    return res.status(r.status).json(data); // pass through
  } catch (err) {
    return res.status(502).json({ message: "ERPNext unreachable" }); // network failure
  }
}
