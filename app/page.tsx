// File: /app/page.tsx
// Purpose: World-class landing page that sets the standard for EdgeBuddy's brand
// Reason: Creates an unforgettable experience that converts visitors to believers
// Related: All component files

'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WebGLBackground from './components/effects/WebGLBackground';
import Navbar from './components/sections/Navbar';
import HeroEnhanced from './components/sections/HeroEnhanced';
import TradingReality from './components/sections/TradingReality';
import FounderStory from './components/sections/FounderStory';
import LiveConversationEnhanced from './components/ai/LiveConversationEnhanced';
import ProblemAgitation from './components/sections/ProblemAgitation';
import Transformation from './components/sections/Transformation';
import Features from './components/sections/Features';
import ComingSoon from './components/sections/ComingSoon';
import WaitlistForm from './components/ui/WaitlistForm';
import Footer from './components/sections/Footer';

// Loading screen component
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

export default function LandingPageEnhanced() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Force scroll to top on mount
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    // Preload critical assets
    const loadAssets = async () => {
      // Quick asset loading
      await new Promise((resolve) => setTimeout(resolve, 300));
      setIsLoading(false);

      // Slight delay before showing content
      setTimeout(() => {
        setShowContent(true);
        // Ensure we're at the top after content loads
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        // Re-enable smooth scrolling
        document.documentElement.classList.add('loaded');
      }, 50);
    };

    loadAssets();

    // Handle confetti on successful waitlist signup
    const handleSuccess = () => {
      createPremiumConfetti();
    };

    window.addEventListener('waitlist-success', handleSuccess);
    return () => window.removeEventListener('waitlist-success', handleSuccess);
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
            <Navbar />

            {/* Hero Section with 3D AI Orb */}
            <HeroEnhanced />

            {/* The Brutal Reality of Trading Alone */}
            <TradingReality />

            {/* Founder Story - Building Trust */}
            <FounderStory />

            {/* Live Conversation Demo */}
            <section id="demo-section" className="py-32 px-6 relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none" />
              <div className="max-w-5xl mx-auto relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="text-center mb-16"
                >
                  <h2 className="text-5xl md:text-6xl font-bold mb-6">
                    See How <span className="holographic">EdgeBuddy</span> Works
                  </h2>
                  <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    Watch it identify hidden patterns in real-time. No charts.
                    No complexity. Just conversations that save your account.
                  </p>
                </motion.div>

                <LiveConversationEnhanced />
              </div>
            </section>

            {/* Problem Agitation */}
            <ProblemAgitation />

            {/* Transformation Timeline */}
            <Transformation />

            {/* Features */}
            <Features />

            {/* Coming Soon Status */}
            <ComingSoon />

            {/* Final CTA with Waitlist */}
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
                    <span className="holographic">
                      Start Trading Like a Pro.
                    </span>
                  </h2>

                  <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto">
                    Finally, the risk manager that professional traders have -
                    built for retail traders like you.
                  </p>

                  <div className="glass-dark rounded-3xl p-8 md:p-12 backdrop-blur-xl">
                    <WaitlistForm />

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

// Premium confetti effect
function createPremiumConfetti() {
  const colors = ['#10b981', '#34d399', '#059669', '#06b6d4', '#0891b2'];
  const shapes = ['circle', 'square', 'triangle'];
  const confettiCount = 100;

  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement('div');
    const shape = shapes[Math.floor(Math.random() * shapes.length)];
    const color = colors[Math.floor(Math.random() * colors.length)];
    const size = Math.random() * 10 + 5;
    const duration = Math.random() * 3 + 2;
    const delay = Math.random() * 0.5;

    confetti.style.position = 'fixed';
    confetti.style.width = `${size}px`;
    confetti.style.height = `${size}px`;
    confetti.style.backgroundColor = color;
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.top = '-20px';
    confetti.style.opacity = String(Math.random() * 0.8 + 0.2);
    confetti.style.zIndex = '9999';
    confetti.style.pointerEvents = 'none';
    confetti.style.animation = `confetti-fall ${duration}s ease-out ${delay}s forwards`;

    if (shape === 'circle') {
      confetti.style.borderRadius = '50%';
    } else if (shape === 'triangle') {
      confetti.style.width = '0';
      confetti.style.height = '0';
      confetti.style.borderLeft = `${size / 2}px solid transparent`;
      confetti.style.borderRight = `${size / 2}px solid transparent`;
      confetti.style.borderBottom = `${size}px solid ${color}`;
      confetti.style.backgroundColor = 'transparent';
    }

    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), (duration + delay) * 1000);
  }

  // Add keyframe animation
  if (!document.querySelector('#confetti-animation')) {
    const style = document.createElement('style');
    style.id = 'confetti-animation';
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
