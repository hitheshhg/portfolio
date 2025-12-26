import { Canvas } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, OrbitControls } from "@react-three/drei";

export default function Orb() {
  return (
    <div className="w-[350px] h-[350px]">
      <Canvas camera={{ position: [0, 0, 2.5] }}>
        
        {/* Lighting */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[2, 2, 2]} />

        {/* Sphere */}
        <Sphere args={[1, 100, 200]} scale={1}>
          <MeshDistortMaterial
            color="#a855f7"
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0}
          />
        </Sphere>

        {/* Disable zoom but allow subtle rotation */}
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
      </Canvas>
    </div>
  );
}
