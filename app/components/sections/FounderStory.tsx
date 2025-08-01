// File: /app/components/sections/FounderStory.tsx
// Purpose: Founder perspective that connects with traders' experiences
// Reason: Shows understanding of trader isolation and need for companion
// Related: page.tsx, ProblemAgitation.tsx

'use client';

import { motion } from 'framer-motion';

export default function FounderStory() {
  return (
    <section className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gray-400">Why </span>
            <span className="text-emerald-400">EdgeBuddy</span>
            <span className="text-gray-400"> Exists</span>
          </h2>
          <p className="text-xl text-gray-500">
            A different approach to trading support
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-dark rounded-3xl p-8 md:p-12"
        >
          {/* Founder intro */}
          <div className="flex items-start gap-6 mb-8">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center">
                <span className="text-xl font-bold text-black">EB</span>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">
                "The Companion I Wish I Had Sooner"
              </h3>
              <p className="text-gray-400">Founder, EdgeBuddy</p>
            </div>
          </div>

          {/* The story */}
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
            <p>
              After countless sessions buried in stats, wondering why things
              still slipped through, I realized it's not always the data we lack
              — it's the clarity.
            </p>

            <p>
              Most of us trade without a safety net. No mentor. No feedback
              loop. And even when the metrics are there, the truth often hides
              in plain sight.
            </p>

            <p className="text-xl font-medium text-emerald-400 my-8 text-center">
              "Professional traders have teams watching their every move. <br />
              Retail traders? We're expected to catch our own blind spots."
            </p>

            <p>
              EdgeBuddy is being built to change that — a friendly companion
              that reads between the lines of your performance and speaks to you
              like a trusted peer.
            </p>

            <p>
              Because sometimes, all we need is someone — or something — that
              cuts through the noise and tells it like it is.
            </p>
          </div>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 mb-6">Supporting traders across</p>
          <div className="flex justify-center items-center gap-8 opacity-50">
            <span className="text-lg font-semibold">Binance</span>
            <span className="text-lg font-semibold">Bybit</span>
            <span className="text-lg font-semibold">OKX</span>
            <span className="text-lg font-semibold">Hyperliquid</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
