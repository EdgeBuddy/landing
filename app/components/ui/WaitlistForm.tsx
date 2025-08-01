// File: /app/components/ui/WaitlistForm.tsx
// Purpose: Email collection form for beta waitlist signups
// Reason: Captures interested users and stores them in database
// Related: api/waitlist/route.ts, lib/db.ts

'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Loader2 } from 'lucide-react';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage("Welcome aboard! We'll notify you when EdgeBuddy is ready.");
        setEmail('');

        // Trigger confetti
        if (typeof window !== 'undefined') {
          const event = new CustomEvent('waitlist-success');
          window.dispatchEvent(event);
        }
      } else {
        setStatus('error');
        setMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Network error. Please check your connection and try again.');
    }

    // Reset status after 5 seconds
    setTimeout(() => {
      if (status === 'success') {
        setStatus('idle');
        setMessage('');
      }
    }, 5000);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-4 mb-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          disabled={status === 'loading' || status === 'success'}
          className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors disabled:opacity-50"
        />
        <motion.button
          type="submit"
          disabled={status === 'loading' || status === 'success'}
          className="glow-button bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-8 py-4 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {status === 'loading' && <Loader2 className="w-5 h-5 animate-spin" />}
          {status === 'success' && <Check className="w-5 h-5" />}
          {status === 'idle' && 'Join Waitlist'}
          {status === 'loading' && 'Joining...'}
          {status === 'success' && "You're In!"}
          {status === 'error' && 'Try Again'}
        </motion.button>
      </div>

      {/* Status message */}
      <AnimatePresence>
        {message && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className={`text-sm text-center ${
              status === 'success' ? 'text-emerald-400' : 'text-red-400'
            }`}
          >
            {message}
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}
