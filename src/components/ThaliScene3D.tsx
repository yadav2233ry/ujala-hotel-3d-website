import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { ASSET_IMAGES } from '../data/restaurantData';

interface ThaliScene3DProps {
  onLoaded?: () => void;
}

export const ThaliScene3D: React.FC<ThaliScene3DProps> = ({ onLoaded }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [webglSupported, setWebGLSupported] = useState(true);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check WebGL availability
    try {
      const testCanvas = document.createElement('canvas');
      const gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');
      if (!gl) {
        setWebGLSupported(false);
        onLoaded?.();
        return;
      }
    } catch {
      setWebGLSupported(false);
      onLoaded?.();
      return;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x151515, 0.08);

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(0, 3.2, 5.2);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    // Group for the entire floating thali arrangement
    const thaliGroup = new THREE.Group();
    scene.add(thaliGroup);

    // 1. Materials
    const brassMaterial = new THREE.MeshStandardMaterial({
      color: 0xC9A45C,
      metalness: 0.88,
      roughness: 0.28,
    });

    const brassDarkRim = new THREE.MeshStandardMaterial({
      color: 0x967433,
      metalness: 0.9,
      roughness: 0.35,
    });

    const dalMaterial = new THREE.MeshStandardMaterial({
      color: 0xDF9B2A,
      roughness: 0.45,
      metalness: 0.1,
    });

    const paneerGravyMaterial = new THREE.MeshStandardMaterial({
      color: 0xC4511D,
      roughness: 0.4,
      metalness: 0.05,
    });

    const paneerCubeMaterial = new THREE.MeshStandardMaterial({
      color: 0xFAF3E0,
      roughness: 0.7,
      metalness: 0.0,
    });

    const palakMaterial = new THREE.MeshStandardMaterial({
      color: 0x2A4E20,
      roughness: 0.6,
      metalness: 0.05,
    });

    const raitaMaterial = new THREE.MeshStandardMaterial({
      color: 0xF4F6F0,
      roughness: 0.5,
      metalness: 0.05,
    });

    const riceMaterial = new THREE.MeshStandardMaterial({
      color: 0xFAFAEE,
      roughness: 0.75,
      metalness: 0.0,
    });

    const rotiMaterial = new THREE.MeshStandardMaterial({
      color: 0xD7A168,
      roughness: 0.85,
      metalness: 0.02,
    });

    const chaiMaterial = new THREE.MeshStandardMaterial({
      color: 0x8C522B,
      roughness: 0.3,
      metalness: 0.1,
    });

    const kulhadMaterial = new THREE.MeshStandardMaterial({
      color: 0x935034,
      roughness: 0.9,
      metalness: 0.05,
    });

    const pakodiMaterial = new THREE.MeshStandardMaterial({
      color: 0xB56E24,
      roughness: 0.85,
      metalness: 0.05,
    });

    // 2. Main Brass Thali Platter
    const platterRadius = 2.1;
    const platterGeo = new THREE.CylinderGeometry(platterRadius, platterRadius * 0.96, 0.08, 48);
    const platterMesh = new THREE.Mesh(platterGeo, brassMaterial);
    platterMesh.castShadow = true;
    platterMesh.receiveShadow = true;
    thaliGroup.add(platterMesh);

    // Raised rim of thali
    const rimGeo = new THREE.TorusGeometry(platterRadius, 0.05, 16, 48);
    rimGeo.rotateX(Math.PI / 2);
    const rimMesh = new THREE.Mesh(rimGeo, brassDarkRim);
    rimMesh.position.y = 0.04;
    thaliGroup.add(rimMesh);

    // Decorative inner engraved ring
    const innerRingGeo = new THREE.TorusGeometry(1.4, 0.015, 12, 48);
    innerRingGeo.rotateX(Math.PI / 2);
    const innerRingMesh = new THREE.Mesh(innerRingGeo, brassDarkRim);
    innerRingMesh.position.y = 0.042;
    thaliGroup.add(innerRingMesh);

    // 3. Central Fragrant Basmati Rice Mound
    const riceGeo = new THREE.SphereGeometry(0.55, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2);
    const riceMesh = new THREE.Mesh(riceGeo, riceMaterial);
    riceMesh.position.set(0, 0.04, 0);
    riceMesh.scale.set(1, 0.55, 1);
    riceMesh.castShadow = true;
    thaliGroup.add(riceMesh);

    // Saffron ghee dab on top of rice
    const gheeGarnishGeo = new THREE.CylinderGeometry(0.09, 0.07, 0.03, 16);
    const gheeMat = new THREE.MeshStandardMaterial({ color: 0xF59A23, roughness: 0.2 });
    const gheeMesh = new THREE.Mesh(gheeGarnishGeo, gheeMat);
    gheeMesh.position.set(0, 0.32, 0);
    thaliGroup.add(gheeMesh);

    // 4. Katoris (Brass Bowls) arranged radially
    interface KatoriSpec {
      angle: number;
      dist: number;
      foodMat: THREE.Material;
      name: string;
      customFill?: () => THREE.Object3D;
    }

    const katoriSpecs: KatoriSpec[] = [
      {
        angle: 0.2,
        dist: 1.45,
        foodMat: dalMaterial,
        name: 'Dal Tadka',
      },
      {
        angle: 1.25,
        dist: 1.45,
        foodMat: paneerGravyMaterial,
        name: 'Paneer Curry',
        customFill: () => {
          const group = new THREE.Group();
          // Gravy surface
          const gravyGeo = new THREE.CylinderGeometry(0.38, 0.38, 0.02, 24);
          const gravyMesh = new THREE.Mesh(gravyGeo, paneerGravyMaterial);
          group.add(gravyMesh);
          // Paneer cubes
          for (let i = 0; i < 3; i++) {
            const cubeGeo = new THREE.BoxGeometry(0.12, 0.09, 0.12);
            const cube = new THREE.Mesh(cubeGeo, paneerCubeMaterial);
            cube.position.set((i - 1) * 0.16, 0.05, (i % 2 === 0 ? 0.05 : -0.05));
            cube.rotation.y = i * 0.4;
            group.add(cube);
          }
          return group;
        },
      },
      {
        angle: 2.3,
        dist: 1.45,
        foodMat: palakMaterial,
        name: 'Palak Sabzi',
      },
      {
        angle: 3.4,
        dist: 1.45,
        foodMat: raitaMaterial,
        name: 'Mint Raita',
      },
    ];

    const katoriGeo = new THREE.CylinderGeometry(0.42, 0.32, 0.22, 28);
    const katoriInnerGeo = new THREE.CylinderGeometry(0.38, 0.3, 0.18, 28);

    katoriSpecs.forEach((spec) => {
      const x = Math.cos(spec.angle) * spec.dist;
      const z = Math.sin(spec.angle) * spec.dist;

      // Brass bowl
      const bowl = new THREE.Mesh(katoriGeo, brassMaterial);
      bowl.position.set(x, 0.11, z);
      bowl.castShadow = true;
      thaliGroup.add(bowl);

      if (spec.customFill) {
        const fill = spec.customFill();
        fill.position.set(x, 0.2, z);
        thaliGroup.add(fill);
      } else {
        const fill = new THREE.Mesh(katoriInnerGeo, spec.foodMat);
        fill.position.set(x, 0.12, z);
        thaliGroup.add(fill);
      }
    });

    // 5. Fresh Roti (Whole wheat flatbreads placed in thali)
    for (let r = 0; r < 2; r++) {
      const rotiGeo = new THREE.CylinderGeometry(0.55, 0.55, 0.02, 32);
      const rotiMesh = new THREE.Mesh(rotiGeo, rotiMaterial);
      rotiMesh.position.set(-1.1 + r * 0.15, 0.08 + r * 0.03, 0.7 - r * 0.1);
      rotiMesh.rotation.set(0.08, r * 0.6, -0.05);
      rotiMesh.castShadow = true;
      thaliGroup.add(rotiMesh);
    }

    // 6. Terracotta Kulhad Chai (Sitting elegantly adjacent on the surface)
    const kulhadGroup = new THREE.Group();
    kulhadGroup.position.set(2.4, 0.3, 0.6);
    const kulhadBodyGeo = new THREE.CylinderGeometry(0.32, 0.22, 0.62, 24);
    const kulhadMesh = new THREE.Mesh(kulhadBodyGeo, kulhadMaterial);
    kulhadMesh.castShadow = true;
    kulhadGroup.add(kulhadMesh);

    // Chai liquid top
    const chaiSurfaceGeo = new THREE.CircleGeometry(0.3, 24);
    chaiSurfaceGeo.rotateX(-Math.PI / 2);
    const chaiSurface = new THREE.Mesh(chaiSurfaceGeo, chaiMaterial);
    chaiSurface.position.y = 0.3;
    kulhadGroup.add(chaiSurface);
    thaliGroup.add(kulhadGroup);

    // 7. Crispy Pakodi Plate adjacent
    const pakodiGroup = new THREE.Group();
    pakodiGroup.position.set(1.9, 0.1, -1.5);
    for (let p = 0; p < 4; p++) {
      const pGeo = new THREE.DodecahedronGeometry(0.18 + Math.sin(p) * 0.05, 1);
      const pMesh = new THREE.Mesh(pGeo, pakodiMaterial);
      pMesh.position.set((p % 2 - 0.5) * 0.28, 0.1 + Math.sin(p * 2) * 0.05, (p > 1 ? 0.15 : -0.15));
      pMesh.rotation.set(p * 0.5, p * 0.8, p * 0.2);
      pMesh.castShadow = true;
      pakodiGroup.add(pMesh);
    }
    thaliGroup.add(pakodiGroup);

    // 8. Rising Steam Particle System (Above Kulhad Chai & Dal)
    const steamParticleCount = 45;
    const steamGeometry = new THREE.BufferGeometry();
    const steamPositions = new Float32Array(steamParticleCount * 3);
    const steamVelocities = new Float32Array(steamParticleCount * 3);

    for (let i = 0; i < steamParticleCount; i++) {
      const isChai = i % 2 === 0;
      const baseOrigin = isChai ? new THREE.Vector3(2.4, 0.6, 0.6) : new THREE.Vector3(0.5, 0.3, 1.4);
      steamPositions[i * 3] = baseOrigin.x + (Math.random() - 0.5) * 0.2;
      steamPositions[i * 3 + 1] = baseOrigin.y + Math.random() * 0.8;
      steamPositions[i * 3 + 2] = baseOrigin.z + (Math.random() - 0.5) * 0.2;

      steamVelocities[i * 3] = (Math.random() - 0.5) * 0.004;
      steamVelocities[i * 3 + 1] = 0.006 + Math.random() * 0.008;
      steamVelocities[i * 3 + 2] = (Math.random() - 0.5) * 0.004;
    }

    steamGeometry.setAttribute('position', new THREE.BufferAttribute(steamPositions, 3));
    const steamMaterial = new THREE.PointsMaterial({
      color: 0xEAE4D8,
      size: 0.18,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const steamParticles = new THREE.Points(steamGeometry, steamMaterial);
    thaliGroup.add(steamParticles);

    // 9. Golden Floating Aroma / Spice Particle Atmosphere
    const spiceCount = 75;
    const spiceGeo = new THREE.BufferGeometry();
    const spicePositions = new Float32Array(spiceCount * 3);
    for (let i = 0; i < spiceCount * 3; i += 3) {
      spicePositions[i] = (Math.random() - 0.5) * 8;
      spicePositions[i + 1] = Math.random() * 4;
      spicePositions[i + 2] = (Math.random() - 0.5) * 6;
    }
    spiceGeo.setAttribute('position', new THREE.BufferAttribute(spicePositions, 3));
    const spiceMat = new THREE.PointsMaterial({
      color: 0xF59A23,
      size: 0.06,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
    });
    const spicePoints = new THREE.Points(spiceGeo, spiceMat);
    scene.add(spicePoints);

    // 10. Shadow receiving floor plane
    const floorGeo = new THREE.PlaneGeometry(16, 16);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0x121212,
      roughness: 0.85,
      metalness: 0.2,
    });
    const floorMesh = new THREE.Mesh(floorGeo, floorMat);
    floorMesh.rotation.x = -Math.PI / 2;
    floorMesh.position.y = -0.05;
    floorMesh.receiveShadow = true;
    scene.add(floorMesh);

    // 11. Studio Lighting Setup
    // Key Light (Warm Saffron / Golden)
    const keyLight = new THREE.DirectionalLight(0xF59A23, 2.2);
    keyLight.position.set(4, 6, 4);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    keyLight.shadow.camera.near = 1;
    keyLight.shadow.camera.far = 15;
    keyLight.shadow.bias = -0.001;
    scene.add(keyLight);

    // Soft Ambient Fill Light (Warm Cream)
    const fillLight = new THREE.DirectionalLight(0xFFF2D9, 1.4);
    fillLight.position.set(-4, 4, 3);
    scene.add(fillLight);

    // Rim / Backlight (Antique Gold separation)
    const rimLight = new THREE.DirectionalLight(0xC9A45C, 2.0);
    rimLight.position.set(0, 5, -4);
    scene.add(rimLight);

    // Subtle overall ambient
    const ambientLight = new THREE.AmbientLight(0x2A2620, 1.2);
    scene.add(ambientLight);

    // State for mouse parallax & scroll transitions
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    let scrollProgress = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouse.targetX = nx * 0.45;
      mouse.targetY = ny * 0.25;
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = window.innerHeight * 1.8;
      scrollProgress = Math.min(scrollY / maxScroll, 1.0);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Handle Resize
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // WebGL Context Safety Handlers
    const handleContextLost = (e: Event) => {
      e.preventDefault();
      console.warn('WebGL context lost, pausing rendering.');
    };
    const handleContextRestored = () => {
      console.info('WebGL context restored.');
    };

    renderer.domElement.addEventListener('webglcontextlost', handleContextLost, false);
    renderer.domElement.addEventListener('webglcontextrestored', handleContextRestored, false);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Mouse Parallax Lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      if (!prefersReducedMotion) {
        // Slow gentle idle rotation
        thaliGroup.rotation.y = elapsedTime * 0.12 + scrollProgress * Math.PI * 0.8;
        thaliGroup.position.y = Math.sin(elapsedTime * 1.2) * 0.05;

        // Camera scroll interpolation: zooms in and angles smoothly
        const targetCamY = 3.2 - scrollProgress * 0.8 + mouse.y;
        const targetCamZ = 5.2 - scrollProgress * 1.4;
        const targetCamX = mouse.x * 1.5;

        camera.position.x += (targetCamX - camera.position.x) * 0.06;
        camera.position.y += (targetCamY - camera.position.y) * 0.06;
        camera.position.z += (targetCamZ - camera.position.z) * 0.06;
        camera.lookAt(0, 0.2, 0);

        // Update Steam Particles
        const positions = steamGeometry.attributes.position.array as Float32Array;
        for (let i = 0; i < steamParticleCount; i++) {
          positions[i * 3 + 1] += steamVelocities[i * 3 + 1];
          positions[i * 3] += steamVelocities[i * 3];
          positions[i * 3 + 2] += steamVelocities[i * 3 + 2];

          // Reset particle if risen too high
          if (positions[i * 3 + 1] > 1.8) {
            const isChai = i % 2 === 0;
            const origin = isChai ? new THREE.Vector3(2.4, 0.6, 0.6) : new THREE.Vector3(0.5, 0.3, 1.4);
            positions[i * 3] = origin.x + (Math.random() - 0.5) * 0.15;
            positions[i * 3 + 1] = origin.y;
            positions[i * 3 + 2] = origin.z + (Math.random() - 0.5) * 0.15;
          }
        }
        steamGeometry.attributes.position.needsUpdate = true;

        // Drift spice dust
        const spicePos = spiceGeo.attributes.position.array as Float32Array;
        for (let i = 1; i < spiceCount * 3; i += 3) {
          spicePos[i] -= 0.002;
          if (spicePos[i] < 0) spicePos[i] = 4;
        }
        spiceGeo.attributes.position.needsUpdate = true;
      }

      renderer.render(scene, camera);
    };

    animate();
    onLoaded?.();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      renderer.domElement.removeEventListener('webglcontextlost', handleContextLost);
      renderer.domElement.removeEventListener('webglcontextrestored', handleContextRestored);
      if (renderer.domElement.parentElement) {
        renderer.domElement.parentElement.removeChild(renderer.domElement);
      }
      renderer.dispose();
      scene.clear();
    };
  }, [onLoaded]);

  // Static Fallback Container if WebGL fails
  if (!webglSupported) {
    return (
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-[#151515]">
        <img
          src={ASSET_IMAGES.heroThali}
          alt="Royal Indian Vegetarian Thali at Ujala Hotel"
          className="w-full h-full object-cover opacity-80"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-[#151515]/60 to-transparent pointer-events-none" />
      </div>
    );
  }

  return (
    <div
      ref={mountRef}
      className="relative w-full h-full cursor-grab active:cursor-grabbing select-none"
      aria-label="Interactive 3D Vegetarian Thali Scene with fresh dal, paneer curry, palak, roti and steaming chai"
      role="img"
    />
  );
};
