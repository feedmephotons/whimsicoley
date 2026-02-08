"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useWishlist } from "@/hooks/useWishlist";
import MegaMenu from "./MegaMenu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const { wishlistCount } = useWishlist();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Close megamenu on click outside
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setActiveMegaMenu(null);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop", hasMegaMenu: true },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/shop?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  const closeMegaMenu = () => setActiveMegaMenu(null);

  return (
    <>
      {/* Announcement Bar - scrolls away naturally */}
      <div className="bg-gold text-navy-dark text-center py-2 px-4 text-sm font-medium relative">
        <span className="inline-block mr-2">&#9734;</span>
        Bespoke Creations Now Available &mdash; Complimentary Shipping on Orders Over $50
        <span className="inline-block ml-2">&#9734;</span>
      </div>

      {/* Main Header */}
      <header
        ref={headerRef}
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || activeMegaMenu
            ? "bg-navy-dark/85 backdrop-blur-xl shadow-lg py-2"
            : "bg-navy-dark/70 backdrop-blur-lg py-4"
          } border-b border-gold/20`}
        onMouseLeave={closeMegaMenu}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 z-50" onClick={closeMegaMenu}>
              <Image
                src="/logo.png"
                alt="WhimsiColey"
                width={180}
                height={54}
                className={`transition-all duration-300 ${isScrolled || activeMegaMenu ? "h-10 w-auto" : "h-14 w-auto"
                  }`}
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8 h-full">
              {navLinks.map((link) => (
                <div
                  key={link.href}
                  className="relative h-full flex items-center"
                  onMouseEnter={() => {
                    if (link.hasMegaMenu) setActiveMegaMenu("shop");
                    else setActiveMegaMenu(null);
                  }}
                >
                  <Link
                    href={link.href}
                    className={`text-base font-medium transition-all duration-200 link-animated pb-1 ${activeMegaMenu === "shop" && link.hasMegaMenu
                        ? "text-gold"
                        : "text-cream hover:text-gold"
                      }`}
                    onClick={closeMegaMenu}
                  >
                    {link.label}
                  </Link>
                </div>
              ))}
            </nav>

            {/* Right Side Icons */}
            <div className="flex items-center gap-4 z-50">
              {/* Search */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="text-cream hover:text-gold transition-colors p-2 icon-bounce"
                aria-label="Search"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>

              {/* Wishlist */}
              <Link
                href="/wishlist"
                className="text-cream hover:text-gold transition-colors p-2 relative icon-bounce"
                aria-label="Wishlist"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gold text-navy-dark text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              {/* Request a Treasure CTA - Desktop */}
              <Link
                href="/contact"
                className="hidden md:inline-block btn-gold btn-ripple text-sm py-2 px-4 whitespace-nowrap"
              >
                Request a Treasure
              </Link>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-cream p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Search Bar - Expandable */}
          {isSearchOpen && (
            <form onSubmit={handleSearch} className="mt-4 pb-2 animate-fade-in">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for treasures..."
                  className="w-full px-4 py-2 bg-navy-dark/50 border border-gold/30 rounded-full text-cream placeholder-cream-muted/50 focus:outline-none focus:border-gold transition-colors"
                  autoFocus
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gold p-1"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </form>
          )}

          {/* Megamenu */}
          <MegaMenu
            isOpen={activeMegaMenu === "shop"}
            onClose={closeMegaMenu}
            activeItem={activeMegaMenu}
          />

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden py-4 border-t border-gold/20 mt-4 animate-fade-in relative z-40 bg-navy-dark">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-cream hover:text-gold transition-colors font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}

                {/* Mobile Collections Submenu could go here if needed, keeping it simple for now */}

                <Link
                  href="/wishlist"
                  className="text-cream hover:text-gold transition-colors font-medium py-2 flex items-center gap-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Wishlist
                  {wishlistCount > 0 && (
                    <span className="bg-gold text-navy-dark text-xs px-2 py-0.5 rounded-full">
                      {wishlistCount}
                    </span>
                  )}
                </Link>
                <Link
                  href="/contact"
                  className="btn-gold text-sm text-center mt-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Request a Treasure
                </Link>
              </div>
            </nav>
          )}
        </div>
      </header>

    </>
  );
}
