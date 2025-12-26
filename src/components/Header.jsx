export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 px-12 py-6 flex justify-between items-center backdrop-blur">

      <a
        href="#hero"
        className="tracking-widest font-semibold hover:text-white"
      >
        HITHESH HG
      </a>

      <nav className="space-x-8 text-sm text-muted">
        <a href="#projects" className="hover:text-white">
          Projects
        </a>
        <a href="#articles" className="hover:text-white">
          Articles
        </a>
        <a href="#contact" className="hover:text-white">
          Contact
        </a>
      </nav>
    </header>
  );
}
