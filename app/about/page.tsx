import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="cosmic-bg min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Image */}
          <div className="relative order-2 md:order-1">
            <div className="card overflow-hidden aspect-square max-w-lg mx-auto">
              <Image
                src="/nicole.jpg"
                alt="Nicole - Creator of WhimsiColey"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-cream mb-6">
              Meet the Maker
            </h1>
            <p className="text-cream-muted text-lg mb-6">
              Hi, I&apos;m Nicole! Welcome to my little corner of sparkly magic.
            </p>
            <p className="text-cream-muted mb-4">
              I&apos;ve always been drawn to beautiful, whimsical things &ndash; the way
              moonlight dances on water, how crystals catch the sun, the magic of
              finding something that feels like it was made just for you.
            </p>
            <p className="text-cream-muted mb-4">
              That&apos;s what I try to create with every piece: a little treasure
              that brings joy and wonder to your everyday life.
            </p>
          </div>
        </div>

        {/* Story Section */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-cream mb-8">
            The WhimsiColey Story
          </h2>
          <div className="space-y-6 text-cream-muted">
            <p>
              WhimsiColey started as a creative outlet &ndash; a way to combine my love
              for crafting with my fascination for celestial and nature-inspired
              designs. What began as gifts for friends and family quickly grew
              into something more when I realized how much joy these little
              treasures brought to people.
            </p>
            <p>
              Each piece I create is handmade with intention and care. From
              wire-wrapped crystal pendants to hand-painted clay earrings, every
              item goes through my hands with love. I believe that handmade items
              carry a special energy that mass-produced jewelry just can&apos;t
              replicate.
            </p>
            <p>
              The name &quot;WhimsiColey&quot; is a blend of &quot;whimsical&quot; and my name,
              Nicole. It represents exactly what I hope to bring to your life
              &ndash; a touch of whimsy, a sprinkle of sparkle, and a whole lot of
              personality.
            </p>
          </div>
        </div>

        {/* What I Create Section */}
        <div className="mb-20">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-cream text-center mb-12">
            What I Create
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Jewelry",
                description:
                  "Wire-wrapped pendants, beaded bracelets, clay earrings, and more. Each piece designed to make you feel special.",
                icon: "💎",
              },
              {
                title: "Suncatchers",
                description:
                  "Crystal prisms and beaded beauties that dance with light and fill your space with rainbows.",
                icon: "🌙",
              },
              {
                title: "Home Decor",
                description:
                  "Resin coasters, trinket dishes, and decorative pieces that add magic to your everyday spaces.",
                icon: "✨",
              },
              {
                title: "Seasonal Items",
                description:
                  "Special collections for holidays and seasons, from spooky Halloween to cozy Christmas.",
                icon: "🎃",
              },
            ].map((item) => (
              <div key={item.title} className="card p-6 text-center">
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h3 className="text-gold font-semibold mb-3">{item.title}</h3>
                <p className="text-cream-muted text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-cream text-center mb-12">
            My Promise to You
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Handmade with Love",
                description:
                  "Every single piece is crafted by hand, ensuring quality and uniqueness in each creation.",
              },
              {
                title: "Quality Materials",
                description:
                  "I source the best materials I can find, from genuine crystals to durable metals and quality beads.",
              },
              {
                title: "Personal Touch",
                description:
                  "I love custom orders and working with you to create something truly special and meaningful.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <h3 className="text-gold font-semibold mb-3">{item.title}</h3>
                <p className="text-cream-muted text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center card p-12 max-w-2xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl text-cream mb-4">
            Let&apos;s Create Something Together
          </h2>
          <p className="text-cream-muted mb-6">
            Have a custom piece in mind? I&apos;d love to hear your ideas and bring
            your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/shop" className="btn-outline">
              Browse the Shop
            </Link>
            <Link href="/contact" className="btn-gold">
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
