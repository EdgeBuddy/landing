'use client';

// File: /app/tos/page.tsx
// Purpose: Terms of Service page
// Reason: Legal requirement for service operation
// Related: privacy/page.tsx, Footer.tsx

import Link from 'next/link';

export default function TermsOfService() {
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

        <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>

        <div className="prose prose-invert max-w-none">
          <p className="text-gray-400 mb-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Agreement to Terms
            </h2>
            <p>
              By accessing EdgeBuddy, you agree to be bound by these Terms of
              Service and all applicable laws and regulations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Service Description
            </h2>
            <p>
              EdgeBuddy is an AI-powered trading analysis and coaching platform
              that:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Analyzes your trading patterns</li>
              <li>Identifies behavioral biases</li>
              <li>Provides personalized coaching</li>
              <li>Helps improve trading discipline</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Important Disclaimers
            </h2>
            <div className="bg-red-900/20 border border-red-800 rounded-lg p-4 mb-4">
              <p className="font-semibold text-red-400">EdgeBuddy is NOT:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Financial advice</li>
                <li>A guarantee of profits</li>
                <li>A replacement for professional financial advisors</li>
                <li>Responsible for your trading decisions</li>
              </ul>
            </div>
            <p>
              Trading derivatives involves substantial risk of loss and is not
              suitable for all investors.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              User Responsibilities
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate information</li>
              <li>Maintain security of your account</li>
              <li>Use the service lawfully</li>
              <li>Make your own trading decisions</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Beta Program Terms
            </h2>
            <p>During the beta period:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Service is provided "as-is"</li>
              <li>Features may change or be removed</li>
              <li>Feedback may be used to improve the product</li>
              <li>Special pricing may apply</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Limitation of Liability
            </h2>
            <p>
              EdgeBuddy shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages resulting from your
              use or inability to use the service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Contact Information
            </h2>
            <p>For questions about these Terms, contact us at:</p>
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
