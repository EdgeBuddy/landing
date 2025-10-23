// File: /src/components/EdgeBuddyLogo.tsx
// Purpose: Custom logo design combining E and B letters for EdgeBuddy
// Reason: Creates a unique, professional brand identity
// Related: Admin layout, Landing page

"use client";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

export default function EdgeBuddyLogo({
  className = "",
  showText = true,
  size = "md",
}: LogoProps) {
  const sizes = {
    sm: { icon: 32, text: "text-xl" },
    md: { icon: 40, text: "text-2xl" },
    lg: { icon: 48, text: "text-3xl" },
  };

  const currentSize = sizes[size];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo Mark - E and B combined */}
      <svg
        width={currentSize.icon}
        height={currentSize.icon}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Background circle with gradient */}
        <circle
          cx="20"
          cy="20"
          r="18"
          fill="url(#logoGradient)"
          opacity="0.1"
        />

        {/* E shape that morphs into B */}
        <path
          d="M12 12 L12 28 L24 28 M12 20 L22 20 M12 12 L24 12 C27 12 28 14 28 16 C28 18 27 19 25 19.5 C27.5 20 29 21 29 24 C29 26.5 27 28 24 28"
          stroke="url(#logoStroke)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Accent dot representing the "edge" or AI element */}
        <circle cx="31" cy="9" r="3" fill="#34d399" className="animate-pulse" />

        {/* Gradient definitions */}
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
          <linearGradient id="logoStroke" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="50%" stopColor="#34d399" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
        </defs>
      </svg>

      {/* Text */}
      {showText && (
        <div className={`flex items-baseline ${currentSize.text}`}>
          <span className="font-bold text-white">Edge</span>
          <span className="font-bold text-emerald-400">Buddy</span>
        </div>
      )}
    </div>
  );
}
