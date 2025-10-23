"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WebGLBackground from "./components/effects/WebGLBackground";
import EdgeBuddyLogo from "./components/ui/EdgeBuddyLogo";
import { ScannableChatDemo } from "./components/sections/ScannableChatDemo";
import { ProblemStatement } from "./components/sections/ProblemStatement";
import { HowItWorks } from "./components/sections/HowItWorks";
import { FAQSection } from "./components/sections/FAQSection";
import WaitlistForm from "./components/ui/WaitlistForm";
import Footer from "./components/sections/Footer";

function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="text-center">
        <div className="relative w-32 h-32 mx-auto mb-8">
          <div className="absolute inset-0 bg-emerald-500/20 rounded-full animate-ping" />
          <div className="absolute inset-0 bg-emerald-500/40 rounded-full animate-ping animation-delay-200" />
          <div className="relative w-32 h-32 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center">
            <span className="text-black font-bold text-2xl">EB</span>
          </div>
        </div>
        <motion.p
          className="text-emerald-400 text-lg"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Initializing EdgeBuddy...
        </motion.p>
      </div>
    </motion.div>
  );
}

export default function LandingPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    const loadAssets = async () => {
      await new Promise((resolve) => setTimeout(resolve, 300));
      setIsLoading(false);

      setTimeout(() => {
        setShowContent(true);
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        document.documentElement.classList.add("loaded");
      }, 50);
    };

    loadAssets();

    const handleSuccess = () => {
      createPremiumConfetti();
    };

    window.addEventListener("waitlist-success", handleSuccess);
    return () => window.removeEventListener("waitlist-success", handleSuccess);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen />}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showContent ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* WebGL particle background */}
          <WebGLBackground />

          {/* Neural network background overlay */}
          <div className="neural-bg" />

          {/* Navigation */}
          <nav className="fixed left-0 right-0 top-0 z-50 border-b border-zinc-800 bg-[#0A0A0A]/80 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
              <a href="/" className="flex items-center gap-3">
                <EdgeBuddyLogo size="sm" />
              </a>
              <a
                href="#waitlist"
                className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-zinc-950 transition-all hover:bg-emerald-400 hover:scale-105"
              >
                Join Waitlist
              </a>
            </div>
          </nav>

          {/* Hero Section */}
          <section className="relative overflow-hidden pt-32 pb-20 px-6">
            {/* Background Elements */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
              <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-emerald-600/10 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-7xl">
              <div className="grid items-center gap-12 lg:grid-cols-2">
                {/* Left: Headline + CTA */}
                <div>
                  <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500">
                    Derivatives Traders
                  </p>

                  <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight lg:text-6xl">
                    <span className="text-zinc-100">
                      Your Biggest Competitor Isn't the Market.
                    </span>
                    <br />
                    <span className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 bg-clip-text text-transparent">
                      It's the Trader in the Mirror.
                    </span>
                  </h1>

                  <p className="mb-8 text-lg leading-relaxed text-zinc-400">
                    EdgeBuddy analyzes YOUR trades across{" "}
                    <strong className="text-zinc-100">
                      all major exchanges
                    </strong>{" "}
                    and shows you exactly where your edge is leaking.{" "}
                    <span className="font-semibold text-emerald-400">
                      Revenge trading at 2 PM? Friday losses? Over-leveraging
                      losers?
                    </span>{" "}
                    We spot it. You fix it.
                  </p>

                  {/* CTA */}
                  <div className="mb-8 flex flex-col gap-4 sm:flex-row">
                    <a
                      href="#waitlist"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-8 py-4 text-lg font-bold text-zinc-950 shadow-lg shadow-emerald-500/30 transition-all hover:scale-105 hover:bg-emerald-400 hover:shadow-emerald-500/50"
                    >
                      Join the Waitlist
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </a>
                    <a
                      href="#how-it-works"
                      className="inline-flex items-center justify-center text-base font-medium text-zinc-400 underline underline-offset-4 transition-colors hover:text-emerald-400"
                    >
                      or see how it works first
                    </a>
                  </div>

                  {/* Trust Badges */}
                  <div className="flex flex-wrap items-center gap-6 text-sm text-zinc-500">
                    <div className="flex items-center gap-2">
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
                      <span>No credit card required</span>
                    </div>
                    <div className="flex items-center gap-2">
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
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                      <span>Closed beta access</span>
                    </div>
                    <div className="flex items-center gap-2">
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
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                      <span>Bank-level encryption</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-red-400">
                        Not financial advice
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right: Scannable Chat Demo */}
                <div>
                  <ScannableChatDemo />
                </div>
              </div>
            </div>
          </section>

          {/* Problem Statement Section */}
          <ProblemStatement />

          {/* How It Works Section */}
          <HowItWorks />

          {/* FAQ Section */}
          <FAQSection />

          {/* Waitlist Form Section */}
          <section
            id="waitlist"
            className="py-32 px-6 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[150px]" />

            <div className="max-w-4xl mx-auto text-center relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-5xl md:text-7xl font-bold mb-8">
                  Stop Trading Like an Amateur.
                  <br />
                  <span className="holographic">Start Trading Like a Pro.</span>
                </h2>

                <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto">
                  Finally, the risk manager that professional traders have -
                  built for retail traders like you.
                </p>

                <div className="glass-dark rounded-3xl p-8 md:p-12 backdrop-blur-xl">
                  <WaitlistForm />

                  <p className="mt-6 text-sm text-zinc-500">
                    Join 500+ traders waiting for access. We'll notify you when
                    we're ready.
                  </p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Footer */}
          <Footer />
        </motion.div>
      )}

      <style jsx>{`
        .animation-delay-200 {
          animation-delay: 200ms;
        }
      `}</style>
    </>
  );
}

function createPremiumConfetti() {
  const colors = ["#10b981", "#34d399", "#059669", "#06b6d4", "#0891b2"];
  const shapes = ["circle", "square", "triangle"];
  const confettiCount = 100;

  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement("div");
    const shape = shapes[Math.floor(Math.random() * shapes.length)];
    const color = colors[Math.floor(Math.random() * colors.length)];
    const size = Math.random() * 10 + 5;
    const duration = Math.random() * 3 + 2;
    const delay = Math.random() * 0.5;

    confetti.style.position = "fixed";
    confetti.style.width = `${size}px`;
    confetti.style.height = `${size}px`;
    confetti.style.backgroundColor = color;
    confetti.style.left = Math.random() * 100 + "%";
    confetti.style.top = "-20px";
    confetti.style.opacity = String(Math.random() * 0.8 + 0.2);
    confetti.style.zIndex = "9999";
    confetti.style.pointerEvents = "none";
    confetti.style.animation = `confetti-fall ${duration}s ease-out ${delay}s forwards`;

    if (shape === "circle") {
      confetti.style.borderRadius = "50%";
    } else if (shape === "triangle") {
      confetti.style.width = "0";
      confetti.style.height = "0";
      confetti.style.borderLeft = `${size / 2}px solid transparent`;
      confetti.style.borderRight = `${size / 2}px solid transparent`;
      confetti.style.borderBottom = `${size}px solid ${color}`;
      confetti.style.backgroundColor = "transparent";
    }

    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), (duration + delay) * 1000);
  }

  if (!document.querySelector("#confetti-animation")) {
    const style = document.createElement("style");
    style.id = "confetti-animation";
    style.textContent = `
      @keyframes confetti-fall {
        0% {
          transform: translateY(0) rotate(0deg);
          opacity: 1;
        }
        100% {
          transform: translateY(100vh) rotate(720deg);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
  }
}
