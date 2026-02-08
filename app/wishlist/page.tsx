"use client";

import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { useWishlist } from "@/hooks/useWishlist";
import { products } from "@/data/products";

export default function WishlistPage() {
  const { wishlist, clearWishlist, isLoaded } = useWishlist();

  const wishlistProducts = products.filter((p) => wishlist.includes(p.id));

  if (!isLoaded) {
    return (
      <div className="section-dark min-h-screen pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gold mx-auto"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="section-dark min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-cream mb-4">
            Your Wishlist
          </h1>
          <p className="text-cream-muted max-w-xl mx-auto">
            {wishlistProducts.length > 0
              ? `You have ${wishlistProducts.length} treasure${wishlistProducts.length > 1 ? "s" : ""} saved`
              : "Start adding your favorite treasures!"}
          </p>
        </div>

        {wishlistProducts.length > 0 ? (
          <>
            {/* Clear button */}
            <div className="flex justify-end mb-6">
              <button
                onClick={clearWishlist}
                className="text-cream-muted hover:text-gold text-sm transition-colors"
              >
                Clear all
              </button>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {wishlistProducts.map((product) => (
                <ProductCard key={product.id} product={product} showWishlistButton />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-6 text-gold">&#9790;</div>
            <h2 className="text-2xl text-cream mb-4">Your wishlist is empty</h2>
            <p className="text-cream-muted mb-8">
              Browse our collection and click the heart icon to save your favorite pieces.
            </p>
            <Link href="/shop" className="btn-gold">
              Explore Shop
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
