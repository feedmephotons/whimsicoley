import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import ProcessTimeline from "@/components/ProcessTimeline";

export const metadata: Metadata = {
  title: "Custom Treasures | WhimsiColey",
  description:
    "Commission a one-of-a-kind handcrafted keepsake from WhimsiColey. Share your vision and Nicole will bring it to life.",
};

const CAN_MAKE = [
  { title: "Memory Keepsakes", desc: "Preserve flowers from a wedding, a bouquet, or a garden that means something, sealed in resin to keep forever." },
  { title: "Birth-Month & Colors", desc: "A piece painted in your colors — birthstone tones, a galaxy in your favorite hues, or a bloom to match a season." },
  { title: "Celestial Commissions", desc: "Your own night sky — a moon phase, a constellation, or a little bottled galaxy made just for you." },
  { title: "Matching Sets", desc: "Necklace and earrings designed to belong together, or a set of little treasures for bridesmaids and friends." },
];

export default function CustomPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[46vh] min-h-[340px] flex items-center justify-center overflow-hidden">
        <Image
          src="/branding/our-story-apothecary-nook.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-navy-dark/60" />
        <div className="relative z-10 text-center px-4 max-w-2xl">
          <p className="text-gold text-sm uppercase tracking-[0.2em] mb-3">Made Just for You</p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-cream mb-4 text-shadow-glow">
            Commission a Custom Treasure
          </h1>
          <p className="text-cream-muted text-lg">
            Some keepsakes are too personal for a shelf. Dream it up together, and
            Nicole will craft it by hand — one of one, just for you.
          </p>
        </div>
      </section>

      {/* Intro + process */}
      <section className="section-dark py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-14">
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-cream mb-4">
              How a Custom Piece Comes to Life
            </h2>
            <p className="text-cream-muted max-w-xl mx-auto">
              No pressure and no obligation — just a gentle conversation about the
              treasure you have in mind.
            </p>
          </div>
          <ProcessTimeline />
        </div>
      </section>

      {/* What Nicole can make */}
      <section className="section-light py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-navy-dark mb-4">
              What Nicole Can Make
            </h2>
            <div className="divider-star max-w-xs mx-auto">
              <span className="text-gold">&#10022;</span>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {CAN_MAKE.map((item) => (
              <div key={item.title} className="card p-6">
                <h3 className="font-[family-name:var(--font-display)] text-xl text-navy-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-navy-mid text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing + CTA */}
      <section className="section-dark py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-cream mb-4">
            Honest, Handmade Pricing
          </h2>
          <p className="text-cream-muted mb-8">
            Most custom pieces fall between <span className="text-gold">$20 and $60</span>,
            depending on materials and detail. Memory pieces with pressed flowers or
            special keepsakes are quoted individually. You&apos;ll always see a full quote
            before anything is made.
          </p>
          <Link href="/contact?custom=true" className="btn-gold text-lg animate-pulse-glow">
            Start Your Custom Treasure
          </Link>
          <p className="text-cream-muted/70 text-sm mt-4">
            Prefer to browse first?{" "}
            <Link href="/shop" className="text-gold hover:underline">
              Explore the ready-made collection
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
