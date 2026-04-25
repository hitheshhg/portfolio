import Cursor from "./components/Cursor";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Articles from "./components/Articles";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ScrollProvider } from "./context/ScrollContext";

export default function App() {
  return (
    <ScrollProvider>
      <Cursor />
      <Header />
      <main>
        <Hero />
        <Projects />
        <Articles />
        <Contact />
      </main>
      <Footer />
    </ScrollProvider>
  );
}