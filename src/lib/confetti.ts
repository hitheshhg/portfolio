/**
 * Lazy-loaded canvas-confetti trigger.
 * 0kb initial bundle impact — imported dynamically only when fired.
 */

export async function fireConfetti() {
  if (typeof window === "undefined") return;

  try {
    const confettiModule = await import("canvas-confetti");
    const confetti = confettiModule.default;

    // High-energy developer party burst
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.7 },
      colors: ["#4ade80", "#22c55e", "#ffffff", "#38bdf8", "#f59e0b"],
      disableForReducedMotion: true,
    });

    setTimeout(() => {
      confetti({
        particleCount: 45,
        angle: 60,
        spread: 55,
        origin: { x: 0.1, y: 0.7 },
        colors: ["#4ade80", "#ffffff"],
        disableForReducedMotion: true,
      });
      confetti({
        particleCount: 45,
        angle: 120,
        spread: 55,
        origin: { x: 0.9, y: 0.7 },
        colors: ["#4ade80", "#ffffff"],
        disableForReducedMotion: true,
      });
    }, 180);
  } catch {
    // Graceful fallback
  }
}
