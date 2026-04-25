import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const TICKER_ITEMS = [
  "Creative Developer",
  "CSE Undergrad",
  "Available for Opportunities",
  "Open to Collaborate",
  "UI & Systems",
];

function RevealWords({ text, delay = 0, style = {} }) {
  const words = text.split(" ");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div
      ref={ref}
      style={{
        overflow: "hidden",
        paddingBottom: "0.12em",
        marginBottom: "-0.12em",
        display: "block",
      }}
    >
      <div style={{ display: "block", ...style }}>
        {words.map((word, i) => (
          <motion.span
            key={i}
            style={{ display: "inline-block", marginRight: "0.22em" }}
            initial={{ y: "105%", opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{
              duration: 0.65,
              delay: delay + i * 0.09,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

function RotatingBadge() {
  return (
    <div
      style={{
        width: 110,
        height: 110,
        flexShrink: 0,
        animation: "badge-spin 22s linear infinite",
        willChange: "transform",
      }}
    >
      <style>{`@keyframes badge-spin { to { transform: rotate(360deg); } }`}</style>
      <svg viewBox="0 0 110 110" style={{ width: "100%", height: "100%" }}>
        <defs>
          <path
            id="bc"
            d="M 55,55 m -42,0 a 42,42 0 1,1 84,0 a 42,42 0 1,1 -84,0"
          />
        </defs>
        <text style={{ fontSize: 9, fill: "var(--accent)", fontFamily: "var(--mono)", letterSpacing: "0.08em" }}>
          <textPath href="#bc">
            AVAILABLE FOR WORK  •  OPEN TO COLLABORATE  •
          </textPath>
        </text>
      </svg>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "7rem 3rem 5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          fontFamily: "var(--display)",
          fontWeight: 800,
          fontSize: "clamp(6rem, 22vw, 22rem)",
          color: "transparent",
          WebkitTextStroke: "1px rgba(242,237,230,0.04)",
          whiteSpace: "nowrap",
          userSelect: "none",
          pointerEvents: "none",
          letterSpacing: "-0.03em",
          lineHeight: 1,
          zIndex: 0,
        }}
      >
        HITHESH
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: "3rem",
        }}
      >
        <div style={{ flex: 1, minWidth: 0 }}>

          <div style={{ fontFamily: "var(--display)" }}>
            <RevealWords
              text="Creative"
              delay={0}
              style={{
                fontWeight: 400,
                fontSize: "clamp(2.6rem, 6vw, 5.5rem)",
                fontStyle: "italic",
                color: "var(--muted)",
                lineHeight: 1.05,
              }}
            />
            <RevealWords
              text="Developer"
              delay={0.12}
              style={{
                fontWeight: 800,
                fontSize: "clamp(3.8rem, 9vw, 8.5rem)",
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
                color: "var(--text)",
              }}
            />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.6, ease: "easeOut" }}
            style={{
              marginTop: "2rem",
              maxWidth: "38ch",
              fontSize: "0.8rem",
              lineHeight: 1.85,
              color: "var(--muted)",
              fontFamily: "var(--mono)",
            }}
          >
            Engineering student building reliable, scalable systems
            at the intersection of UI craft and creative tech.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.55, ease: "easeOut" }}
            style={{ marginTop: "2.5rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}
          >
            <a
              href="#projects"
              style={{
                fontFamily: "var(--mono)",
                fontSize: "0.68rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                padding: "0.8rem 2.2rem",
                background: "var(--accent)",
                color: "#080808",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.82")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              View Work
            </a>

            <a
              href="#contact"
              style={{
                fontFamily: "var(--mono)",
                fontSize: "0.68rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                padding: "0.8rem 2.2rem",
                border: "1px solid var(--border)",
                color: "var(--muted)",
                transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--text)";
                e.currentTarget.style.color = "var(--text)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.color = "var(--muted)";
              }}
            >
              Say Hello
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ flexShrink: 0, paddingBottom: "0.5rem" }}
        >

          <RotatingBadge />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        style={{
          position: "absolute",
          bottom: "4.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.4rem",
          pointerEvents: "none",
          zIndex: 1,
        }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: 1,
            height: 44,
            background: "linear-gradient(to bottom, transparent, var(--accent))",
          }}
        />
        <span
          style={{
            fontFamily: "var(--mono)",
            fontSize: "0.55rem",
            letterSpacing: "0.22em",
            color: "var(--muted)",
            textTransform: "uppercase",
          }}
        >
          scroll
        </span>
      </motion.div>

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          borderTop: "1px solid var(--border)",
          padding: "0.7rem 0",
          overflow: "hidden",
          background: "rgba(8,8,8,0.8)",
          zIndex: 2,
        }}
      >
        <div className="ticker-inner">
          {[0, 1].map((di) =>
            TICKER_ITEMS.map((item, i) => (
              <span
                key={`${di}-${i}`}
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "0.62rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                  marginRight: "3rem",
                  flexShrink: 0,
                }}
              >
                {item}
                <span style={{ color: "var(--accent)", marginLeft: "3rem" }}>·</span>
              </span>
            ))
          )}
        </div>
      </div>
    </section>
  );
}