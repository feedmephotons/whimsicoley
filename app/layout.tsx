import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "WhimsiColey | Sparkly & Shiny Things",
  description: "Handcrafted celestial wonders to illuminate your day. Discover magical jewelry, sparkling suncatchers, and whimsical treasures inspired by the cosmos.",
  keywords: ["handmade jewelry", "custom jewelry", "suncatchers", "celestial jewelry", "moon jewelry", "handcrafted"],
  openGraph: {
    title: "WhimsiColey | Sparkly & Shiny Things",
    description: "Handcrafted celestial wonders to illuminate your day",
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
      <body className={`${playfair.variable} ${poppins.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
