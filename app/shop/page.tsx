"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";

const PRICE_RANGES = [
  { id: "all", label: "All Prices", min: 0, max: Infinity },
  { id: "under-25", label: "Under $25", min: 0, max: 24.99 },
  { id: "25-40", label: "$25 - $40", min: 25, max: 40 },
  { id: "40-60", label: "$40 - $60", min: 40, max: 60 },
  { id: "over-60", label: "Over $60", min: 60.01, max: Infinity },
];

function ShopContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedPriceRange, setSelectedPriceRange] = useState("all");
  const [sortBy, setSortBy] = useState("featured");

  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Category filter
    if (selectedCategory !== "all") {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    // Price filter
    const priceRange = PRICE_RANGES.find((r) => r.id === selectedPriceRange);
    if (priceRange && priceRange.id !== "all") {
      filtered = filtered.filter(
        (p) => p.price >= priceRange.min && p.price <= priceRange.max
      );
    }

    // Sorting
    switch (sortBy) {
      case "price-low":
        filtered = [...filtered].sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered = [...filtered].sort((a, b) => b.price - a.price);
        break;
      case "name":
        filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "newest":
        filtered = [...filtered].sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      case "featured":
      default:
        filtered = [...filtered].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }

    return filtered;
  }, [selectedCategory, selectedPriceRange, sortBy]);

  return (
    <>
      {/* Filters Container */}
      <div className="card p-6 mb-8 animate-fade-in">
        {/* Category Filter */}
        <div className="mb-6">
          <h3 className="text-gold text-sm font-semibold mb-3 uppercase tracking-wider">Category</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`filter-chip ${
                  selectedCategory === category.id ? "active" : ""
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Price Range Filter */}
        <div className="mb-6">
          <h3 className="text-gold text-sm font-semibold mb-3 uppercase tracking-wider">Price Range</h3>
          <div className="flex flex-wrap gap-2">
            {PRICE_RANGES.map((range) => (
              <button
                key={range.id}
                onClick={() => setSelectedPriceRange(range.id)}
                className={`filter-chip ${
                  selectedPriceRange === range.id ? "active" : ""
                }`}
              >
                {range.label}
              </button>
            ))}
          </div>
        </div>

        {/* Sort & Results Row */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-4 border-t border-gold/20">
          <p className="text-cream-muted text-sm">
            Showing <span className="text-gold font-semibold">{filteredProducts.length}</span> products
          </p>
          <div className="flex items-center gap-2">
            <label htmlFor="sort" className="text-cream-muted text-sm">Sort by:</label>
            <select
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-purple-dark/50 border border-gold/30 rounded-lg px-3 py-2 text-cream text-sm focus:outline-none focus:border-gold transition-colors"
            >
              <option value="featured">Featured</option>
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name A-Z</option>
            </select>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product, index) => (
          <div
            key={product.id}
            className="animate-fade-in-up"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12 animate-fade-in">
          <span className="text-5xl mb-4 block">🔍</span>
          <p className="text-cream-muted text-lg mb-2">
            No products found matching your filters.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("all");
              setSelectedPriceRange("all");
            }}
            className="text-gold hover:underline"
          >
            Clear all filters
          </button>
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
