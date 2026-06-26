import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function FeatureNode3D({ type }) {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const w = mountRef.current.clientWidth;
    const h = mountRef.current.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, w / h, 0.1, 100);
    camera.position.z = 4;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    let geometry;
    switch (type) {
      case 'secure':
        geometry = new THREE.IcosahedronGeometry(1.2, 0);
        break;
      case 'connectors':
        geometry = new THREE.OctahedronGeometry(1.2, 0);
        break;
      case 'compute':
        geometry = new THREE.TetrahedronGeometry(1.2, 0);
        break;
      case 'memory':
      default:
        geometry = new THREE.BoxGeometry(1.6, 1.6, 1.6);
        break;
    }

    const material = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0.25
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    let animationFrameId;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      
      mesh.rotation.x += 0.005;
      mesh.rotation.y += 0.01;

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
      material.dispose();
      renderer.dispose();
    };
  }, [type]);

  return <div ref={mountRef} className="w-full h-full pointer-events-none" aria-hidden="true" />;
}
