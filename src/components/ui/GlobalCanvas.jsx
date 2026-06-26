import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function GlobalCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const w = window.innerWidth;
    const h = window.innerHeight;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x172b36, 0.001);

    const camera = new THREE.PerspectiveCamera(60, w / h, 0.1, 3000);
    // Start camera a bit higher to allow scrolling down
    camera.position.z = 300;
    camera.position.y = 100;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // Particles Data
    // Increase volume distribution massively to cover the vertical scroll
    const particleCount = window.innerWidth < 768 ? 150 : 400;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities = [];

    const colors = new Float32Array(particleCount * 3);
    const colorWhite = new THREE.Color(0xffffff);
    const colorForsythia = new THREE.Color(0xffc801);

    for (let i = 0; i < particleCount; i++) {
      // Spread X and Z wide, but spread Y VERY tall (-1500 to +1500)
      positions[i * 3] = (Math.random() - 0.5) * 1200;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 3000;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 1200;

      velocities.push({
        x: (Math.random() - 0.5) * 0.2,
        y: (Math.random() - 0.5) * 0.2,
        z: (Math.random() - 0.5) * 0.2
      });

      const isHighlight = Math.random() > 0.85; 
      const c = isHighlight ? colorForsythia : colorWhite;
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const pMaterial = new THREE.PointsMaterial({
      size: 3,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true
    });

    const particles = new THREE.Points(geometry, pMaterial);
    scene.add(particles);

    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.15
    });
    
    let linesMesh = new THREE.LineSegments(new THREE.BufferGeometry(), lineMaterial);
    scene.add(linesMesh);

    // Interactive Variables
    let scrollY = window.scrollY;
    let targetScrollY = scrollY;
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    let animationFrameId;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Lerp interactives for extreme smoothness (lowered easing values)
      scrollY += (targetScrollY - scrollY) * 0.03;
      mouseX += (targetMouseX - mouseX) * 0.03;
      mouseY += (targetMouseY - mouseY) * 0.03;

      // Parallax logic: Camera flies through Y space based on scroll
      camera.position.y = 100 - (scrollY * 0.15);
      
      // Continuous Soft Dolly Zoom
      camera.position.z -= 0.05;
      if (camera.position.z < 100) camera.position.z = 300; // Reset loop smoothly if too far

      // Mouse Pan logic: Scene rotates gently based on mouse
      scene.rotation.y = mouseX * 0.15;
      scene.rotation.x = mouseY * 0.15;

      const positionsAttr = particles.geometry.attributes.position;
      const posArray = positionsAttr.array;
      const colorArray = particles.geometry.attributes.color.array;
      
      let linePositions = [];
      let lineColors = [];

      for (let i = 0; i < particleCount; i++) {
        posArray[i * 3] += velocities[i].x;
        posArray[i * 3 + 1] += velocities[i].y;
        posArray[i * 3 + 2] += velocities[i].z;

        // Wrap around bounds softly
        if (posArray[i * 3] > 600 || posArray[i * 3] < -600) velocities[i].x *= -1;
        if (posArray[i * 3 + 1] > 1500 || posArray[i * 3 + 1] < -1500) velocities[i].y *= -1;
        if (posArray[i * 3 + 2] > 600 || posArray[i * 3 + 2] < -600) velocities[i].z *= -1;
      }

      // Rebuild lines (optimization check: only connect if close)
      // For global scale, we need a slightly larger connection threshold
      const connectThresholdSq = 35000; 

      for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < particleCount; j++) {
          const dx = posArray[i * 3] - posArray[j * 3];
          const dy = posArray[i * 3 + 1] - posArray[j * 3 + 1];
          const dz = posArray[i * 3 + 2] - posArray[j * 3 + 2];
          const distSq = dx * dx + dy * dy + dz * dz;

          if (distSq < connectThresholdSq) {
            linePositions.push(
              posArray[i * 3], posArray[i * 3 + 1], posArray[i * 3 + 2],
              posArray[j * 3], posArray[j * 3 + 1], posArray[j * 3 + 2]
            );
            
            lineColors.push(
              colorArray[i * 3], colorArray[i * 3 + 1], colorArray[i * 3 + 2],
              colorArray[j * 3], colorArray[j * 3 + 1], colorArray[j * 3 + 2]
            );
          }
        }
      }

      positionsAttr.needsUpdate = true;
      linesMesh.geometry.dispose();
      linesMesh.geometry = new THREE.BufferGeometry();
      linesMesh.geometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
      linesMesh.geometry.setAttribute('color', new THREE.Float32BufferAttribute(lineColors, 3));

      // Global slow continuous rotation
      particles.rotation.y += 0.0003;
      linesMesh.rotation.y += 0.0003;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      const rw = window.innerWidth;
      const rh = window.innerHeight;
      camera.aspect = rw / rh;
      camera.updateProjectionMatrix();
      renderer.setSize(rw, rh);
    };

    const handleScroll = () => {
      targetScrollY = window.scrollY;
    };

    const handleMouseMove = (e) => {
      targetMouseX = (e.clientX / window.innerWidth) * 2 - 1;
      targetMouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
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

  return <div ref={mountRef} className="fixed inset-0 z-0 mix-blend-screen opacity-50 pointer-events-none" aria-hidden="true" />;
}
