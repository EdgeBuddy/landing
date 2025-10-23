// File: /app/layout.tsx
// Purpose: Root layout for the EdgeBuddy landing page
// Reason: Sets up global styles, fonts, and metadata
// Related: page.tsx, globals.css

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import ClientLayout from "./components/ClientLayout";
import { StructuredData } from "./components/seo/StructuredData";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://edgebuddy.ai",
  ),
  title: {
    default: "EdgeBuddy — The Risk Manager Retail Traders Never Had",
    template: "%s | EdgeBuddy",
  },
  description:
    "90% of derivatives traders lose because they trade alone. EdgeBuddy is your AI risk awareness companion that helps you recognize revenge trading, FOMO, and tilt patterns. Educational insights through simple chat. 40+ metrics available in moments, 12+ behavioral patterns updated overnight. Education only, not financial advice.",
  keywords: [
    "EdgeBuddy",
    "trading risk manager",
    "revenge trading detector",
    "FOMO trading prevention",
    "trading psychology coach",
    "behavioral pattern analysis",
    "derivatives risk management",
    "perpetual futures coach",
    "tilt prevention",
    "trading mentor AI",
    "retail trader tools",
    "Binance futures coach",
    "OKX trading mentor",
    "Hyperliquid risk manager",
    "trading behavior tracker",
    "risk awareness tools",
    "trading psychology education",
    "self-assessment trading",
    "trading pattern detection",
    "derivatives analytics platform",
    "trading metrics dashboard",
    "behavioral trading analysis",
    "risk monitoring software",
    "trading performance tracker",
    "crypto futures analytics",
    "leverage risk awareness",
    "trading journal AI",
    "derivatives behavior analysis",
    "futures risk education",
  ].join(", "),
  authors: [{ name: "EdgeBuddy BV", url: "https://edgebuddy.ai" }],
  creator: "EdgeBuddy BV",
  publisher: "EdgeBuddy BV",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "EdgeBuddy — Stop Trading in the Dark",
    description:
      "Professional traders have risk managers. You trade alone. EdgeBuddy helps you recognize behavioral patterns through educational coaching in plain English. No charts. Just insights into your trading behavior. Education only.",
    url: "https://edgebuddy.ai",
    siteName: "EdgeBuddy",
    images: [
      {
        url: "/api/og?title=Stop%20Trading%20in%20the%20Dark&subtitle=Professional%20Risk%20Management%20for%20Retail%20Traders",
        width: 1200,
        height: 630,
        alt: "EdgeBuddy — Professional risk management through conversation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@edgebuddy",
    creator: "@edgebuddy",
    title: "EdgeBuddy — Stop Trading in the Dark",
    description:
      "Expose blind spots in execution, risk, and habits across all your exchanges. Educational coaching that builds awareness. Education only, not financial advice.",
    images: [
      "/api/og?title=Stop%20Trading%20in%20the%20Dark&subtitle=Start%20Trading%20Like%20a%20Pro",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://edgebuddy.ai",
  },
  category: "Finance",
  classification: "Trading Risk Management Software",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  appleWebApp: {
    capable: true,
    title: "EdgeBuddy",
    statusBarStyle: "black-translucent",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#10b981" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Prevent scroll on page load
              if ('scrollRestoration' in history) {
                history.scrollRestoration = 'manual';
              }
              window.scrollTo(0, 0);
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <StructuredData />
        <ClientLayout>{children}</ClientLayout>
        <Analytics />
      </body>
    </html>
  );
}
