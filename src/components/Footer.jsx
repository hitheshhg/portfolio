export default function Footer() {
  return (
    <footer className="px-12 py-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-muted">

      <span>
        © {new Date().getFullYear()} Hithesh HG — CSE Undergrad
      </span>

      <div className="flex gap-6 mt-6 md:mt-0">

        <a
          href="https://github.com/HitheshHG"
          target="_blank"
          rel="noreferrer"
          className="hover:text-white"
        >
          GitHub
        </a>

        <a
          href="https://x.com/gurudattajr"
          target="_blank"
          rel="noreferrer"
          className="hover:text-white"
        >
          X
        </a>

        <a
          href="https://www.linkedin.com/in/hitheshhg7/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-white"
        >
          LinkedIn
        </a>

        <a
          href="https://medium.com/@gurudattajr"
          target="_blank"
          rel="noreferrer"
          className="hover:text-white"
        >
          Medium
        </a>
      </div>
    </footer>
  );
}
