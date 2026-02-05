import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-purple-dark/90 border-t border-gold/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <p className="text-cream-muted text-sm max-w-md">
              Handcrafted celestial wonders to illuminate your day. Each piece is
              made with love and a sprinkle of magic.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gold font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/shop" className="text-cream-muted hover:text-gold transition-colors text-sm">
                  Shop All
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-cream-muted hover:text-gold transition-colors text-sm">
                  About Nicole
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-cream-muted hover:text-gold transition-colors text-sm">
                  Custom Orders
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-gold font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-cream-muted hover:text-gold transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-cream-muted hover:text-gold transition-colors text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-cream-muted hover:text-gold transition-colors text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Etsy Shop (Coming Soon)
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gold/20 text-center">
          <p className="text-cream-muted text-sm">
            &copy; {new Date().getFullYear()} WhimsiColey. All rights reserved.
          </p>
          <p className="text-cream-muted/60 text-xs mt-2">
            Made with sparkles and love
          </p>
        </div>
      </div>
    </footer>
  );
}
