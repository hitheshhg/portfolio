import React from "react";

export function PythonIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 128 128" className={className} fill="none">
      <path
        d="M63.5 12c-27.4 0-25.7 11.9-25.7 11.9l.03 12.3h26.2v3.7H25.3S12 38.4 12 65.8c0 27.4 11.7 26.5 11.7 26.5h7V80.1c0-13.9 12.1-13.1 12.1-13.1h26.3c11.7 0 11.3-11.3 11.3-11.3V23.9s1.6-11.9-26.9-11.9zm-14.6 7.4c2.5 0 4.5 2 4.5 4.5s-2 4.5-4.5 4.5-4.5-2-4.5-4.5 2-4.5 4.5-4.5z"
        fill="#38bdf8"
      />
      <path
        d="M64.5 116c27.4 0 25.7-11.9 25.7-11.9l-.03-12.3H63.9v-3.7h38.7s13.3 1.5 13.3-25.9c0-27.4-11.7-26.5-11.7-26.5h-7v12.2c0 13.9-12.1 13.1-12.1 13.1H48.9c-11.7 0-11.3 11.3-11.3 11.3v31.8s-1.6 11.9 26.9 11.9zm14.6-7.4c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z"
        fill="#facc15"
      />
    </svg>
  );
}

export function SqlIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" stroke="#38bdf8" />
      <path d="M3 5V12C3 13.66 7.03 15 12 15C16.97 15 21 13.66 21 12V5" stroke="#38bdf8" />
      <path d="M3 12V19C3 20.66 7.03 22 12 22C16.97 22 21 20.66 21 19V12" stroke="#38bdf8" />
    </svg>
  );
}

export function PowerBiIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none">
      <rect x="4" y="16" width="5" height="12" rx="2" fill="#f59e0b" fillOpacity="0.7" />
      <rect x="11" y="10" width="5" height="18" rx="2" fill="#f59e0b" fillOpacity="0.85" />
      <rect x="18" y="6" width="5" height="22" rx="2" fill="#f59e0b" />
      <rect x="25" y="12" width="4" height="16" rx="2" fill="#fbbf24" />
    </svg>
  );
}

export function TableauIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none">
      {/* Center large cross */}
      <rect x="14" y="6" width="4" height="20" rx="1" fill="#e11d48" />
      <rect x="6" y="14" width="20" height="4" rx="1" fill="#e11d48" />
      {/* Top right */}
      <rect x="22" y="4" width="3" height="10" rx="0.8" fill="#f97316" />
      <rect x="18.5" y="7.5" width="10" height="3" rx="0.8" fill="#f97316" />
      {/* Bottom left */}
      <rect x="7" y="18" width="3" height="10" rx="0.8" fill="#3b82f6" />
      <rect x="3.5" y="21.5" width="10" height="3" rx="0.8" fill="#3b82f6" />
      {/* Bottom right */}
      <rect x="23" y="19" width="2.5" height="8" rx="0.6" fill="#10b981" />
      <rect x="20.2" y="21.8" width="8" height="2.5" rx="0.6" fill="#10b981" />
    </svg>
  );
}

export function SnowflakeIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="#38bdf8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="2" x2="12" y2="22" />
      <line x1="20" y1="7" x2="4" y2="17" />
      <line x1="20" y1="17" x2="4" y2="7" />
      <polyline points="9 4 12 7 15 4" />
      <polyline points="15 20 12 17 9 20" />
      <polyline points="18 10 16 12 18 14" />
      <polyline points="6 14 8 12 6 10" />
    </svg>
  );
}

export function ExcelIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none">
      <rect x="3" y="4" width="26" height="24" rx="4" fill="#047857" />
      <rect x="14" y="8" width="12" height="16" rx="2" fill="#065f46" stroke="#10b981" strokeWidth="1" />
      <line x1="14" y1="13" x2="26" y2="13" stroke="#10b981" strokeWidth="0.8" />
      <line x1="14" y1="18" x2="26" y2="18" stroke="#10b981" strokeWidth="0.8" />
      <line x1="20" y1="8" x2="20" y2="24" stroke="#10b981" strokeWidth="0.8" />
      <path d="M6 11 L12 21 M12 11 L6 21" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

export function BigQueryIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="#4285f4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2" stroke="#4285f4" />
      <polyline points="2 17 12 22 22 17" stroke="#34a853" />
      <polyline points="2 12 12 17 22 12" stroke="#fbbc05" />
    </svg>
  );
}

export function RIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none">
      <ellipse cx="16" cy="16" rx="14" ry="11" stroke="#2563eb" strokeWidth="2" fill="rgba(37,99,235,0.08)" />
      <text x="16" y="21" fill="#ffffff" fontFamily="sans-serif" fontWeight="900" fontSize="16" textAnchor="middle">R</text>
    </svg>
  );
}

export function PandasIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none">
      <rect x="6" y="8" width="5" height="16" rx="2" fill="#3b82f6" />
      <rect x="13.5" y="5" width="5" height="22" rx="2" fill="#ec4899" />
      <rect x="21" y="11" width="5" height="13" rx="2" fill="#eab308" />
      <circle cx="8.5" cy="5" r="1.5" fill="#3b82f6" />
      <circle cx="23.5" cy="8" r="1.5" fill="#eab308" />
    </svg>
  );
}

export function EtlIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="#10b981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
    </svg>
  );
}
