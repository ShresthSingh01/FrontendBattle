import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function HeroCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const w = mountRef.current.clientWidth;
    const h = mountRef.current.clientHeight;

    const scene = new THREE.Scene();
    // Use oceanic noir hex #172B36 for the fog to smoothly fade out edges
    scene.fog = new THREE.FogExp2(0x172b36, 0.0015);

    const camera = new THREE.PerspectiveCamera(60, w / h, 0.1, 1000);
    camera.position.z = 250;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // Particles Data
    const particleCount = window.innerWidth < 768 ? 100 : 250; // Performance optimization for mobile
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities = [];

    // Colors: mostly white/gray, some Forsythia (#FFC801)
    const colors = new Float32Array(particleCount * 3);
    const colorWhite = new THREE.Color(0xffffff);
    const colorForsythia = new THREE.Color(0xffc801);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 600;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 600;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 600;

      velocities.push({
        x: (Math.random() - 0.5) * 0.4,
        y: (Math.random() - 0.5) * 0.4,
        z: (Math.random() - 0.5) * 0.4
      });

      const isHighlight = Math.random() > 0.85; // 15% are yellow
      const c = isHighlight ? colorForsythia : colorWhite;
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Particle Material
    const pMaterial = new THREE.PointsMaterial({
      size: 3,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      sizeAttenuation: true
    });

    const particles = new THREE.Points(geometry, pMaterial);
    scene.add(particles);

    // Lines Material
    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.15
    });
    
    let linesMesh = new THREE.LineSegments(new THREE.BufferGeometry(), lineMaterial);
    scene.add(linesMesh);

    let animationFrameId;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const positionsAttr = particles.geometry.attributes.position;
      const posArray = positionsAttr.array;
      const colorArray = particles.geometry.attributes.color.array;
      
      let linePositions = [];
      let lineColors = [];

      // Update positions
      for (let i = 0; i < particleCount; i++) {
        posArray[i * 3] += velocities[i].x;
        posArray[i * 3 + 1] += velocities[i].y;
        posArray[i * 3 + 2] += velocities[i].z;

        // Boundary reflection
        if (posArray[i * 3] > 300 || posArray[i * 3] < -300) velocities[i].x *= -1;
        if (posArray[i * 3 + 1] > 300 || posArray[i * 3 + 1] < -300) velocities[i].y *= -1;
        if (posArray[i * 3 + 2] > 300 || posArray[i * 3 + 2] < -300) velocities[i].z *= -1;
      }

      // Rebuild lines between close particles
      for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < particleCount; j++) {
          const dx = posArray[i * 3] - posArray[j * 3];
          const dy = posArray[i * 3 + 1] - posArray[j * 3 + 1];
          const dz = posArray[i * 3 + 2] - posArray[j * 3 + 2];
          const distSq = dx * dx + dy * dy + dz * dz;

          if (distSq < 15000) {
            linePositions.push(
              posArray[i * 3], posArray[i * 3 + 1], posArray[i * 3 + 2],
              posArray[j * 3], posArray[j * 3 + 1], posArray[j * 3 + 2]
            );
            
            // Average color of the two connecting nodes
            lineColors.push(
              colorArray[i * 3], colorArray[i * 3 + 1], colorArray[i * 3 + 2],
              colorArray[j * 3], colorArray[j * 3 + 1], colorArray[j * 3 + 2]
            );
          }
        }
      }

      positionsAttr.needsUpdate = true;
      linesMesh.geometry.dispose(); // clean up old geometry to prevent memory leaks
      linesMesh.geometry = new THREE.BufferGeometry();
      linesMesh.geometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
      linesMesh.geometry.setAttribute('color', new THREE.Float32BufferAttribute(lineColors, 3));

      // Global slow rotation
      particles.rotation.y += 0.0005;
      linesMesh.rotation.y += 0.0005;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!mountRef.current) return;
      const rw = mountRef.current.clientWidth;
      const rh = mountRef.current.clientHeight;
      camera.aspect = rw / rh;
      camera.updateProjectionMatrix();
      renderer.setSize(rw, rh);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      pMaterial.dispose();
      linesMesh.geometry.dispose();
      lineMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 z-0 mix-blend-screen opacity-50" aria-hidden="true" />;
}
