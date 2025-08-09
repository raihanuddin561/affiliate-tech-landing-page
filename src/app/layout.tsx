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
  title: "TechGadget Hub - Honest Tech Reviews & Recommendations",
  description: "Discover the latest tech gadgets with honest reviews, detailed comparisons, and expert recommendations. Find the perfect device that fits your needs and budget at TechGadget Hub.",
  keywords: "tech reviews, gadget reviews, smartphone reviews, laptop reviews, gaming accessories, smart home devices, technology recommendations, product comparisons",
  authors: [{ name: "TechGadget Hub" }],
  creator: "TechGadget Hub",
  publisher: "TechGadget Hub",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "TechGadget Hub - Honest Tech Reviews & Recommendations",
    description: "Your trusted source for honest tech reviews and expert recommendations on the latest gadgets.",
    url: process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000',
    siteName: 'TechGadget Hub',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "TechGadget Hub - Honest Tech Reviews & Recommendations",
    description: "Your trusted source for honest tech reviews and expert recommendations on the latest gadgets.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
