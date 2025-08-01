# EdgeBuddy Landing Page - Deployment Guide

## 🚀 Quick Deploy to Vercel

### Prerequisites
- GitHub account
- Vercel account
- Supabase account

### Step 1: Prepare Your Repository

1. **Create a new GitHub repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: EdgeBuddy landing page"
   git remote add origin https://github.com/YOUR_USERNAME/edgebuddy-landing.git
   git push -u origin main
   ```

### Step 2: Set Up Supabase

1. **Create a new Supabase project** at [app.supabase.com](https://app.supabase.com)

2. **Create the waitlist table**
   - Go to SQL Editor in your Supabase dashboard
   - Run this SQL:
   ```sql
   -- Create waitlist table
   CREATE TABLE waitlist (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     email TEXT UNIQUE NOT NULL,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
     source TEXT DEFAULT 'landing_page',
     metadata JSONB DEFAULT '{}',
     imported BOOLEAN DEFAULT false
   );

   -- Add indexes for performance
   CREATE INDEX idx_waitlist_email ON waitlist(email);
   CREATE INDEX idx_waitlist_created_at ON waitlist(created_at);
   CREATE INDEX idx_waitlist_imported ON waitlist(imported);

   -- Add RLS (Row Level Security) policies
   ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

   -- Allow anonymous users to insert their email
   CREATE POLICY "Anyone can join waitlist" ON waitlist
     FOR INSERT WITH CHECK (true);
   ```

3. **Get your Supabase credentials**
   - Go to Settings > API in your Supabase dashboard
   - Copy your project URL and anon key

### Step 3: Deploy to Vercel

1. **Import project to Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your GitHub repository

2. **Configure environment variables in Vercel**
   Add these in the Environment Variables section:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
   NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
   
   # Optional: Email notifications via Resend
   RESEND_API_KEY=re_xxxxxxxxxx
   
   # Optional: Discord notifications
   DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/xxx
   ```
   
   **Note about Resend Email Setup:**
   - Sign up at [resend.com](https://resend.com)
   - Verify your domain (edgebuddy.ai) in Resend dashboard
   - Get your API key from Resend dashboard
   - If domain is not verified, emails will fail with 403 error

3. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete (usually 2-3 minutes)

### Step 4: Post-Deployment

1. **Update CORS settings in Supabase**
   - Go to Authentication > URL Configuration
   - Add your Vercel domain to allowed URLs

2. **Test the waitlist**
   - Visit your deployed site
   - Try submitting an email
   - Check Supabase dashboard to confirm it's saved

## 🔧 Configuration Options

### Custom Domain
1. In Vercel dashboard, go to Settings > Domains
2. Add your custom domain
3. Update DNS records as instructed

### Analytics
1. Enable Vercel Analytics in your project dashboard
2. Get the Analytics ID and add to environment variables:
   ```
   NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your_analytics_id
   ```

### Performance Optimization
The site is already optimized with:
- Static generation where possible
- Image optimization
- Code splitting
- Minimal JavaScript bundle

## 📊 Monitoring

### Vercel Dashboard
- Monitor build times
- Check function logs
- View analytics

### Supabase Dashboard
- Monitor waitlist signups
- Check API usage
- View database performance

## 🐛 Troubleshooting

### Common Issues

**"Failed to fetch" errors**
- Check CORS settings in Supabase
- Verify environment variables are set correctly
- Ensure Supabase project is not paused

**Build failures**
- Check build logs in Vercel
- Ensure all dependencies are in package.json
- Verify TypeScript has no errors

**Slow performance**
- Check Vercel function region
- Optimize database queries
- Enable caching where appropriate

## 📝 Maintenance

### Regular Tasks
1. Monitor waitlist growth
2. Export waitlist emails weekly
3. Check error logs
4. Update dependencies monthly

### Exporting Waitlist
```sql
-- Export all emails
SELECT email, created_at, metadata
FROM waitlist
WHERE imported = false
ORDER BY created_at DESC;

-- Mark as exported
UPDATE waitlist
SET imported = true
WHERE imported = false;
```

## 🔄 Updates

To deploy updates:
1. Push changes to GitHub
2. Vercel automatically rebuilds
3. Monitor deployment in Vercel dashboard

## 📞 Support

- **Vercel Issues**: [vercel.com/support](https://vercel.com/support)
- **Supabase Issues**: [supabase.com/support](https://supabase.com/support)
- **EdgeBuddy**: Create issue in GitHub repo

---

Happy deploying! 🚀