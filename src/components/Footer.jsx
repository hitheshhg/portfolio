export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{
      padding: 'clamp(1.2rem,2vw,2rem) clamp(1.25rem,4vw,3rem)',
      borderTop: '1px solid var(--border)',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      flexWrap: 'wrap', gap: '0.5rem',
      fontFamily: 'var(--mono)', fontSize: '0.6rem',
      letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)',
    }}>
      <span>
        © {year} Hithesh HG — Built with{' '}
        <span style={{ color: 'var(--accent)' }}>React + Three.js</span>
      </span>
      <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        Real-time
        <span style={{
          display: 'inline-block', width: 7, height: 7, borderRadius: '50%',
          background: 'var(--accent)',
          animation: 'footerPulse 2s ease-in-out infinite',
        }} />
        <style>{`@keyframes footerPulse { 0%,100%{opacity:1} 50%{opacity:.3} }`}</style>
      </span>
    </footer>
  )
}
