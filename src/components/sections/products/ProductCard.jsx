import { Package } from "lucide-react";
import { getItemImageUrl } from "../../../services/productService";

function stripHtml(value = "") {
  return value.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

function ProductCard({ item, priority = false, first = false }) {
  const imageUrl = getItemImageUrl(item.image);
  const description = stripHtml(item.description);

  return (
    <article className="group flex h-full min-h-[330px] flex-col overflow-hidden border border-b-4 border-[#eaeaea] border-b-[#ed5929] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex aspect-[4/3] w-full items-center justify-center overflow-hidden bg-[#eef0f0]">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={item.item_name || item.name}
            loading={priority ? "eager" : "lazy"}
            fetchPriority={first ? "high" : "auto"}
            decoding="async"
            width={400}
            height={300}
            className="block h-full w-full object-contain p-5 transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <Package className="h-14 w-14 text-[#b8bcbc]" strokeWidth={1.2} aria-hidden="true" />
        )}
      </div>

      <div className="flex flex-1 flex-col bg-[#3d2d1d] p-5 text-white">
        <p className="text-[12px] font-medium uppercase tracking-[0.08em] text-[#f28a5f]">
          {item.brand || item.item_group || "Motorbike parts"}
        </p>
        <h3 className="mt-2 line-clamp-2 text-[19px] font-medium leading-6 text-white">
          {item.item_name || item.name}
        </h3>
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-white/85">
          {description || item.item_group || "Quality motorbike spare part."}
        </p>
        <div className="mt-auto flex items-center justify-between gap-3 border-t border-white/25 pt-4 text-[13px] text-white/90">
          <span className="truncate">Item code: {item.name}</span>
          {item.brand && <span className="shrink-0 font-medium text-white">{item.item_group}</span>}
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
