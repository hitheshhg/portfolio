import Orb from "./Orb";

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-between px-10 pt-24">

            {/* LEFT */}
            <div>
                <h2 className="text-6xl italic font-light mb-2">Creative</h2>
                <h1 className="text-7xl font-extrabold tracking-tight">
                    DEVELOPER<span className="text-gray-500">.</span>
                </h1>
            </div>

            {/* CENTER */}
            <Orb />

            {/* RIGHT */}
            <div className="max-w-sm text-sm text-gray-400 leading-relaxed">
                Hi, I’m Hithesh — a creative web developer focused on building
                modern, fast, and visually engaging web experiences using
                React, Tailwind, and cloud tools.
            </div>

        </section>
    );
}
