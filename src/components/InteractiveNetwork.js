// src/components/InteractiveNetwork.js
import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import * as THREE from "three";

export default function InteractiveNetwork() {
  return (
    <Canvas
      camera={{ position: [0, 0, 100], fov: 75 }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
      gl={{ antialias: true }}
      onCreated={({ gl }) => {
        gl.setClearColor("#ffffff"); // Set background color to white
      }}
    >
      <ambientLight intensity={1} />
      <directionalLight position={[0, 0, 1]} intensity={1} />
      <Network />
    </Canvas>
  );
}

function Network() {
  const group = useRef();
  const NODE_SPREAD = 500;
  const MAX_CONNECTION_DISTANCE = 80;

  const nodes = useMemo(() => {
    const nodesArray = [];
    const numPoints = 200;
    for (let i = 0; i < numPoints; i++) {
      const position = new THREE.Vector3(
        THREE.MathUtils.randFloatSpread(NODE_SPREAD),
        THREE.MathUtils.randFloatSpread(NODE_SPREAD),
        THREE.MathUtils.randFloat(-NODE_SPREAD / 2, 0) // Position nodes in front of the camera
      );
      const velocity = new THREE.Vector3(
        THREE.MathUtils.randFloat(-0.5, 0.5),
        THREE.MathUtils.randFloat(-0.5, 0.5),
        THREE.MathUtils.randFloat(-0.5, 0.5)
      );
      const color = new THREE.Color("#ff0000"); // Bright red for high contrast
      nodesArray.push({ position, velocity, color });
    }
    return nodesArray;
  }, []);

  useFrame(() => {
    nodes.forEach((node) => {
      // Update position
      node.position.add(node.velocity);

      // Reverse direction if outside bounds
      ["x", "y", "z"].forEach((axis) => {
        if (Math.abs(node.position[axis]) > NODE_SPREAD / 2) {
          node.velocity[axis] *= -1;
        }
      });
    });

    // Rotate the network
    group.current.rotation.y += 0.001;
    group.current.rotation.x += 0.0005;
    group.current.rotation.z += 0.0003;
  });

  return (
    <group ref={group}>
      {/* Nodes */}
      {nodes.map((node, index) => (
        <mesh key={index} position={node.position}>
          <sphereGeometry args={[2, 16, 16]} />
          <meshStandardMaterial
            color={node.color}
            emissive={node.color}
            emissiveIntensity={1}
            transparent={false}
            opacity={1}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}

      {/* Connections */}
      {nodes.map((nodeA, indexA) =>
        nodes.map((nodeB, indexB) => {
          if (indexA < indexB) {
            const distance = nodeA.position.distanceTo(nodeB.position);
            if (distance < MAX_CONNECTION_DISTANCE) {
              return (
                <Line
                  key={`${indexA}-${indexB}`}
                  points={[nodeA.position, nodeB.position]}
                  color="#0000ff" // Blue lines for contrast
                  lineWidth={0.5}
                  transparent={false}
                  opacity={1}
                />
              );
            }
          }
          return null;
        })
      )}
    </group>
  );
}
