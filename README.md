# 🚀 EdgeBuddy Landing Page

The official landing page for EdgeBuddy - The "Tap on the Shoulder" for Retail Traders.

🌐 **Live at**: [edgebuddy.ai](https://edgebuddy.ai)

## 🎯 About EdgeBuddy

EdgeBuddy is an AI-powered trading companion that identifies hidden patterns, emotional blind spots, and destructive loops in your trading behavior. Like having a professional risk manager watching over your shoulder, EdgeBuddy helps retail traders break free from the costly mistakes that destroy 95% of trading accounts.

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Graphics**: Three.js / React Three Fiber  
- **Database**: Supabase (Waitlist)
- **Deployment**: Vercel
- **Language**: TypeScript

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Supabase account (for waitlist)

### Installation

```bash
# Clone the repository
git clone https://github.com/EdgeBuddy/landing.git
cd landing

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## 🔧 Environment Variables

Create a `.env.local` file with:

```env
# Supabase (Required for waitlist)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Optional
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## 📦 Project Structure

```
landing/
├── app/
│   ├── components/
│   │   ├── ai/           # AI orb and chat components
│   │   ├── effects/      # WebGL background
│   │   ├── sections/     # Page sections
│   │   └── ui/           # Reusable UI components
│   ├── api/              # API routes
│   ├── privacy/          # Privacy policy page
│   ├── tos/              # Terms of service page
│   └── page.tsx          # Main landing page
├── public/               # Static assets
├── lib/                  # Utilities
└── ...config files
```

## 🚢 Deployment

This site is automatically deployed to Vercel on push to `main` branch.

### Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 🗄️ Database Setup (Supabase)

Create a `waitlist` table in your Supabase project:

```sql
CREATE TABLE waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  source TEXT DEFAULT 'landing_page',
  metadata JSONB DEFAULT '{}',
  imported BOOLEAN DEFAULT false
);

CREATE INDEX idx_waitlist_email ON waitlist(email);
CREATE INDEX idx_waitlist_created_at ON waitlist(created_at);
```

## 📊 Features

- ✨ Interactive 3D AI orb
- 💬 Live AI conversation demo
- 📱 Fully responsive design
- ⚡ Optimized performance
- 🔒 Privacy-first approach
- 📧 Waitlist integration
- 🎨 Smooth animations
- 🌐 SEO optimized

## 🤝 Contributing

This is the marketing site for EdgeBuddy. For contributions to the main application, please see the main repository.

## 📝 License

© 2025 EdgeBuddy. All rights reserved.

---

**EdgeBuddy** - Professional Traders Have Risk Managers. You're Alone With Your Mistakes. Until Now.# Trigger deployment - Fri Aug  1 11:38:02 CEST 2025
