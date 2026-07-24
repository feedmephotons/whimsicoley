import { Product, CollectionId } from "@/components/ProductCard";

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured).slice(0, 8);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getNewProducts(): Product[] {
  return products.filter((p) => p.isNew);
}

export function getProductsByCollection(id: CollectionId): Product[] {
  return products.filter((p) => p.collection === id);
}

/** Up to `limit` other pieces from the same collection (falls back to category). */
export function getRelatedProducts(product: Product, limit = 3): Product[] {
  const pool = products.filter(
    (p) =>
      p.slug !== product.slug &&
      (product.collection ? p.collection === product.collection : p.category === product.category)
  );
  return pool.slice(0, limit);
}

export const categories = [
  { id: "all", label: "All Treasures" },
  { id: "jewelry", label: "Jewelry" },
  { id: "earrings", label: "Earrings" },
  { id: "keychains", label: "Keychains" },
];

export interface Collection {
  id: CollectionId;
  name: string;
  tagline: string;
  intro: string;
  headerImage: string;
  accent: "gold" | "rose" | "teal";
}

export const collections: Collection[] = [
  {
    id: "sprinkled-in-stardust",
    name: "Sprinkled in Stardust",
    tagline: "Galaxies, crescent moons & stardust captured in resin",
    intro:
      "For the ones who wish on stars and read the sky like a storybook. Every piece holds a little of the night — swirling galaxies, gilded moons, and stardust suspended in glass, made to keep the wonder close.",
    headerImage: "/branding/collection-header-celestial.png",
    accent: "teal",
  },
  {
    id: "pressed-garden",
    name: "The Pressed Garden",
    tagline: "Real roses & pressed blooms preserved beneath glass",
    intro:
      "A garden that never fades. Real petals, dried roses, and botanical illustrations are pressed and sealed beneath glass and resin — small keepsakes of bloom and leaf, gathered as if from a moonlit garden at twilight.",
    headerImage: "/branding/collection-header-celestial.png",
    accent: "rose",
  },
  {
    id: "wishes-keepsakes",
    name: "Wishes & Keepsakes",
    tagline: "Tiny corked bottles and little tokens of love",
    intro:
      "Little treasures made to be carried close. Corked wish bottles, glimmering hearts, and pocket-sized charms — each one a small, intentional token of love, luck, and a wish kept safe.",
    headerImage: "/branding/newsletter-cta-wish-bottle-band.png",
    accent: "gold",
  },
];

export function getCollection(id: CollectionId): Collection | undefined {
  return collections.find((c) => c.id === id);
}

