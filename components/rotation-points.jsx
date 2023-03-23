import React, { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three/src/materials/MeshLambertMaterial";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";

const royalblue = new THREE.MeshLambertMaterial({ color: "royalblue" });

export default function RotationCanvas() {
  const [angleA, setAngleA] = useState(0);
  const [angleB, setAngleB] = useState(0);
  const radiusT = 1;
  const radiusB = 1;
  const height = 5;

  function handleAngleA(e) {
    setAngleA(e.target.value);
  }
  function handleAngleB(e) {
    setAngleB(e.target.value);
  }

  return (
    <>
      <Canvas frameloop="demand" antialias="false">
        <PerspectiveCamera makeDefault position={[0, 3, 8]} fov={50} />
        <OrbitControls enableZoom={false} target={[0, 2, 0]} />
        <hemisphereLight
          intensity={0.5}
          skyColor={0xffffbb}
          groundColor={"#080820"}
          position={[0, 1, 0]}
        />
        <group position={[-3, 0, 0]} rotation={[0, 0, angleA]}>
          <mesh position={[0, height / 2, 0]} material={royalblue}>
            <cylinderGeometry
              attach="geometry"
              args={[radiusT, radiusB, height, 32]}
            />
          </mesh>
        </group>
        <mesh
          position={[3, height / 2, 0]}
          rotation={[0, 0, angleB]}
          material={royalblue}
        >
          <cylinderGeometry
            attach="geometry"
            args={[radiusT, radiusB, height, 32]}
          />
        </mesh>
      </Canvas>
      <AngleSlider handleAngle={handleAngleA} angle={angleA} />
      <AngleSlider handleAngle={handleAngleB} angle={angleB} />
    </>
  );
}

function AngleSlider({ handleAngle, angle }) {
  return (
    <div className="">
      <input
        id="angle-slider"
        className="appearance-none bg-blue-500 rounded-lg h-1 thumb-lg-blue-600"
        type="range"
        min="-1.5"
        max="1.5"
        step="0.1"
        value={angle}
        onChange={(e) => handleAngle(e)}
      />
    </div>
  );
}
