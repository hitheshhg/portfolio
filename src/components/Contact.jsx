import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

const EMAIL = "gurudattajr@gmail.com";

const SOCIALS = [
  { href: "https://github.com/hitheshhg", Icon: Github, label: "GitHub" },
  { href: "https://linkedin.com/in/hitheshhg", Icon: Linkedin, label: "LinkedIn" },
  { href: "https://x.com/hitheshhg", Icon: null, label: "X / Twitter" },
  { href: "https://medium.com/@hitheshhg", Icon: null, label: "Medium" },
];

const FONT_SIZE = "clamp(3.8rem, 11vw, 11rem)";

function BigWord({ word, delay, color = "var(--text)" }) {
  const chars = word.split("");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div
      ref={ref}
      style={{ overflow: "hidden", paddingBottom: "0.12em", marginBottom: "-0.12em" }}
    >
      <div
        style={{
          display: "flex",
          fontFamily: "var(--display)",
          fontWeight: 800,
          fontSize: FONT_SIZE,
          letterSpacing: "-0.03em",
          lineHeight: 1,
          color,
        }}
      >
        {chars.map((ch, i) => (
          <motion.span
            key={i}
            initial={{ y: "105%" }}
            animate={inView ? { y: 0 } : {}}
            transition={{
              duration: 0.75,
              delay: delay + i * 0.038,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ display: "inline-block" }}
          >
            {ch === " " ? "\u00A0" : ch}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="contact"
      style={{ padding: "8rem 3rem 6rem", position: "relative", overflow: "hidden" }}
    >
      {/* Dividing line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
        style={{
          height: 1,
          background: "var(--border)",
          marginBottom: "5rem",
          transformOrigin: "left",
        }}
      />

      <div ref={ref}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="section-num"
          style={{ marginBottom: "2rem" }}
        >
          03 — Get in Touch
        </motion.p>

        <div style={{ marginBottom: "3.5rem" }}>
          <BigWord word="Let's" delay={0} />

          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", gap: "0 0.28em" }}>
            <BigWord word="Connect" delay={0.1} />
            \            <div style={{ overflow: "hidden", paddingBottom: "0.12em", marginBottom: "-0.12em" }}>
              <motion.span
                initial={{ y: "105%", display: "inline-block" }}
                animate={inView ? { y: 0 } : {}}
                transition={{ duration: 0.75, delay: 0.72, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  display: "inline-block",
                  fontFamily: "var(--display)",
                  fontWeight: 800,
                  fontSize: FONT_SIZE,
                  lineHeight: 1,
                  color: "var(--accent)",
                }}
              >
                .
              </motion.span>
            </div>
          </div>
        </div>

        <motion.a
          href={`mailto:${EMAIL}`}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.85, duration: 0.6 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "1rem",
            fontFamily: "var(--mono)",
            fontSize: "clamp(0.85rem, 1.5vw, 1.1rem)",
            letterSpacing: "0.06em",
            color: "var(--muted)",
            marginBottom: "4rem",
            transition: "color 0.3s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
        >
          <span>{EMAIL}</span>
          <motion.span
            animate={{ x: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            →
          </motion.span>
        </motion.a>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.05, duration: 0.6 }}
          style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
        >
          {SOCIALS.map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.45rem",
                padding: "0.6rem 1.2rem",
                border: "1px solid var(--border)",
                fontFamily: "var(--mono)",
                fontSize: "0.65rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--muted)",
                transition: "border-color 0.25s, color 0.25s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--accent)";
                e.currentTarget.style.color = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.color = "var(--muted)";
              }}
            >
              {Icon && <Icon size={13} />}
              {label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}