"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How do I place a custom order?",
    answer: "Simply fill out our contact form with your ideas! Include details like colors, materials, size preferences, and any inspiration images. I'll get back to you within 24-48 hours with a quote and timeline.",
  },
  {
    question: "What materials do you use?",
    answer: "I use high-quality materials including genuine crystals, semi-precious stones, sterling silver and gold-filled wire, polymer clay, and premium resin. Each piece is crafted to last while maintaining its beauty.",
  },
  {
    question: "How long does shipping take?",
    answer: "Standard orders ship within 3-5 business days. Custom orders typically take 1-2 weeks depending on complexity. I offer free shipping on orders over $50!",
  },
  {
    question: "Do you offer gift wrapping?",
    answer: "Yes! Every order comes in beautiful, gift-ready packaging. Just let me know if it's a gift and I can include a handwritten note.",
  },
  {
    question: "What's your return policy?",
    answer: "I want you to love your purchase! If you're not completely satisfied, contact me within 14 days of delivery. Custom orders are final sale, but I'll always work with you to make it right.",
  },
  {
    question: "Can I request specific colors or stones?",
    answer: "Absolutely! That's the beauty of handmade. Let me know your preferences and I'll do my best to accommodate them. Some variations may affect pricing or availability.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-3xl mx-auto">
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="card overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 py-4 flex items-center justify-between text-left"
            >
              <span className="font-semibold text-cream">{faq.question}</span>
              <svg
                className={`w-5 h-5 text-gold transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="px-6 pb-4 text-cream-muted">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
