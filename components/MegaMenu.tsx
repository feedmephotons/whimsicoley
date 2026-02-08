"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { products } from "@/data/products";

interface MegaMenuProps {
    isOpen: boolean;
    onClose: () => void;
    activeItem: string | null;
}

export default function MegaMenu({ isOpen, onClose, activeItem }: MegaMenuProps) {
    const [isVisible, setIsVisible] = useState(false);

    // Handle animation timing
    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
        } else {
            const timer = setTimeout(() => setIsVisible(false), 300);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    if (!isVisible && !isOpen) return null;

    // Get a featured product (e.g., the first featured one)
    const featuredProduct = products.find((p) => p.featured) || products[0];

    return (
        <div
            className={`absolute left-0 w-full transition-all duration-300 ease-in-out z-40 ${isOpen
                    ? "opacity-100 translate-y-0 visible"
                    : "opacity-0 -translate-y-2 invisible"
                }`}
            onMouseLeave={onClose}
            style={{ top: "100%" }} // Position directly below the header
        >
            {/* Backdrop/Container */}
            <div className="bg-navy-dark/95 backdrop-blur-xl border-b border-gold/30 shadow-2xl">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                    <div className="grid grid-cols-12 gap-8">

                        {/* Column 1: Shop Categories */}
                        <div className="col-span-3 border-r border-gold/10 pr-8">
                            <h3 className="text-gold font-serif text-lg mb-6 tracking-wide flex items-center gap-2">
                                <span className="text-xl">✨</span> Collections
                            </h3>
                            <ul className="space-y-3">
                                {[
                                    { href: "/shop?category=jewelry", label: "Handcrafted Jewelry" },
                                    { href: "/shop?category=suncatchers", label: "Suncatchers" },
                                    { href: "/shop?category=home-decor", label: "Home Decor" },
                                    { href: "/shop?category=seasonal", label: "Seasonal Treasures" },
                                    { href: "/shop", label: "View All Treasures", highlight: true },
                                ].map((item) => (
                                    <li key={item.href}>
                                        <Link
                                            href={item.href}
                                            onClick={onClose}
                                            className={`group flex items-center gap-2 text-base transition-colors duration-200 ${item.highlight
                                                    ? "text-rose hover:text-gold font-medium mt-2"
                                                    : "text-cream/80 hover:text-gold hover:translate-x-1"
                                                }`}
                                        >
                                            <span className={`w-1.5 h-1.5 rounded-full transition-all ${item.highlight ? "bg-rose group-hover:bg-gold" : "bg-gold/0 group-hover:bg-gold"
                                                }`} />
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 2: Themes & Moods */}
                        <div className="col-span-3 border-r border-gold/10 pr-8">
                            <h3 className="text-gold font-serif text-lg mb-6 tracking-wide flex items-center gap-2">
                                <span className="text-xl">🌙</span> Shop by Realm
                            </h3>
                            <ul className="space-y-3">
                                {[
                                    { href: "/shop?search=celestial", label: "Celestial & Stars" },
                                    { href: "/shop?search=botanical", label: "Botanical Garden" },
                                    { href: "/shop?search=animal", label: "Whimsical Creatures" },
                                    { href: "/shop?search=crystal", label: "Crystal Magic" },
                                ].map((item) => (
                                    <li key={item.href}>
                                        <Link
                                            href={item.href}
                                            onClick={onClose}
                                            className="group flex items-center gap-2 text-base text-cream/80 hover:text-gold hover:translate-x-1 transition-all duration-200"
                                        >
                                            <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs">✦</span>
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 3 & 4: Featured Highlight */}
                        <div className="col-span-6 pl-4">
                            <div className="relative group overflow-hidden rounded-lg border border-gold/20 aspect-[2/1]">
                                {/* Background Glow */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-gold/20 to-rose/20 opacity-0 group-hover:opacity-100 blur transition-opacity duration-700" />

                                <div className="absolute inset-0 bg-navy-mid/80 z-10 p-8 flex items-center gap-8">
                                    {/* Image Side */}
                                    <div className="relative w-1/3 h-full rounded-md overflow-hidden border border-gold/10 shadow-lg">
                                        <Image
                                            src={featuredProduct.image}
                                            alt={featuredProduct.name}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>

                                    {/* Content Side */}
                                    <div className="w-2/3">
                                        <span className="text-rose text-xs font-bold tracking-widest uppercase mb-2 block">
                                            Featured Treasure
                                        </span>
                                        <h4 className="text-2xl font-serif text-gold mb-3">
                                            {featuredProduct.name}
                                        </h4>
                                        <p className="text-cream/70 text-sm mb-6 line-clamp-2">
                                            {featuredProduct.description}
                                        </p>
                                        <Link
                                            href={`/shop/${featuredProduct.slug}`}
                                            onClick={onClose}
                                            className="btn-outline text-sm py-2 px-6 group-hover:bg-gold group-hover:text-navy-dark"
                                        >
                                            View Details
                                        </Link>
                                    </div>
                                </div>

                                {/* Decorative background image (faded) */}
                                <div className="absolute inset-0 opacity-20 z-0">
                                    <Image
                                        src={featuredProduct.image}
                                        alt=""
                                        fill
                                        className="object-cover blur-sm"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Bottom decorative bar */}
                <div className="h-1 w-full bg-gradient-to-r from-navy-dark via-gold/50 to-navy-dark opacity-50" />
            </div>
        </div>
    );
}
