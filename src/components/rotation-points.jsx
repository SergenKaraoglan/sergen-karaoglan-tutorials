import React, { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";

export default function RotationCanvas() {
  const [angle, setAngle] = useState(0);
  const radiusT = 1;
  const radiusB = 1;
  const height = 5;

  function handleAngle(e) {
    setAngle(e.target.value);
  }

  return (
    <>
      <Canvas frameloop="demand" antialias="false">
        <PerspectiveCamera makeDefault position={[0, 1, 9]} fov={90} />
        <OrbitControls enableZoom={false} target={[0, 2, 0]} />
        <directionalLight intensity={0.5} color="blue" position={[0, 0, 5]} />
        <group position={[-5, 0, 0]} rotation={[0, 0, -angle]}>
          <mesh position={[0, height / 2, 0]}>
            <meshLambertMaterial />
            <cylinderGeometry
              attach="geometry"
              args={[radiusT, radiusB, height, 32]}
            />
          </mesh>
        </group>
        <mesh position={[5, height / 2, 0]} rotation={[0, 0, -angle]}>
          <meshLambertMaterial />
          <cylinderGeometry
            attach="geometry"
            args={[radiusT, radiusB, height, 32]}
          />
        </mesh>
      </Canvas>
      <div className="w-fit mx-auto">
        <AngleSlider handleAngle={handleAngle} angle={angle} />
      </div>
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
        min="0"
        max="6.30"
        step="0.1"
        value={angle}
        onChange={(e) => handleAngle(e)}
      />
    </div>
  );
}
