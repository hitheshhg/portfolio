export default function Orb() {
  return (
    <div className="relative w-80 h-80 animate-float">
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-pink-500 via-purple-500 to-cyan-400 blur-2xl opacity-80" />
      <div className="absolute inset-6 rounded-full bg-gradient-to-tr from-pink-400 via-purple-400 to-cyan-300" />
    </div>
  );
}
