// api/erpnext/[...path].js - proxies /api/erpnext/* to ERPNext with server-side keys
const ALLOWED_DOCTYPES = ["Item", "Brand", "Item Group", "Customer", "Sales Person"]; // doctypes the site may read

export default async function handler(req, res) {
  if (req.method !== "GET") return res.status(405).json({ message: "Method not allowed" }); // read-only proxy

  const target = req.url.replace(/^\/api\/erpnext/, ""); // keeps path and query string
  const pathname = decodeURIComponent(target.split("?")[0]); // decode %20 in "Item Group"

  const resourceMatch = pathname.match(/^\/resource\/([^/]+)$/); // /resource/<Doctype>
  const isCount = pathname === "/method/frappe.client.get_count"; // only allowed method call

  if (!isCount && !(resourceMatch && ALLOWED_DOCTYPES.includes(resourceMatch[1]))) {
    return res.status(403).json({ message: "Path not allowed" }); // blocks everything else
  }

  const { ERPNEXT_URL, ERPNEXT_API_KEY, ERPNEXT_API_SECRET } = process.env; // set in Vercel settings
  if (!ERPNEXT_URL || !ERPNEXT_API_KEY || !ERPNEXT_API_SECRET) {
    return res.status(500).json({ message: "Missing ERPNext env vars" }); // helps debugging
  }

  try {
    const r = await fetch(`${ERPNEXT_URL}/api${target}`, {
      headers: { Authorization: `token ${ERPNEXT_API_KEY}:${ERPNEXT_API_SECRET}` }, // ERPNext token auth
    });
    const data = await r.json(); // ERPNext always returns JSON here
    res.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate=300"); // edge cache for speed
    return res.status(r.status).json(data); // pass status and body through
  } catch (err) {
    return res.status(502).json({ message: "ERPNext unreachable" }); // network failure
  }
}
