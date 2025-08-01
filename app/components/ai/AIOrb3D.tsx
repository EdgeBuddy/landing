// File: /app/components/ai/AIOrb3D.tsx
// Purpose: Stunning 3D AI orb with shaders, particles, and real-time interactions
// Reason: Creates an unforgettable first impression of EdgeBuddy's AI consciousness
// Related: Hero.tsx, ThreeBackground.tsx

'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import {
  Sphere,
  Float,
  MeshDistortMaterial,
  Trail,
  Text,
} from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

// Animated orb component
function AnimatedOrb({ mouse }: { mouse: THREE.Vector2 }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      // Smooth mouse follow
      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x,
        mouse.y * 0.5,
        0.1,
      );
      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y,
        mouse.x * 0.5,
        0.1,
      );

      // Pulsing effect
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.05;
      meshRef.current.scale.setScalar(scale);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <Trail
        width={4}
        length={10}
        color={new THREE.Color(0x10b981)}
        attenuation={(width) => width}
      >
        <mesh
          ref={meshRef}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <Sphere args={[1, 32, 32]}>
            <MeshDistortMaterial
              color={hovered ? '#34d399' : '#10b981'}
              emissive="#059669"
              emissiveIntensity={0.2}
              roughness={0.3}
              metalness={0.6}
              distort={0.2}
              speed={2}
              transparent
              opacity={0.8}
            />
          </Sphere>
        </mesh>
      </Trail>
    </Float>
  );
}

// Particle field around the orb
function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);
  const particlesCount = 1000;

  const positions = new Float32Array(particlesCount * 3);
  const colors = new Float32Array(particlesCount * 3);

  for (let i = 0; i < particlesCount; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(Math.random() * 2 - 1);
    const radius = 2 + Math.random() * 2;

    positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = radius * Math.cos(phi);

    const color = new THREE.Color();
    color.setHSL(0.33 + Math.random() * 0.05, 0.8, 0.5);
    colors[i * 3] = color.r;
    colors[i * 3 + 1] = color.g;
    colors[i * 3 + 2] = color.b;
  }

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.03;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particlesCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Floating thoughts
function FloatingThoughts() {
  const thoughts = [
    { text: 'Analyzing patterns...', position: [-4, 2, -2] },
    { text: 'Euphoria trading identified', position: [4, 1, -2] },
    { text: 'Revenge trading identified', position: [-3, -2, -2] },
    { text: 'Calculating your stats...', position: [3, -1.5, -2] },
  ];

  return (
    <>
      {thoughts.map((thought, i) => (
        <Float
          key={i}
          speed={3 + i}
          rotationIntensity={0.2}
          floatIntensity={0.3}
        >
          <Text
            position={thought.position as [number, number, number]}
            fontSize={0.3}
            color="#10b981"
            anchorX="center"
            anchorY="middle"
            material-toneMapped={false}
            material-fog={false}
          >
            {thought.text}
          </Text>
        </Float>
      ))}
    </>
  );
}

// Main 3D scene
function Scene() {
  const { camera } = useThree();
  const mouse = useRef(new THREE.Vector2());

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame(() => {
    camera.position.x = THREE.MathUtils.lerp(
      camera.position.x,
      mouse.current.x * 0.5,
      0.05,
    );
    camera.position.y = THREE.MathUtils.lerp(
      camera.position.y,
      mouse.current.y * 0.5,
      0.05,
    );
  });

  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#10b981" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#059669" />

      <AnimatedOrb mouse={mouse.current} />
      <ParticleField />
      <FloatingThoughts />

      <EffectComposer>
        <Bloom
          intensity={0.5}
          luminanceThreshold={0.4}
          luminanceSmoothing={0.9}
          mipmapBlur
        />
      </EffectComposer>
    </>
  );
}

export default function AIOrb3D() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-[300px] sm:h-[400px] flex items-center justify-center">
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-emerald-400/10 to-emerald-600/10" />
      </div>
    );
  }

  return (
    <div className="h-[300px] sm:h-[400px] relative flex items-center justify-center">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        gl={{
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.5,
        }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
