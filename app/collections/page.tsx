import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { collections, getProductsByCollection } from "@/data/products";

export const metadata: Metadata = {
  title: "Our Collections | WhimsiColey",
  description:
    "Explore WhimsiColey's handcrafted collections — The Celestial Collection, The Pressed Garden, and Wishes & Keepsakes.",
};

export default function CollectionsPage() {
  return (
    <div className="cosmic-bg min-h-screen pt-12 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-gold text-sm uppercase tracking-[0.2em] mb-3">Handcrafted Treasures</p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-cream mb-4">
            Our Collections
          </h1>
          <p className="text-cream-muted max-w-xl mx-auto">
            Every piece belongs to a little story. Wander through each collection and
            find the treasures that speak to you.
          </p>
        </div>

        <div className="space-y-12">
          {collections.map((c, i) => {
            const count = getProductsByCollection(c.id).length;
            return (
              <Link
                key={c.id}
                href={`/collections/${c.id}`}
                className="group block relative overflow-hidden rounded-xl border border-gold/25 card-lift"
              >
                <div className="relative aspect-[21/9] min-h-[280px]">
                  <Image
                    src={c.headerImage}
                    alt={c.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority={i === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/85 via-navy-dark/45 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-14 max-w-2xl">
                    <span className="text-gold text-xs uppercase tracking-[0.2em] mb-3">
                      {count} {count === 1 ? "treasure" : "treasures"}
                    </span>
                    <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-cream mb-3">
                      {c.name}
                    </h2>
                    <p className="text-cream-muted mb-5 max-w-md">{c.tagline}</p>
                    <span className="text-gold font-[family-name:var(--font-display)] text-lg group-hover:translate-x-1 transition-transform inline-flex items-center gap-2">
                      Enter the collection &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
