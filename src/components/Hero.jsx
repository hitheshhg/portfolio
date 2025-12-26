import Orb3D from "./Orb3D";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-between px-12 pt-24"
    >
      <div>
        <h2 className="text-6xl italic font-light mb-3">Creative</h2>
        <h1 className="text-7xl font-black tracking-tight">
          DEVELOPER<span className="text-muted">.</span>
        </h1>
      </div>

      <div className="hidden md:flex">
        <Orb3D />
      </div>

      <p className="max-w-sm text-sm text-muted leading-relaxed">
        I build immersive, UI-focused web experiences using modern
        frontend and 3D technologies.
      </p>
    </section>
  );
}
