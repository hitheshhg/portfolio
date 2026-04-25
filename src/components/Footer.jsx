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
    </footer>
  );
}