# Hithesh HG — Engineering Portfolio & Systems Showcase

> Minimalist, ultra-responsive engineering portfolio built with Next.js 16, TypeScript, Tailwind CSS, and zero-dependency Web Audio micro-haptics.

[![Live Site](https://img.shields.io/badge/Live_Site-hithesh.dev-4ade80?style=flat-square)](https://hithesh.dev)
[![Next.js](https://img.shields.io/badge/Next.js-16.3-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

---

## ⚡ Highlights

- **Bento Grid Architecture**: Pixel-faithful, balanced 12-column bento grids unified across all routes (`/`, `/design`, `/development`, `/blog`, `/cv`, and `/projects/[slug]`).
- **Butter-Smooth 120fps Performance**: Pure native hardware acceleration without JavaScript scroll-jacking loops. Subpixel font smoothing and lightweight GPU compositing.
- **Micro-Haptics (`sound.ts`)**: 0kb zero-dependency audio synthesizer creating subtle mechanical switch clicks and arcade fanfares directly via browser `AudioContext`.
- **Command Palette (`⌘K`)**: Raycast/Linear-style global command menu with full keyboard navigation (`ArrowUp`, `ArrowDown`, `Enter`).
- **Memorable Easter Eggs**:
  - **Konami Code (`↑ ↑ ↓ ↓ ← → ← → B A`)**: Unlocks a retro green-phosphor CRT scanline terminal mode, 8-bit fanfare, and celebratory confetti shower.
  - **Logo Multi-Click**: Rapidly click `hithesh.dev` 5 times to fire party confetti.
  - **Interactive CLI commands**: `confetti`, `matrix`, `coffee`, `quote`.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router & Turbopack)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 + Vanilla CSS Tokens
- **Icons**: Lucide React + Custom SVG Design Primitives
- **Audio**: Web Audio API (native browser synthesizer)
- **Effects**: Lazy-loaded `canvas-confetti`

---

## 🚀 Getting Started

First, install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

---

## 📦 Building for Production

```bash
npm run build
npm run start
```

---

## 📄 License

MIT © [Hithesh HG](https://github.com/hitheshhg)
