import Link from "next/link";
import Image from "next/image";
import Newsletter from "./Newsletter";

export default function Footer() {
  return (
    <footer className="bg-purple-dark border-t border-gold/20">
      {/* Newsletter Section */}
      <div className="section-cosmic py-16 px-4 sm:px-6 lg:px-8">
        <Newsletter />
      </div>

      {/* Main Footer */}
      <div className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gold/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="col-span-1 md:col-span-2">
              <Image
                src="/logo.png"
                alt="WhimsiColey"
                width={180}
                height={54}
                className="h-12 w-auto mb-4"
              />
              <p className="text-cream-muted text-sm max-w-md mb-4">
                Handcrafted celestial wonders to illuminate your day. Each piece is
                made with love and a sprinkle of magic.
              </p>
              {/* Social Links */}
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-cream-muted hover:text-gold transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-cream-muted hover:text-gold transition-colors"
                  aria-label="Pinterest"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-cream-muted hover:text-gold transition-colors"
                  aria-label="TikTok"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-gold font-semibold mb-4">Shop</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/shop" className="text-cream-muted hover:text-gold transition-colors text-sm">
                    All Products
                  </Link>
                </li>
                <li>
                  <Link href="/shop?category=jewelry" className="text-cream-muted hover:text-gold transition-colors text-sm">
                    Jewelry
                  </Link>
                </li>
                <li>
                  <Link href="/shop?category=suncatchers" className="text-cream-muted hover:text-gold transition-colors text-sm">
                    Suncatchers
                  </Link>
                </li>
                <li>
                  <Link href="/shop?category=home-decor" className="text-cream-muted hover:text-gold transition-colors text-sm">
                    Home Decor
                  </Link>
                </li>
                <li>
                  <Link href="/shop?category=seasonal" className="text-cream-muted hover:text-gold transition-colors text-sm">
                    Seasonal
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-gold font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-cream-muted hover:text-gold transition-colors text-sm">
                    About Nicole
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-cream-muted hover:text-gold transition-colors text-sm">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-cream-muted hover:text-gold transition-colors text-sm">
                    Custom Orders
                  </Link>
                </li>
                <li>
                  <Link href="/wishlist" className="text-cream-muted hover:text-gold transition-colors text-sm">
                    Wishlist
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-cream-muted hover:text-gold transition-colors text-sm">
                    Etsy Shop (Coming Soon)
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-6 px-4 border-t border-gold/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream-muted text-sm">
            &copy; {new Date().getFullYear()} WhimsiColey. All rights reserved.
          </p>
          <p className="text-cream-muted/60 text-xs flex items-center gap-2">
            Made with <span className="text-gold">✨</span> and love
          </p>
        </div>
      </div>
    </footer>
  );
}
