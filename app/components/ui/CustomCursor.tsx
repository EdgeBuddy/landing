// File: /app/components/ui/CustomCursor.tsx
// Purpose: Clean, simple custom cursor that works on all pages
// Reason: Creates a consistent cursor experience across the site
// Related: layout.tsx, all pages

'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function CustomCursor() {
  const pathname = usePathname();
  const cursorRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });

  // Check if we're on a utility page
  const isUtilityPage =
    pathname.includes('/privacy') || pathname.includes('/tos');

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Set initial styles based on page type
    if (isUtilityPage) {
      cursor.classList.add('cursor-utility');
    } else {
      cursor.classList.remove('cursor-utility');
    }

    // Show cursor immediately
    cursor.style.opacity = '1';

    // Simple mouse move handler - no delays, no magnetic effects
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;

      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    };

    // Hover handlers for interactive elements
    const handleMouseOver = (e: Event) => {
      const target = e.target as HTMLElement;

      if (target.matches('a, button, [role="button"]')) {
        cursor.classList.add('cursor-hover');
      } else if (target.matches('input, textarea')) {
        cursor.classList.add('cursor-text');
      }
    };

    const handleMouseOut = () => {
      cursor.classList.remove('cursor-hover', 'cursor-text');
    };

    // Click animation
    const handleMouseDown = () => {
      cursor.classList.add('cursor-click');
    };

    const handleMouseUp = () => {
      cursor.classList.remove('cursor-click');
    };

    // Show/hide cursor
    const handleMouseEnter = () => {
      cursor.style.opacity = '1';
    };

    const handleMouseLeave = () => {
      cursor.style.opacity = '0';
    };

    // Add listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Hide on touch devices
    if ('ontouchstart' in window) {
      cursor.style.display = 'none';
    }

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isUtilityPage]);

  return (
    <div
      ref={cursorRef}
      className={`cursor ${isUtilityPage ? 'cursor-utility' : ''}`}
      style={{
        opacity: 0,
        transition: 'opacity 0.3s',
      }}
    />
  );
}
