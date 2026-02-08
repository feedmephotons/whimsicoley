"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitted(true);
    setIsLoading(false);
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="text-4xl mb-4 text-gold">&#9790;</div>
        <h3 className="text-xl font-semibold text-cream mb-2">
          You&apos;re on the list!
        </h3>
        <p className="text-cream-muted">
          Thank you for joining us! Look for enchanting updates in your inbox soon.
        </p>
      </div>
    );
  }

  return (
    <div className="text-center">
      <h3 className="font-[family-name:var(--font-display)] text-2xl text-cream mb-3">
        Join Our Inner Circle
      </h3>
      <p className="text-cream-muted mb-6 max-w-md mx-auto">
        Subscribe for exclusive updates, new product drops, and special offers delivered to your inbox.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="flex-1 px-4 py-3 bg-navy-dark/50 border border-gold/30 rounded-lg text-cream placeholder-cream-muted/50 focus:outline-none focus:border-gold transition-colors"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="btn-gold whitespace-nowrap disabled:opacity-50"
        >
          {isLoading ? "..." : "Subscribe"}
        </button>
      </form>
      <p className="text-cream-muted/60 text-xs mt-4">
        No noise, just magic. Unsubscribe anytime.
      </p>
    </div>
  );
}
