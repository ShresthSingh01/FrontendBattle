import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function DemoCoreCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const w = mountRef.current.clientWidth;
    const h = mountRef.current.clientHeight;

    const scene = new THREE.Scene();
    
    // Add ambient light and a spotlight
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const pointLight = new THREE.PointLight(0xffc801, 1, 100);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    const camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 1000);
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // TorusKnotGeometry: radius, tube, tubularSegments, radialSegments, p, q
    const geometry = new THREE.TorusKnotGeometry(8, 2.5, 200, 32, 3, 4);

    // Create a dual-layer mesh (solid + wireframe)
    const solidMaterial = new THREE.MeshStandardMaterial({
      color: 0x172b36,
      roughness: 0.2,
      metalness: 0.8,
      transparent: true,
      opacity: 0.8
    });
    const mesh = new THREE.Mesh(geometry, solidMaterial);

    const wireframeMaterial = new THREE.LineBasicMaterial({
      color: 0xffc801,
      transparent: true,
      opacity: 0.3
    });
    const wireframe = new THREE.LineSegments(
      new THREE.EdgesGeometry(geometry),
      wireframeMaterial
    );

    const coreGroup = new THREE.Group();
    coreGroup.add(mesh);
    coreGroup.add(wireframe);
    scene.add(coreGroup);

    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    let animationFrameId;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Interpolate for smooth rotation tracking
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      // Base constant rotation + mouse influence
      coreGroup.rotation.x += 0.005;
      coreGroup.rotation.y += 0.005;
      
      coreGroup.rotation.x += mouseY * 0.02;
      coreGroup.rotation.y += mouseX * 0.02;

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

    const handleMouseMove = (e) => {
      const rect = mountRef.current.getBoundingClientRect();
      // Calculate mouse position relative to canvas center
      targetX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      targetY = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      solidMaterial.dispose();
      wireframeMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none" aria-hidden="true" />;
}
