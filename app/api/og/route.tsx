// File: /app/api/og/route.tsx
// Purpose: Generate dynamic Open Graph images for social sharing
// Reason: Creates professional preview images when links are shared
// Related: layout.tsx, metadata configuration

import { ImageResponse } from 'next/og';

// Keep edge runtime for OG images (it's supported)
export const runtime = 'edge';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get('title') || 'EdgeBuddy';
    const subtitle = searchParams.get('subtitle') || 'AI Trading Risk Manager';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0a0a0a',
            backgroundImage: 'radial-gradient(circle at 25% 25%, #10b981 0%, transparent 50%), radial-gradient(circle at 75% 75%, #065f46 0%, transparent 50%)',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 20,
              padding: 60,
            }}
          >
            {/* Logo */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                marginBottom: 20,
              }}
            >
              <div
                style={{
                  width: 80,
                  height: 80,
                  background: 'linear-gradient(135deg, #10b981 0%, #065f46 100%)',
                  borderRadius: 20,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 48,
                  fontWeight: 'bold',
                  color: 'white',
                }}
              >
                EB
              </div>
              <div
                style={{
                  fontSize: 48,
                  fontWeight: 'bold',
                  color: 'white',
                }}
              >
                EdgeBuddy
              </div>
            </div>

            {/* Title */}
            <div
              style={{
                fontSize: 64,
                fontWeight: 'bold',
                color: 'white',
                textAlign: 'center',
                lineHeight: 1.2,
                maxWidth: 900,
              }}
            >
              {title}
            </div>

            {/* Subtitle */}
            <div
              style={{
                fontSize: 32,
                color: '#10b981',
                textAlign: 'center',
                maxWidth: 800,
              }}
            >
              {subtitle}
            </div>

            {/* Tagline */}
            <div
              style={{
                fontSize: 24,
                color: '#94a3b8',
                textAlign: 'center',
                marginTop: 20,
              }}
            >
              Stop Trading Alone. Start Trading Like a Pro.
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e) {
    console.error('OG Image generation failed:', e);
    return new Response('Failed to generate image', { status: 500 });
  }
}