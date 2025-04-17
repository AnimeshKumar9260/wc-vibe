import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "WC Vibe IT Solutions | Web, Mobile, Video & WordPress Experts",
  description: "WC Vibe is your trusted IT service provider for web development, mobile app development, video editing, motion graphics, graphics design, and WordPress solutions. Empower your business with our expert digital services.",
  keywords: [
    "IT services",
    "Web development",
    "Mobile app development",
    "Video editing",
    "Motion graphics",
    "Graphics design",
    "WordPress development",
    "Digital solutions",
    "WC Vibe"
  ],
  authors: [{ name: "WC Vibe Team" }],
  openGraph: {
    title: "WC Vibe IT Solutions | Web, Mobile, Video & WordPress Experts",
    description: "WC Vibe is your trusted IT service provider for web, mobile, video, graphics, and WordPress solutions.",
    url: "https://wc-vibe.vercel.app/",
    siteName: "WC Vibe IT Solutions",
    type: "website",
  },
};

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-1 container mx-auto w-full px-4 py-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
