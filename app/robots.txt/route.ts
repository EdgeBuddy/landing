// File: /app/robots.txt/route.ts
// Purpose: Generate robots.txt for search engine crawlers
// Reason: Helps search engines understand how to crawl the site
// Related: sitemap.xml/route.ts, layout.tsx

import { MetadataRoute } from 'next';

export function GET() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://edgebuddy.ai';
  
  const robotsTxt = `User-agent: *
Allow: /
Disallow: /api/
Crawl-delay: 0

# Sitemaps
Sitemap: ${siteUrl}/sitemap.xml

# AI Crawlers (Optional - remove if you want AI training)
User-agent: GPTBot
Disallow: /

User-agent: ChatGPT-User
Disallow: /

User-agent: CCBot
Disallow: /

User-agent: anthropic-ai
Disallow: /`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}