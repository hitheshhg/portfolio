import React from "react";


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
