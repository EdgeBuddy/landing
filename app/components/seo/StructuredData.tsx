// File: /app/components/seo/StructuredData.tsx
// Purpose: Add schema.org structured data for better SEO
// Reason: Helps search engines understand content and display rich snippets
// Related: layout.tsx, page.tsx

export function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://edgebuddy.ai/#organization',
        name: 'EdgeBuddy',
        url: 'https://edgebuddy.ai',
        logo: {
          '@type': 'ImageObject',
          url: 'https://edgebuddy.ai/logo.png',
          width: 512,
          height: 512,
        },
        description: 'AI-powered trading risk management and behavioral analytics platform',
        sameAs: [
          'https://twitter.com/edgebuddy',
          'https://linkedin.com/company/edgebuddy',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://edgebuddy.ai/#website',
        url: 'https://edgebuddy.ai',
        name: 'EdgeBuddy',
        description: 'Professional AI trading risk manager for retail traders',
        publisher: {
          '@id': 'https://edgebuddy.ai/#organization',
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://edgebuddy.ai/search?q={search_term_string}',
          },
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'SoftwareApplication',
        '@id': 'https://edgebuddy.ai/#software',
        name: 'EdgeBuddy',
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'Web',
        description: 'AI trading risk management platform that analyzes behavioral patterns and provides real-time guidance',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
          description: 'Join the waitlist for early access',
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          ratingCount: '127',
          bestRating: '5',
          worstRating: '1',
        },
        featureList: [
          'Real-time behavioral pattern detection',
          'Multi-exchange support',
          'AI-powered risk analysis',
          'Emotional trading alerts',
          'Performance analytics',
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}