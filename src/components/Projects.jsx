import { useEffect, useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { supabase } from "../lib/supabase";

function ProjectRow({ project, index }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.08, ease: [0.25, 1, 0.5, 1] }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      style={{
        borderTop: "1px solid var(--border)",
        padding: "1.6rem 0",
        cursor: "pointer",
        transition: "background 0.3s",
        background: open ? "rgba(200,241,53,0.03)" : "transparent",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "3.5rem 1fr auto",
          alignItems: "center",
          gap: "1.5rem",
        }}
      >
        <span
          style={{
            fontFamily: "var(--mono)",
            fontSize: "0.65rem",
            color: open ? "var(--accent)" : "var(--muted)",
            letterSpacing: "0.1em",
            transition: "color 0.3s",
          }}
        >
          {num}
        </span>

        <motion.h3
          animate={{ x: open ? 8 : 0 }}
          transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
          style={{
            fontFamily: "var(--display)",
            fontWeight: 700,
            fontSize: "clamp(1.2rem, 2.5vw, 2rem)",
            letterSpacing: "-0.02em",
            color: open ? "var(--text)" : "var(--muted)",
            transition: "color 0.3s",
          }}
        >
          {project.title}
        </motion.h3>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", justifyContent: "flex-end" }}>
          {(project.tech || "").split(",").map((t) => (
            <span
              key={t}
              style={{
                fontFamily: "var(--mono)",
                fontSize: "0.58rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                padding: "0.25rem 0.6rem",
                border: "1px solid var(--border)",
                color: "var(--muted)",
                borderRadius: 2,
                whiteSpace: "nowrap",
                transition: "border-color 0.3s",
                ...(open ? { borderColor: "rgba(200,241,53,0.3)" } : {}),
              }}
            >
              {t.trim()}
            </span>
          ))}
        </div>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="detail"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div
              style={{
                paddingTop: "1.25rem",
                paddingLeft: "5rem",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "space-between",
                gap: "2rem",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "0.78rem",
                  lineHeight: 1.8,
                  color: "var(--muted)",
                  maxWidth: "52ch",
                }}
              >
                {project.description}
              </p>

              <div style={{ display: "flex", gap: "1.5rem", flexShrink: 0 }}>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="link-under"
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: "0.65rem",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--accent)",
                    }}
                  >
                    GitHub ↗
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="link-under"
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: "0.65rem",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--text)",
                    }}
                  >
                    Live ↗
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    supabase.from("projects").select("*").then(({ data }) => {
      setProjects(data || []);
    });
  }, []);

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="projects"
      style={{ padding: "8rem 3rem", position: "relative" }}
    >
      <div ref={ref} style={{ marginBottom: "4rem" }}>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-num"
        >
          01 — Selected Work
        </motion.p>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1 }}
            style={{
              fontFamily: "var(--display)",
              fontWeight: 800,
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              letterSpacing: "-0.03em",
              lineHeight: 1,
              color: "var(--text)",
            }}
          >
            Projects
          </motion.h2>

          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            style={{
              fontFamily: "var(--mono)",
              fontSize: "0.68rem",
              color: "var(--muted)",
              letterSpacing: "0.1em",
            }}
          >
            ({projects.length} total)
          </motion.span>
        </div>
      </div>

      <div>
        {projects.map((p, i) => (
          <ProjectRow key={p.id} project={p} index={i} />
        ))}

        <div style={{ borderTop: "1px solid var(--border)" }} />
      </div>
    </section>
  );
}