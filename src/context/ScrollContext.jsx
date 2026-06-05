import { createContext, useContext, useEffect, useState } from 'react'

const ScrollCtx = createContext(0)

export function ScrollProvider({ children }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight
      setProgress(h > 0 ? window.scrollY / h : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return <ScrollCtx.Provider value={progress}>{children}</ScrollCtx.Provider>
}

export const useScrollProgress = () => useContext(ScrollCtx)
