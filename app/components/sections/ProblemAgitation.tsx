// File: /app/components/sections/ProblemAgitation.tsx
// Purpose: Contrasts traditional tools with EdgeBuddy's approach
// Reason: Shows visitors why existing solutions fail them
// Related: page.tsx, Features.tsx

'use client';

import { motion } from 'framer-motion';
import { XCircle, CheckCircle } from 'lucide-react';

export default function ProblemAgitation() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-4xl font-bold mb-4">
            Traditional Tools Show You{' '}
            <span className="text-gray-500">What Happened</span>
            <br />EdgeBuddy Shows You{' '}
            <span className="text-emerald-400">Why It Keeps Happening</span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Traditional Approach */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-900/30 rounded-2xl p-8 border border-gray-800"
          >
            <h4 className="text-xl font-semibold mb-6 text-gray-400">
              Traditional Trading Tools
            </h4>
            <ul className="space-y-4 text-gray-500">
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-400 mt-0.5 shrink-0" />
                <span>"Here's your P&L chart" 📊</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-400 mt-0.5 shrink-0" />
                <span>"You lost $5,000 last month"</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-400 mt-0.5 shrink-0" />
                <span>"Your win rate is 34%"</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-400 mt-0.5 shrink-0" />
                <span>Static reports you never read</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-400 mt-0.5 shrink-0" />
                <span>Complex interfaces that overwhelm</span>
              </li>
            </ul>
          </motion.div>

          {/* EdgeBuddy Approach */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-emerald-900/20 rounded-2xl p-8 border border-emerald-800"
          >
            <h4 className="text-xl font-semibold mb-6 text-emerald-400">
              EdgeBuddy
            </h4>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                <span>"You revenge trade after losses - let's fix this"</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                <span>"I noticed you lose 73% more on Fridays"</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                <span>"Your emotions peak at 2:30 PM - here's why"</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                <span>Daily conversations that actually help</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                <span>A mentor that learns your personality</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
