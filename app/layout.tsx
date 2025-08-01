// File: /app/layout.tsx
// Purpose: Root layout for the EdgeBuddy landing page
// Reason: Sets up global styles, fonts, and metadata
// Related: page.tsx, globals.css

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';
import ClientLayout from './components/ClientLayout';
import { StructuredData } from './components/seo/StructuredData';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://edgebuddy.ai'),
  title: {
    default: 'EdgeBuddy - Your Trading Companion | Stop Trading Alone',
    template: '%s | EdgeBuddy'
  },
  description:
    'Professional traders have risk managers. You trade alone with your mistakes. Until now. EdgeBuddy is the trading companion that sees what you can\'t - your hidden biases, emotional patterns, and destructive loops.',
  keywords: [
    'AI trading assistant',
    'trading risk management',
    'trading psychology',
    'behavioral finance AI',
    'derivatives trading',
    'crypto trading mentor',
    'trading pattern analysis',
    'emotional trading solutions',
    'retail trader tools',
    'trading performance analytics'
  ].join(', '),
  authors: [{ name: 'EdgeBuddy Team' }],
  creator: 'EdgeBuddy',
  publisher: 'EdgeBuddy',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'EdgeBuddy - Your Trading Companion',
    description:
      'Professional traders have risk managers. You don\'t. EdgeBuddy is the AI that spots your blind spots, catches your emotional trades, and helps you trade like a pro.',
    url: 'https://edgebuddy.ai',
    siteName: 'EdgeBuddy',
    images: [
      {
        url: '/api/og?title=Your%20AI%20Trading%20Risk%20Manager&subtitle=Professional%20traders%20have%20risk%20managers.%20Now%20you%20do%20too.',
        width: 1200,
        height: 630,
        alt: 'EdgeBuddy - Your Trading Companion',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EdgeBuddy - Stop Trading Like an Amateur',
    description:
      'Start trading like a pro. EdgeBuddy is the AI risk manager that catches what you miss.',
    images: ['/api/og?title=Stop%20Trading%20Like%20an%20Amateur&subtitle=Start%20Trading%20Like%20a%20Pro'],
    creator: '@edgebuddy',
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
  alternates: {
    canonical: 'https://edgebuddy.ai',
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
