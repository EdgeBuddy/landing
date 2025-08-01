// File: /app/components/sections/TradingReality.tsx
// Purpose: Hard-hitting section that shows the brutal reality of trading alone
// Reason: Makes traders feel understood and creates urgency for solution
// Related: page.tsx, FounderStory.tsx

'use client';

import { motion } from 'framer-motion';
import { TrendingDown, AlertTriangle, Brain, Users } from 'lucide-react';

export default function TradingReality() {
  const stats = [
    {
      number: '95%',
      label: 'of retail traders lose money',
      icon: TrendingDown,
    },
    {
      number: '73%',
      label: 'repeat the same mistakes daily',
      icon: AlertTriangle,
    },
    { number: '0', label: 'have a trading mentor', icon: Brain },
    { number: '100%', label: 'of pros have risk managers', icon: Users },
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/10 to-black" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            The <span className="text-red-400">Brutal Truth</span> About
            <br />
            Trading Without a Safety Net
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            While you're alone with your charts, here's what's really happening:
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-red-900/50 transition-colors"
            >
              <stat.icon className="w-8 h-8 text-red-400 mb-4" />
              <div className="text-4xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* The Reality Check */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-red-950/20 to-gray-950/20 rounded-3xl p-8 md:p-12 border border-red-900/20"
        >
          <h3 className="text-3xl font-bold mb-8 text-center">
            Every Day You Trade Alone, You're Fighting With:
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-900/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">😤</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">
                    Revenge Trading
                  </h4>
                  <p className="text-gray-400">
                    That uncontrollable urge to "win it back" after a loss,
                    doubling down until your account is decimated.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-900/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📈</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">
                    FOMO Spirals
                  </h4>
                  <p className="text-gray-400">
                    Jumping into trades because "everyone else is winning" while
                    you're sitting on the sidelines.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-900/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🎰</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">
                    Overtrading Addiction
                  </h4>
                  <p className="text-gray-400">
                    Can't stop clicking buttons, turning investing into
                    gambling, bleeding out through fees and bad decisions.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-900/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">⏰</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">
                    Time-Based Patterns
                  </h4>
                  <p className="text-gray-400">
                    Losing more at specific times (Fridays, afternoons,
                    month-end) without even realizing the pattern exists.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-900/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🔄</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">
                    Capitulation Cycles
                  </h4>
                  <p className="text-gray-400">
                    Holding losers too long, cutting winners too early. The
                    exact opposite of what profitable traders do.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-900/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🧠</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">
                    Psychological Blindness
                  </h4>
                  <p className="text-gray-400">
                    Your brain literally can't see its own biases. You need
                    external perspective, but you have none.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-xl text-gray-300 mb-4">
              Professional traders have entire teams preventing these mistakes.
            </p>
            <p className="text-2xl font-bold text-white">
              You have <span className="text-red-400">nothing</span>.
            </p>
            <p className="text-lg text-emerald-400 mt-4">Until EdgeBuddy.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
