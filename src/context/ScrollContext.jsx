import { createContext, useContext, useEffect, useState } from "react";

const ScrollContext = createContext(0);

export function ScrollProvider({ children }) {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h =
        document.documentElement.scrollHeight -
        window.innerHeight;
      setScroll(window.scrollY / h || 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <ScrollContext.Provider value={scroll}>
      {children}
    </ScrollContext.Provider>
  );
}

export const useScroll = () => useContext(ScrollContext);
