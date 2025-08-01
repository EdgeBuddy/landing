# EdgeBuddy Landing Page

AI-first landing page for EdgeBuddy - Your Trading Consciousness.

## Features

- 🎨 Futuristic design with animated AI orb
- 💬 Interactive conversation demo
- 📧 Waitlist signup with Supabase
- ⚡ Built with Next.js 14 App Router
- 🎭 Framer Motion animations
- 📱 Fully responsive

## Quick Start

1. **Clone and Install**

```bash
cd /Users/dimi/Desktop
mv /Users/dimi/Desktop/EdgeBuddy/temp-landing edgebuddy-landing
cd edgebuddy-landing
npm install
```

2. **Set up Environment**

```bash
cp .env.example .env.local
# Edit .env.local with your Supabase credentials
```

3. **Create Supabase Table**

```sql
CREATE TABLE waitlist (
  id SERIAL PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  source TEXT DEFAULT 'landing_page',
  metadata JSONB,
  imported BOOLEAN DEFAULT false
);

CREATE INDEX idx_waitlist_email ON waitlist(email);
CREATE INDEX idx_waitlist_created_at ON waitlist(created_at);
```

4. **Run Development Server**

```bash
npm run dev
```

## Deploy to Vercel

1. Push to GitHub
2. Import to Vercel
3. Add environment variables
4. Deploy!

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Database**: Supabase (PostgreSQL)
- **Deployment**: Vercel

## Project Structure

```
edgebuddy-landing/
├── app/
│   ├── api/
│   │   └── waitlist/     # Waitlist API endpoint
│   ├── components/
│   │   ├── ai/          # AI orb and chat components
│   │   ├── sections/    # Page sections
│   │   └── ui/          # Reusable UI components
│   ├── privacy/         # Privacy policy
│   ├── tos/            # Terms of service
│   └── page.tsx        # Main landing page
├── lib/
│   └── supabase.ts     # Database client
└── public/             # Static assets
```
