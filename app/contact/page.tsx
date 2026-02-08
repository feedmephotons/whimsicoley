"use client";

import { useState } from "react";
import FAQ from "@/components/FAQ";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "general",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    // In production, this would send to an email service like Formspree or your own API
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (isSubmitted) {
    return (
      <div className="cosmic-bg min-h-screen pt-12 pb-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="card p-12">
            <span className="text-6xl mb-6 block text-gold">&#9734;</span>
            <h1 className="font-[family-name:var(--font-display)] text-3xl text-cream mb-4">
              Message Sent!
            </h1>
            <p className="text-cream-muted mb-6">
              Thank you for reaching out! I&apos;ll get back to you as soon as
              possible, usually within 24-48 hours.
            </p>
            <a href="/" className="btn-gold">
              Back to Home
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cosmic-bg min-h-screen pt-12 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-cream mb-6">
              Get in Touch
            </h1>
            <p className="text-cream-muted text-lg mb-8">
              Have a question or a vision for something special?
              I&apos;d love to hear from you.
            </p>

            <div className="space-y-6 mb-12">
              <div className="card p-6">
                <h3 className="text-gold font-semibold mb-2">Custom Orders</h3>
                <p className="text-cream-muted text-sm">
                  Have something special in mind? Share your vision &mdash; preferred
                  colors, materials, and inspiration &mdash; and we&apos;ll craft
                  something truly yours.
                </p>
              </div>

              <div className="card p-6">
                <h3 className="text-gold font-semibold mb-2">Response Time</h3>
                <p className="text-cream-muted text-sm">
                  I typically respond within 24-48 hours. For urgent inquiries,
                  please mention it in your message.
                </p>
              </div>

              <div className="card p-6">
                <h3 className="text-gold font-semibold mb-2">Wholesale & Collaborations</h3>
                <p className="text-cream-muted text-sm">
                  Interested in carrying WhimsiColey products in your shop or
                  collaborating? I&apos;d love to chat about opportunities!
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-gold font-semibold mb-4">Connect With Me</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="card p-3 hover:bg-gold/10 transition-colors"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-6 h-6 text-cream"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="card p-3 hover:bg-gold/10 transition-colors"
                  aria-label="Etsy"
                >
                  <svg
                    className="w-6 h-6 text-cream"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.559 3c-.469.008-1.009.044-1.615.108-.405.044-.645.074-1.217.13-.078 1.064-.122 2.636-.132 4.716v8.152c.009 2.063.053 3.626.132 4.688.572.056.812.087 1.217.13.606.065 1.146.101 1.615.108.105-.007.18-.022.24-.044.06-.022.097-.053.118-.09.04-.073.059-.188.059-.344v-.435c0-.286-.05-.481-.152-.584-.101-.104-.294-.177-.577-.221-.349-.049-.611-.096-.787-.14-.308-.079-.528-.196-.658-.352-.131-.155-.21-.369-.24-.641-.029-.272-.043-.669-.043-1.188v-4.098h1.843c.308 0 .519-.062.631-.187.113-.125.169-.357.169-.696v-.513c0-.338-.056-.571-.169-.696-.112-.126-.323-.188-.631-.188h-1.843v-2.917c0-.308-.061-.515-.183-.622-.123-.107-.356-.161-.7-.161h-.661c-.344 0-.577.054-.699.161-.123.107-.184.314-.184.622v2.917h-1.096c-.308 0-.519.062-.631.188-.113.125-.169.358-.169.696v.513c0 .339.056.571.169.696.112.125.323.187.631.187h1.096v4.584c0 .866.062 1.539.188 2.018.125.479.359.885.701 1.217.342.332.811.555 1.408.669.596.114 1.381.167 2.354.161.297-.003.522-.044.677-.122.155-.078.234-.235.234-.471v-.661c0-.264-.05-.447-.152-.548-.101-.101-.309-.171-.623-.209-.601-.074-1.017-.184-1.248-.33-.23-.147-.384-.378-.461-.696-.077-.318-.116-.816-.116-1.494v-4.118h2.767c.323 0 .543-.064.661-.192.117-.128.176-.377.176-.748v-.559c0-.37-.059-.619-.176-.747-.118-.128-.338-.193-.661-.193h-2.767v-3.327c0-.293-.062-.491-.184-.594-.123-.103-.355-.155-.697-.155h-.661c-.342 0-.574.052-.697.155-.122.103-.184.301-.184.594v3.327h-1.096c-.323 0-.543.065-.661.193-.117.128-.175.377-.175.747v.559c0 .371.058.62.175.748.118.128.338.192.661.192h1.096v4.363c0 .949.078 1.693.232 2.231.155.538.434.97.836 1.296.402.327.943.549 1.621.667.679.118 1.547.172 2.605.161.308-.003.536-.047.684-.132.147-.085.221-.261.221-.527v-.705c0-.279-.055-.472-.165-.578-.11-.107-.328-.177-.653-.213-.639-.074-1.082-.191-1.329-.35-.247-.16-.411-.401-.493-.725-.082-.323-.122-.838-.122-1.544v-4.363h3.02c.336 0 .562-.066.677-.198.116-.132.174-.394.174-.787v-.594c0-.392-.058-.654-.174-.787-.115-.132-.341-.198-.677-.198h-3.02v-3.547c0-.304-.063-.509-.188-.615-.126-.106-.363-.159-.713-.159h-.705c-.35 0-.587.053-.712.159-.126.106-.188.311-.188.615v3.547h-1.096c-.336 0-.562.066-.677.198-.115.133-.173.395-.173.787v.594c0 .393.058.655.173.787.115.132.341.198.677.198h1.096v4.613c0 1.002.085 1.783.254 2.342.17.559.478 1.003.925 1.33.447.328 1.051.552 1.812.671.76.12 1.724.173 2.891.162.321-.003.559-.05.714-.141.154-.091.232-.286.232-.583v-.749c0-.291-.059-.491-.176-.601-.118-.11-.342-.184-.671-.221-.667-.078-1.129-.197-1.384-.359-.256-.162-.426-.412-.51-.749-.084-.337-.127-.866-.127-1.587v-4.609z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card p-8">
            <h2 className="font-[family-name:var(--font-display)] text-2xl text-cream mb-6">
              Send a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-cream text-sm mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-navy-dark/50 border border-gold/30 rounded-lg text-cream placeholder-cream-muted/50 focus:outline-none focus:border-gold transition-colors"
                  placeholder="Jane Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-cream text-sm mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-navy-dark/50 border border-gold/30 rounded-lg text-cream placeholder-cream-muted/50 focus:outline-none focus:border-gold transition-colors"
                  placeholder="jane@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-cream text-sm mb-2">
                  What&apos;s this about?
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-navy-dark/50 border border-gold/30 rounded-lg text-cream focus:outline-none focus:border-gold transition-colors"
                >
                  <option value="general">General Inquiry</option>
                  <option value="custom">Custom Order Request</option>
                  <option value="wholesale">Wholesale / Collaboration</option>
                  <option value="support">Order Support</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-cream text-sm mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-navy-dark/50 border border-gold/30 rounded-lg text-cream placeholder-cream-muted/50 focus:outline-none focus:border-gold transition-colors resize-none"
                  placeholder="Tell me about what you're looking for..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-gold btn-ripple disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-cream mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-cream-muted max-w-xl mx-auto">
              Find quick answers to common questions about orders, shipping, and custom pieces.
            </p>
          </div>
          <FAQ />
        </div>
      </div>
    </div>
  );
}
