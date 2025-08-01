// File: /app/layout.tsx
// Purpose: Root layout for the EdgeBuddy landing page
// Reason: Sets up global styles, fonts, and metadata
// Related: page.tsx, globals.css

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ClientLayout from './components/ClientLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'EdgeBuddy - Your AI Trading Consciousness',
  description:
    'Meet the first AI that learns how you fail and teaches you how to win. EdgeBuddy is your personal trading consciousness.',
  keywords:
    'AI trading, trading psychology, behavioral finance, trading mentor, trading patterns',
  openGraph: {
    title: 'EdgeBuddy - Your AI Trading Consciousness',
    description:
      'The AI that understands why you lose and teaches you how to win.',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EdgeBuddy - Your AI Trading Consciousness',
    description:
      'The AI that understands why you lose and teaches you how to win.',
    images: ['/og-image.png'],
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
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
