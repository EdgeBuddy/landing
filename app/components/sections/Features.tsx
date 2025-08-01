// File: /app/components/sections/Features.tsx
// Purpose: Showcases EdgeBuddy's core capabilities
// Reason: Helps visitors understand what makes EdgeBuddy unique
// Related: page.tsx, ProblemAgitation.tsx

'use client';

import { motion } from 'framer-motion';
import {
  Brain,
  MessageCircle,
  TrendingUp,
  BarChart3,
  Zap,
  Eye,
} from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Pattern Recognition',
    description:
      'EdgeBuddy identifies 12 behavioral patterns that destroy traders. Revenge trading, FOMO entries, capitulation exits - EdgeBuddy sees them all.',
  },
  {
    icon: MessageCircle,
    title: 'Conversational Coaching',
    description:
      'No more lonely charts. EdgeBuddy talks to you like a mentor, explaining what went wrong and exactly how to fix it.',
  },
  {
    icon: TrendingUp,
    title: 'Adaptive Learning',
    description:
      'EdgeBuddy learns your unique trading personality. The more you work together, the more personalized the guidance becomes.',
  },
  {
    icon: BarChart3,
    title: 'Backend Stats Factory',
    description:
      'EdgeBuddy digests more than 40 different stats of your trading performance and is ready to use them to help you understand what goes wrong.',
  },
  {
    icon: Zap,
    title: 'Instant Insights',
    description:
      'No waiting for reports. EdgeBuddy analyzes your behavior in real-time and delivers insights when you need them most.',
  },
  {
    icon: Eye,
    title: 'Real-Time Monitoring',
    description:
      'EdgeBuddy watches every trade as it happens, alerting you to dangerous patterns before they cost you money.',
  },
];

export default function Features() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-4xl font-bold mb-4">
            EdgeBuddy Is Not Just Watching
            <br />
            <span className="text-emerald-400">EdgeBuddy Is Understanding</span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800 hover:border-emerald-500 transition-all group"
              >
                <div className="w-16 h-16 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-500/30 transition-colors">
                  <Icon className="w-8 h-8 text-emerald-400" />
                </div>
                <h4 className="text-xl font-semibold mb-3">{feature.title}</h4>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
