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
  title: "TechGadget Hub - Fitness Wearable Reviews & Recommendations",
  description: "Discover the best fitness smartwatches and wearables with honest reviews and expert recommendations. Find the perfect device for your health and fitness goals.",
  keywords: "smartwatch reviews, fitness tracker reviews, wearable technology, health monitoring devices, smartwatch comparisons, fitness watch recommendations",
  authors: [{ name: "TechGadget Hub" }],
  creator: "TechGadget Hub",
  publisher: "TechGadget Hub",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://shopvibe-tech-aktc2m999-raihan-uddins-projects-2fcd2e9f.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "TechGadget Hub - Fitness Wearable Reviews & Recommendations",
    description: "Your trusted source for honest smartwatch and fitness wearable reviews and expert recommendations.",
    url: 'https://shopvibe-tech-aktc2m999-raihan-uddins-projects-2fcd2e9f.vercel.app',
    siteName: 'TechGadget Hub',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "TechGadget Hub - Fitness Wearable Reviews & Recommendations",
    description: "Your trusted source for honest smartwatch and fitness wearable reviews and expert recommendations.",
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
