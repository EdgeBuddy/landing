// File: /app/components/ai/LiveConversationEnhanced.tsx
// Purpose: Ultra-premium chat interface with AI personality and advanced animations
// Reason: Demonstrates EdgeBuddy's conversational AI in a stunning interface
// Related: AIOrb3D.tsx, page.tsx

'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { Send, Sparkles, Brain, TrendingUp, AlertTriangle } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'ai';
  content: string;
  emotion?: 'neutral' | 'concerned' | 'encouraging' | 'warning';
  insights?: string[];
}

const aiResponses: Record<
  string,
  { content: string; emotion: Message['emotion']; insights?: string[] }
> = {
  'Why do I keep losing money?': {
    content: `I've been watching patterns across thousands of traders, and here's what I see:

• **Revenge Trading**: After a loss, you double down trying to "get even" - this amplifies losses
• **Emotional Sizing**: Your position sizes grow when you're frustrated, shrink when confident  
• **No Exit Rules**: You enter trades with hope but no plan for when things go wrong
• **Time Decay**: Your worst losses happen in the last 2 hours of trading

The truth? You're not trading the market. You're trading your emotions.

Let me show you exactly where your edge is hiding...`,
    emotion: 'concerned',
    insights: [
      'Pattern: 73% of losses occur after 2PM',
      'Risk: Position sizing increases 2.3x after losses',
    ],
  },

  'How can you help me?': {
    content: `Think of me as your trading consciousness - always watching, always learning, always there.

**Real-Time Monitoring**
I watch every trade as it happens, identifying dangerous patterns before they cost you money.

**Behavioral Coaching** 
Not just "you lost $500" but "you revenge traded because you felt frustrated after the morning loss."

**Predictive Alerts**
"Based on your patterns, you're 87% likely to overtrade right now. Take a 5-minute break."

**Adaptive Learning**
The more we work together, the better I understand your unique trading personality.

I don't just track trades. I understand traders.`,
    emotion: 'encouraging',
    insights: [
      'Capability: 12 behavioral patterns tracked',
      'Learning: Adapts to your personality in 7 days',
    ],
  },

  'What makes you different?': {
    content: `Every other tool shows you WHAT happened. EdgeBuddy shows you WHY it keeps happening.

**Traditional Tools**: "Your P&L is -$5,000"
**EdgeBuddy**: "You lost $5,000 because you revenge trade after red mornings, specifically between 2-4 PM on Fridays"

**Traditional Tools**: Static charts and reports
**EdgeBuddy**: Living conversations that evolve with you

**Traditional Tools**: Generic advice for everyone  
**EdgeBuddy**: Personalized guidance based on YOUR specific patterns

I'm not a dashboard. I'm a mentor that never sleeps, never judges, and never gives up on you.`,
    emotion: 'neutral',
    insights: [
      'Unique: Conversational AI vs static dashboards',
      'Advantage: Real-time pattern recognition',
    ],
  },

  'Show me my patterns': {
    content: `Without your data, I'll demonstrate what I typically find:

**🔴 The Revenge Spiral** (Found in 78% of traders)
Loss → Anger → Bigger position → Bigger loss → Repeat

**📊 The Friday Fade** (Found in 64% of traders)  
Your discipline drops 73% on Fridays as weekend FOMO kicks in

**⏰ The 2:30 PM Cliff** (Found in 81% of traders)
Emotional exhaustion peaks, leading to your worst decisions

**💔 The Breakeven Obsession** (Found in 91% of traders)
Holding losers 3x longer than winners, hoping to "get back to even"

Join the beta and I'll show you YOUR specific patterns within 24 hours.`,
    emotion: 'warning',
    insights: [
      'Detection: 24-hour pattern analysis',
      'Accuracy: 94% pattern identification rate',
    ],
  },
};

