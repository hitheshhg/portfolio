import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Float } from "@react-three/drei";
import OrbCore from "./OrbCore";

export default function ArticleOrb() {
  return (
    <div className="w-full max-w-85 h-85 mx-auto flex items-center justify-center">
      <Canvas camera={{ position: [0, 0, 3.5], fov: 50 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[3, 3, 3]} intensity={0.9} />

          <Float speed={1.8} rotationIntensity={1} floatIntensity={1.2}>
            <OrbCore
              color="#38bdf8"
              radius={1.2}
              baseDistort={0.22}
              speed={1}
              morphStrength={0.12}
            />
          </Float>
        </Suspense>
      </Canvas>
    </div>
  );
}