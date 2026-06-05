import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Float } from '@react-three/drei'
import OrbCore from './OrbCore'

export default function ArticleOrb({ color = '#c8f135' }) {
  return (
    <div style={{ width: '100%', maxWidth: 340, height: 340, margin: '0 auto' }}>
      <Canvas camera={{ position: [0, 0, 3.5], fov: 50 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[3, 3, 3]} intensity={0.9} />
          <Float speed={1.8} rotationIntensity={1} floatIntensity={1.2}>
            <OrbCore
              color={color}
              radius={1.2}
              baseDistort={0.22}
              speed={1}
              morphStrength={0.12}
            />
          </Float>
        </Suspense>
      </Canvas>
    </div>
  )
}
