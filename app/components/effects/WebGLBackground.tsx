// File: /app/components/effects/WebGLBackground.tsx
// Purpose: Creates an immersive WebGL particle system background
// Reason: Adds depth and movement to create a living, breathing interface
// Related: page.tsx, HeroEnhanced.tsx

'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function WebGLBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    camera.position.z = 50;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Create particle system
    const particleCount = 2000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;

      // Position
      positions[i3] = (Math.random() - 0.5) * 100;
      positions[i3 + 1] = (Math.random() - 0.5) * 100;
      positions[i3 + 2] = (Math.random() - 0.5) * 50;

      // Color (emerald to cyan gradient)
      const color = new THREE.Color();
      color.setHSL(0.33 + Math.random() * 0.1, 0.8, 0.5);
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;

      // Size
      sizes[i] = Math.random() * 2;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    // Shader material
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        mousePosition: { value: new THREE.Vector2(0, 0) },
      },
      vertexShader: `
        attribute float size;
        uniform float time;
        uniform vec2 mousePosition;
        varying vec3 vColor;
        
        void main() {
          vColor = color;
          vec3 pos = position;
          
          // Add wave motion
          pos.x += sin(time * 0.5 + position.y * 0.1) * 2.0;
          pos.y += cos(time * 0.3 + position.x * 0.1) * 2.0;
          
          // Mouse interaction
          vec2 mouseOffset = mousePosition * 10.0;
          pos.xy += mouseOffset * 0.1 * (1.0 - abs(pos.z) / 25.0);
          
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = size * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        
        void main() {
          // Circular particle shape
          vec2 center = gl_PointCoord - vec2(0.5);
          float dist = length(center);
          if (dist > 0.5) discard;
          
          // Soft edges
          float alpha = 1.0 - smoothstep(0.3, 0.5, dist);
          
          gl_FragColor = vec4(vColor, alpha * 0.6);
        }
      `,
      transparent: true,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Connection lines between nearby particles
    const connectionGeometry = new THREE.BufferGeometry();
    const connectionPositions = new Float32Array(1000 * 6); // Max 1000 connections
    connectionGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(connectionPositions, 3),
    );

    const connectionMaterial = new THREE.LineBasicMaterial({
      color: 0x10b981,
      transparent: true,
      opacity: 0.1,
      blending: THREE.AdditiveBlending,
    });

    const connections = new THREE.LineSegments(
      connectionGeometry,
      connectionMaterial,
    );
    scene.add(connections);

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    let animationId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Update uniforms
      material.uniforms.time.value = elapsedTime;
      material.uniforms.mousePosition.value.x = THREE.MathUtils.lerp(
        material.uniforms.mousePosition.value.x,
        mouseRef.current.x,
        0.05,
      );
      material.uniforms.mousePosition.value.y = THREE.MathUtils.lerp(
        material.uniforms.mousePosition.value.y,
        mouseRef.current.y,
        0.05,
      );

      // Rotate particle system
      particles.rotation.y = elapsedTime * 0.05;
      particles.rotation.x = Math.sin(elapsedTime * 0.03) * 0.1;

      // Update connections (simplified for performance)
      const positions = particles.geometry.attributes.position.array;
      let connectionIndex = 0;
      const maxConnections = 100;

      for (let i = 0; i < Math.min(particleCount, 50); i++) {
        for (let j = i + 1; j < Math.min(particleCount, 50); j++) {
          const distance = Math.sqrt(
            Math.pow(positions[i * 3] - positions[j * 3], 2) +
              Math.pow(positions[i * 3 + 1] - positions[j * 3 + 1], 2) +
              Math.pow(positions[i * 3 + 2] - positions[j * 3 + 2], 2),
          );

          if (distance < 10 && connectionIndex < maxConnections) {
            connectionPositions[connectionIndex * 6] = positions[i * 3];
            connectionPositions[connectionIndex * 6 + 1] = positions[i * 3 + 1];
            connectionPositions[connectionIndex * 6 + 2] = positions[i * 3 + 2];
            connectionPositions[connectionIndex * 6 + 3] = positions[j * 3];
            connectionPositions[connectionIndex * 6 + 4] = positions[j * 3 + 1];
            connectionPositions[connectionIndex * 6 + 5] = positions[j * 3 + 2];
            connectionIndex++;
          }
        }
      }

      connectionGeometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      connectionGeometry.dispose();
      connectionMaterial.dispose();
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-10"
      style={{ opacity: 0.6 }}
    />
  );
}
