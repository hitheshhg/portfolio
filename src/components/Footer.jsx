export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        padding: "2rem 3rem",
        borderTop: "1px solid var(--border)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontFamily: "var(--mono)",
        fontSize: "0.62rem",
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: "var(--muted)",
      }}
    >
      <span>
        © {year} Hithesh HG — Built with{" "}
        <span style={{ color: "var(--accent)" }}>React + Three.js</span>
      </span>

      <div style={{ display: "flex", gap: "2rem" }}>
        {[
          { href: "https://x.com/hitheshhg",        label: "X" },
          { href: "https://medium.com/@gurudattajr", label: "Medium" },
          { href: "https://github.com/hitheshhg",    label: "GitHub" },
        ].map(({ href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="link-under"
            style={{ color: "var(--muted)", transition: "color 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
          >
            {label}
          </a>
        ))}
      </div>
    </footer>
  );
}