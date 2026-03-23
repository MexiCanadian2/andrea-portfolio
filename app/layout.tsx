import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Andrea M. Bravo Ojeda — International Business & AI Strategist",
  description:
    "Portfolio of Andrea M. Bravo Ojeda — trilingual international business professional specializing in AI, digital marketing, trade missions, and global business strategy.",
  keywords: [
    "Andrea Bravo Ojeda",
    "international business",
    "digital marketing",
    "AI specialist",
    "trade mission",
    "MBA",
    "Barcelona",
    "Canada",
    "trilingual",
  ],
  authors: [{ name: "Andrea M. Bravo Ojeda" }],
  openGraph: {
    title: "Andrea M. Bravo Ojeda — Portfolio",
    description:
      "Trilingual international business professional specializing in AI, digital marketing, and global trade.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-[#FAFAF8] text-[#1C1C1E] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
