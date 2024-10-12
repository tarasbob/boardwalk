import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Stars() {
  const ref = useRef();
  const sphere = React.useMemo(() => {
    const positions = [];
    for (let i = 0; i < 5000; i++) {
      const x = THREE.MathUtils.randFloatSpread(600);
      const y = THREE.MathUtils.randFloatSpread(600);
      const z = THREE.MathUtils.randFloatSpread(600);
      positions.push(x, y, z);
    }
    return new Float32Array(positions);
  }, []);

  useFrame(() => {
    ref.current.rotation.x += 0.0005;
    ref.current.rotation.y += 0.0005;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.5}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

function ThreeDBackground() {
  return (
    <Canvas
      camera={{ position: [0, 0, 1] }}
      style={{ position: 'absolute', top: 0, left: 0 }}
    >
      <Stars />
    </Canvas>
  );
}

export default ThreeDBackground;
