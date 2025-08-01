// File: /app/components/sections/ComingSoon.tsx
// Purpose: Honest presentation of EdgeBuddy's current status
// Reason: Builds trust by being transparent about being pre-launch
// Related: page.tsx, Footer.tsx

'use client';

import { motion } from 'framer-motion';
import { Rocket, Users, Code, Shield } from 'lucide-react';

const milestones = [
  {
    icon: Code,
    title: 'In Active Development',
    description:
      'Our core AI engine is being refined with advanced pattern recognition algorithms',
  },
  {
    icon: Shield,
    title: 'Security First',
    description:
      'Building bank-level encryption for your trading data and API keys',
  },
  {
    icon: Users,
    title: 'Private Beta Soon',
    description:
      'Limited spots for early adopters who want to shape the product',
  },
  {
    icon: Rocket,
    title: 'Launch Q3 2025',
    description:
      'Join the waitlist to be the first to know when EdgeBuddy is ready to become your trading companion',
  },
];

export default function ComingSoon() {
  return (
    <section className="py-20 px-6 bg-gray-900/30">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-4">
            We're Building Something Revolutionary
          </h3>
          <p className="text-xl text-gray-400 mb-12">
            EdgeBuddy is currently in development. Be among the first to
            experience the future of trading.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              return (
                <motion.div
                  key={milestone.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-800/50 rounded-xl p-6 border border-gray-700"
                >
                  <Icon className="w-10 h-10 text-emerald-400 mx-auto mb-3" />
                  <h4 className="font-semibold text-lg mb-2">
                    {milestone.title}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {milestone.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
