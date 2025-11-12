import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsappChat from "@/components/WhatsappChat";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TransIDF Logistics",
  description: "Transport France - Maroc - Europe",
  icons: {
    icon: "/image/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white min-h-screen flex flex-col`}
      >
        {/* Header fixé en haut */}
        <Header />

        {/* Contenu principal */}
        <main className="flex-grow">{children}</main>

        {/* Footer collé en bas */}
        <Footer />
        <WhatsappChat />
      </body>
    </html>
  );
}
