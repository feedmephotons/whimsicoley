import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  collections,
  getCollection,
  getProductsByCollection,
} from "@/data/products";
import type { CollectionId } from "@/components/ProductCard";
import ProductCard from "@/components/ProductCard";

export function generateStaticParams() {
  return collections.map((c) => ({ slug: c.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const collection = getCollection(slug as CollectionId);
  if (!collection) return { title: "Collection Not Found | WhimsiColey" };
  return {
    title: `${collection.name} | WhimsiColey`,
    description: collection.tagline,
  };
}

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const collection = getCollection(slug as CollectionId);
  if (!collection) notFound();

  const items = getProductsByCollection(collection.id);

  return (
    <div className="cosmic-bg min-h-screen pb-20">
      {/* Collection hero */}
      <section className="relative h-[42vh] min-h-[320px] flex items-center justify-center overflow-hidden">
        <Image
          src={collection.headerImage}
          alt={collection.name}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy-dark/55" />
        <div className="relative z-10 text-center px-4 max-w-2xl">
          <p className="text-gold text-sm uppercase tracking-[0.2em] mb-3">A WhimsiColey Collection</p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-cream text-shadow-glow">
            {collection.name}
          </h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm">
            <li>
              <Link href="/" className="text-cream-muted hover:text-gold transition-colors">Home</Link>
            </li>
            <li className="text-cream-muted">/</li>
            <li>
              <Link href="/collections" className="text-cream-muted hover:text-gold transition-colors">Collections</Link>
            </li>
            <li className="text-cream-muted">/</li>
            <li className="text-gold">{collection.name}</li>
          </ol>
        </nav>

        {/* Intro */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-cream/90 text-lg leading-relaxed first-letter:font-[family-name:var(--font-display)] first-letter:text-5xl first-letter:text-gold first-letter:float-left first-letter:mr-3 first-letter:leading-none">
            {collection.intro}
          </p>
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        {/* Other collections */}
        <div className="mt-20 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-2xl text-cream mb-6">
            Wander Further
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {collections
              .filter((c) => c.id !== collection.id)
              .map((c) => (
                <Link key={c.id} href={`/collections/${c.id}`} className="btn-outline text-sm py-2 px-5">
                  {c.name}
                </Link>
              ))}
            <Link href="/shop" className="btn-gold text-sm py-2 px-5">
              All Treasures
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
