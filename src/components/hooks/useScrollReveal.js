import { useEffect } from 'react'

/**
 * Attach to a container ref. All .fade-up descendants will animate
 * in when they enter the viewport.
 */
export function useScrollReveal(containerRef) {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible')
          obs.unobserve(e.target)
        }
      }),
      { rootMargin: '-60px' }
    )

    const root = containerRef?.current ?? document
    root.querySelectorAll('.fade-up').forEach((el) => obs.observe(el))

    return () => obs.disconnect()
  }, [containerRef])
}
