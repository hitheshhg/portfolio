import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import { useRef } from "react";
import { useScroll } from "../context/ScrollContext";

function OrbMesh() {
  const mesh = useRef();
  const mat = useRef();
  const scroll = useScroll();

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;

    mesh.current.rotation.y = t * 0.15;
    mesh.current.rotation.x = Math.sin(t * 0.2) * 0.25;

    const pulse = 1 + Math.sin(t * 1.3) * 0.05;
    mesh.current.scale.set(pulse, pulse, pulse);

    mat.current.distort = 0.35 + scroll * 0.6;
    mat.current.speed = 2;

    mat.current.color.setHSL(
      0.75 + Math.sin(t * 0.1) * 0.08,
      0.8,
      0.55
    );
  });

  return (
    <Sphere args={[1.4, 200, 400]} ref={mesh}>
      <MeshDistortMaterial
        ref={mat}
        roughness={0.1}
        metalness={0.7}
      />
    </Sphere>
  );
}

export default function Orb3D() {
  return (
    <div className="w-[520px] h-[520px]">
      <Canvas camera={{ position: [0, 0, 3.3] }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <OrbMesh />
      </Canvas>
    </div>
  );
}
