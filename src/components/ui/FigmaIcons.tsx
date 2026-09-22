import React from "react";

export function DribbbleIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
      <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
      <path d="M8.56 2.75c4.37 6 6 11.53 7.07 18.5" />
    </svg>
  );
}

export function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

/* Process Icons */
export function IdeationIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Lightbulb outline */}
      <path d="M18 28c.5-2 1.5-3.5 3-5 2-2 3-4.5 3-7a10 10 0 0 0-20 0c0 2.5 1 5 3 7 1.5 1.5 2.5 3 3 5" />
      <path d="M12 34h12" />
      <path d="M14 38h8" />
      {/* Rays */}
      <line x1="18" y1="4" x2="18" y2="8" />
      <line x1="8" y1="8" x2="11" y2="11" />
      <line x1="28" y1="8" x2="25" y2="11" />
      <line x1="4" y1="18" x2="8" y2="18" />
      <line x1="32" y1="18" x2="28" y2="18" />
    </svg>
  );
}

export function ResearchIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="28" cy="18" r="11" />
      <line x1="20" y1="26" x2="8" y2="38" />
      <line x1="7" y1="39" x2="9" y2="37" />
    </svg>
  );
}

export function WireframesIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Outer frame */}
      <rect x="6" y="8" width="36" height="32" rx="2" />
      {/* Image box with X */}
      <rect x="10" y="12" width="28" height="14" />
      <line x1="10" y1="12" x2="38" y2="26" />
      <line x1="38" y1="12" x2="10" y2="26" />
      {/* Horizontal text lines */}
      <line x1="10" y1="30" x2="38" y2="30" />
      <line x1="10" y1="34" x2="32" y2="34" />
      <line x1="10" y1="37" x2="26" y2="37" />
    </svg>
  );
}

/* 10 Development Tools Line-Art Icons */
export function ReactIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
    >
      <ellipse cx="24" cy="24" rx="20" ry="7.5" />
      <ellipse cx="24" cy="24" rx="20" ry="7.5" transform="rotate(60 24 24)" />
      <ellipse cx="24" cy="24" rx="20" ry="7.5" transform="rotate(120 24 24)" />
      <circle cx="24" cy="24" r="2.5" fill="currentColor" />
    </svg>
  );
}

export function VueIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M4 10h8l12 20L36 10h8L24 42 4 10z" />
      <path d="M14 10h6l4 8 4-8h6L24 28 14 10z" />
    </svg>
  );
}

export function LaravelIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Isometric Cube Structure */}
      <path d="M24 6l16 9.2v17.6L24 42 8 32.8V15.2L24 6z" />
      <path d="M24 6v18.4l16 9.2" />
      <path d="M24 24.4L8 15.2" />
      <path d="M16 19.8l16 9.2" />
    </svg>
  );
}

export function NodejsIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Node Hexagon with JS path */}
      <path d="M24 6l15 8.6v17.2L24 40.4 9 31.8V14.6L24 6z" />
      <path d="M19 22v10c0 2 2 3 4 3s4-1 4-3v-6c0-2-2-3-4-3s-4-1-4-3v-2c0-2 2-3 4-3s4 1 4 3" />
    </svg>
  );
}

export function AwsS3Icon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <text x="24" y="20" fill="currentColor" fontSize="11" fontFamily="sans-serif" textAnchor="middle" stroke="none">aws</text>
      <path d="M12 28c8 6 16 6 24 0" />
      <path d="M34 25l2 3-3 1" />
    </svg>
  );
}

export function TailwindIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="currentColor"
      className={className}
    >
      <path d="M26.5 14c-4.2 0-6.9 2.1-8.1 6.3 1.6-1.6 3.5-2.2 5.6-1.7 1.2.3 2.1 1.2 3.1 2.2C28.7 22.4 30.7 24.5 35 24.5c4.2 0 6.9-2.1 8.1-6.3-1.6 1.6-3.5 2.2-5.6 1.7-1.2-.3-2.1-1.2-3.1-2.2-1.6-1.6-3.6-3.7-7.9-3.7zm-8.5 8.5c-4.2 0-6.9 2.1-8.1 6.3 1.6-1.6 3.5-2.2 5.6-1.7 1.2.3 2.1 1.2 3.1 2.2 1.6 1.6 3.6 3.7 7.9 3.7 4.2 0 6.9-2.1 8.1-6.3-1.6 1.6-3.5 2.2-5.6 1.7-1.2-.3-2.1-1.2-3.1-2.2-1.6-1.6-3.6-3.7-7.9-3.7z" />
    </svg>
  );
}

export function BootstrapIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Curly braces around B */}
      <path d="M14 12c-3.5 0-5 2.5-5 6v3c0 2.5-2 3-2 3s2 .5 2 3v3c0 3.5 1.5 6 5 6" />
      <path d="M34 12c3.5 0 5 2.5 5 6v3c0 2.5 2 3 2 3s-2 .5-2 3v3c0 3.5-1.5 6-5 6" />
      <text x="24" y="29.5" fill="currentColor" fontSize="17" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle" stroke="none">B</text>
    </svg>
  );
}

export function MongodbIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="currentColor"
      className={className}
    >
      {/* Filled Leaf shape with spine slit */}
      <path d="M23.2 7.5c-4.5 5.2-9.2 13.8-6.2 21.8 2.2 6 6.8 9.7 6.8 9.7V7.5z" />
      <path d="M24.8 7.5c4.5 5.2 9.2 13.8 6.2 21.8-2.2 6-6.8 9.7-6.8 9.7V7.5z" />
    </svg>
  );
}

export function GraphqlIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Hexagon & Inverted Triangle */}
      <polygon points="24,6 40,15 40,33 24,42 8,33 8,15" />
      <polygon points="24,10 36,32 12,32" />
      <circle cx="24" cy="6" r="2" fill="currentColor" />
      <circle cx="40" cy="15" r="2" fill="currentColor" />
      <circle cx="40" cy="33" r="2" fill="currentColor" />
      <circle cx="24" cy="42" r="2" fill="currentColor" />
      <circle cx="8" cy="33" r="2" fill="currentColor" />
      <circle cx="8" cy="15" r="2" fill="currentColor" />
    </svg>
  );
}

export function RelayIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Relay track loop: top line, 180-deg right bend, bottom line */}
      <path d="M12 20h22a6 6 0 0 1 0 12H12" />
      <circle cx="12" cy="20" r="2" fill="currentColor" />
      <circle cx="12" cy="32" r="2" fill="currentColor" />
    </svg>
  );
}
