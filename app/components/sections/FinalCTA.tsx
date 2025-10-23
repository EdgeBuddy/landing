"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-32">
      {/* Background Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-15">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(16, 185, 129, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(16, 185, 129, 0.1) 1px, transparent 1px)",
            backgroundSize: "4rem 4rem",
          }}
        />
      </div>

      {/* Gradient Orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-emerald-600/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6">
        {/* Main Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6 text-center text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl"
        >
          <span className="text-zinc-100">
            Stop Repeating the Same Mistakes.
          </span>
          <br />
          <span className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 bg-clip-text text-transparent">
            Start Seeing Your Patterns.
          </span>
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mb-12 max-w-3xl text-center text-lg leading-relaxed text-zinc-400 md:text-xl"
        >
          Connect your exchange in 60 seconds. Stats ready in under 2 minutes.{" "}
          <strong className="font-semibold text-zinc-100">
            See exactly where your edge is leaking
          </strong>{" "}
          before Friday happens again.
        </motion.p>

        {/* Massive CTA Button - Changed to scroll to waitlist */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-12 text-center"
        >
          <a href="#waitlist">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-massive-cta inline-flex items-center gap-3 rounded-2xl px-12 py-6 text-xl font-bold text-zinc-950 md:px-16 md:py-7 md:text-2xl"
            >
              <span className="relative">Join the Waitlist</span>
              <ArrowRight className="relative h-7 w-7 transition-transform group-hover:translate-x-1" />
            </motion.button>
          </a>
        </motion.div>

        {/* Trust Elements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-10 flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-500"
        >
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-500" />
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-500" />
            <span>Setup in 60 seconds</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-500" />
            <span>Bank-level encryption</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-red-400">
              Not financial advice
            </span>
          </div>
        </motion.div>

        {/* Risk Reversal Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mx-auto mb-12 max-w-3xl"
        >
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 text-center backdrop-blur-sm">
            <p className="text-base leading-relaxed text-zinc-400 md:text-lg">
              <strong className="font-bold text-zinc-100">
                Free tier. Forever.
              </strong>{" "}
              Start with 6 messages per day and 1 & 7 day analysis. Upgrade
              anytime for deeper insights (30 & 90 day windows + behavioral
              patterns). Export your data anytime. We're not holding your
              insights hostage.
            </p>
          </div>
        </motion.div>

        {/* Limited Beta Urgency */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mx-auto max-w-2xl"
        >
          <div className="overflow-hidden rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-500/10 to-transparent p-8 text-center backdrop-blur-sm">
            <div className="mb-3 flex items-center justify-center gap-3">
              <span className="text-2xl">📈</span>
              <p className="text-lg font-bold text-amber-400">
                Limited Beta Access
              </p>
            </div>
            <p className="text-sm text-zinc-400 md:text-base">
              We're manually onboarding users to ensure quality feedback.{" "}
              <strong className="text-zinc-100">Current queue: ~3 days</strong>.
              Sign up now to reserve your spot.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
