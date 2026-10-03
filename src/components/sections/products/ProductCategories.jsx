import {
  CircleDot,
  Cog,
  Disc3,
  Link2,
  MoveVertical,
  Zap,
} from "lucide-react";

const categories = [
  { name: "Engine parts", description: "Pistons, gaskets and valves", icon: Cog },
  { name: "Braking", description: "Shoes, pads and discs", icon: Disc3 },
  { name: "Suspension", description: "Shocks and fork parts", icon: MoveVertical },
  { name: "Electrical", description: "Lighting and ignition", icon: Zap },
  { name: "Drivetrain", description: "Chains and sprockets", icon: Link2 },
  { name: "Bearings", description: "Wheel and engine bearings", icon: CircleDot },
];

function ProductCategories({ activeCategory = "", onCategoryChange }) {
  return (
    <section className="w-full bg-white py-12 sm:py-14 lg:py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="flex items-center">
              <p className="text-xs font-semibold uppercase tracking-[1.5px] text-[#ed5929]">
                Find your part
              </p>
            </div>
            <h1 className="mb-0 mt-4 text-3xl font-semibold tracking-tight text-[#171a21] sm:text-4xl">
              Browse by category
            </h1>
          </div>
          <p className="max-w-md text-sm leading-6 text-[#777777] md:text-right">
            Parts for everyday repairs, workshop servicing, and planned maintenance.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {categories.map(({ name, description, icon: Icon }) => (
            <button
              key={name}
              type="button"
              onClick={() => onCategoryChange?.(activeCategory === name ? "" : name)}
              aria-pressed={activeCategory === name}
              className={`group min-h-[132px] rounded-lg border p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#ed5929]/30 hover:bg-white hover:shadow-md ${activeCategory === name ? "border-[#ed5929] bg-white shadow-md" : "border-[#e8e8e8] bg-[#f7f7f7]"}`}
            >
              <Icon className="h-6 w-6 text-[#ed5929] transition-transform duration-300 group-hover:scale-110" strokeWidth={1.7} aria-hidden="true" />
              <span className="mt-5 block text-sm font-semibold text-[#1e1e1e]">{name}</span>
              <span className="mt-2 block text-xs leading-5 text-[#777777]">{description}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductCategories;
