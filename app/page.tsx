import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { getFeaturedProducts } from "@/data/products";

function StarDecoration({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`w-4 h-4 text-gold animate-twinkle ${className}`}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
    </svg>
  );
}

export default function Home() {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="cosmic-bg">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Floating stars decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <StarDecoration className="absolute top-1/4 left-1/4" />
          <StarDecoration className="absolute top-1/3 right-1/4 animation-delay-500" />
          <StarDecoration className="absolute bottom-1/3 left-1/3 animation-delay-1000" />
          <StarDecoration className="absolute top-1/2 right-1/3 animation-delay-1500" />
          <StarDecoration className="absolute bottom-1/4 right-1/5 animation-delay-2000" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Logo */}
          <div className="animate-float mb-8">
            <Image
              src="/logo.png"
              alt="WhimsiColey - Sparkly & Shiny Things"
              width={500}
              height={150}
              className="mx-auto max-w-full h-auto"
              priority
            />
          </div>

          {/* Tagline */}
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl text-cream mb-6">
            Sparkly Jewelry, Trinkets & Little Treasures
          </h1>
          <p className="text-cream-muted text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Handcrafted celestial wonders to illuminate your day
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/shop" className="btn-gold text-lg">
              Explore Collection
            </Link>
            <Link href="/contact" className="btn-outline text-lg">
              Custom Orders
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-gold"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-cream mb-4">
              Featured Treasures
            </h2>
            <p className="text-cream-muted max-w-xl mx-auto">
              Discover our most beloved celestial creations, each piece crafted with
              love and a touch of magic.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/shop" className="btn-outline">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-purple-dark/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="card overflow-hidden aspect-square max-w-md mx-auto">
                <Image
                  src="/nicole.jpg"
                  alt="Nicole - The creator of WhimsiColey"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Decorative elements */}
              <StarDecoration className="absolute -top-4 -right-4 w-8 h-8" />
              <StarDecoration className="absolute -bottom-4 -left-4 w-6 h-6" />
            </div>

            {/* Content */}
            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-cream mb-6">
                Welcome to Whimsicoley
              </h2>
              <p className="text-cream-muted mb-4">
                Discover a world of magical handcrafted jewelry, sparkling suncatchers,
                and whimsical treasures that capture the wonder of the night sky.
              </p>
              <p className="text-cream-muted mb-6">
                Inspired by the cosmos, each creation is designed to bring a touch of
                whimsy and enchantment into your life. Every piece is handmade with
                love, attention to detail, and a sprinkle of stardust.
              </p>
              <Link href="/about" className="btn-gold">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-cream mb-4">
              Shop by Category
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Jewelry", slug: "jewelry", icon: "💎" },
              { name: "Suncatchers", slug: "suncatchers", icon: "🌙" },
              { name: "Home Decor", slug: "home-decor", icon: "✨" },
              { name: "Seasonal", slug: "seasonal", icon: "🎃" },
            ].map((category) => (
              <Link
                key={category.slug}
                href={`/shop?category=${category.slug}`}
                className="card p-6 text-center group"
              >
                <span className="text-4xl mb-4 block">{category.icon}</span>
                <h3 className="text-cream font-semibold group-hover:text-gold transition-colors">
                  {category.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-light/30 to-purple-mid/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-cream mb-6">
            Have Something Special in Mind?
          </h2>
          <p className="text-cream-muted text-lg mb-8">
            I love creating custom pieces! Whether it&apos;s a personalized gift or a
            unique treasure just for you, let&apos;s make your vision come to life.
          </p>
          <Link href="/contact" className="btn-gold text-lg">
            Request a Custom Order
          </Link>
        </div>
      </section>
    </div>
  );
}
