import { useEffect, useRef } from "react";

/**
 * Perf-optimized cursor.
 * — translate3d (not translate) forces GPU layer, avoids paint
 * — No MutationObserver (expensive); uses event delegation instead
 * — passive mousemove listener so browser doesn't wait for preventDefault
 * — Both elements stay in one composited layer via will-change: transform
 */
export default function Cursor() {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);
  const mouse   = useRef({ x: -100, y: -100 });
  const ring    = useRef({ x: -100, y: -100 });
  const raf     = useRef(null);
  const grown   = useRef(false);

  useEffect(() => {
    const dot  = dotRef.current;
    const ring_ = ringRef.current;
    if (!dot || !ring_) return;

    /* ── Mouse position (passive = no jank) ── */
    const onMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      /* dot snaps immediately — no RAF needed */
      dot.style.transform = `translate3d(${e.clientX - 4}px,${e.clientY - 4}px,0)`;
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    /* ── Hover grow via event delegation (one listener, not N) ── */
    const onOver = (e) => {
      if (e.target.closest("a, button") && !grown.current) {
        grown.current = true;
        ring_.style.width  = "56px";
        ring_.style.height = "56px";
        ring_.style.marginTop    = "-28px";
        ring_.style.marginLeft   = "-28px";
        ring_.style.borderColor  = "rgba(200,241,53,0.85)";
      }
    };
    const onOut = (e) => {
      if (!e.relatedTarget?.closest("a, button") && grown.current) {
        grown.current = false;
        ring_.style.width  = "36px";
        ring_.style.height = "36px";
        ring_.style.marginTop    = "-18px";
        ring_.style.marginLeft   = "-18px";
        ring_.style.borderColor  = "rgba(200,241,53,0.4)";
      }
    };
    document.addEventListener("mouseover",  onOver);
    document.addEventListener("mouseout",   onOut);

    /* ── Ring follows with lerp ── */
    const lerp = (a, b, t) => a + (b - a) * t;
    const tick = () => {
      ring.current.x = lerp(ring.current.x, mouse.current.x, 0.1);
      ring.current.y = lerp(ring.current.y, mouse.current.y, 0.1);
      ring_.style.transform =
        `translate3d(${ring.current.x}px,${ring.current.y}px,0)`;
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover",  onOver);
      document.removeEventListener("mouseout",   onOut);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <>
      {/* Dot — snaps instantly to mouse */}
      <div
        ref={dotRef}
        style={{
          position:      "fixed",
          top:           0,
          left:          0,
          width:         8,
          height:        8,
          borderRadius:  "50%",
          background:    "var(--accent)",
          pointerEvents: "none",
          zIndex:        10001,
          willChange:    "transform",
          transform:     "translate3d(-100px,-100px,0)",
        }}
      />

      {/* Ring — lags with lerp */}
      <div
        ref={ringRef}
        style={{
          position:      "fixed",
          top:           0,
          left:          0,
          width:         36,
          height:        36,
          marginTop:     -18,
          marginLeft:    -18,
          borderRadius:  "50%",
          border:        "1px solid rgba(200,241,53,0.4)",
          pointerEvents: "none",
          zIndex:        10000,
          willChange:    "transform",
          transform:     "translate3d(-100px,-100px,0)",
          transition:    "width 0.3s, height 0.3s, margin 0.3s, border-color 0.3s",
        }}
      />
    </>
  );
}