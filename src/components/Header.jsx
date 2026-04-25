import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const NAV = [
  { href: "#projects", label: "Projects" },
  { href: "#articles", label: "Articles" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.div
        style={{
          scaleX,
          position: "fixed",
          top: 0, left: 0, right: 0,
          height: 2,
          background: "var(--accent)",
          transformOrigin: "0%",
          zIndex: 10000,
          pointerEvents: "none",
        }}
      />

      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 50,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1.4rem 3rem",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          background: scrolled
            ? "rgba(8, 8, 8, 0.75)"
            : "rgba(8, 8, 8, 0)",
          borderBottom: scrolled
            ? "1px solid var(--border)"
            : "1px solid transparent",
          transition: "background 0.4s, border-color 0.4s",
          fontFamily: "var(--display)",
        }}
      >
        <a
          href="#hero"
          style={{
            fontWeight: 800,
            fontSize: "1.05rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          Hithesh
        </a>

        <nav style={{ display: "flex", gap: "2.5rem", alignItems: "center" }}>
          {NAV.map(({ href, label }) => (
            <NavLink key={href} href={href}>
              {label}
            </NavLink>
          ))}

          <a
            href="/resume.pdf"
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              padding: "0.45rem 1.1rem",
              border: "1px solid var(--accent)",
              color: "var(--accent)",
              borderRadius: "999px",
              fontFamily: "var(--mono)",
              transition: "background 0.25s, color 0.25s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--accent)";
              e.currentTarget.style.color = "#080808";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "var(--accent)";
            }}
          >
            Hire me
          </a>
        </nav>
      </motion.header>
    </>
  );
}

function NavLink({ href, children }) {
  return (
    <a
      href={href}
      className="link-under"
      style={{
        fontSize: "0.72rem",
        letterSpacing: "0.16em",
        textTransform: "uppercase",
        color: "var(--muted)",
        transition: "color 0.2s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
    >
      {children}
    </a>
  );
}