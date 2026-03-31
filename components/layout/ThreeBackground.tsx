"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function GoldParticles({ count = 800 }) {
  const points = useRef<THREE.Points>(null!);

  const particles = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    points.current.rotation.y = state.clock.getElapsedTime() * 0.03;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.015}
        color="#fbbf24"
        transparent
        opacity={0.2}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function DigitalRain({ count = 60 }) {
  const points = useRef<THREE.Points>(null!);
  
  // Create a texture with characters (0, 1) for a "hacker" feel
  // Actually, for performance and simplicity in this environment, 
  // we'll use small squares (points) and animate them in columns.
  
  const { positions, speeds, opacities } = useMemo(() => {
    const pos = new Float32Array(count * 40 * 3); // 60 columns, 40 bits per column
    const spd = new Float32Array(count);
    const opc = new Float32Array(count * 40);
    
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 25;
      const z = (Math.random() - 0.5) * 10 - 5;
      const speed = 0.01 + Math.random() * 0.03; // SLOW animation
      spd[i] = speed;
      
      const columnOffset = Math.random() * 20;
      
      for (let j = 0; j < 40; j++) {
        const idx = (i * 40 + j) * 3;
        pos[idx] = x;
        pos[idx + 1] = ((columnOffset + (j * 0.5)) % 20) - 10;
        pos[idx + 2] = z;
        opc[i * 40 + j] = 1.0 - (j / 40); // Fade out up the column
      }
    }
    return { positions: pos, speeds: spd, opacities: opc };
  }, [count]);

  useFrame((state) => {
    const attr = points.current.geometry.attributes.position;
    for (let i = 0; i < count; i++) {
      const speed = speeds[i];
      for (let j = 0; j < 40; j++) {
        const idx = (i * 40 + j) * 3;
        let y = attr.array[idx + 1];
        y -= speed;
        if (y < -10) y = 10;
        attr.array[idx + 1] = y;
      }
    }
    attr.needsUpdate = true;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#fbbf24"
        transparent
        opacity={0.15}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export function ThreeBackground() {
  return (
    <div className="fixed inset-0 -z-20 pointer-events-none bg-[#050505]">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <React.Suspense fallback={null}>
          <GoldParticles />
          <DigitalRain />
          <ambientLight intensity={1} />
        </React.Suspense>
      </Canvas>
    </div>
  );
}
