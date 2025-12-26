export default function Header() {
    return (
        <header className="fixed top-0 w-full z-50 px-12 py-6 flex justify-between items-center backdrop-blur">
            <span className="tracking-widest font-semibold">HITHESH</span>
            <nav className="space-x-8 text-sm text-muted">
                <a href="#projects" className="hover:text-white">Projects</a>
                <a href="#articles" className="hover:text-white">Articles</a>
            </nav>
        </header>
    );
}
