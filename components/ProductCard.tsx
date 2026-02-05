"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useWishlist } from "@/hooks/useWishlist";

export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  category: "jewelry" | "suncatchers" | "home-decor" | "seasonal";
  image: string;
  images?: string[];
  featured?: boolean;
  isNew?: boolean;
  isPopular?: boolean;
}

interface ProductCardProps {
  product: Product;
  showWishlistButton?: boolean;
}

export default function ProductCard({ product, showWishlistButton = true }: ProductCardProps) {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const isWishlisted = isInWishlist(product.id);
  const [heartAnimate, setHeartAnimate] = useState(false);

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product.id);
    setHeartAnimate(true);
    setTimeout(() => setHeartAnimate(false), 400);
  };

  return (
    <div className="group relative">
      <Link href={`/shop/${product.slug}`}>
        <div className="card card-lift overflow-hidden">
          <div className="relative aspect-square overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Badges */}
            <div className="absolute top-3 left-3 flex flex-col gap-2">
              {product.isNew && (
                <span className="bg-gold text-purple-dark text-xs font-bold px-2 py-1 rounded-full">
                  NEW
                </span>
              )}
              {product.isPopular && (
                <span className="bg-purple-mid text-cream text-xs font-bold px-2 py-1 rounded-full">
                  POPULAR
                </span>
              )}
              {product.featured && !product.isNew && !product.isPopular && (
                <span className="bg-gold/80 text-purple-dark text-xs font-bold px-2 py-1 rounded-full">
                  FEATURED
                </span>
              )}
            </div>
          </div>
          <div className="p-4">
            <span className="text-gold-light/70 text-xs uppercase tracking-wider">
              {product.category.replace("-", " ")}
            </span>
            <h3 className="text-cream font-semibold mt-1 group-hover:text-gold transition-colors">
              {product.name}
            </h3>
            <p className="text-cream-muted text-sm mt-1 line-clamp-2">
              {product.description}
            </p>
            <div className="flex items-center justify-between mt-3">
              <span className="text-gold font-bold">${product.price}</span>
              <span className="text-cream-muted text-sm group-hover:text-gold transition-colors">
                View Details &rarr;
              </span>
            </div>
          </div>
        </div>
      </Link>

      {/* Wishlist Button */}
      {showWishlistButton && (
        <button
          onClick={handleWishlistClick}
          className={`absolute top-3 right-3 p-2 rounded-full transition-all duration-300 z-10 icon-bounce ${
            isWishlisted
              ? "bg-gold text-purple-dark glow-attention"
              : "bg-purple-dark/50 text-cream hover:bg-gold hover:text-purple-dark"
          }`}
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <svg
            className={`w-5 h-5 ${heartAnimate ? "heart-animate" : ""}`}
            fill={isWishlisted ? "currentColor" : "none"}
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
