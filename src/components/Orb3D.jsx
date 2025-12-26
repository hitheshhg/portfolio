import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import { useRef } from "react";

function SphereMesh() {
  const mesh = useRef();
  const mat = useRef();

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    mesh.current.rotation.y = t * 0.15;
    mesh.current.rotation.x = Math.sin(t * 0.2) * 0.25;

    const scale = 1 + Math.sin(t * 1.2) * 0.05;
    mesh.current.scale.set(scale, scale, scale);

    mat.current.distort = 0.4;
    mat.current.speed = 2;
  });

  return (
    <Sphere args={[1.4, 160, 320]} ref={mesh}>
      <MeshDistortMaterial
        ref={mat}
        color="#a855f7"
        roughness={0.15}
        metalness={0.6}
      />
    </Sphere>
  );
}

export default function Orb3D() {
  return (
    <div className="w-[520px] h-[520px]">
      <Canvas camera={{ position: [0, 0, 3.2] }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[4, 4, 4]} intensity={1.2} />
        <SphereMesh />
      </Canvas>
    </div>
  );
}
