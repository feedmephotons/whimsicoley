import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug, getRelatedProducts, getCollection, products } from "@/data/products";
import ProductGallery from "@/components/ProductGallery";
import ProductCard from "@/components/ProductCard";

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found | WhimsiColey",
    };
  }

  return {
    title: `${product.name} | WhimsiColey`,
    description: product.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const collection = product.collection ? getCollection(product.collection) : undefined;
  const related = getRelatedProducts(product, 3);
  const gallery = product.images && product.images.length ? product.images : [product.image];

  return (
    <div className="cosmic-bg min-h-screen pt-12 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm">
            <li>
              <Link href="/" className="text-cream-muted hover:text-gold transition-colors">
                Home
              </Link>
            </li>
            <li className="text-cream-muted">/</li>
            <li>
              <Link href="/shop" className="text-cream-muted hover:text-gold transition-colors">
                Shop
              </Link>
            </li>
            <li className="text-cream-muted">/</li>
            <li className="text-gold">{product.name}</li>
          </ol>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Gallery */}
          <ProductGallery images={gallery} alt={product.name} />

          {/* Product Info */}
          <div>
            {collection ? (
              <Link
                href={`/collections/${collection.id}`}
                className="text-gold-light/70 text-sm uppercase tracking-wider hover:text-gold transition-colors"
              >
                {collection.name}
              </Link>
            ) : (
              <span className="text-gold-light/70 text-sm uppercase tracking-wider">
                {product.category.replace("-", " ")}
              </span>
            )}
            <h1 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-cream mt-2 mb-4">
              {product.name}
            </h1>
            <p className="text-gold text-3xl font-bold mb-6">${product.price}</p>

            {product.story && (
              <p className="text-cream/90 text-lg italic font-[family-name:var(--font-display)] mb-4 border-l-2 border-gold/40 pl-4">
                &ldquo;{product.story}&rdquo;
              </p>
            )}
            <p className="text-cream-muted text-lg mb-8">{product.description}</p>

            {/* Purchase Options */}
            <div className="space-y-4 mb-8">
              <Link
                href={`/contact?product=${encodeURIComponent(product.name)}`}
                className="w-full btn-gold flex items-center justify-center gap-2"
              >
                Reserve This Treasure
              </Link>
              <Link
                href="/custom"
                className="w-full btn-outline flex items-center justify-center gap-2"
              >
                Request a Custom Version
              </Link>
              <p className="text-cream-muted/70 text-xs text-center">
                One of a kind &amp; made by hand &mdash; reserve it and Nicole will set it aside for you.
              </p>
            </div>

            {/* Details */}
            <div className="card p-6 mb-6">
              <h3 className="text-gold font-semibold mb-4">The Details</h3>
              <dl className="space-y-3 text-sm">
                {product.materials && (
                  <div className="flex gap-3">
                    <dt className="text-gold w-28 shrink-0">Materials</dt>
                    <dd className="text-cream-muted">{product.materials}</dd>
                  </div>
                )}
                {product.dimensions && (
                  <div className="flex gap-3">
                    <dt className="text-gold w-28 shrink-0">Dimensions</dt>
                    <dd className="text-cream-muted">{product.dimensions}</dd>
                  </div>
                )}
                <div className="flex gap-3">
                  <dt className="text-gold w-28 shrink-0">Made by</dt>
                  <dd className="text-cream-muted">Nicole, by hand &mdash; one at a time</dd>
                </div>
              </dl>
            </div>

            {/* Shipping Info */}
            <div className="card p-6">
              <h3 className="text-gold font-semibold mb-4">Shipping &amp; Care</h3>
              <ul className="space-y-3 text-cream-muted text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-gold">&#10022;</span>
                  <span>Ships within 3&ndash;5 days, tucked in gift-ready packaging</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold">&#10022;</span>
                  <span>Each piece is one of a kind &mdash; small variations are part of the charm</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold">&#10022;</span>
                  <span>Keep dry and out of direct sunlight to preserve its glow</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-20">
            <div className="text-center mb-10">
              <h2 className="font-[family-name:var(--font-display)] text-3xl text-cream mb-3">
                Pairs Beautifully With
              </h2>
              <div className="divider-star max-w-xs mx-auto">
                <span className="text-gold">&#10022;</span>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}

        {/* Back to Shop */}
        <div className="mt-12 text-center">
          <Link href="/shop" className="text-cream-muted hover:text-gold transition-colors">
            &larr; Back to all treasures
          </Link>
        </div>
      </div>
    </div>
  );
}
