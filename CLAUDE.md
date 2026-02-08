# Whimsicoley

## Project Overview
Next.js 16 + React 19 + Tailwind CSS 4 handcrafted brand website for Nicole's Whimsicoley shop. Etsy-adjacent e-commerce showcase with custom order focus.

**Stack:** Next.js 16.1.6, React 19.2.3, Tailwind CSS 4, TypeScript
**Deploy:** Vercel (feedmephotons-projects team, token: `iWOAm31BhkIsl22OJAr8mYY8`)

## Brand DNA — Whimsicoley

**One-Sentence Summary:** Whimsicoley is a whimsical, celestial-inspired handcrafted brand blending vintage storybook elegance, soft florals, and moonlit magic to create meaningful jewelry and keepsakes for dreamers and stargazers.

### Core Essence
Romantic, handcrafted brand rooted in whimsy, celestial wonder, and nostalgic fantasy. Old-world storybook elegance meets dreamy magical symbolism. Objects feel like keepsakes from another realm. Intimate, gentle, intentional — not mass-produced, not trendy — timeless and emotionally resonant.

**It should feel like:**
- Opening a beautifully illustrated fairytale
- A moonlit garden at twilight
- A curated apothecary of dreams, wishes, and stars

**Target audience:** Dreamers, stargazers, romantics, sentimental collectors — people who value meaning, symbolism, and beauty.

### Emotional Vibe
- Dreamy, Mystical, Softly romantic
- Warm, inviting, comforting
- Nostalgic and story-driven
- Gentle whimsy (playful, not childish)
- Nothing loud, aggressive, edgy, or hyper-modern. Slow beauty, intentional craft, magical realism.

### Color Palette

**Primary:**
| Color | Hex | Usage |
|-------|-----|-------|
| Midnight Navy / Deep Indigo | `#0F1B2D` | Main background, evokes night sky |
| Antique Gold | `#C9A94E` | Primary accent — typography, borders, stars, moons, buttons. Warm & slightly aged, NOT chrome. |

**Secondary & Supporting:**
| Color | Hex | Usage |
|-------|-----|-------|
| Soft Rose / Dusty Pink | `#D4A0A0` | Florals, accents, warmth |
| Sage / Muted Green | `#8B9E82` | Botanical grounding |
| Cream / Parchment | `#F5ECD7` | Text backgrounds, separators |
| Soft Teal / Blue-Green | `#6B9E9E` | Celestial glow moments |

**Color Rule:** Nothing harsh or pure. All colors feel muted, warm, and slightly vintage, as if printed on textured paper.

### Typography
- **Logo/Headings:** Flowing script typography, hand-lettered feel, elegant curves and flourishes, slightly whimsical but legible. Gold-toned with subtle glow/texture.
- **Body/Supporting:** Serif or serif-adjacent fonts. Classic, readable, storybook-appropriate. Never ultra-modern sans-serif.
- Soft contrast, never stark white on black.

### Key Brand Motifs & Symbols
Reuse consistently across site:

**Celestial:** Crescent moons (gold), stars (small, glowing, scattered), night skies, gentle sparkles (not glitter explosions)
**Botanical:** Roses (soft pinks, creams), leafy garlands, floral frames
**Whimsy:** White cat, hanging stars, wish bottles, suncatchers, crystals under glass domes
**Frames & Structure:** Ornate borders, arched windows, decorative dividers, vintage plaque-style buttons

### UI / Layout Philosophy
- Vertical storytelling
- Clear hierarchy but never sterile
- Decorative sections separated by ornamental dividers
- Buttons framed like antique labels
- Content framed as "collections" or "treasures," not products
- CTAs feel like invitations: "Discover the Magic", "Explore Our Collection", "Handcrafted Treasures for Dreamers and Stargazers"

### Brand Voice & Language
**Tone:** Soft, Poetic, Inviting, Calm, Slightly enchanted
**Vocabulary:** Treasures, Wishes, Moonlight, Dreamers, Stargazers, Handcrafted, Enchanted, Celestial, Keepsakes
**Never:** Salesy, Pushy, Corporate, Trend-chasing

### What This Brand Is NOT
- NOT minimalist
- NOT modern tech-aesthetic
- NOT boho-raw
- NOT edgy witchcraft
- NOT childish fantasy
- It's elegant whimsy, not kitsch.

### Visual Inspirations
- Vintage fairy tale books
- Art Nouveau illustration
- Antique celestial charts
- Botanical illustrations
- Victorian ornamentation (softened)

## Project Structure
```
app/
  page.tsx          — Homepage (hero, featured products, about preview, categories, testimonials, process, CTA)
  layout.tsx        — Root layout (Playfair Display + Poppins fonts, Header/Footer)
  globals.css       — All custom CSS (colors, sections, animations, buttons, cards, utilities)
  about/page.tsx    — About Nicole page
  shop/page.tsx     — Shop with filters (category, price, sort)
  shop/[slug]/      — Product detail page
  contact/page.tsx  — Contact form + FAQ
  wishlist/page.tsx — Wishlist page
components/
  Header.tsx        — Fixed header with nav, search, wishlist, announcement bar
  Footer.tsx        — Newsletter + links + social
  ProductCard.tsx   — Product card component
  SparkleCanvas.tsx — Canvas-based sparkle effect
  ParallaxElements.tsx — Floating parallax decorations
  Testimonials.tsx  — Customer reviews
  ProcessTimeline.tsx — Custom order process
  Newsletter.tsx    — Email signup
  FAQ.tsx           — Accordion FAQ
  BackToTop.tsx     — Scroll to top button
data/
  products.ts       — Product catalog (28 products, 4 categories)
public/
  logo.png          — Current logo
  nicole.jpg        — Nicole's photo
  products/         — Product images (28 PNGs)
  textures/         — Background textures (5 PNGs)
```

## Current State vs. Brand DNA Gap
The current site uses a **purple-heavy palette** (#1A0A2E, #3D1A5C, #5C2D7A) with gold accents. The new brand DNA calls for **midnight navy/deep indigo** (#0F1B2D) as the primary dark, dropping the purple entirely. The current "Sparkly & Shiny Things" tagline needs to shift to the romantic/storybook messaging. Typography currently uses Poppins (sans-serif body) which should become a serif. The overall feel needs to move from "cosmic sparkle" to "vintage storybook elegance."
