"use client";

import { useState, useEffect } from "react";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  text: string;
  rating: number;
  product?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah M.",
    location: "Austin, TX",
    text: "I ordered a custom moon pendant for my daughter's birthday and it exceeded all expectations! The craftsmanship is incredible and it arrived beautifully packaged. She hasn't taken it off since!",
    rating: 5,
    product: "Custom Moon Pendant",
  },
  {
    id: 2,
    name: "Jessica L.",
    location: "Portland, OR",
    text: "The suncatcher I ordered fills my kitchen with the most beautiful rainbows every morning. It's become my favorite part of waking up. Nicole's attention to detail is amazing!",
    rating: 5,
    product: "Crystal Prism Suncatcher",
  },
  {
    id: 3,
    name: "Emily R.",
    location: "Denver, CO",
    text: "I've ordered multiple pieces now and each one is more beautiful than the last. The quality is outstanding and Nicole is so wonderful to work with on custom orders.",
    rating: 5,
  },
  {
    id: 4,
    name: "Amanda K.",
    location: "Seattle, WA",
    text: "These are not just jewelry pieces - they're little works of art! I get compliments every time I wear my wire-wrapped crystal pendant. Absolutely love supporting this small business!",
    rating: 5,
    product: "Wire-Wrapped Crystal Pendant",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? "text-gold" : "text-cream-muted/30"}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Main testimonial */}
      <div className="relative">
        <div className="card p-8 md:p-12 text-center">
          {/* Quote mark */}
          <div className="text-gold text-6xl font-serif leading-none mb-4">&ldquo;</div>

          {/* Testimonial text */}
          <p className="text-cream text-lg md:text-xl mb-6 italic">
            {testimonials[currentIndex].text}
          </p>

          {/* Rating */}
          <div className="flex justify-center gap-1 mb-4">
            {renderStars(testimonials[currentIndex].rating)}
          </div>

          {/* Author */}
          <div className="text-gold font-semibold">
            {testimonials[currentIndex].name}
          </div>
          <div className="text-cream-muted text-sm">
            {testimonials[currentIndex].location}
          </div>
          {testimonials[currentIndex].product && (
            <div className="text-cream-muted/60 text-sm mt-1">
              Purchased: {testimonials[currentIndex].product}
            </div>
          )}
        </div>
      </div>

      {/* Dots navigation */}
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-gold w-8"
                : "bg-cream-muted/30 hover:bg-cream-muted/50"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
