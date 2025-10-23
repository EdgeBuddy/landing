"use client";

import { motion } from "framer-motion";
import { TrendingDown, AlertTriangle, Users } from "lucide-react";
import { AnimatedCounter } from "@/app/components/ui/AnimatedCounter";

const STATS = [
  {
    icon: TrendingDown,
    value: 93,
    suffix: "%",
    label: "of retail traders lose money in derivatives",
    color: "red",
    glow: true,
  },
  {
    icon: AlertTriangle,
    value: 73,
    suffix: "%",
    label: "admit to FOMO trading and revenge trading",
    color: "amber",
    glow: false,
  },
  {
    icon: Users,
    value: 0,
    suffix: "",
    label: "have a dedicated risk manager watching their back",
    color: "zinc",
    glow: false,
  },
];

export function ProblemStatement() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background Elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-red-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            <span className="text-zinc-100">Institutional Traders Have</span>
            <br />
            <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">
              Risk Managers, Psychologists & Data Teams.
            </span>
            <br />
            <span className="text-zinc-500">You Have Willpower.</span>
            <br />
            <span className="text-2xl font-semibold text-zinc-600 md:text-3xl">
              Guess Who Wins?
            </span>
          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-zinc-400">
            93% of retail traders lose not because they lack strategy, but
            because they can't see their own{" "}
            <strong className="font-semibold text-zinc-100">
              behavioral leaks
            </strong>
            . EdgeBuddy is the mirror you've been trading without.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {STATS.map((stat, index) => {
            const Icon = stat.icon;
            const colorClasses = {
              red: {
                bg: "bg-red-500/10",
                border: "border-red-500/20",
                text: "text-red-400",
                iconBg: "bg-red-500/20",
                glow: "shadow-red-500/20",
              },
              amber: {
                bg: "bg-amber-500/10",
                border: "border-amber-500/20",
                text: "text-amber-400",
                iconBg: "bg-amber-500/20",
                glow: "shadow-amber-500/20",
              },
              zinc: {
                bg: "bg-zinc-800/50",
                border: "border-zinc-700",
                text: "text-zinc-400",
                iconBg: "bg-zinc-700/50",
                glow: "shadow-zinc-500/10",
              },
            }[stat.color];

            if (!colorClasses) return null;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative overflow-hidden rounded-2xl border ${colorClasses.border} ${colorClasses.bg} p-8 backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] ${stat.glow ? `stat-card-glow hover:shadow-2xl ${colorClasses.glow}` : ""}`}
              >
                {/* Icon */}
                <div
                  className={`mb-6 inline-flex rounded-xl ${colorClasses.iconBg} p-3`}
                >
                  <Icon className={`h-6 w-6 ${colorClasses.text}`} />
                </div>

                {/* Counter */}
                <div className={`mb-3 text-6xl font-bold ${colorClasses.text}`}>
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>

                {/* Label */}
                <p className="text-[15px] leading-relaxed text-zinc-400">
                  {stat.label}
                </p>

                {/* Hover Glow Effect */}
                {stat.glow && (
                  <div
                    className={`pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Bridge Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16"
        >
          <div className="card-premium gradient-border-animated relative overflow-hidden rounded-3xl p-10">
            {/* Gradient Overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent" />

            <div className="relative z-10">
              <h3 className="mb-6 text-center text-2xl font-bold text-zinc-100 md:text-3xl">
                EdgeBuddy Gives You What Institutions Have
              </h3>

              <div className="grid gap-8 md:grid-cols-3">
                <div className="text-center">
                  <div className="mb-3 text-4xl">📊</div>
                  <h4 className="mb-2 font-semibold text-zinc-100">
                    Real-Time Metrics
                  </h4>
                  <p className="text-sm leading-relaxed text-zinc-400">
                    Win rate, profit factor, Sharpe ratio, drawdown across
                    1/7/30/90 day windows
                  </p>
                </div>

                <div className="text-center">
                  <div className="mb-3 text-4xl">🧠</div>
                  <h4 className="mb-2 font-semibold text-zinc-100">
                    Behavioral Analysis
                  </h4>
                  <p className="text-sm leading-relaxed text-zinc-400">
                    Detects 12 patterns: revenge trading, FOMO, Friday losses,
                    session bleeding
                  </p>
                </div>

                <div className="text-center">
                  <div className="mb-3 text-4xl">💬</div>
                  <h4 className="mb-2 font-semibold text-zinc-100">
                    Honest Feedback
                  </h4>
                  <p className="text-sm leading-relaxed text-zinc-400">
                    No charts, no jargon. Just plain English answers to "why did
                    I lose money?"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
