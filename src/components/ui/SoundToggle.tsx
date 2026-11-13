"use client";

import { useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { toggleSound, isSoundEnabled, playClick } from "@/lib/sound";
import { cn } from "@/lib/utils";

export function SoundToggle({ className = "" }: { className?: string }) {
  const [enabled, setEnabled] = useState(isSoundEnabled);

  const handleToggle = () => {
    const newState = toggleSound();
    setEnabled(newState);
    if (!newState) {
      // Play a soft confirmation before muting
      playClick(300, 0.02);
    }
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={enabled ? "Mute interactive audio feedback" : "Enable interactive audio feedback"}
      title={enabled ? "Sound effects enabled (Click to mute)" : "Sound effects muted (Click to enable)"}
      className={cn(
        "p-2.5 rounded-full bg-white dark:bg-[#14161f] border border-neutral-300 dark:border-white/15 text-neutral-800 dark:text-neutral-200 hover:border-black dark:hover:border-white/40 active:scale-95 transition-all shadow-2xs",
        className
      )}
    >
      {enabled ? (
        <Volume2 className="w-3.5 h-3.5 text-emerald-600 dark:text-[#4ade80]" />
      ) : (
        <VolumeX className="w-3.5 h-3.5 text-neutral-400 dark:text-neutral-500" />
      )}
    </button>
  );
}
