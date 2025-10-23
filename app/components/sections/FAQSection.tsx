"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Globe, Clock, Shield, Zap } from "lucide-react";

interface FAQItem {
  id: string;
  icon: React.ReactNode;
  question: string;
  answer: string;
  featured?: boolean;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    id: "exchanges",
    icon: <Globe className="h-5 w-5" />,
    question: "Which exchanges do you support?",
    answer:
      "Currently supporting Binance, Bybit, OKX, Hyperliquid, and Lighter for perpetual futures. We ingest your trade history via secure API keys (read-only permissions). More exchanges coming based on user demand.",
    featured: true,
  },
  {
    id: "time",
    icon: <Clock className="h-5 w-5" />,
    question: "How long until I see insights?",
    answer:
      "Metrics are ready to discuss in less than 2 minutes after connecting your first exchange. Behavioral pattern detection runs overnight (processes 12 patterns across all your trades). The more trading history you have, the more accurate the insights.",
  },
  {
    id: "security",
    icon: <Shield className="h-5 w-5" />,
    question: "Is my API key safe?",
    answer:
      "Yes. We only request read-only permissions (no withdrawals, no trading). API keys are encrypted with AES-256 and stored in isolated databases. We never see your passwords. You can revoke access anytime from your exchange dashboard.",
  },
  {
    id: "advice",
    icon: <Zap className="h-5 w-5" />,
    question: "Does EdgeBuddy give trading signals?",
    answer:
      "No. EdgeBuddy is a mirror, not an advisor. We show you YOUR patterns (revenge trading, FOMO, position sizing chaos) in plain English. We never tell you what to trade, when to enter, or what price targets to use. You make all trading decisions.",
  },
];

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const featuredItem = FAQ_ITEMS.find((item) => item.featured);
  const regularItems = FAQ_ITEMS.filter((item) => !item.featured);

  return (
    <section className="relative overflow-hidden py-24">
      {/* Background Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(16, 185, 129, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(16, 185, 129, 0.1) 1px, transparent 1px)",
            backgroundSize: "4rem 4rem",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-4xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-zinc-100 md:text-5xl">
            Common Questions
          </h2>
          <p className="text-lg text-zinc-400">
            Everything you need to know about EdgeBuddy
          </p>
        </motion.div>

        <div className="space-y-6">
          {/* Featured Question (Always Visible) */}
          {featuredItem && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="card-premium relative overflow-hidden rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/5 to-transparent p-6"
            >
              {/* Gradient Overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent" />

              <div className="relative z-10">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400">
                    {featuredItem.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-100">
                    {featuredItem.question}
                  </h3>
                </div>
                <p className="ml-13 text-[15px] leading-relaxed text-zinc-400">
                  {featuredItem.answer}
                </p>
              </div>
            </motion.div>
          )}

          {/* Regular Questions (Accordion) */}
          {regularItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
              className="faq-item overflow-hidden rounded-2xl"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="flex w-full items-center justify-between p-6 text-left transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-800/50 text-zinc-400 transition-colors group-hover:bg-emerald-500/20 group-hover:text-emerald-400">
                    {item.icon}
                  </div>
                  <h3 className="text-base font-semibold text-zinc-100">
                    {item.question}
                  </h3>
                </div>
                <motion.div
                  animate={{ rotate: openId === item.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="h-5 w-5 text-zinc-500" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openId === item.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-zinc-800 px-6 pb-6 pt-4">
                      <p className="ml-13 text-[15px] leading-relaxed text-zinc-400">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA Below FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="mb-4 text-sm text-zinc-500">
            Still have questions? We're here to help.
          </p>
          <a
            href="mailto:support@edgebuddy.ai"
            className="inline-flex items-center gap-2 text-sm font-medium text-emerald-400 transition-colors hover:text-emerald-300"
          >
            Contact Support →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
