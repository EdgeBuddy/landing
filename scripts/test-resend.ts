// Script to test Resend email configuration
// Usage: npx tsx scripts/test-resend.ts

import { Resend } from 'resend';
import { config } from 'dotenv';

// Load environment variables
config({ path: '.env.local' });

async function testResend() {
  console.log('Testing Resend configuration...\n');
  
  const apiKey = process.env.RESEND_API_KEY;
  
  if (!apiKey) {
    console.error('❌ RESEND_API_KEY not found in environment variables');
    console.log('\nPlease add RESEND_API_KEY to your .env.local file');
    process.exit(1);
  }
  
  console.log('✅ RESEND_API_KEY found');
  console.log(`API Key starts with: ${apiKey.substring(0, 10)}...`);
  
  const resend = new Resend(apiKey);
  
  try {
    // Test sending a simple email
    console.log('\nAttempting to send test email...');
    
    const result = await resend.emails.send({
      from: 'EdgeBuddy <hello@edgebuddy.ai>',
      to: 'test@example.com', // Change this to your email for testing
      subject: 'Test Email from EdgeBuddy',
      html: '<p>This is a test email to verify Resend configuration.</p>',
    });
    
    console.log('✅ Email sent successfully!');
    console.log('Email ID:', result.data?.id);
    
  } catch (error: any) {
    console.error('\n❌ Failed to send email:');
    console.error('Error:', error.message);
    
    if (error.statusCode === 403) {
      console.error('\n🔴 403 Forbidden Error - Common causes:');
      console.error('1. Domain "edgebuddy.ai" is not verified in Resend');
      console.error('2. You need to verify domain ownership in Resend dashboard');
      console.error('3. Visit: https://resend.com/domains');
    } else if (error.statusCode === 401) {
      console.error('\n🔴 401 Unauthorized Error:');
      console.error('Invalid API key. Please check your RESEND_API_KEY');
    }
    
    console.error('\nFull error details:', JSON.stringify(error, null, 2));
  }
  
  // Test API key validity
  try {
    console.log('\n\nTesting API key validity...');
    const domains = await resend.domains.list();
    console.log('✅ API key is valid');
    console.log('\nVerified domains:', domains.data?.data?.map(d => d.name).join(', ') || 'None');
  } catch (error: any) {
    console.error('❌ API key validation failed:', error.message);
  }
}

testResend();