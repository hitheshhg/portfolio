import { useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import { useRef } from "react";

export default function OrbCore({
  color = "#a855f7",
  radius = 1.4,
  baseDistort = 0.25,
  speed = 1.2,
  morphStrength = 0.15, 
}) {
  const mesh = useRef(null);
  const mat = useRef(null);

  useFrame(({ clock }) => {
    if (!mesh.current || !mat.current) return;

    const t = clock.elapsedTime;
    mesh.current.rotation.y = t * 0.05;
    mesh.current.rotation.x = Math.sin(t * 0.15) * 0.08;

    const sx = 1 + Math.sin(t * 0.8) * morphStrength;
    const sy = 1 + Math.sin(t * 1.1 + 1) * morphStrength;
    const sz = 1 + Math.sin(t * 0.9 + 2) * morphStrength;
    mesh.current.scale.set(sx, sy, sz);

    mat.current.distort =
      baseDistort + Math.sin(t * 0.6) * morphStrength;

    mat.current.speed = speed;
  });

  return (
    <Sphere args={[radius, 160, 320]} ref={mesh}>
      <MeshDistortMaterial
        ref={mat}
        color={color}
        roughness={0.25}
        metalness={0.4}
      />
    </Sphere>
  );
}
