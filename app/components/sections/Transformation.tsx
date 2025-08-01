// File: /app/components/sections/Transformation.tsx
// Purpose: Shows the user journey from struggling to profitable
// Reason: Helps visitors visualize their transformation with EdgeBuddy
// Related: page.tsx, Hero.tsx

'use client';

import { motion } from 'framer-motion';

const timeline = [
  {
    day: 'Day 1',
    title: 'Calculation of your Stats',
    description:
      "I've analyzed your last 500 trades. You have 3 critical flaws costing you $2,000/month. Want to see them?",
    color: 'bg-emerald-500',
  },
  {
    day: 'Day 7',
    title: 'Behavioral Adjustments Begin',
    description:
      "I noticed possible revenge trading pattern. Remember what we discussed? Maybe take a 5-minute break first?",
    color: 'bg-emerald-500/80',
  },
  {
    day: 'Day 30',
    title: 'Measurable Improvements',
    description:
      "Your revenge trading is down 80%. You've saved $1,600 this month by avoiding destructive past traits.",
    color: 'bg-emerald-500/60',
  },
  {
    day: 'Day 90',
    title: 'Consistent Profitability',
    description:
      "You're now profitable 3 months straight. Your edge is real. Let's scale up safely.",
    color: 'bg-emerald-500/40',
  },
];

export default function Transformation() {
  return (
    <section className="py-20 px-6 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          Your Transformation Timeline
        </motion.h3>

        <div className="space-y-8">
          {timeline.map((item, index) => (
            <motion.div
              key={item.day}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center space-x-6"
            >
              <div
                className={`w-20 h-20 ${item.color} rounded-full flex items-center justify-center text-black font-bold text-xl shrink-0`}
              >
                {item.day}
              </div>
              <div className="flex-1 bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                <h4 className="font-semibold text-xl mb-2">{item.title}</h4>
                <p className="text-gray-400">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