export const products: Product[] = [
  // ── JEWELRY: NECKLACES ───────────────────────────────────────────────────
  {
    id: "1",
    slug: "vintage-rose-oval-pendant",
    name: "Vintage Rose Oval Pendant",
    description:
      "A beautifully illustrated vintage rose set beneath a smooth glass dome in a gold-tone bezel — like a tiny painting you can wear. Hangs on a black waxed cord.",
    price: 22,
    category: "jewelry",
    collection: "pressed-garden",
    image: "/products/vintage-rose-oval-pendant-1.jpg",
    images: ["/products/vintage-rose-oval-pendant-1.jpg", "/products/vintage-rose-oval-pendant-2.jpg"],
    materials: "Glass dome, gold-tone bezel, vintage rose illustration, black waxed cord",
    dimensions: 'Pendant approx. 1" tall · adjustable 18" cord',
    story:
      "Like a page pressed from an old fairytale — one perfect rose, kept forever under glass.",
    featured: true,
    isNew: true,
  },
  {
    id: "2",
    slug: "golden-heart-pendant",
    name: "Golden Heart Pendant",
    description:
      "A bold, warm-hearted statement piece — a puffy resin heart filled with shimmering amber-gold glitter that catches every bit of light. On a black waxed cord.",
    price: 18,
    category: "jewelry",
    collection: "wishes-keepsakes",
    image: "/products/golden-heart-pendant-1.jpg",
    images: ["/products/golden-heart-pendant-1.jpg", "/products/golden-heart-pendant-2.jpg"],
    materials: "Cast resin, amber-gold glitter, black waxed cord",
    dimensions: 'Heart approx. 1.25" wide · adjustable 18" cord',
    story: "A little pocketful of candlelight, worn close to the heart.",
    isPopular: true,
  },
  {
    id: "3",
    slug: "botanical-butterfly-pendant",
    name: "Botanical Butterfly Pendant",
    description:
      "A dreamy round pendant framed by a delicate pearl-bead border, encasing a vintage botanical butterfly illustration on a sage-cream background. Timeless and nature-inspired.",
    price: 24,
    category: "jewelry",
    collection: "pressed-garden",
    image: "/products/botanical-butterfly-pendant-1.jpg",
    images: ["/products/botanical-butterfly-pendant-1.jpg", "/products/botanical-butterfly-pendant-2.jpg"],
    materials: "Glass dome, pearl-bead border, botanical illustration, black waxed cord",
    dimensions: 'Pendant approx. 1.1" diameter · adjustable 18" cord',
    story: "A butterfly caught mid-flight through an old botanist's journal.",
    featured: true,
  },
  {
    id: "4",
    slug: "celestial-butterfly-pendant",
    name: "Celestial Butterfly Pendant",
    description:
      "A hexagonal pendant with a hand-painted galaxy interior — swirling indigo, violet, and midnight blue with a butterfly silhouette, gold stars, and a crescent moon. Framed by a pearl-bead border. Truly one of a kind.",
    price: 28,
    category: "jewelry",
    collection: "sprinkled-in-stardust",
    image: "/products/celestial-butterfly-pendant-1.jpg",
    images: ["/products/celestial-butterfly-pendant-1.jpg", "/products/celestial-butterfly-pendant-2.jpg"],
    materials: "Hand-painted resin, pearl-bead border, gold-tone accents, black waxed cord",
    dimensions: 'Pendant approx. 1.2" across · adjustable 18" cord',
    story: "A whole galaxy folded into the wings of a butterfly, no two skies alike.",
    featured: true,
    isNew: true,
  },
  {
    id: "5",
    slug: "stardust-wish-bottle-necklace",
    name: "Stardust Wish Bottle Necklace",
    description:
      "A tiny corked glass bottle filled with iridescent stardust and a dangling star charm — wear your wishes close. On a black waxed cord.",
    price: 20,
    category: "jewelry",
    collection: "sprinkled-in-stardust",
    image: "/products/stardust-wish-bottle-necklace-1.jpg",
    images: ["/products/stardust-wish-bottle-necklace-1.jpg", "/products/stardust-wish-bottle-necklace-2.jpg"],
    materials: "Corked glass bottle, iridescent stardust, gold-tone star charm, black waxed cord",
    dimensions: 'Bottle approx. 0.8" tall · adjustable 18" cord',
    story: "A bottled fragment of the Milky Way, corked before it could drift away.",
    isPopular: true,
  },
  {
    id: "6",
    slug: "love-wish-bottle-necklace",
    name: "Love Wish Bottle Necklace",
    description:
      "A sweet little corked bottle necklace filled with rosy pink crystals and a heart charm — a wearable token of love and intention.",
    price: 20,
    category: "jewelry",
    collection: "wishes-keepsakes",
    image: "/products/love-wish-bottle-necklace-1.jpg",
    images: ["/products/love-wish-bottle-necklace-1.jpg", "/products/love-wish-bottle-necklace-2.jpg"],
    materials: "Corked glass bottle, rose-pink crystals, heart charm, black waxed cord",
    dimensions: 'Bottle approx. 0.8" tall · adjustable 18" cord',
    story: "A wish for love, sealed with a cork and carried over the heart.",
    isNew: true,
  },
  {
    id: "7",
    slug: "pressed-rose-gold-foil-pendant",
    name: "Pressed Rose & Gold Foil Pendant",
    description:
      "A round resin pendant encasing real dried rose petals and shimmering gold foil in a silver bezel — nature preserved in a wearable keepsake. Every piece is unique.",
    price: 26,
    category: "jewelry",
    collection: "pressed-garden",
    image: "/products/pressed-rose-gold-foil-pendant-1.jpg",
    images: ["/products/pressed-rose-gold-foil-pendant-1.jpg", "/products/pressed-rose-gold-foil-pendant-2.jpg"],
    materials: "Clear resin, real dried rose petals, gold foil, silver-tone bezel, black cord",
    dimensions: 'Pendant approx. 1" diameter · adjustable 18" cord',
    story: "Real petals and flecks of gold, kept from ever wilting.",
    featured: true,
    isPopular: true,
  },

  // ── JEWELRY: EARRINGS ────────────────────────────────────────────────────
  {
    id: "8",
    slug: "moonstone-teardrop-earrings",
    name: "Moonstone Teardrop Earrings",
    description:
      "Luminous teardrop drop earrings in a gold bezel setting, filled with white iridescent druzy crystal that shimmers with rainbow light. Gold ball stud posts.",
    price: 22,
    category: "earrings",
    collection: "sprinkled-in-stardust",
    image: "/products/moonstone-teardrop-earrings-1.jpg",
    images: ["/products/moonstone-teardrop-earrings-1.jpg", "/products/moonstone-teardrop-earrings-2.jpg"],
    materials: "Iridescent druzy crystal, gold-tone bezel, gold ball stud posts",
    dimensions: 'Teardrops approx. 0.9" long · gold stud posts',
    story: "Two drops of moonlight, still shimmering when you turn your head.",
    featured: true,
    isNew: true,
  },
  {
    id: "9",
    slug: "dark-rose-rectangle-earrings",
    name: "Dark Rose Rectangle Earrings",
    description:
      "Bold, romantic rectangle drop earrings featuring rich red roses on a deep jewel-dark background with gold vine detailing. A statement for dreamers who love the dramatic.",
    price: 20,
    category: "earrings",
    collection: "pressed-garden",
    image: "/products/dark-rose-rectangle-earrings-1.jpg",
    images: ["/products/dark-rose-rectangle-earrings-1.jpg", "/products/dark-rose-rectangle-earrings-2.jpg"],
    materials: "Printed resin panels, gold vine detailing, gold-tone hooks",
    dimensions: 'Panels approx. 1.4" long · gold hook fittings',
    story: "Roses blooming in the dark, for the dramatic and the tender-hearted.",
    isPopular: true,
  },
  {
    id: "10",
    slug: "galaxy-teardrop-earrings",
    name: "Galaxy Teardrop Earrings",
    description:
      "Generous teardrop drop earrings hand-painted with a swirling celestial galaxy — teal, indigo, and mauve with gold stars and a crescent moon suspended in resin. Otherworldly.",
    price: 24,
    category: "earrings",
    collection: "sprinkled-in-stardust",
    image: "/products/galaxy-teardrop-earrings-1.jpg",
    images: ["/products/galaxy-teardrop-earrings-1.jpg", "/products/galaxy-teardrop-earrings-2.jpg"],
    materials: "Hand-painted resin, gold star & moon accents, gold-tone hooks",
    dimensions: 'Teardrops approx. 1.3" long · gold hook fittings',
    story: "A pair of little night skies, swirling teal and gold, hung from the ears.",
    featured: true,
    isPopular: true,
  },
  {
    id: "11",
    slug: "pressed-flower-heart-earrings",
    name: "Pressed Flower Heart Earrings",
    description:
      "Heart-shaped drop earrings — clear resin hearts with real dried pink rosebuds and gold leaf flakes suspended inside, dangling from a gold stud post. Like tiny botanical gardens for your ears.",
    price: 22,
    category: "earrings",
    collection: "pressed-garden",
    image: "/products/pressed-flower-heart-earrings-1.jpg",
    images: ["/products/pressed-flower-heart-earrings-1.jpg", "/products/pressed-flower-heart-earrings-2.jpg"],
    materials: "Clear resin, real dried rosebuds, gold leaf flakes, gold stud posts",
    dimensions: 'Hearts approx. 0.7" wide · dangle from gold studs',
    story: "A whole rose garden, shrunk down and set to swing from your ears.",
    isNew: true,
  },
  {
    id: "12",
    slug: "clay-rose-leaf-drop-earrings",
    name: "Clay Rose & Leaf Drop Earrings",
    description:
      "Handcrafted from polymer clay — each pair features a sculpted dusty-rose bloom with two delicate sage-green leaf charms dangling on gold chain. Nicole's most intricate work.",
    price: 26,
    category: "earrings",
    collection: "pressed-garden",
    image: "/products/clay-rose-leaf-drop-earrings-1.jpg",
    images: ["/products/clay-rose-leaf-drop-earrings-1.jpg", "/products/clay-rose-leaf-drop-earrings-2.jpg"],
    materials: "Hand-sculpted polymer clay, gold-tone chain & leaf charms, stud posts",
    dimensions: 'Approx. 1.6" long including leaf drops · stud posts',
    story: "Sculpted petal by petal — the most patient piece in the whole studio.",
    featured: true,
    isNew: true,
  },

  // ── KEYCHAINS ────────────────────────────────────────────────────────────
  {
    id: "13",
    slug: "enchanted-bottle-keychain",
    name: "Enchanted Bottle Keychain",
    description:
      "A tiny corked glass bottle filled with a rainbow of micro-beads and iridescent sparkle, finished with an ornate silver floral charm and keychain ring. A little magic for your keys or bag.",
    price: 14,
    category: "keychains",
    collection: "wishes-keepsakes",
    image: "/products/enchanted-bottle-keychain-1.jpg",
    images: ["/products/enchanted-bottle-keychain-1.jpg", "/products/enchanted-bottle-keychain-2.jpg"],
    materials: "Corked glass bottle, mixed micro-beads, silver filigree charm, split-ring keychain",
    dimensions: 'Bottle approx. 1.2" tall · silver split ring',
    story: "A pinch of rainbow for your keys — a little enchantment on every trip out the door.",
    isPopular: true,
  },
];
