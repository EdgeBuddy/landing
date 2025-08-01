// File: /app/components/sections/Navbar.tsx
// Purpose: Navigation bar with brand and CTA button
// Reason: Provides consistent navigation and primary action
// Related: page.tsx, Hero.tsx

'use client';

import { motion } from 'framer-motion';
import EdgeBuddyLogo from '../ui/EdgeBuddyLogo';

export default function Navbar() {
  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <EdgeBuddyLogo />
        </motion.div>

        <motion.button
          onClick={scrollToWaitlist}
          className="glow-button bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-6 py-2 rounded-lg transition-all"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Join Waitlist
        </motion.button>
      </div>
    </nav>
  );
}
