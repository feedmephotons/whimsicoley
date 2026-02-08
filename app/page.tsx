import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { getFeaturedProducts } from "@/data/products";
import ParallaxElements from "@/components/ParallaxElements";
import SparkleCanvas from "@/components/SparkleCanvas";
import Testimonials from "@/components/Testimonials";
import ProcessTimeline from "@/components/ProcessTimeline";

function StarDecoration({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg
      className={`w-4 h-4 text-gold animate-twinkle ${className}`}
      style={style}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 2L13.09 8.26L18 6L14.74 10.91L21 12L14.74 13.09L18 18L13.09 15.74L12 22L10.91 15.74L6 18L9.26 13.09L3 12L9.26 10.91L6 6L10.91 8.26L12 2Z" />
    </svg>
  );
}

function MoonIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={`w-10 h-10 text-gold ${className}`} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 3a9 9 0 109 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 01-4.4 2.26 5.403 5.403 0 01-3.14-9.8c-.44-.06-.9-.1-1.36-.1z" />
    </svg>
  );
}

function GentleStarIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={`w-10 h-10 text-gold ${className}`} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L13.09 8.26L18 6L14.74 10.91L21 12L14.74 13.09L18 18L13.09 15.74L12 22L10.91 15.74L6 18L9.26 13.09L3 12L9.26 10.91L6 6L10.91 8.26L12 2Z" />
    </svg>
  );
}

function RoseIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={`w-10 h-10 text-rose ${className}`} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C9.5 2 7.5 4 7.5 6.5c0 1.5.7 2.8 1.8 3.7C8.5 11 8 12 8 13c0 2.2 1.8 4 4 4s4-1.8 4-4c0-1-.5-2-1.3-2.8 1.1-.9 1.8-2.2 1.8-3.7C16.5 4 14.5 2 12 2z" />
      <path d="M12 17v5M9 19.5c1 .3 2 .5 3 .5s2-.2 3-.5" opacity="0.7" />
    </svg>
  );
}

function LeafIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={`w-10 h-10 text-sage ${className}`} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.71c.41.59.94 1.09 1.55 1.47C9.44 21.56 10.68 22 12 22c3.31 0 6-2.69 6-6 0-2.21-1.2-4.15-3-5.19V8z" />
      <path d="M17 8c1.5-2 2-4 2-6-2.5 0-5.5 1.5-7 4" opacity="0.7" />
    </svg>
  );
}

export default function Home() {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="section-cosmic relative flex items-center justify-center" style={{ minHeight: 'calc(100vh - 100px)' }}>
        <SparkleCanvas />
        <ParallaxElements />

        {/* Floating stars decoration */}
        <div className="absolute inset-0 pointer-events-none z-10">
          <StarDecoration className="absolute top-1/4 left-1/4" />
          <StarDecoration className="absolute top-1/3 right-1/4" style={{ animationDelay: '0.5s' }} />
          <StarDecoration className="absolute bottom-1/3 left-1/3" style={{ animationDelay: '1s' }} />
          <StarDecoration className="absolute top-1/2 right-1/3" style={{ animationDelay: '1.5s' }} />
          <StarDecoration className="absolute bottom-1/4 right-1/5" style={{ animationDelay: '2s' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
          {/* Logo */}
          <div className="animate-float mb-8">
            <Image
              src="/logo.png"
              alt="WhimsiColey - Handcrafted Treasures"
              width={500}
              height={150}
              className="mx-auto max-w-full h-auto"
              priority
            />
          </div>

          {/* Tagline */}
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl text-cream mb-6 text-shadow-glow">
            Handcrafted Treasures for Dreamers and Stargazers
          </h1>
          <p className="text-cream-muted text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Timeless, nature-inspired creations made with love and intention
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/shop" className="btn-gold btn-ripple text-lg animate-pulse-glow">
              Discover the Collection
            </Link>
            <Link href="/contact" className="btn-outline btn-ripple text-lg">
              Request a Treasure
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
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
      <section className="section-light py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-navy-dark mb-4">
              Featured Treasures
            </h2>
            <div className="divider-star max-w-md mx-auto mb-4">
              <StarDecoration className="text-gold" />
            </div>
            <p className="text-navy-mid max-w-xl mx-auto">
              Explore our most cherished creations, each piece lovingly made by hand.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/shop" className="btn-gold">
              View All Treasures
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section-dark py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative z-10">
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
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-cream mb-6">
                Welcome to Whimsicoley
              </h2>
              <p className="text-cream-muted mb-4">
                Welcome to a world of handcrafted jewelry, light-catching suncatchers,
                and treasures that hold a quiet kind of magic.
              </p>
              <p className="text-cream-muted mb-6">
                Inspired by nature, moonlight, and the beauty of small wonders, each
                piece is made by hand with care, intention, and a love for timeless craft.
              </p>
              <Link href="/about" className="btn-gold">
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section-lavender py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-navy-dark mb-4">
              Explore Our Collections
            </h2>
            <div className="divider-star max-w-md mx-auto">
              <StarDecoration className="text-gold" />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Jewelry", slug: "jewelry", icon: <MoonIcon />, desc: "Necklaces, earrings, rings & bracelets" },
              { name: "Suncatchers", slug: "suncatchers", icon: <GentleStarIcon />, desc: "Crystal prisms & window art" },
              { name: "Home Decor", slug: "home-decor", icon: <RoseIcon />, desc: "Coasters, dishes & accent pieces" },
              { name: "Seasonal", slug: "seasonal", icon: <LeafIcon />, desc: "Holiday & seasonal collections" },
            ].map((category) => (
              <Link
                key={category.slug}
                href={`/shop?category=${category.slug}`}
                className="card p-6 text-center group"
              >
                <span className="mb-4 block flex justify-center">{category.icon}</span>
                <h3 className="text-navy-dark font-semibold group-hover:text-gold transition-colors">
                  {category.name}
                </h3>
                <p className="text-navy-mid text-sm mt-2">{category.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-dark py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-cream mb-4">
              Words from Our Community
            </h2>
            <p className="text-cream-muted max-w-xl mx-auto">
              Hear from those who have welcomed a little wonder into their world.
            </p>
          </div>
          <Testimonials />
        </div>
      </section>

      {/* Process Timeline Section */}
      <section className="section-light py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-navy-dark mb-4">
              How Custom Orders Work
            </h2>
            <p className="text-navy-mid max-w-xl mx-auto">
              Creating your perfect piece is simple. Here&apos;s how we bring your vision to life.
            </p>
          </div>
          <ProcessTimeline />
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-cosmic py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-cream mb-6 text-shadow-glow">
            Have Something Special in Mind?
          </h2>
          <p className="text-cream-muted text-lg mb-8">
            Every treasure begins as a spark of imagination. Share your vision,
            and together we&apos;ll bring it to life.
          </p>
          <Link href="/contact" className="btn-gold text-lg animate-pulse-glow">
            Begin Your Custom Order
          </Link>
        </div>
      </section>
    </div>
  );
}
