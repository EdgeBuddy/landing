// Debug endpoint to check Resend configuration
// Access this at: /api/debug-resend

import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function GET() {
  const apiKey = process.env.RESEND_API_KEY;
  
  const debugInfo: any = {
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV,
    resendApiKeyExists: !!apiKey,
    resendApiKeyPrefix: apiKey ? apiKey.substring(0, 10) + '...' : 'NOT_SET',
  };
  
  if (apiKey) {
    const resend = new Resend(apiKey);
    
    try {
      // Try to list domains to verify API key
      const domains = await resend.domains.list();
      debugInfo.apiKeyValid = true;
      debugInfo.verifiedDomains = domains.data?.data?.map((d: any) => ({
        name: d.name,
        status: d.status,
        records: d.records?.map((r: any) => ({
          type: r.type,
          status: r.status,
          value: r.value,
        })),
      }));
    } catch (error: any) {
      debugInfo.apiKeyValid = false;
      debugInfo.apiKeyError = {
        message: error.message,
        statusCode: error.statusCode,
        name: error.name,
      };
    }
    
    // Test email sending (dry run - comment out in production)
    try {
      debugInfo.emailTest = {
        from: 'EdgeBuddy <hello@edgebuddy.ai>',
        wouldSendTo: 'test@example.com',
        status: 'ready_to_send',
      };
    } catch (error: any) {
      debugInfo.emailTest = {
        error: error.message,
      };
    }
  } else {
    debugInfo.error = 'RESEND_API_KEY not configured in environment variables';
  }
  
  // Security note: This endpoint should be removed or protected in production
  return NextResponse.json(debugInfo, {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}