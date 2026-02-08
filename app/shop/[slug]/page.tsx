import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug, products } from "@/data/products";

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

  return (
    <div className="cosmic-bg min-h-screen pt-28 pb-20">
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
          {/* Product Image */}
          <div className="card overflow-hidden">
            <div className="relative aspect-square">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Product Info */}
          <div>
            <span className="text-gold-light/70 text-sm uppercase tracking-wider">
              {product.category.replace("-", " ")}
            </span>
            <h1 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-cream mt-2 mb-4">
              {product.name}
            </h1>
            <p className="text-gold text-3xl font-bold mb-6">${product.price}</p>
            <p className="text-cream-muted text-lg mb-8">{product.description}</p>

            {/* Purchase Options */}
            <div className="space-y-4 mb-8">
              <button
                disabled
                className="w-full btn-gold opacity-75 cursor-not-allowed flex items-center justify-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.559 3c-.469.008-1.009.044-1.615.108-.405.044-.645.074-1.217.13-.078 1.064-.122 2.636-.132 4.716v8.152c.009 2.063.053 3.626.132 4.688.572.056.812.087 1.217.13.606.065 1.146.101 1.615.108.105-.007.18-.022.24-.044.06-.022.097-.053.118-.09.04-.073.059-.188.059-.344v-.435c0-.286-.05-.481-.152-.584-.101-.104-.294-.177-.577-.221-.349-.049-.611-.096-.787-.14-.308-.079-.528-.196-.658-.352-.131-.155-.21-.369-.24-.641-.029-.272-.043-.669-.043-1.188v-4.098h1.843c.308 0 .519-.062.631-.187.113-.125.169-.357.169-.696v-.513c0-.338-.056-.571-.169-.696-.112-.126-.323-.188-.631-.188h-1.843v-2.917c0-.308-.061-.515-.183-.622-.123-.107-.356-.161-.7-.161h-.661c-.344 0-.577.054-.699.161-.123.107-.184.314-.184.622v2.917h-1.096c-.308 0-.519.062-.631.188-.113.125-.169.358-.169.696v.513c0 .339.056.571.169.696.112.125.323.187.631.187h1.096v4.584c0 .866.062 1.539.188 2.018.125.479.359.885.701 1.217.342.332.811.555 1.408.669.596.114 1.381.167 2.354.161.297-.003.522-.044.677-.122.155-.078.234-.235.234-.471v-.661c0-.264-.05-.447-.152-.548-.101-.101-.309-.171-.623-.209-.601-.074-1.017-.184-1.248-.33-.23-.147-.384-.378-.461-.696-.077-.318-.116-.816-.116-1.494z" />
                </svg>
                Coming Soon to Etsy
              </button>
              <Link
                href={`/contact?product=${encodeURIComponent(product.name)}`}
                className="w-full btn-outline flex items-center justify-center gap-2"
              >
                Request This Item
              </Link>
            </div>

            {/* Details */}
            <div className="card p-6 mb-8">
              <h3 className="text-gold font-semibold mb-4">About This Piece</h3>
              <ul className="space-y-3 text-cream-muted text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-gold">&#10022;</span>
                  <span>Handmade with love and attention to detail</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold">&#10022;</span>
                  <span>Each piece is unique - slight variations make it special</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold">&#10022;</span>
                  <span>Quality materials sourced with care</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold">&#10022;</span>
                  <span>Custom variations available upon request</span>
                </li>
              </ul>
            </div>

            {/* Shipping Info */}
            <div className="card p-6">
              <h3 className="text-gold font-semibold mb-4">Shipping & Care</h3>
              <ul className="space-y-3 text-cream-muted text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-gold">📦</span>
                  <span>Ships within 3-5 business days</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold">🎁</span>
                  <span>Arrives in a beautiful gift-ready package</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold">&#10022;</span>
                  <span>Store in a dry place away from direct sunlight</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Back to Shop */}
        <div className="mt-12 text-center">
          <Link href="/shop" className="text-cream-muted hover:text-gold transition-colors">
            &larr; Back to Shop
          </Link>
        </div>
      </div>
    </div>
  );
}
