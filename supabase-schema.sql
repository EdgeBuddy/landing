-- EdgeBuddy Waitlist Schema
-- Run this in your Supabase SQL editor

-- Create waitlist table
CREATE TABLE IF NOT EXISTS waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  source TEXT DEFAULT 'landing_page',
  metadata JSONB DEFAULT '{}',
  imported BOOLEAN DEFAULT false
);

-- Add indexes for performance
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist(email);
CREATE INDEX IF NOT EXISTS idx_waitlist_created_at ON waitlist(created_at);
CREATE INDEX IF NOT EXISTS idx_waitlist_imported ON waitlist(imported);

-- Enable Row Level Security
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Allow anonymous users to insert their email
CREATE POLICY "Anyone can join waitlist" ON waitlist
  FOR INSERT WITH CHECK (true);

-- Only authenticated users can read the waitlist (for admin)
CREATE POLICY "Authenticated users can view waitlist" ON waitlist
  FOR SELECT USING (auth.uid() IS NOT NULL);

-- Add some useful views
CREATE OR REPLACE VIEW waitlist_stats AS
SELECT 
  COUNT(*) as total_signups,
  COUNT(CASE WHEN imported = false THEN 1 END) as pending_import,
  COUNT(CASE WHEN created_at > NOW() - INTERVAL '24 hours' THEN 1 END) as last_24h,
  COUNT(CASE WHEN created_at > NOW() - INTERVAL '7 days' THEN 1 END) as last_7d,
  COUNT(CASE WHEN created_at > NOW() - INTERVAL '30 days' THEN 1 END) as last_30d
FROM waitlist;

-- Function to export emails
CREATE OR REPLACE FUNCTION export_waitlist_emails()
RETURNS TABLE(email TEXT, created_at TIMESTAMPTZ)
LANGUAGE sql
SECURITY DEFINER
AS $$
  SELECT email, created_at 
  FROM waitlist 
  WHERE imported = false 
  ORDER BY created_at DESC;
$$;