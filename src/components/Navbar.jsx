export default function Navbar() {
  return (
    <header className="fixed top-0 w-full px-12 py-6 flex justify-between z-50">
      <span className="tracking-widest font-semibold">HITHESH</span>
      <nav className="space-x-8 text-gray-400 text-sm">
        <a href="#projects" className="hover:text-white">Projects</a>
        <a href="#" className="hover:text-white">Contact</a>
      </nav>
    </header>
  );
}
