// File: /app/api/waitlist/route.ts
// Purpose: API endpoint for processing waitlist signups
// Reason: Handles email validation, storage, and notifications
// Related: WaitlistForm.tsx, lib/db.ts

import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { createClient } from '@/lib/supabase';

export const runtime = 'edge';

const waitlistSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = waitlistSchema.parse(body);

    const supabase = createClient();

    // Check if email already exists
    const { data: existingUser, error: checkError } = await supabase
      .from('waitlist')
      .select('email')
      .eq('email', email)
      .single();

    if (checkError && checkError.code !== 'PGRST116') {
      console.error('Database check error:', checkError);
      return NextResponse.json(
        { message: 'Database error occurred' },
        { status: 500 },
      );
    }

    if (existingUser) {
      return NextResponse.json(
        { message: 'This email is already on the waitlist' },
        { status: 400 },
      );
    }

    // Insert new email
    const { error: insertError } = await supabase.from('waitlist').insert([
      {
        email,
        created_at: new Date().toISOString(),
        source: 'landing_page',
        metadata: {
          referrer: request.headers.get('referer') || 'direct',
          user_agent: request.headers.get('user-agent') || 'unknown',
        },
      },
    ]);

    if (insertError) {
      console.error('Database insert error:', insertError);
      return NextResponse.json(
        { message: 'Failed to join waitlist' },
        { status: 500 },
      );
    }

    // Optional: Send to Discord webhook for real-time notifications
    if (process.env.DISCORD_WEBHOOK_URL) {
      try {
        await fetch(process.env.DISCORD_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            content: `🎉 New EdgeBuddy waitlist signup: ${email}`,
            embeds: [
              {
                color: 0x10b981,
                fields: [
                  { name: 'Email', value: email },
                  { name: 'Time', value: new Date().toLocaleString() },
                ],
              },
            ],
          }),
        });
      } catch (discordError) {
        // Don't fail the request if Discord webhook fails
        console.log('Discord webhook failed:', discordError);
      }
    }

    return NextResponse.json(
      { message: 'Successfully joined waitlist' },
      { status: 200 },
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: error.errors[0].message },
        { status: 400 },
      );
    }

    console.error('Unexpected error:', error);
    return NextResponse.json(
      { message: 'An unexpected error occurred' },
      { status: 500 },
    );
  }
}
