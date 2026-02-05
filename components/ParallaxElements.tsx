"use client";

import { useEffect, useState } from "react";

interface FloatingElement {
  id: number;
  type: "moon" | "star" | "crystal";
  x: number;
  y: number;
  size: number;
  speed: number;
  rotation: number;
  opacity: number;
}

export default function ParallaxElements() {
  const [scrollY, setScrollY] = useState(0);
  const [elements] = useState<FloatingElement[]>(() => {
    // Generate random floating elements
    const items: FloatingElement[] = [];
    const types: ("moon" | "star" | "crystal")[] = ["moon", "star", "crystal"];

    for (let i = 0; i < 12; i++) {
      items.push({
        id: i,
        type: types[Math.floor(Math.random() * types.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 30 + 20,
        speed: Math.random() * 0.3 + 0.1,
        rotation: Math.random() * 360,
        opacity: Math.random() * 0.3 + 0.1,
      });
    }
    return items;
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderElement = (el: FloatingElement) => {
    const parallaxY = scrollY * el.speed;

    switch (el.type) {
      case "moon":
        return (
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-gold"
            style={{ width: el.size, height: el.size }}
          >
            <path d="M12 3a9 9 0 109 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 01-4.4 2.26 5.403 5.403 0 01-3.14-9.8c-.44-.06-.9-.1-1.36-.1z" />
          </svg>
        );
      case "star":
        return (
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-gold-light"
            style={{ width: el.size, height: el.size }}
          >
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
          </svg>
        );
      case "crystal":
        return (
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-cream"
            style={{ width: el.size, height: el.size }}
          >
            <path d="M12 2L4 10l8 12 8-12-8-8zm0 3.5L16.5 10 12 17.5 7.5 10 12 5.5z" />
          </svg>
        );
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-5">
      {elements.map((el) => (
        <div
          key={el.id}
          className="absolute transition-transform duration-100"
          style={{
            left: `${el.x}%`,
            top: `${el.y}%`,
            transform: `translateY(${-scrollY * el.speed}px) rotate(${el.rotation + scrollY * 0.02}deg)`,
            opacity: el.opacity,
          }}
        >
          {renderElement(el)}
        </div>
      ))}
    </div>
  );
}
