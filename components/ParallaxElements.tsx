"use client";

import { useEffect, useState } from "react";

interface FloatingElement {
  id: number;
  type: "moon" | "star" | "rose";
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
    const items: FloatingElement[] = [];
    const types: ("moon" | "star" | "rose")[] = ["moon", "star", "rose"];

    for (let i = 0; i < 10; i++) {
      items.push({
        id: i,
        type: types[Math.floor(Math.random() * types.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 24 + 16,
        speed: Math.random() * 0.2 + 0.05,
        rotation: Math.random() * 360,
        opacity: Math.random() * 0.15 + 0.05,
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
            <path d="M12 2L13.09 8.26L18 6L14.74 10.91L21 12L14.74 13.09L18 18L13.09 15.74L12 22L10.91 15.74L6 18L9.26 13.09L3 12L9.26 10.91L6 6L10.91 8.26L12 2Z" />
          </svg>
        );
      case "rose":
        return (
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-rose"
            style={{ width: el.size, height: el.size }}
          >
            <path d="M12 2C9.5 2 7.5 4 7.5 6.5c0 1.5.7 2.8 1.8 3.7C8.5 11 8 12 8 13c0 2.2 1.8 4 4 4s4-1.8 4-4c0-1-.5-2-1.3-2.8 1.1-.9 1.8-2.2 1.8-3.7C16.5 4 14.5 2 12 2z" />
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
            transform: `translateY(${-scrollY * el.speed}px) rotate(${el.rotation + scrollY * 0.01}deg)`,
            opacity: el.opacity,
          }}
        >
          {renderElement(el)}
        </div>
      ))}
    </div>
  );
}
