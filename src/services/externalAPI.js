async function getDoctypeCount(doctype, filters) {
  const params = new URLSearchParams({
    doctype,
    filters: JSON.stringify(filters),
  });

  const response = await fetch(
    `/api/erpnext/method/frappe.client.get_count?${params}`
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch ${doctype} count (${response.status})`);
  }

  const data = await response.json();
  const count = Number(data.message);

  if (!Number.isFinite(count)) {
    throw new Error(`${doctype} count response was not a number`);
  }

  return count;
}

export function getCustomerCount() {
  return getDoctypeCount("Customer", { disabled: 0 });
}

export function getSalesPersonCount() {
  return getDoctypeCount("Sales Person", { enabled: 1 });
}

export function getItemCount() {
  return getDoctypeCount("Item", { disabled: 0 });
}
