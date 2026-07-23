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
  const initialSort = searchParams.get("sort") || "featured";
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedPriceRange, setSelectedPriceRange] = useState("all");
  const [sortBy, setSortBy] = useState(initialSort);
  // Search comes in via the header search box and the megamenu "realm" links.
  const [searchTerm, setSearchTerm] = useState(searchParams.get("search") || "");

  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Text search — matches name, description, and category so the header
    // search box and the "Shop by Realm" nav links resolve to real results.
    const q = searchTerm.trim().toLowerCase();
    if (q) {
      filtered = filtered.filter((p) =>
        `${p.name} ${p.description} ${p.category}`.toLowerCase().includes(q)
      );
    }

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
      case "new":
        filtered = [...filtered].sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      case "popular":
        filtered = [...filtered].sort((a, b) => (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0));
        break;
      case "featured":
      default:
        filtered = [...filtered].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }

    return filtered;
  }, [searchTerm, selectedCategory, selectedPriceRange, sortBy]);

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

        {/* Active search chip */}
        {searchTerm.trim() && (
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 text-sm text-cream bg-navy-dark/40 border border-gold/30 rounded-full px-3 py-1.5">
              Searching for &ldquo;<span className="text-gold">{searchTerm}</span>&rdquo;
              <button
                onClick={() => setSearchTerm("")}
                className="text-cream-muted hover:text-gold transition-colors"
                aria-label="Clear search"
              >
                &times;
              </button>
            </span>
          </div>
        )}

        {/* Sort & Results Row */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-4 border-t border-gold/20">
          <p className="text-cream-muted text-sm">
            Showing <span className="text-gold font-semibold">{filteredProducts.length}</span> treasures
          </p>
          <div className="flex items-center gap-2">
            <label htmlFor="sort" className="text-cream-muted text-sm">Sort by:</label>
            <select
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-navy-dark/50 border border-gold/30 rounded-lg px-3 py-2 text-cream text-sm focus:outline-none focus:border-gold transition-colors"
            >
              <option value="featured">Featured</option>
              <option value="newest">Newest</option>
              <option value="popular">Most Loved</option>
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
        <div className="text-center py-16 animate-fade-in">
          <span className="text-gold text-4xl mb-4 block">&#9734;</span>
          <p className="text-cream text-lg mb-2 font-[family-name:var(--font-display)]">
            No treasures found in this corner of the shop.
          </p>
          <p className="text-cream-muted mb-5">
            Try a different search or wander back through the whole collection.
          </p>
          <button
            onClick={() => {
              setSearchTerm("");
              setSelectedCategory("all");
              setSelectedPriceRange("all");
            }}
            className="btn-outline text-sm py-2 px-6"
          >
            Show All Treasures
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
    <div className="cosmic-bg min-h-screen pt-12 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-cream mb-4">
            Our Collection
          </h1>
          <p className="text-cream-muted max-w-xl mx-auto">
            Browse our handcrafted creations. Each piece is made with care,
            attention to detail, and a love for the craft.
          </p>
        </div>

        <Suspense fallback={<ShopLoading />}>
          <ShopContent />
        </Suspense>

        {/* Reserve a Treasure Notice */}
        <div className="mt-16 text-center card p-8 max-w-2xl mx-auto">
          <h3 className="text-gold font-[family-name:var(--font-display)] text-2xl mb-3">
            Reserve a Treasure
          </h3>
          <p className="text-cream-muted mb-4">
            Every piece is one of a kind and made by hand. Found something that
            speaks to you? Send a note and Nicole will set it aside just for you.
          </p>
          <a href="/contact" className="btn-gold">
            Reserve or Commission a Piece
          </a>
        </div>
      </div>
    </div>
  );
}
