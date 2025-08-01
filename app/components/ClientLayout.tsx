// File: /app/components/ClientLayout.tsx
// Purpose: Client-side layout wrapper for components that need client features
// Reason: Allows us to use client components in the root layout
// Related: layout.tsx, CustomCursor.tsx

'use client';

import { useEffect } from 'react';
import CustomCursor from './ui/CustomCursor';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Prevent any scroll on initial load
    window.scrollTo(0, 0);

    // Disable scroll restoration
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <>
      <CustomCursor />
      {children}
    </>
  );
}
