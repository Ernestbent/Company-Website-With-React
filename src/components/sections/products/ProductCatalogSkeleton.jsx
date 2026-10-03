import { Search } from "lucide-react";

const skeletonCards = Array.from({ length: 16 }, (_, index) => index);

function ProductCardSkeleton() {
  return (
    <article className="overflow-hidden border border-b-4 border-[#eaeaea] border-b-[#ed5929] bg-white" aria-hidden="true">
      <div className="aspect-[4/3] w-full animate-pulse bg-[#e1e3e3]" />
      <div className="bg-[#3d2d1d] p-5">
        <div className="h-2.5 w-20 animate-pulse rounded bg-white/30" />
        <div className="mt-4 h-5 w-3/4 animate-pulse rounded bg-white/45" />
        <div className="mt-4 space-y-2">
          <div className="h-3 w-full animate-pulse rounded bg-white/25" />
          <div className="h-3 w-5/6 animate-pulse rounded bg-white/25" />
        </div>
        <div className="mt-7 flex items-center justify-between border-t border-white/25 pt-4">
          <div className="h-3 w-24 animate-pulse rounded bg-white/30" />
          <div className="h-3 w-16 animate-pulse rounded bg-white/30" />
        </div>
      </div>
    </article>
  );
}

function ProductCatalogSkeleton() {
  return (
    <section className="w-full bg-[#f7f7f7] py-12 sm:py-14 lg:py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <p className="text-xs font-semibold uppercase tracking-[1.5px] text-[#ed5929]">Parts catalogue</p>
        </div>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#171a21] sm:text-4xl">Explore our product range</h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-[#777777]">
          Browse our range of motorbike spare parts and find the right part for your needs.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-3 lg:grid-cols-[minmax(0,1fr)_180px_180px_120px]">
          <label className="relative block">
            <span className="sr-only">Search products</span>
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#888888]" aria-hidden="true" />
            <input type="search" placeholder="Search by part name or reference..." disabled className="h-12 w-full rounded-md border border-[#dddddd] bg-white pl-11 pr-4 text-sm text-[#555555] placeholder:text-[#999999] disabled:cursor-wait disabled:opacity-100" />
          </label>
          <label>
            <span className="sr-only">Product category</span>
            <select disabled defaultValue="all-categories" className="h-12 w-full rounded-md border border-[#dddddd] bg-white px-4 text-sm text-[#666666] disabled:cursor-wait disabled:opacity-100">
              <option value="all-categories">All categories</option>
            </select>
          </label>
          <label>
            <span className="sr-only">Product brand</span>
            <select disabled defaultValue="all-brands" className="h-12 w-full rounded-md border border-[#dddddd] bg-white px-4 text-sm text-[#666666] disabled:cursor-wait disabled:opacity-100">
              <option value="all-brands">All brands</option>
            </select>
          </label>
          <button type="button" disabled className="h-12 rounded-md bg-[#ed5929] px-5 text-sm font-semibold text-white disabled:cursor-wait disabled:opacity-75">SEARCH</button>
        </div>

        <div className="mt-6 flex items-center gap-5 border-b border-[#dedede] text-sm">
          <span className="border-b-2 border-[#ed5929] pb-3 font-medium text-[#ed5929]">All products</span>
        </div>
        <p className="sr-only" role="status">Loading products</p>
        <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {skeletonCards.map((card) => <ProductCardSkeleton key={card} />)}
        </div>
      </div>
    </section>
  );
}

export default ProductCatalogSkeleton;
