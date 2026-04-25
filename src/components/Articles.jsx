import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Float } from "@react-three/drei";
import { supabase } from "../lib/supabase";
import OrbCore from "./OrbCore";

function ArticleItem({ article, index }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  const date = article.published_at
    ? new Date(article.published_at).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    })
    : null;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 1, 0.5, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderTop: "1px solid var(--border)",
        padding: "1.8rem 0",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "2rem",
          justifyContent: "space-between",
        }}
      >
        <div style={{ flex: 1 }}>
          <motion.h3
            animate={{ x: hovered ? 8 : 0 }}
            transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
            style={{
              fontFamily: "var(--display)",
              fontWeight: 700,
              fontSize: "clamp(1.05rem, 2vw, 1.6rem)",
              letterSpacing: "-0.02em",
              color: hovered ? "var(--text)" : "var(--muted)",
              marginBottom: "0.6rem",
              transition: "color 0.3s",
            }}
          >
            {article.title}
          </motion.h3>

          <p
            style={{
              fontFamily: "var(--mono)",
              fontSize: "0.75rem",
              lineHeight: 1.75,
              color: "var(--muted)",
              maxWidth: "52ch",
              opacity: hovered ? 1 : 0.7,
              transition: "opacity 0.3s",
            }}
          >
            {article.summary}
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: "0.75rem",
            flexShrink: 0,
          }}
        >
          {date && (
            <span
              style={{
                fontFamily: "var(--mono)",
                fontSize: "0.6rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--muted)",
              }}
            >
              {date}
            </span>
          )}

          {article.link && (
            <a
              href={article.link}
              target="_blank"
              rel="noreferrer"
              className="link-under"
              style={{
                fontFamily: "var(--mono)",
                fontSize: "0.62rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: hovered ? "var(--accent)" : "var(--muted)",
                transition: "color 0.3s",
                whiteSpace: "nowrap",
              }}
            >
              Read ↗
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    supabase
      .from("articles")
      .select("*")
      .order("published_at", { ascending: false })
      .then(({ data }) => setArticles(data || []));
  }, []);

  return (
    <section
      id="articles"
      style={{ padding: "8rem 3rem", position: "relative" }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 280px",
          gap: "5rem",
          alignItems: "start",
        }}
      >
        <div>
          <div ref={ref} style={{ marginBottom: "4rem" }}>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="section-num"
            >
              02 — Writing
            </motion.p>

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
              Articles
            </motion.h2>
          </div>

          <div>
            {articles.map((a, i) => (
              <ArticleItem key={a.id} article={a} index={i} />
            ))}
            <div style={{ borderTop: "1px solid var(--border)" }} />
          </div>
        </div>

        <div style={{ position: "sticky", top: "6rem" }}>
          <div style={{ width: "100%", aspectRatio: "1", borderRadius: "50%" }}>
            <Canvas camera={{ position: [0, 0, 3.5], fov: 50 }}>
              <Suspense fallback={null}>
                <ambientLight intensity={0.6} />
                <directionalLight position={[3, 3, 3]} intensity={0.9} />
                <Float speed={1.6} rotationIntensity={0.9} floatIntensity={1}>
                  <OrbCore
                    color="#c8f135"
                    radius={1.2}
                    baseDistort={0.2}
                    speed={1.1}
                    morphStrength={0.1}
                  />
                </Float>
              </Suspense>
            </Canvas>
          </div>

          <p
            style={{
              textAlign: "center",
              fontFamily: "var(--mono)",
              fontSize: "0.6rem",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--muted)",
              marginTop: "1rem",
            }}
          >
            Published on Medium & beyond
          </p>
        </div>
      </div>
    </section>
  );
}