'use client';

// File: /app/privacy/page.tsx
// Purpose: Privacy policy page
// Reason: Legal requirement for data collection
// Related: tos/page.tsx, Footer.tsx

import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-gray-300 py-20 px-6 relative">
      {/* Enhanced contrast background for better cursor visibility */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 to-black pointer-events-none" />
      <div className="max-w-4xl mx-auto relative">
        <Link
          href="/"
          className="inline-flex items-center gap-3 text-emerald-400 hover:text-emerald-300 mb-8 transition-all group px-4 py-2 rounded-lg border border-emerald-400/20 hover:border-emerald-400/40 hover:bg-emerald-400/10 relative z-50"
        >
          <svg
            className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span className="font-medium">Back to Home</span>
        </Link>

        <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>

        <div className="prose prose-invert max-w-none">
          <p className="text-gray-400 mb-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Introduction
            </h2>
            <p>
              EdgeBuddy ("we", "our", or "us") is committed to protecting your
              privacy. This Privacy Policy explains how we collect, use, and
              safeguard your information when you visit our website and use our
              services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Information We Collect
            </h2>
            <h3 className="text-xl font-semibold text-white mb-2">
              Waitlist Information
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Email address (for waitlist signup)</li>
              <li>Timestamp of signup</li>
              <li>Referral source (how you found us)</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-2 mt-4">
              Future Service Information
            </h3>
            <p>When our service launches, we may collect:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Account information (name, email, password)</li>
              <li>Trading data (via encrypted API connections)</li>
              <li>Usage analytics (to improve our service)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To notify you about our beta launch</li>
              <li>To provide and improve our services</li>
              <li>To analyze trading patterns and provide insights</li>
              <li>To communicate important updates</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Data Security
            </h2>
            <p>We implement bank-level security measures including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>AES-256 encryption for all sensitive data</li>
              <li>Secure API connections</li>
              <li>Regular security audits</li>
              <li>No storage of exchange passwords</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Your Rights
            </h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal data</li>
              <li>Request data deletion</li>
              <li>Opt out of communications</li>
              <li>Export your data</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Contact Us
            </h2>
            <p>
              If you have questions about this Privacy Policy, please contact us
              at:
            </p>
            <p className="mt-2">
              Email:{' '}
              <a
                href="mailto:support@edgebuddy.ai"
                className="text-emerald-400 hover:underline"
              >
                support@edgebuddy.ai
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
