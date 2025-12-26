export default function Navbar() {
    return (
        <header className="fixed top-0 w-full z-50 flex justify-between items-center px-10 py-6 text-sm">
            <div className="font-bold tracking-widest">HITHESH</div>
            <nav className="space-x-6 text-gray-400">
                <a href="#" className="hover:text-white">Home</a>
                <a href="#projects" className="hover:text-white">Projects</a>
                <a href="#" className="hover:text-white">Contact</a>
            </nav>
        </header>
    );
}
