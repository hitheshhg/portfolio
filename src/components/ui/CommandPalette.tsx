"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  ArrowRight,
  Terminal,
  Volume2,
  VolumeX,
  Copy,
  Check,
  Sparkles,
  ExternalLink,
  X,
  FileText,
  Layers,
  Palette,
  BookOpen,
  Home,
  Coffee,
  Quote,
  Sun,
  Moon,
  Monitor,
} from "lucide-react";
import {
  playClick,
  playRetroBeep,
  playFanfare,
  toggleSound,
  isSoundEnabled,
} from "@/lib/sound";
import { fireConfetti } from "@/lib/confetti";
import { useTheme } from "@/context/ThemeContext";

const KONAMI_CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const [soundOn, setSoundOn] = useState(() => isSoundEnabled());
  const [isCrtMode, setIsCrtMode] = useState(false);
  const [easterEggActive, setEasterEggActive] = useState(false);
  const [easterEggMessage, setEasterEggMessage] = useState("");
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const { theme, resolvedTheme, setTheme, toggleTheme } = useTheme();

  // Toggle CRT class on document
  const toggleCrt = useCallback(() => {
    setIsCrtMode((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add("crt-mode");
        playRetroBeep();
      } else {
        document.documentElement.classList.remove("crt-mode");
        playClick(400, 0.04);
      }
      return next;
    });
  }, []);

  const triggerKonamiUnlock = useCallback(() => {
    playFanfare();
    fireConfetti();
    setEasterEggActive(true);
    setEasterEggMessage("KONAMI CODE UNLOCKED! 🎮 Retro Phosphor Terminal activated.");
    toggleCrt();
  }, [toggleCrt]);

  // Listen for ⌘K / Ctrl+K and Konami Code
  useEffect(() => {
    let keyBuffer: string[] = [];

    const handleKeyDown = (e: KeyboardEvent) => {
      // ⌘K or Ctrl+K
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        playClick(700, 0.02);
        setIsOpen((prev) => !prev);
        setSearch("");
        setSelectedIndex(0);
        return;
      }

      // Escape to close
      if (e.key === "Escape" && isOpen) {
        e.preventDefault();
        playClick(400, 0.02);
        setIsOpen(false);
        return;
      }

      // Konami Code detector
      keyBuffer.push(e.key);
      if (keyBuffer.length > KONAMI_CODE.length) {
        keyBuffer.shift();
      }

      const matches =
        keyBuffer.length === KONAMI_CODE.length &&
        keyBuffer.every((k, idx) => k.toLowerCase() === KONAMI_CODE[idx].toLowerCase());

      if (matches) {
        keyBuffer = [];
        triggerKonamiUnlock();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, triggerKonamiUnlock]);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => inputRef.current?.focus(), 50);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleCopyEmail = useCallback(() => {
    navigator.clipboard.writeText("hitheshhg@gmail.com");
    playClick(900, 0.03);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, []);

  const handleSoundToggle = useCallback(() => {
    const enabled = toggleSound();
    setSoundOn(enabled);
  }, []);

  const commands = [
    {
      id: "theme-toggle",
      title: resolvedTheme === "dark" ? "Switch to Light Mode ☀️" : "Switch to Dark Mode 🌙",
      subtitle: `Currently in ${theme} mode. Toggle color theme`,
      icon: resolvedTheme === "dark" ? <Sun className="w-4 h-4 text-amber-500" /> : <Moon className="w-4 h-4 text-sky-400" />,
      action: () => {
        toggleTheme();
        setIsOpen(false);
      },
    },
    {
      id: "theme-light",
      title: "Set Light Mode ☀️",
      subtitle: "Clean, crisp light canvas & high-contrast typography",
      icon: <Sun className="w-4 h-4 text-amber-500" />,
      action: () => {
        setTheme("light");
        setIsOpen(false);
      },
    },
    {
      id: "theme-dark",
      title: "Set Dark Mode 🌙",
      subtitle: "Deep matte obsidian bento surfaces & emerald accents",
      icon: <Moon className="w-4 h-4 text-sky-400" />,
      action: () => {
        setTheme("dark");
        setIsOpen(false);
      },
    },
    {
      id: "theme-system",
      title: "Sync System Theme 💻",
      subtitle: "Automatically match your operating system theme preference",
      icon: <Monitor className="w-4 h-4 text-neutral-400" />,
      action: () => {
        setTheme("system");
        setIsOpen(false);
      },
    },
    {
      id: "home",
      title: "Go to Home",
      subtitle: "Overview, hero statement & selected work",
      icon: <Home className="w-4 h-4 text-emerald-600 dark:text-[#4ade80]" />,
      action: () => {
        router.push("/");
        setIsOpen(false);
      },
    },
    {
      id: "projects",
      title: "View Engineering Projects",
      subtitle: "Prepr, CampusFix, Medivoice systems",
      icon: <Layers className="w-4 h-4 text-emerald-600 dark:text-[#4ade80]" />,
      action: () => {
        router.push("/development");
        setIsOpen(false);
      },
    },
    {
      id: "design",
      title: "Explore Design Studies",
      subtitle: "Figma tokens, wireframing, UI kits",
      icon: <Palette className="w-4 h-4 text-emerald-600 dark:text-[#4ade80]" />,
      action: () => {
        router.push("/design");
        setIsOpen(false);
      },
    },
    {
      id: "blog",
      title: "Read Engineering Notes",
      subtitle: "Next.js bento grids, PostgreSQL query tuning",
      icon: <BookOpen className="w-4 h-4 text-emerald-600 dark:text-[#4ade80]" />,
      action: () => {
        router.push("/blog");
        setIsOpen(false);
      },
    },
    {
      id: "cv",
      title: "Curriculum Vitae",
      subtitle: "Experience, academic credentials & tech stack",
      icon: <FileText className="w-4 h-4 text-emerald-600 dark:text-[#4ade80]" />,
      action: () => {
        router.push("/cv");
        setIsOpen(false);
      },
    },
    {
      id: "confetti",
      title: "Trigger Confetti Celebration 🎉",
      subtitle: "Easter Egg: Fire celebratory particle burst",
      icon: <Sparkles className="w-4 h-4 text-[#f59e0b]" />,
      action: () => {
        playFanfare();
        fireConfetti();
        setIsOpen(false);
        setEasterEggActive(true);
        setEasterEggMessage("Celebration triggered! 🚀 Keep building awesome things.");
      },
    },
    {
      id: "matrix-mode",
      title: isCrtMode ? "Exit Retro CRT Mode" : "Activate Retro CRT Terminal Mode 🕹️",
      subtitle: "Easter Egg: Vintage green phosphor scanlines & audio",
      icon: <Terminal className="w-4 h-4 text-emerald-600 dark:text-[#4ade80]" />,
      action: () => {
        toggleCrt();
        setIsOpen(false);
      },
    },
    {
      id: "coffee",
      title: "Brew Developer Pour-over Coffee ☕",
      subtitle: "Easter Egg: Special artisan caffeine boost",
      icon: <Coffee className="w-4 h-4 text-[#38bdf8]" />,
      action: () => {
        playClick(850, 0.03);
        setEasterEggActive(true);
        setEasterEggMessage("☕ Virtual Ethiopian single-origin pour-over served! Happy coding.");
        setIsOpen(false);
      },
    },
    {
      id: "quote",
      title: "Engineering Wisdom Quote 💡",
      subtitle: "Easter Egg: Words to code by",
      icon: <Quote className="w-4 h-4 text-[#a855f7]" />,
      action: () => {
        playClick(850, 0.03);
        setEasterEggActive(true);
        setEasterEggMessage('"Simplicity is prerequisite for reliability." — Edsger W. Dijkstra');
        setIsOpen(false);
      },
    },
    {
      id: "copy-email",
      title: copied ? "Email Copied to Clipboard!" : "Copy Email Address",
      subtitle: "hitheshhg@gmail.com",
      icon: copied ? <Check className="w-4 h-4 text-emerald-600 dark:text-[#4ade80]" /> : <Copy className="w-4 h-4 text-neutral-400" />,
      action: handleCopyEmail,
    },
    {
      id: "sfx-toggle",
      title: soundOn ? "Mute Micro-Haptic Audio" : "Enable Micro-Haptic Audio",
      subtitle: "Tactile mechanical click sound synthesis",
      icon: soundOn ? <Volume2 className="w-4 h-4 text-emerald-600 dark:text-[#4ade80]" /> : <VolumeX className="w-4 h-4 text-neutral-500" />,
      action: handleSoundToggle,
    },
    {
      id: "github",
      title: "View GitHub Profile",
      subtitle: "github.com/hitheshhg",
      icon: <ExternalLink className="w-4 h-4 text-neutral-400" />,
      action: () => {
        window.open("https://github.com/hitheshhg", "_blank");
        setIsOpen(false);
      },
    },
  ];

  const filteredCommands = commands.filter(
    (cmd) =>
      cmd.title.toLowerCase().includes(search.toLowerCase()) ||
      cmd.subtitle.toLowerCase().includes(search.toLowerCase()) ||
      cmd.id.toLowerCase().includes(search.toLowerCase())
  );

  const executeCommand = (cmd: typeof commands[0]) => {
    playClick(750, 0.02);
    cmd.action();
  };

  // Keyboard navigation within the command palette
  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      playClick(900, 0.015, 0.02);
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredCommands.length));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      playClick(900, 0.015, 0.02);
      setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % Math.max(1, filteredCommands.length));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filteredCommands[selectedIndex]) {
        executeCommand(filteredCommands[selectedIndex]);
      }
    }
  };

  return (
    <>
      {/* Retro CRT Banner when mode is active */}
      {isCrtMode && (
        <div
          onClick={toggleCrt}
          className="fixed top-0 inset-x-0 z-50 bg-[#4ade80] text-black text-center py-1 px-4 text-xs font-mono font-bold uppercase tracking-widest cursor-pointer hover:bg-[#22c55e] transition-colors"
        >
          [🕹️ RETRO PHOSPHOR CRT MODE ACTIVE — CLICK OR PRESS ⌘K TO EXIT]
        </div>
      )}

      {/* Easter Egg Floating Notification */}
      {easterEggActive && (
        <div
          onClick={() => setEasterEggActive(false)}
          className="fixed bottom-6 right-6 z-50 p-4 rounded-2xl bg-white dark:bg-black border border-emerald-500 dark:border-[#4ade80] shadow-2xl text-neutral-900 dark:text-white max-w-sm cursor-pointer animate-in fade-in slide-in-from-bottom-3 duration-200"
        >
          <div className="flex items-center justify-between gap-3 mb-1.5">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-600 dark:text-[#4ade80] shrink-0" />
              <span className="font-mono text-xs font-bold text-emerald-600 dark:text-[#4ade80]">PORTFOLIO EASTER EGG</span>
            </div>
            <X className="w-3.5 h-3.5 text-neutral-400 hover:text-neutral-900 dark:hover:text-white" />
          </div>
          <p className="text-xs text-neutral-700 dark:text-neutral-200 font-mono leading-relaxed">
            {easterEggMessage || "You unlocked the secret mode! Explore the interface."}
          </p>
        </div>
      )}

      {/* Floating ⌘K Quick Button */}
      <button
        type="button"
        onClick={() => {
          playClick(700, 0.02);
          setIsOpen(true);
        }}
        aria-label="Open Command Menu (⌘K)"
        className="fixed bottom-5 right-5 z-40 px-3.5 py-2 rounded-xl bg-white/90 dark:bg-black/90 hover:bg-neutral-100 dark:hover:bg-neutral-900 border border-black/10 dark:border-white/15 text-neutral-900 dark:text-white shadow-2xl backdrop-blur-md flex items-center gap-2 text-xs font-mono group hover:border-emerald-500/50 dark:hover:border-[#4ade80]/50 transition-all"
      >
        <Terminal className="w-3.5 h-3.5 text-emerald-600 dark:text-[#4ade80] group-hover:rotate-12 transition-transform" />
        <span className="text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-950 dark:group-hover:text-white transition-colors">cmd</span>
        <kbd className="px-1.5 py-0.5 rounded bg-black/5 dark:bg-white/10 text-[10px] text-neutral-600 dark:text-neutral-300 border border-black/10 dark:border-white/10 font-mono">
          ⌘K
        </kbd>
      </button>

      {/* Modal Dialog */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4 bg-black/50 dark:bg-black/75 backdrop-blur-sm animate-in fade-in duration-150"
          onClick={() => {
            playClick(400, 0.02);
            setIsOpen(false);
          }}
        >
          <div
            className="bento-card bg-white dark:bg-[#0d0d0f] border border-black/15 dark:border-white/15 w-full max-w-xl rounded-2xl overflow-hidden shadow-2xl text-neutral-900 dark:text-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Input Bar */}
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-black/10 dark:border-white/10">
              <Search className="w-4 h-4 text-neutral-400 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setSelectedIndex(0);
                  playClick(850, 0.015, 0.02);
                }}
                onKeyDown={handleInputKeyDown}
                placeholder="Search pages, theme (light/dark), or easter eggs..."
                className="w-full bg-transparent text-sm font-mono text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 outline-none"
              />
              <kbd className="hidden sm:inline-block px-1.5 py-0.5 rounded bg-black/5 dark:bg-white/10 text-[10px] text-neutral-500 dark:text-neutral-400 font-mono border border-black/10 dark:border-white/10">
                ESC
              </kbd>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="sm:hidden p-1 text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Results List */}
            <div className="max-h-[340px] overflow-y-auto p-2 space-y-1">
              {filteredCommands.length === 0 ? (
                <div className="py-8 text-center text-xs font-mono text-neutral-500">
                  No matching commands found.
                </div>
              ) : (
                filteredCommands.map((cmd, idx) => (
                  <button
                    key={cmd.id}
                    type="button"
                    onClick={() => executeCommand(cmd)}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={`w-full flex items-center justify-between p-3 rounded-xl text-left transition-all font-mono text-xs ${
                      selectedIndex === idx
                        ? "bg-black/5 dark:bg-white/10 text-neutral-950 dark:text-white border border-black/10 dark:border-white/10"
                        : "text-neutral-700 dark:text-neutral-300 hover:bg-black/[0.03] dark:hover:bg-white/5 border border-transparent"
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-7 h-7 rounded-lg bg-black/[0.04] dark:bg-white/[0.04] border border-black/5 dark:border-white/5 flex items-center justify-center shrink-0">
                        {cmd.icon}
                      </div>
                      <div className="min-w-0">
                        <span className="font-semibold block truncate text-neutral-900 dark:text-white">
                          {cmd.title}
                        </span>
                        <span className="text-[11px] text-neutral-500 dark:text-neutral-400 block truncate">
                          {cmd.subtitle}
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-neutral-400 dark:text-neutral-500 shrink-0 ml-2" />
                  </button>
                ))
              )}
            </div>

            {/* Footer Status */}
            <div className="px-4 py-2.5 bg-black/[0.02] dark:bg-white/[0.02] border-t border-black/5 dark:border-white/5 flex items-center justify-between text-[10px] font-mono text-neutral-500">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-[#4ade80]" />
                <span>hithesh.dev • 120fps smooth</span>
              </span>
              <span>Konami code: ↑ ↑ ↓ ↓ ← → ← → B A</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
