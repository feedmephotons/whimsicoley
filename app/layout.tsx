import type { Metadata } from "next";
import { Cormorant_Garamond, Lora } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "WhimsiColey | Handcrafted Treasures for Dreamers and Stargazers",
  description: "Discover handcrafted jewelry, suncatchers, and enchanting treasures inspired by nature, moonlight, and the art of timeless craftsmanship.",
  keywords: ["handmade jewelry", "custom jewelry", "suncatchers", "artisan jewelry", "handcrafted treasures", "vintage-inspired jewelry", "nature-inspired jewelry"],
  openGraph: {
    title: "WhimsiColey | Handcrafted Treasures for Dreamers and Stargazers",
    description: "Discover handcrafted jewelry, suncatchers, and enchanting treasures inspired by nature, moonlight, and the art of timeless craftsmanship.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${lora.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
