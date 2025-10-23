"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import EdgeBuddyLogo from "@/app/components/ui/EdgeBuddyLogo";

interface Message {
  role: "user" | "assistant";
  content: string;
  insights?: {
    type: "critical" | "warning";
    title: string;
    text: string;
  }[];
}

const DEMO_MESSAGES: Message[] = [
  {
    role: "user",
    content: "why did I lose money this week?",
  },
  {
    role: "assistant",
    content:
      "This week's 8 trades show a sharp contrast: **ZORA-PERP is undefeated at 2-0 for $554.65**, but PUMP-PERP and BTC-PERP combined cost you **$3,870.72** across 3 trades.",
    insights: [
      {
        type: "critical",
        title: "The Friday Problem",
        text: "Friday hit you for **-$3,199.10** with a **66.67% win rate** (4 wins, 2 losses). Those 2 Friday losses were devastating—your position sizing spiked when chasing.",
      },
      {
        type: "warning",
        title: "Session Bleeding",
        text: "London sessions: **-$2,235.37** loss with only **33.33%** win rate. New York: **-$1,004.64** despite **75%** win rate—losses outsize wins.",
      },
    ],
  },
  {
    role: "user",
    content: "i thought i was doing okay with the win rate",
  },
  {
    role: "assistant",
    content:
      "A high win rate means nothing if you're **sizing bigger on losses**. Friday's 66.67% win rate with -$3,199.10 loss is the smoking gun—you won more trades but still got destroyed.\n\nYour **recovery factor of -0.62** confirms this pattern: every time you chase, you go deeper. **Thursday's $197.05** across 2 trades with 50% win rate is sustainable. Friday's 6 trades? That's emotional trading.",
  },
];

export function ScannableChatDemo() {
  const [visibleMessages, setVisibleMessages] = useState<number>(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (visibleMessages >= DEMO_MESSAGES.length) {
      // Reset after showing all messages
      const resetTimer = setTimeout(() => {
        setVisibleMessages(0);
      }, 8000);
      return () => clearTimeout(resetTimer);
    }

    const currentMessage = DEMO_MESSAGES[visibleMessages];
    const isAssistant = currentMessage.role === "assistant";

    // Show typing indicator for assistant messages
    if (isAssistant) {
      setIsTyping(true);
      const typingTimer = setTimeout(() => {
        setIsTyping(false);
        setVisibleMessages((prev) => prev + 1);
      }, 1500);
      return () => clearTimeout(typingTimer);
    }

    // Show user messages immediately
    const messageTimer = setTimeout(() => {
      setVisibleMessages((prev) => prev + 1);
    }, 800);
    return () => clearTimeout(messageTimer);
  }, [visibleMessages]);

  return (
    <div className="relative">
      {/* Chat Container */}
      <div className="glass-card-ultra relative overflow-hidden rounded-3xl p-6">
        {/* Gradient Overlay */}
        <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-500/5 to-transparent" />

        {/* Accent Glow */}
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-emerald-500/20 blur-3xl" />

        {/* Chat Header */}
        <div className="relative z-10 mb-6 flex items-center gap-3 border-b border-zinc-800 pb-4">
          <EdgeBuddyLogo size="sm" className="h-10 w-10" showText={false} />
        </div>

        {/* Messages */}
        <div className="relative z-10 flex min-h-[400px] flex-col gap-4">
          <AnimatePresence mode="popLayout">
            {DEMO_MESSAGES.slice(0, visibleMessages).map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className={`flex gap-3 ${message.role === "user" ? "flex-row-reverse" : "flex-row"}`}
              >
                {message.role === "assistant" && (
                  <div className="flex-shrink-0">
                    <EdgeBuddyLogo
                      size="sm"
                      className="h-8 w-8"
                      showText={false}
                    />
                  </div>
                )}

                <div
                  className={`flex-1 ${message.role === "user" ? "max-w-[80%]" : "max-w-full"}`}
                >
                  {/* Message Bubble */}
                  <div
                    className={`rounded-2xl px-4 py-3 ${
                      message.role === "user"
                        ? "ml-auto w-fit border-l-4 border-l-emerald-500 bg-emerald-500 font-medium text-zinc-950"
                        : "border border-zinc-800 bg-zinc-900/50 text-zinc-300"
                    }`}
                  >
                    <p
                      className="text-[15px] leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html: message.content.replace(
                          /\*\*(.*?)\*\*/g,
                          '<strong class="font-bold text-white">$1</strong>',
                        ),
                      }}
                    />

                    {/* Insight Boxes */}
                    {message.insights && message.insights.length > 0 && (
                      <div className="mt-4 space-y-3">
                        {message.insights.map((insight, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 + idx * 0.1 }}
                            className={`insight-box ${
                              insight.type === "critical"
                                ? "insight-box-critical"
                                : "insight-box-warning"
                            }`}
                          >
                            <div
                              className={`mb-1 text-xs font-semibold ${
                                insight.type === "critical"
                                  ? "text-red-400"
                                  : "text-amber-400"
                              }`}
                            >
                              {insight.title}
                            </div>
                            <div
                              className="text-sm leading-relaxed text-zinc-300"
                              dangerouslySetInnerHTML={{
                                __html: insight.text.replace(
                                  /\*\*(.*?)\*\*/g,
                                  '<strong class="font-bold text-white">$1</strong>',
                                ),
                              }}
                            />
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex gap-3"
              >
                <EdgeBuddyLogo
                  size="sm"
                  className="h-8 w-8 flex-shrink-0"
                  showText={false}
                />
                <div className="flex items-center gap-1 rounded-2xl border border-zinc-800 bg-zinc-900/50 px-4 py-3">
                  <div className="h-2 w-2 animate-bounce rounded-full bg-emerald-500 [animation-delay:-0.3s]" />
                  <div className="h-2 w-2 animate-bounce rounded-full bg-emerald-500 [animation-delay:-0.15s]" />
                  <div className="h-2 w-2 animate-bounce rounded-full bg-emerald-500" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
