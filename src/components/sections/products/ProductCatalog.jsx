import { AlertCircle, ChevronLeft, ChevronRight, Search } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import {
  getBrands,
  getEnabledItemCount,
  getItemGroups,
  getItems,
  searchItems,
} from "../../../services/productService";
import ProductCard from "./ProductCard";
import ProductCatalogSkeleton from "./ProductCatalogSkeleton";

const PAGE_SIZE = 16;

function ProductCatalog({ categoryQuery = "" }) {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [searching, setSearching] = useState(false);
  const [group, setGroup] = useState("all");
  const [brand, setBrand] = useState("all");
  const [groups, setGroups] = useState([]);
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setDebouncedSearch(search.trim());
    }, 350);

    return () => window.clearTimeout(timeout);
  }, [search]);

  useEffect(() => {
    const controller = new AbortController();

    const productsRequest = debouncedSearch
      ? searchItems({ query: debouncedSearch, brand, group, signal: controller.signal })
          .then((matches) => [matches, matches.length])
      : Promise.all([
          getItems({ start: (page - 1) * PAGE_SIZE, limit: PAGE_SIZE, brand, group, signal: controller.signal }),
          getEnabledItemCount({ brand, group, signal: controller.signal }),
        ]);

    productsRequest
      .then(([nextItems, count]) => {
        setItems(nextItems);
        setTotal(count);
      })
      .catch((requestError) => {
        if (requestError.name !== "AbortError") {
          console.error("Failed to load Item Master:", requestError);
          setError("We could not load products from Item Master. Please try again.");
        }
      })
      .finally(() => {
        if (!controller.signal.aborted) {
          setLoading(false);
          setSearching(false);
        }
      });

    return () => controller.abort();
  }, [brand, debouncedSearch, group, page]);

  useEffect(() => {
    const controller = new AbortController();
    Promise.all([getBrands(controller.signal), getItemGroups(controller.signal)])
      .then(([brandNames, groupNames]) => {
        setBrands(brandNames);
        setGroups(groupNames);
      })
      .catch((requestError) => {
        if (requestError.name !== "AbortError") {
          console.error("Failed to load ERPNext filter lists:", requestError);
        }
      });
    return () => controller.abort();
  }, []);

  const filteredItems = useMemo(() => {
    const categoryTerm = debouncedSearch ? "" : categoryQuery.toLowerCase();
    return items.filter((item) => {
      const text = [item.name, item.item_name, item.item_group, item.brand, item.description].filter(Boolean).join(" ").toLowerCase();
      return !categoryTerm || text.includes(categoryTerm);
    });
  }, [categoryQuery, debouncedSearch, items]);

  const visibleItems = debouncedSearch
    ? filteredItems.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)
    : filteredItems;
  const visibleTotal = debouncedSearch ? filteredItems.length : total;

  const pageCount = Math.max(1, Math.ceil(visibleTotal / PAGE_SIZE));

  function goToPage(nextPage) {
    setLoading(true);
    setError("");
    setPage(nextPage);
    window.scrollTo({ top: document.getElementById("product-catalog")?.offsetTop || 0, behavior: "smooth" });
  }

  function changeFilter(setter, value) {
    setLoading(true);
    setError("");
    setPage(1);
    setter(value);
  }

  function handleSearchChange(event) {
    const nextSearch = event.target.value;
    setSearch(nextSearch);
    if (nextSearch.trim()) {
      setBrand("all");
      setGroup("all");
    }
    setSearching(true);
    setError("");
    setPage(1);
  }

  if (loading) return <ProductCatalogSkeleton />;

  return (
    <section id="product-catalog" className="w-full scroll-mt-32 bg-[#f7f7f7] py-12 sm:py-14 lg:py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <span className="h-0.5 w-8 bg-[#ed5929]" aria-hidden="true" />
          <p className="text-xs font-semibold uppercase tracking-[1.5px] text-[#ed5929]">Parts catalogue</p>
        </div>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#171a21] sm:text-4xl">Explore our product range</h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-[#777777]">Browse enabled products fetched directly from our ERPNext Item Master, then contact us for a quotation.</p>

        <div className="mt-8 grid grid-cols-1 gap-3 lg:grid-cols-[minmax(0,1fr)_210px_210px]">
          <label className="relative block">
            <span className="sr-only">Search products</span>
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#888888]" aria-hidden="true" />
            <input value={search} onChange={handleSearchChange} type="search" placeholder="Search by item code, English name, Luganda name or OE number..." aria-busy={searching} className="h-12 w-full rounded-md border border-[#dddddd] bg-white pl-11 pr-4 text-sm text-[#555555] outline-none transition focus:border-[#ed5929] focus:ring-2 focus:ring-[#ed5929]/15" />
          </label>
          <label>
            <span className="sr-only">Product group</span>
            <select value={group} onChange={(event) => changeFilter(setGroup, event.target.value)} className="h-12 w-full rounded-md border border-[#dddddd] bg-white px-4 text-sm text-[#666666] outline-none focus:border-[#ed5929]">
              <option value="all">All product groups</option>
              {groups.map((value) => <option key={value} value={value}>{value}</option>)}
            </select>
          </label>
          <label>
            <span className="sr-only">Product brand</span>
            <select value={brand} onChange={(event) => changeFilter(setBrand, event.target.value)} className="h-12 w-full rounded-md border border-[#dddddd] bg-white px-4 text-sm text-[#666666] outline-none focus:border-[#ed5929]">
              <option value="all">All brands</option>
              {brands.map((value) => <option key={value} value={value}>{value}</option>)}
            </select>
          </label>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-b border-[#dedede] pb-3 text-sm">
          <span className="font-medium text-[#ed5929]">
            {searching ? "Searching Item Master…" : `${visibleTotal.toLocaleString()} ${debouncedSearch ? "matching" : "enabled"} products`}
          </span>
          {categoryQuery && <span className="text-[#666666]">Category: {categoryQuery}</span>}
        </div>

        {error ? (
          <div className="mt-8 flex flex-col items-center rounded-lg border border-red-200 bg-white px-6 py-12 text-center">
            <AlertCircle className="h-10 w-10 text-red-500" aria-hidden="true" />
            <p className="mt-4 text-[#555555]">{error}</p>
            <button type="button" onClick={() => window.location.reload()} className="mt-5 rounded-md bg-[#ed5929] px-5 py-3 text-sm font-semibold text-white">Try again</button>
          </div>
        ) : visibleItems.length ? (
          <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {visibleItems.map((item) => <ProductCard key={item.name} item={item} />)}
          </div>
        ) : (
          <div className="mt-8 rounded-lg border border-[#e2e2e2] bg-white px-6 py-14 text-center text-[#666666]">No products on this page match the selected filters.</div>
        )}

        {!error && pageCount > 1 && (
          <nav className="mt-10 flex items-center justify-center gap-4" aria-label="Product pages">
            <button type="button" disabled={page === 1} onClick={() => goToPage(Math.max(1, page - 1))} className="inline-flex h-10 items-center gap-2 rounded-md border border-[#dddddd] bg-white px-4 text-sm font-medium text-[#3d2d1d] transition hover:border-[#ed5929] disabled:cursor-not-allowed disabled:opacity-40"><ChevronLeft className="h-4 w-4" aria-hidden="true" /> Previous</button>
            <span className="text-sm text-[#666666]">Page {page} of {pageCount}</span>
            <button type="button" disabled={page === pageCount} onClick={() => goToPage(Math.min(pageCount, page + 1))} className="inline-flex h-10 items-center gap-2 rounded-md border border-[#dddddd] bg-white px-4 text-sm font-medium text-[#3d2d1d] transition hover:border-[#ed5929] disabled:cursor-not-allowed disabled:opacity-40">Next <ChevronRight className="h-4 w-4" aria-hidden="true" /></button>
          </nav>
        )}
      </div>
    </section>
  );
}

export default ProductCatalog;
