"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const STILL = "/branding/hero-moonlit-garden-apothecary.png";
// A flat wash sits the whole video back; the radial adds a little extra pool of
// shade behind the centered logo + headline so they always have a foundation.
const VEIL =
  "radial-gradient(ellipse at center, rgba(21,14,46,0.62) 0%, rgba(21,14,46,0.5) 55%, rgba(21,14,46,0.46) 100%), linear-gradient(rgba(21,14,46,0.28), rgba(21,14,46,0.28))";

/**
 * Full-bleed hero backdrop that plays a looping Seedance cinematic by default,
 * with the static moonlit-garden art as a first-class fallback:
 *  - reduced-motion users get the still automatically
 *  - a small corner toggle lets anyone switch video <-> still
 *  - the still is also the video's poster, so there's never a blank flash
 */
export default function HeroBackground() {
  const [mode, setMode] = useState<"video" | "still">("video");
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setMode("still");
    }
  }, []);

  return (
    <>
      {mode === "video" ? (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
          autoPlay
          muted
          loop
          playsInline
          poster="/hero/hero-loop-poster.jpg"
        >
          <source src="/hero/hero-loop.webm" type="video/webm" />
          <source src="/hero/hero-loop.mp4" type="video/mp4" />
        </video>
      ) : (
        <Image
          src={STILL}
          alt=""
          fill
          priority
          className="object-cover object-center pointer-events-none select-none"
        />
      )}

      {/* Legibility veil — keeps the headline readable over the moving art */}
      <div className="absolute inset-0 pointer-events-none z-[1]" style={{ background: VEIL }} />

      {/* Motion / Still toggle */}
      <button
        type="button"
        onClick={() => setMode((m) => (m === "video" ? "still" : "video"))}
        className="absolute bottom-6 right-6 z-30 flex items-center gap-1.5 rounded-full border border-gold/40 bg-navy-dark/50 backdrop-blur-sm px-3 py-1.5 text-xs tracking-wide text-cream/90 hover:text-gold hover:border-gold/70 transition-colors"
        aria-label={mode === "video" ? "Pause motion, show still image" : "Play motion"}
      >
        {mode === "video" ? (
          <>
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <rect x="6" y="5" width="4" height="14" rx="1" />
              <rect x="14" y="5" width="4" height="14" rx="1" />
            </svg>
            Still
          </>
        ) : (
          <>
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
            Motion
          </>
        )}
      </button>
    </>
  );
}
