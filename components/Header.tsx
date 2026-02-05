"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useWishlist } from "@/hooks/useWishlist";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const { wishlistCount } = useWishlist();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/shop?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-gold text-purple-dark text-center py-2 px-4 text-sm font-medium">
        <span className="animate-pulse inline-block mr-2">✨</span>
        Custom Orders Now Open! Free shipping on orders over $50
        <span className="animate-pulse inline-block ml-2">✨</span>
      </div>

      {/* Main Header */}
      <header
        className={`fixed top-8 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-purple-dark/95 backdrop-blur-md shadow-lg py-2"
            : "bg-purple-dark/80 backdrop-blur-md py-4"
        } border-b border-gold/20`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/logo.png"
                alt="WhimsiColey"
                width={180}
                height={54}
                className={`transition-all duration-300 ${
                  isScrolled ? "h-10 w-auto" : "h-14 w-auto"
                }`}
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-cream hover:text-gold transition-colors font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right Side Icons */}
            <div className="flex items-center gap-4">
              {/* Search */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="text-cream hover:text-gold transition-colors p-2"
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
                className="text-cream hover:text-gold transition-colors p-2 relative"
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
                  <span className="absolute -top-1 -right-1 bg-gold text-purple-dark text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              {/* Custom Order CTA - Desktop */}
              <Link
                href="/contact"
                className="hidden md:inline-block btn-gold text-sm py-2 px-4"
              >
                Custom Order
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
            <form onSubmit={handleSearch} className="mt-4 pb-2">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for treasures..."
                  className="w-full px-4 py-2 bg-purple-dark/50 border border-gold/30 rounded-full text-cream placeholder-cream-muted/50 focus:outline-none focus:border-gold transition-colors"
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

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden py-4 border-t border-gold/20 mt-4">
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
                <Link
                  href="/wishlist"
                  className="text-cream hover:text-gold transition-colors font-medium py-2 flex items-center gap-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Wishlist
                  {wishlistCount > 0 && (
                    <span className="bg-gold text-purple-dark text-xs px-2 py-0.5 rounded-full">
                      {wishlistCount}
                    </span>
                  )}
                </Link>
                <Link
                  href="/contact"
                  className="btn-gold text-sm text-center mt-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Custom Order
                </Link>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Spacer for fixed header + announcement */}
      <div className="h-8" />
    </>
  );
}
