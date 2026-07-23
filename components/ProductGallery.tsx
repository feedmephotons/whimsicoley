"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProductGallery({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const gallery = images.length ? images : ["/products/placeholder.jpg"];
  const [active, setActive] = useState(0);

  return (
    <div>
      {/* Main image inside an arched-window frame */}
      <div className="card overflow-hidden">
        <div className="relative aspect-square">
          <Image
            src={gallery[active]}
            alt={alt}
            fill
            className="object-cover animate-fade-in"
            key={gallery[active]}
            priority
          />
        </div>
      </div>

      {/* Thumbnails */}
      {gallery.length > 1 && (
        <div className="flex gap-3 mt-4">
          {gallery.map((src, i) => (
            <button
              key={src}
              onClick={() => setActive(i)}
              className={`relative w-20 h-20 rounded-md overflow-hidden border-2 transition-all ${
                active === i
                  ? "border-gold"
                  : "border-gold/20 hover:border-gold/50 opacity-80 hover:opacity-100"
              }`}
              aria-label={`View image ${i + 1}`}
            >
              <Image src={src} alt="" fill className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
