import { useRef } from 'react'
import { motion } from 'framer-motion'

const TICKER_ITEMS = [
  'Creative Developer', 'CSE Undergrad',
  'Available for Opportunities', 'Open to Collaborate', 'UI & Systems',
]

/* Character-by-character reveal */
function BigReveal({ text, delay = 0, style = {} }) {
  return (
    <div style={{ overflow: 'hidden', paddingBottom: '0.08em', marginBottom: '-0.08em' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', ...style }}>
        {text.split('').map((ch, i) => (
          <motion.span
            key={i}
            initial={{ y: '105%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.75, delay: delay + i * 0.036, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: 'inline-block' }}
          >
            {ch === ' ' ? '\u00A0' : ch}
          </motion.span>
        ))}
      </div>
    </div>
  )
}

function RotatingBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      style={{
        flexShrink: 0,
        width: 'clamp(70px, 12vw, 110px)',
        height: 'clamp(70px, 12vw, 110px)',
        animation: 'badgeSpin 22s linear infinite',
        willChange: 'transform',
      }}
    >
      <style>{`@keyframes badgeSpin { to { transform: rotate(360deg); } }`}</style>
      <svg viewBox="0 0 110 110" width="100%" height="100%">
        <defs>
          <path id="bc" d="M 55,55 m -42,0 a 42,42 0 1,1 84,0 a 42,42 0 1,1 -84,0" />
        </defs>
        <text style={{ fontSize: 9, fill: 'var(--accent)', fontFamily: 'var(--mono)', letterSpacing: '0.08em' }}>
          <textPath href="#bc">AVAILABLE FOR WORK  •  OPEN TO COLLABORATE  •</textPath>
        </text>
      </svg>
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: '100svh',
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      padding: 'clamp(5rem,10vw,7rem) clamp(1.25rem,5vw,3rem) 6rem',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Ghost watermark */}
      <div aria-hidden style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%,-50%)',
        fontFamily: 'var(--display)', fontWeight: 800,
        fontSize: 'clamp(6rem, 22vw, 22rem)',
        color: 'transparent',
        WebkitTextStroke: '1px rgba(242,237,230,0.04)',
        whiteSpace: 'nowrap', userSelect: 'none', pointerEvents: 'none',
        letterSpacing: '-0.03em', lineHeight: 1, zIndex: 0,
      }}>
        HITHESH
      </div>

      {/* Main content */}
      <div style={{
        position: 'relative', zIndex: 1,
        display: 'flex', alignItems: 'flex-end',
        justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap',
      }}>
        <div style={{ flex: 1, minWidth: 'min(100%, 320px)' }}>
          <BigReveal
            text="Creative"
            delay={0}
            style={{
              fontFamily: 'var(--display)', fontWeight: 400,
              fontSize: 'clamp(2rem, 6vw, 5.5rem)',
              fontStyle: 'italic', color: 'var(--muted)', lineHeight: 1.05,
            }}
          />
          <BigReveal
            text="Developer"
            delay={0.1}
            style={{
              fontFamily: 'var(--display)', fontWeight: 800,
              fontSize: 'clamp(3rem, 9vw, 8.5rem)',
              letterSpacing: '-0.03em', lineHeight: 1.05, color: 'var(--text)',
            }}
          />

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.6, ease: 'easeOut' }}
            style={{
              marginTop: '2rem', maxWidth: '38ch',
              fontSize: 'clamp(0.72rem, 1.5vw, 0.82rem)',
              lineHeight: 1.85, color: 'var(--muted)',
            }}
          >
            Engineering student building reliable, scalable systems
            at the intersection of UI craft and creative tech.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.55, ease: 'easeOut' }}
            style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
          >
            <a href="#projects" style={{
              fontFamily: 'var(--mono)',
              fontSize: 'clamp(0.6rem, 1.2vw, 0.68rem)',
              letterSpacing: '0.18em', textTransform: 'uppercase',
              padding: 'clamp(.65rem,1.5vw,.8rem) clamp(1.4rem,3vw,2.2rem)',
              background: 'var(--accent)', color: '#080808', transition: 'opacity .2s',
            }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.82'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              View Work
            </a>
            <a href="#contact" style={{
              fontFamily: 'var(--mono)',
              fontSize: 'clamp(0.6rem, 1.2vw, 0.68rem)',
              letterSpacing: '0.18em', textTransform: 'uppercase',
              padding: 'clamp(.65rem,1.5vw,.8rem) clamp(1.4rem,3vw,2.2rem)',
              border: '1px solid var(--border)', color: 'var(--muted)',
              transition: 'border-color .2s, color .2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--text)'; e.currentTarget.style.color = 'var(--text)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--muted)' }}
            >
              Say Hello
            </a>
          </motion.div>
        </div>

        <RotatingBadge />
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        style={{
          position: 'absolute', bottom: '5.5rem', left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          gap: '0.4rem', pointerEvents: 'none', zIndex: 1,
        }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          style={{ width: 1, height: 44, background: 'linear-gradient(to bottom, transparent, var(--accent))' }}
        />
        <span style={{ fontSize: '0.52rem', letterSpacing: '0.22em', color: 'var(--muted)', textTransform: 'uppercase' }}>
          scroll
        </span>
      </motion.div>

      {/* Ticker */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        borderTop: '1px solid var(--border)', padding: '0.7rem 0',
        overflow: 'hidden', background: 'rgba(8,8,8,0.85)', zIndex: 2,
      }}>
        <div className="ticker-inner">
          {[0, 1].map(d => TICKER_ITEMS.map((item, i) => (
            <span key={`${d}-${i}`} style={{
              fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase',
              color: 'var(--muted)', marginRight: '3rem', flexShrink: 0,
            }}>
              {item}
              <span style={{ color: 'var(--accent)', marginLeft: '3rem' }}>·</span>
            </span>
          )))}
        </div>
      </div>
    </section>
  )
}
