import { Canvas } from "@react-three/fiber";
import OrbCore from "./OrbCore";

export default function Orb3D() {
  return (
    <div className="w-[520px] h-[520px]">
      <Canvas camera={{ position: [0, 0, 3.2] }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[4, 4, 4]} intensity={1.2} />
        <OrbCore
          color="#a855f7"   
          radius={1.4}
          distort={0.4}
          speed={2}
        />
      </Canvas>
    </div>
  );
}