export default function LiveConversationEnhanced() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [aiMood, setAiMood] = useState<'idle' | 'thinking' | 'responding'>(
    'idle',
  );
  const chatEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const controls = useAnimation();

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    // Only scroll to bottom if there are new messages (not on initial mount)
    if (messages.length > 0) {
      scrollToBottom();
    }
  }, [messages.length]);

  useEffect(() => {
    // Pulse effect for AI mood indicator
    const interval = setInterval(() => {
      if (aiMood === 'thinking') {
        controls.start({
          scale: [1, 1.2, 1],
          transition: { duration: 0.5 },
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [aiMood, controls]);

  const simulateTyping = async (
    text: string,
    callback: (partial: string) => void,
  ) => {
    const words = text.split(' ');
    let current = '';

    for (let i = 0; i < words.length; i++) {
      current += (i > 0 ? ' ' : '') + words[i];
      callback(current);
      await new Promise((resolve) =>
        setTimeout(resolve, 30 + Math.random() * 50),
      );
    }
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);
    setAiMood('thinking');


    // Simulate AI thinking with dynamic delay
    await new Promise((resolve) =>
      setTimeout(resolve, 1000 + Math.random() * 1000),
    );

    const responseData = aiResponses[input] || {
      content: `Interesting question. Every trader has unique patterns - some revenge trade, others overtrade when bored, many capitulate at the worst times.

The key is discovering YOUR specific patterns. That's where I come in.

I don't just analyze trades. I understand the psychology behind them. Want to see what I can find in your trading data?`,
      emotion: 'neutral' as const,
    };

    setAiMood('responding');

    // Create AI message with typing effect
    const aiMessage: Message = {
      id: (Date.now() + 1).toString(),
      role: 'ai',
      content: '',
      emotion: responseData.emotion,
      insights: responseData.insights,
    };

    setMessages((prev) => [...prev, aiMessage]);
    setIsTyping(false);

    // Simulate typing effect
    await simulateTyping(responseData.content, (partial) => {
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1].content = partial;
        return updated;
      });

    });

    setAiMood('idle');
  };

  const quickQuestions = Object.keys(aiResponses).slice(0, 3);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass rounded-3xl p-8 backdrop-blur-xl border border-emerald-500/20 shadow-2xl"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <motion.div animate={controls} className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center">
              <Brain className="w-6 h-6 text-black" />
            </div>
            {aiMood !== 'idle' && (
              <motion.div
                className="absolute inset-0 w-12 h-12 bg-emerald-400 rounded-full"
                animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            )}
          </motion.div>
          <div>
            <h3 className="text-xl font-semibold">EdgeBuddy</h3>
            <div className="flex items-center gap-2 text-sm">
              <div
                className={`w-2 h-2 rounded-full ${
                  aiMood === 'idle'
                    ? 'bg-emerald-500'
                    : aiMood === 'thinking'
                      ? 'bg-yellow-500'
                      : 'bg-blue-500'
                } animate-pulse`}
              />
              <span className="text-gray-400">
                {aiMood === 'idle'
                  ? 'Online'
                  : aiMood === 'thinking'
                    ? 'Analyzing...'
                    : 'Responding...'}
              </span>
            </div>
          </div>
        </div>

        <motion.div
          className="flex items-center gap-2 text-gray-400"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Sparkles className="w-4 h-4" />
          <span className="text-sm">Powered by Advanced AI</span>
        </motion.div>
      </div>

      {/* Chat container */}
      <div className="h-[400px] sm:h-[500px] overflow-y-auto mb-6 space-y-4 pr-2 custom-scrollbar">
        {messages.length === 0 ? (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Brain className="w-16 h-16 text-emerald-500 mx-auto mb-4 opacity-50" />
            <p className="text-gray-400 mb-8">
              Ask me anything about your trading...
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 items-stretch sm:items-center sm:justify-center px-4 sm:px-0">
              {quickQuestions.map((question, index) => (
                <motion.button
                  key={question}
                  onClick={() => setInput(question)}
                  className="glass w-full sm:w-auto px-3 py-2 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm hover:bg-emerald-500/10 hover:border-emerald-500/50 transition-all"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {question}
                </motion.button>
              ))}
            </div>
          </motion.div>
        ) : (
          <AnimatePresence mode="popLayout">
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] ${message.role === 'user' ? 'order-1' : 'order-2'}`}
                >
                  <motion.div
                    className={`px-6 py-4 rounded-2xl ${
                      message.role === 'user'
                        ? 'bg-gradient-to-br from-emerald-500 to-emerald-600 text-black'
                        : 'glass-dark'
                    }`}
                    whileHover={{ scale: 1.02 }}
                  >
                    {message.role === 'ai' && message.emotion && (
                      <div
                        className={`flex items-center gap-2 mb-2 text-sm ${
                          message.emotion === 'warning'
                            ? 'text-red-400'
                            : message.emotion === 'concerned'
                              ? 'text-yellow-400'
                              : message.emotion === 'encouraging'
                                ? 'text-emerald-400'
                                : 'text-gray-400'
                        }`}
                      >
                        {message.emotion === 'warning' && (
                          <AlertTriangle className="w-4 h-4" />
                        )}
                        {message.emotion === 'encouraging' && (
                          <TrendingUp className="w-4 h-4" />
                        )}
                        <span className="capitalize">
                          {message.emotion} Analysis
                        </span>
                      </div>
                    )}
                    <div
                      className="text-sm whitespace-pre-wrap"
                      dangerouslySetInnerHTML={{
                        __html: message.content.replace(
                          /\*\*(.*?)\*\*/g,
                          '<strong class="text-emerald-400">$1</strong>',
                        ),
                      }}
                    />

                    {message.insights && message.insights.length > 0 && (
                      <motion.div
                        className="mt-4 pt-4 border-t border-gray-700"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        <div className="space-y-2">
                          {message.insights.map((insight, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-2 text-xs text-gray-400"
                            >
                              <Sparkles className="w-3 h-3 text-emerald-400 mt-0.5" />
                              <span>{insight}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </motion.div>

                  {message.role === 'ai' && (
                    <motion.div
                      className="flex items-center gap-2 mt-2 text-xs text-gray-500"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <Brain className="w-3 h-3" />
                      <span>EdgeBuddy • Just now</span>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        )}

        {isTyping && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-start"
          >
            <div className="glass-dark px-6 py-4 rounded-2xl">
              <div className="loading-wave">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </motion.div>
        )}

        {messages.length > 0 && <div ref={chatEndRef} />}
      </div>

      {/* Input area */}
      <motion.div
        className="flex gap-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex-1 relative">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask about your trading patterns..."
            className="w-full glass-dark border border-gray-700 rounded-2xl px-6 py-4 pr-12 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-all"
          />
          <motion.div
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 text-xs"
            animate={{ opacity: input ? 0 : 1 }}
          >
            Press Enter
          </motion.div>
        </div>

        <motion.button
          onClick={handleSend}
          className="neon-button bg-gradient-to-r from-emerald-500 to-emerald-600 text-black p-4 rounded-2xl hover:from-emerald-400 hover:to-emerald-500 transition-all disabled:opacity-50"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={!input.trim() || isTyping}
        >
          <Send className="w-5 h-5" />
        </motion.button>
      </motion.div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.1);
          border-radius: 3px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #10b981, #059669);
          border-radius: 3px;
        }
      `}</style>
    </motion.div>
  );
}
