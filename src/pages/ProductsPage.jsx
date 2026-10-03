import { useState } from "react";
import Footer from "../components/layout/Footer";
import {
  ProductCatalog,
  ProductCategories,
} from "../components/sections/products";

function ProductsPage() {
  const [category, setCategory] = useState("");

  function handleCategoryChange(nextCategory) {
    setCategory(nextCategory);
    window.requestAnimationFrame(() => {
      document.getElementById("product-catalog")?.scrollIntoView({ behavior: "smooth" });
    });
  }

  return (
    <>
      <ProductCategories activeCategory={category} onCategoryChange={handleCategoryChange} />
      <ProductCatalog categoryQuery={category} />
      <Footer />
    </>
  );
}

export default ProductsPage;
