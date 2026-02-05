"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";

function ShopContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "all") return products;
    return products.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <>
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              selectedCategory === category.id
                ? "bg-gold text-purple-dark"
                : "bg-purple-light/30 text-cream hover:bg-purple-light/50"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-cream-muted text-lg">
            No products found in this category.
          </p>
        </div>
      )}
    </>
  );
}

function ShopLoading() {
  return (
    <div className="flex justify-center py-12">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gold"></div>
    </div>
  );
}

export default function ShopPage() {
  return (
    <div className="cosmic-bg min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-cream mb-4">
            Shop All Treasures
          </h1>
          <p className="text-cream-muted max-w-xl mx-auto">
            Browse our collection of handcrafted celestial wonders. Each piece is
            made with love and a sprinkle of stardust.
          </p>
        </div>

        <Suspense fallback={<ShopLoading />}>
          <ShopContent />
        </Suspense>

        {/* Etsy Coming Soon Notice */}
        <div className="mt-16 text-center card p-8 max-w-2xl mx-auto">
          <h3 className="text-gold font-semibold text-lg mb-3">
            Etsy Shop Coming Soon!
          </h3>
          <p className="text-cream-muted mb-4">
            Our Etsy store is launching soon for easy online purchases. In the
            meantime, you can request any item through our contact form.
          </p>
          <a href="/contact" className="btn-gold">
            Contact for Orders
          </a>
        </div>
      </div>
    </div>
  );
}
