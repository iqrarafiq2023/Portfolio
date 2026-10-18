"use client";
import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Points, PointMaterial, Environment } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

const COLORS = { idle: "#22d3ee", thinking: "#a855f7", talking: "#34d399" };

function Core({ state }) {
  const mesh = useRef();
  const mat = useRef();
  const target = useRef(new THREE.Color());

  useFrame((s, dt) => {
    const thinking = state === "thinking";
    const talking = state === "talking";
    const distort = thinking ? 0.65 : talking ? 0.45 + Math.sin(s.clock.elapsedTime * 12) * 0.1 : 0.3;
    mat.current.distort = THREE.MathUtils.lerp(mat.current.distort, distort, dt * 4);
    mat.current.color.lerp(target.current.set(COLORS[state]), dt * 3);
    mesh.current.rotation.y += dt * (thinking ? 1.2 : 0.3);
    mesh.current.rotation.x = THREE.MathUtils.lerp(mesh.current.rotation.x, s.pointer.y * 0.4, dt * 3);
  });

  return (
    <mesh ref={mesh}>
      <icosahedronGeometry args={[1.4, 24]} />
      <MeshDistortMaterial
        ref={mat}
        speed={state === "thinking" ? 6 : 1.5}
        roughness={0.15}
        metalness={0.6}
        emissive={COLORS[state]}
        emissiveIntensity={0.35}
      />
    </mesh>
  );
}

function Shell({ state }) {
  const ref = useRef();
  useFrame((_, dt) => {
    ref.current.rotation.y -= dt * (state === "thinking" ? 1.0 : 0.15);
    ref.current.rotation.z += dt * 0.05;
  });
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[1.9, 1]} />
      <meshBasicMaterial color={COLORS[state]} wireframe transparent opacity={0.25} />
    </mesh>
  );
}

function Particles({ state }) {
  const ref = useRef();
  const positions = useMemo(() => {
    const n = 900;
    const arr = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 2.2 + Math.random() * 0.6;
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);

  useFrame((_, dt) => {
    ref.current.rotation.y += dt * (state === "thinking" ? 1.5 : 0.15);
  });

  return (
    <group ref={ref}>
      <Points positions={positions} stride={3}>
        <PointMaterial transparent size={0.035} color={COLORS[state]} sizeAttenuation depthWrite={false} />
      </Points>
    </group>
  );
}

export default function AvatarOrb3D({ state = "idle", size = 320 }) {
  return (
    <div style={{ width: size, height: size }}>
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }} attach="background" args={["#05060f"]}  dpr={[1, 1.5]} style={{ width: size, height: size,
  WebkitMaskImage: "radial-gradient(circle, #000 55%, transparent 72%)",
  maskImage: "radial-gradient(circle, #000 55%, transparent 72%)" }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={40} />
        <pointLight position={[-5, -3, -2]} intensity={20} color="#7c3aed" />
        <Environment preset="city" />
        <Core state={state} metalness={0.9} roughness={0.1} emissiveIntensity={0.15} />
        <Shell state={state} />
        <PointMaterial transparent size={0.05} color={COLORS[state]} sizeAttenuation depthWrite={false} />

        <Particles state={state} />
        <EffectComposer>
          <Bloom intensity={1.4} luminanceThreshold={0.15} mipmapBlur />
        </EffectComposer>
      </Canvas>
    </div>
  );
}