// File: /emails/WelcomeEmail.tsx
// Purpose: Welcome email template for new waitlist subscribers
// Reason: Provides professional confirmation and sets expectations
// Related: api/waitlist/route.ts

import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface WelcomeEmailProps {
  email: string;
  position?: number;
}

export const WelcomeEmail = ({ email, position = 0 }: WelcomeEmailProps) => {
  const previewText = `Welcome to EdgeBuddy - You're on the list!`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Logo Section */}
          <Section style={logoSection}>
            <Img
              src="https://edgebuddy.ai/icon-192.png"
              width="60"
              height="60"
              alt="EdgeBuddy"
              style={logoImage}
            />
            <Heading style={logo}>EdgeBuddy</Heading>
          </Section>

          {/* Welcome Message */}
          <Heading style={heading}>Welcome to the Future of Trading</Heading>
          
          <Text style={paragraph}>
            Hey there,
          </Text>

          <Text style={paragraph}>
            You're officially on the EdgeBuddy waitlist! 🎉
          </Text>

          <Text style={paragraph}>
            While professional traders have entire risk management teams watching their backs, 
            retail traders like us have been left to catch our own blind spots. Until now.
          </Text>

          {/* Position Badge */}
          {position > 0 && (
            <Section style={positionSection}>
              <Text style={positionText}>
                You're #{position} on the waitlist
              </Text>
            </Section>
          )}

          {/* What's Next */}
          <Heading style={subheading}>What Happens Next?</Heading>
          
          <Text style={paragraph}>
            <strong>📊 We're building something different</strong><br />
            Our backend engine is analyzing trading patterns to spot the hidden biases that cost traders money.
          </Text>

          <Text style={paragraph}>
            <strong>🔨 Creating your companion</strong><br />
            EdgeBuddy isn't just another dashboard. It's a conversational companion that talks to you like a mentor.
          </Text>

          <Text style={paragraph}>
            <strong>🚀 Coming Soon</strong><br />
            Be the first to know when we launch. We'll keep you updated on our progress.
          </Text>

          {/* CTA Button */}
          <Section style={buttonSection}>
            <Button style={button} href="https://edgebuddy.ai">
              Visit EdgeBuddy
            </Button>
          </Section>

          <Hr style={hr} />

          {/* Social Links */}
          <Text style={footer}>
            Stay connected:
          </Text>
          <Section style={socialLinks}>
            <Link href="https://twitter.com/edgebuddy" style={link}>
              Twitter
            </Link>
            {' • '}
            <Link href="https://discord.gg/edgebuddy" style={link}>
              Discord
            </Link>
            {' • '}
            <Link href="https://www.youtube.com/@edgebuddy" style={link}>
              YouTube
            </Link>
          </Section>

          <Text style={footer}>
            Stop trading alone. Start trading like a pro.
          </Text>

          <Text style={footerAddress}>
            EdgeBuddy • Your Trading Companion<br />
            © 2025 EdgeBuddy. All rights reserved.
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default WelcomeEmail;

// Styles
const main = {
  backgroundColor: '#0a0a0a',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '40px 20px',
  maxWidth: '560px',
};

const logoSection = {
  textAlign: 'center' as const,
  marginBottom: '30px',
};

const logoImage = {
  margin: '0 auto 16px',
  borderRadius: '16px',
};

const logo = {
  fontSize: '32px',
  fontWeight: 'bold',
  background: 'linear-gradient(to right, #10b981, #34d399)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  margin: '0',
};

const heading = {
  fontSize: '24px',
  fontWeight: 'bold',
  color: '#ffffff',
  margin: '30px 0 20px',
  textAlign: 'center' as const,
};

const subheading = {
  fontSize: '20px',
  fontWeight: 'bold',
  color: '#10b981',
  margin: '30px 0 20px',
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '26px',
  color: '#e5e7eb',
  margin: '16px 0',
};

const positionSection = {
  backgroundColor: '#064e3b',
  borderRadius: '8px',
  padding: '16px',
  textAlign: 'center' as const,
  margin: '24px 0',
};

const positionText = {
  fontSize: '18px',
  fontWeight: 'bold',
  color: '#34d399',
  margin: '0',
};

const buttonSection = {
  textAlign: 'center' as const,
  margin: '32px 0',
};

const button = {
  backgroundColor: '#10b981',
  borderRadius: '8px',
  color: '#ffffff',
  fontSize: '16px',
  fontWeight: 'bold',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'inline-block',
  padding: '12px 32px',
};

const hr = {
  borderColor: '#374151',
  margin: '32px 0',
};

const footer = {
  fontSize: '14px',
  color: '#9ca3af',
  textAlign: 'center' as const,
  margin: '16px 0',
};

const socialLinks = {
  textAlign: 'center' as const,
  margin: '16px 0',
};

const link = {
  color: '#10b981',
  textDecoration: 'none',
};

const footerAddress = {
  fontSize: '12px',
  color: '#6b7280',
  textAlign: 'center' as const,
  margin: '32px 0 0',
  lineHeight: '20px',
};