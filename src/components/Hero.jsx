import Orb from "./Orb";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-between px-12 pt-24">
      <div>
        <h2 className="text-6xl italic font-light mb-3">Creative</h2>
        <h1 className="text-7xl font-black tracking-tight">
          DEVELOPER<span className="text-gray-500">.</span>
        </h1>
      </div>

      <Orb />

      <p className="max-w-sm text-gray-400 text-sm leading-relaxed">
        I design and build immersive web experiences using
        modern JavaScript, 3D graphics, and cloud-native tools.
      </p>
    </section>
  );
}
