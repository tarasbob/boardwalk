import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, extend, useThree } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { Points, PointMaterial, Line } from "@react-three/drei";
import * as THREE from "three";

function Network() {
  const group = useRef();
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;

  // Generate random nodes
  const nodes = useMemo(() => {
    const positions = [];
    const numPoints = 100;
    for (let i = 0; i < numPoints; i++) {
      positions.push([
        THREE.MathUtils.randFloatSpread(20),
        THREE.MathUtils.randFloatSpread(20),
        THREE.MathUtils.randFloatSpread(20),
      ]);
    }
    return positions;
  }, []);

  // Generate connections between nodes
  const lines = useMemo(() => {
    const connections = [];
    nodes.forEach((nodeA, indexA) => {
      nodes.forEach((nodeB, indexB) => {
        if (indexA < indexB && Math.random() > 0.95) {
          connections.push([nodeA, nodeB]);
        }
      });
    });
    return connections;
  }, [nodes]);

  // Rotate the network
  useFrame(() => {
    group.current.rotation.y += 0.001;
  });

  return (
    <group ref={group}>
      {/* Render nodes */}
      {nodes.map((position, index) => (
        <mesh key={index} position={position}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial
            color="#00A1E0"
            emissive="#00A1E0"
            emissiveIntensity={0.5}
          />
        </mesh>
      ))}

      {/* Render connections */}
      {lines.map((line, index) => (
        <Line
          key={index}
          points={line}
          color="#ffffff"
          lineWidth={0.2}
          transparent
          opacity={0.5}
        />
      ))}
    </group>
  );
}

export default function InteractiveNetwork() {
  return (
    <Canvas
      camera={{ position: [0, 0, 30], fov: 70 }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Network />
      <EffectComposer>
        <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
      </EffectComposer>
    </Canvas>
  );
}
