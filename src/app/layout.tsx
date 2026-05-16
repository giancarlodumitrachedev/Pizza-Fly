import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Pizza Fly",
  description: "Ordina la tua pizza preferita online da Pizza Fly a Pesaro. Consegna a domicilio e ritiro in sede.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased bg-white text-slate-900 overflow-x-hidden font-sans">
        {children}
      </body>
    </html>
  );
}
