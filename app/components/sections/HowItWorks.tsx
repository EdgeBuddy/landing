"use client";

import { motion } from "framer-motion";
import { LinkIcon, Zap, MessageSquare, Lock, Crown } from "lucide-react";

const STEPS = [
  {
    number: 1,
    title: "Connect Your Exchange",
    time: "60 seconds",
    description:
      "Add your Binance, Bybit, OKX, or Hyperliquid API key (read-only). We sync your trade history securely. Bank-level AES-256 encryption. No withdrawal permissions needed.",
    icon: LinkIcon,
    color: "emerald",
    visual: (
      <div className="relative">
        <div className="timeline-card overflow-hidden rounded-xl p-6">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/20">
              <Lock className="h-5 w-5 text-emerald-400" />
            </div>
            <div className="flex-1">
              <div className="mb-2 text-xs font-medium text-zinc-500">
                Select Exchange
              </div>
              <div className="flex gap-2">
                <div className="rounded-lg border border-emerald-500/50 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-400">
                  Binance
                </div>
                <div className="rounded-lg border border-zinc-700 bg-zinc-800/50 px-3 py-1.5 text-xs text-zinc-500">
                  Bybit
                </div>
                <div className="rounded-lg border border-zinc-700 bg-zinc-800/50 px-3 py-1.5 text-xs text-zinc-500">
                  OKX
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <input
              type="text"
              placeholder="API Key"
              className="w-full rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-zinc-400"
              disabled
            />
            <input
              type="password"
              placeholder="API Secret"
              className="w-full rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-zinc-400"
              disabled
            />
          </div>
          <div className="mt-4 flex items-center gap-2 text-xs text-zinc-500">
            <Lock className="h-3.5 w-3.5" />
            <span>Read-only • No withdrawal permissions</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    number: 2,
    title: "Stats Ready Instantly",
    time: "Under 2 minutes",
    description:
      "Your metrics appear fast. Start chatting with EdgeBuddy about your 1-day and 7-day performance immediately. Win rate, profit factor, session data—all ready to discuss.",
    icon: Zap,
    color: "emerald",
    visual: (
      <div className="relative">
        <div className="timeline-card overflow-hidden rounded-xl p-6">
          <div className="mb-4 text-xs font-medium text-zinc-500">
            Syncing your trades...
          </div>
          <div className="mb-4 h-2 overflow-hidden rounded-full bg-zinc-800">
            <motion.div
              className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400"
              initial={{ width: "0%" }}
              animate={{ width: "87%" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3 rounded-lg border border-zinc-800 bg-zinc-900/50 p-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/20">
                <svg
                  className="h-4 w-4 text-emerald-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span className="text-sm text-zinc-400">Win rate calculated</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border border-zinc-800 bg-zinc-900/50 p-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/20">
                <svg
                  className="h-4 w-4 text-emerald-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span className="text-sm text-zinc-400">Session data ready</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border border-zinc-800 bg-zinc-900/50 p-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/20">
                <svg
                  className="h-4 w-4 text-emerald-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span className="text-sm text-zinc-400">Ready to chat!</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    number: 3,
    title: "Chat Anytime in Plain English",
    time: "Instant responses",
    description:
      'Ask EdgeBuddy anything: "Why did I lose Friday?" "Am I revenge trading?" Get honest feedback based on YOUR data. No charts, no dashboards—just conversations.',
    icon: MessageSquare,
    color: "emerald",
    visual: (
      <div className="relative">
        <div className="timeline-card overflow-hidden rounded-xl p-6">
          <div className="mb-4 space-y-3">
            <div className="ml-auto w-fit rounded-2xl rounded-br-sm bg-emerald-500 px-4 py-2 text-sm font-medium text-zinc-950">
              am I revenge trading?
            </div>
            <div className="flex gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/20 text-xs font-bold text-emerald-400">
                EB
              </div>
              <div className="max-w-[85%] rounded-2xl rounded-tl-sm border border-zinc-800 bg-zinc-900/50 px-4 py-2 text-sm text-zinc-300">
                <p>
                  Yes. After Thursday's{" "}
                  <strong className="text-white">-$197.05</strong> loss, you
                  took <strong className="text-white">6 trades Friday</strong>{" "}
                  (vs your 2-trade average). Your position sizing spiked{" "}
                  <strong className="text-red-400">3x</strong>.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2">
            <input
              type="text"
              placeholder="Ask about your trading..."
              className="flex-1 bg-transparent text-sm text-zinc-400 outline-none"
              disabled
            />
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500">
              <svg
                className="h-4 w-4 text-zinc-950"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14M12 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-zinc-950 py-24"
    >
      {/* Background Pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(16, 185, 129, 0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(16, 185, 129, 0.3) 1px, transparent 1px)",
            backgroundSize: "4rem 4rem",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-zinc-100 md:text-5xl">
            How It Works
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-zinc-400">
            From connection to insights in under 2 minutes. No complex setup, no
            learning curve.
          </p>
        </motion.div>

        {/* Steps Timeline */}
        <div className="space-y-16">
          {STEPS.map((step, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`grid items-center gap-8 md:grid-cols-2 ${isEven ? "" : "md:grid-flow-dense"}`}
              >
                {/* Content */}
                <div className={isEven ? "" : "md:col-start-2"}>
                  <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-lg font-bold text-zinc-950">
                      {step.number}
                    </div>
                    <span className="text-sm font-semibold text-emerald-400">
                      {step.time}
                    </span>
                  </div>

                  <h3 className="mb-3 text-3xl font-bold text-zinc-100">
                    {step.title}
                  </h3>

                  <p className="mb-6 text-base leading-relaxed text-zinc-400">
                    {step.description}
                  </p>

                  {/* Tier Badge for Patterns */}
                  {step.number === 3 && (
                    <div className="mt-6 rounded-xl border border-amber-500/30 bg-amber-500/10 p-4">
                      <div className="mb-2 flex items-center gap-2">
                        <Crown className="h-5 w-5 text-amber-400" />
                        <span className="text-sm font-semibold text-amber-400">
                          Behavioral Patterns (Paid Feature)
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed text-zinc-400">
                        Advanced pattern detection (revenge trading, FOMO,
                        session bleeding) calculated{" "}
                        <strong className="text-white">
                          overnight after UTC day close
                        </strong>
                        . Requires paid tier for 30/90-day analysis. Free tier:
                        1d/7d metrics only.
                      </p>
                    </div>
                  )}
                </div>

                {/* Visual */}
                <div className={isEven ? "" : "md:col-start-1 md:row-start-1"}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="rounded-2xl"
                  >
                    {step.visual}
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tier Comparison Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20"
        >
          <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50">
            <div className="grid md:grid-cols-2">
              {/* Free Tier */}
              <div className="border-b border-zinc-800 p-8 md:border-b-0 md:border-r">
                <div className="mb-4 inline-flex rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-1 text-sm font-semibold text-zinc-400">
                  Free Tier
                </div>
                <ul className="space-y-2 text-sm text-zinc-400">
                  <li className="flex items-center gap-2">
                    <svg
                      className="h-4 w-4 text-emerald-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>
                      1-day and 7-day stats (win rate, profit factor, drawdown)
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="h-4 w-4 text-emerald-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Chat with EdgeBuddy about recent performance</span>
                  </li>
                  <li className="flex items-center gap-2 opacity-50">
                    <svg
                      className="h-4 w-4 text-zinc-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    <span>No behavioral pattern detection</span>
                  </li>
                </ul>
              </div>

              {/* Paid Tier */}
              <div className="p-8">
                <div className="mb-4 inline-flex items-center gap-2 rounded-lg border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-sm font-semibold text-amber-400">
                  <Crown className="h-4 w-4" />
                  Paid Tiers
                </div>
                <ul className="space-y-2 text-sm text-zinc-400">
                  <li className="flex items-center gap-2">
                    <svg
                      className="h-4 w-4 text-emerald-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>1/7/30/90-day metrics (extended analysis)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="h-4 w-4 text-emerald-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>
                      Behavioral patterns (7/30/90-day windows, calculated
                      nightly)
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="h-4 w-4 text-emerald-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>
                      Advanced pattern detection (revenge trading, FOMO, session
                      bleeding)
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
