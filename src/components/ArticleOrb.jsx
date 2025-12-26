import { Canvas } from "@react-three/fiber";
import OrbCore from "./OrbCore";

export default function ArticleOrb() {
    return (
        <div className="w-[480px] h-[480px] flex items-center justify-center">
            <Canvas camera={{ position: [0, 0, 3.2] }}>
                <ambientLight intensity={0.55} />
                <directionalLight position={[3, 3, 3]} intensity={0.9} />

                <OrbCore
                    color="#38bdf8"
                    radius={1.35}
                    baseDistort={0.22}
                    speed={0.9}
                    morphStrength={0.12}
                />
            </Canvas>
        </div>
    );
}
