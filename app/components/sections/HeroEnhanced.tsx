// File: /app/components/sections/HeroEnhanced.tsx
// Purpose: Mind-blowing hero section with advanced 3D graphics and interactions
// Reason: Creates an unforgettable first impression that sets EdgeBuddy apart
// Related: AIOrb3D.tsx, page.tsx

'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import dynamic from 'next/dynamic';

// Dynamic import to avoid SSR issues
const AIOrb3D = dynamic(() => import('../ai/AIOrb3D'), {
  ssr: false,
  loading: () => (
    <div className="h-[400px] flex items-center justify-center">
      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-emerald-400/20 to-emerald-600/20 animate-pulse" />
    </div>
  ),
});

export default function HeroEnhanced() {
  const sectionRef = useRef<HTMLElement>(null);
  const [_isLoaded, setIsLoaded] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  useEffect(() => {
    setIsLoaded(true);

    // Floating particles only - no GSAP animations on text
    createFloatingParticles();
  }, []);

  const createFloatingParticles = () => {
    const particlesContainer = document.querySelector('.particles-container');
    if (!particlesContainer) return;

    for (let i = 0; i < 30; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 10 + 's';
      particle.style.animationDuration = 10 + Math.random() * 10 + 's';
      particlesContainer.appendChild(particle);
    }
  };

  const handleScrollToDemo = () => {
    document.querySelector('#demo-section')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <motion.section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ y, opacity }}
    >
      {/* Neural network background */}
      <div className="neural-bg" />

      {/* Particles container */}
      <div className="particles-container absolute inset-0 pointer-events-none" />

      {/* Grid overlay with gradient */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* 3D AI Orb */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <AIOrb3D />
        </motion.div>

        {/* Hero Copy */}
        <div className="mt-8 relative z-20">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-white">Professional Traders Have</span>
            <br />
            <span className="text-emerald-400">Risk Managers</span>
            <span className="text-white">.</span>
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-4xl font-light mb-8 text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            You're Alone With Your Mistakes.
          </motion.h2>

          <motion.div
            className="mb-12"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            <p className="text-3xl md:text-5xl font-bold text-emerald-400">
              Until Now.
            </p>
          </motion.div>

          <motion.div
            className="mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              EdgeBuddy is the trading companion that sees what you can't:
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-left max-w-4xl mx-auto">
              <div className="p-4 rounded-lg border border-gray-800/50 hover:border-emerald-900/30 transition-colors">
                <div className="text-red-400 font-medium mb-1 text-sm">
                  Hidden Analytics
                </div>
                <p className="text-gray-500 text-xs">
                  Transforms overwhelming data into simple "this is why you lost" explanations
                </p>
              </div>
              <div className="p-4 rounded-lg border border-gray-800/50 hover:border-emerald-900/30 transition-colors">
                <div className="text-red-400 font-medium mb-1 text-sm">
                  Emotional Blind Spots
                </div>
                <p className="text-gray-500 text-xs">
                  Shows exactly when feelings override logic in your trades
                </p>
              </div>
              <div className="p-4 rounded-lg border border-gray-800/50 hover:border-emerald-900/30 transition-colors">
                <div className="text-red-400 font-medium mb-1 text-sm">
                  Destructive Loops
                </div>
                <p className="text-gray-500 text-xs">
                  Catches the same expensive mistakes you make week after week
                </p>
              </div>
            </div>
          </motion.div>

          {/* Interactive CTA */}
          <motion.div
            className=""
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <div className="glass-dark rounded-3xl p-8 max-w-2xl mx-auto hover-lift">
              <p className="text-gray-500 mb-6 text-sm uppercase tracking-wider">
                The "Tap on the Shoulder" for Retail Traders
              </p>
              <button
                onClick={handleScrollToDemo}
                className="group relative w-full neon-button bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-black font-bold rounded-xl px-8 py-6 text-lg transition-all duration-300"
              >
                <span className="relative z-10 flex items-center justify-between">
                  <span>See My Hidden Trading Patterns</span>
                  <span className="text-black/70 group-hover:translate-x-2 transition-transform">
                    Free Analysis →
                  </span>
                </span>
              </button>

              {/* Live status indicator */}
              <div className="flex items-center justify-center mt-6 gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-xs text-gray-600">
                  Live Analysis Available
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-emerald-500/50 rounded-full p-1">
          <div className="w-1 h-2 bg-emerald-500 rounded-full mx-auto animate-bounce" />
        </div>
      </motion.div>
    </motion.section>
  );
}
