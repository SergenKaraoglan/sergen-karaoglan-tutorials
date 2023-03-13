import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";

export default function FractalTrees() {
  return (
    <div className="w-auto h-screen-4/5 m-auto ">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 3, 9]} />
        <OrbitControls />
        <axesHelper args={[5]} />
        <hemisphereLight
          intensity={1}
          skyColor={0xffffbb}
          groundColor={0x080820}
        />
        <FractalTree2D />
      </Canvas>
      <GUI />
    </div>
  );
}

// GUI
function GUI() {
  const [depth, setDepth] = useState(10);
  const [angleIncrement, setAngleIncrement] = useState(0.2);
  return (
    <div className="mx-auto w-96 flex justify-between">
      <div className="flex flex-col">
        <label>Depth: {depth}</label>
        <input
          type="range"
          min="1"
          max="10"
          value={depth}
          onChange={(e) => setDepth(e.target.value)}
        />
      </div>
      <div className="flex flex-col ">
        <label>
          Angle Increment: {Number.parseFloat(angleIncrement).toFixed(1)}
        </label>
        <input
          type="range"
          min="0.1"
          max="1"
          step="0.1"
          value={angleIncrement}
          onChange={(e) => setAngleIncrement(e.target.value)}
        />
      </div>
    </div>
  );
}

// branch of a fractal tree
function Branch({ radiusS, radiusE, height, x, y, z, angle }) {
  const myMesh = React.useRef();
  return (
    <group position={[x, y, z]} rotation={[0, 0, angle]}>
      <mesh position={[0, height / 2, 0]}>
        <cylinderGeometry args={[radiusS, radiusE, height, 32]} />
        <meshStandardMaterial color="royalblue" />
      </mesh>
    </group>
  );
}

function FractalTree2D() {
  const branches = [];
  const depth = 10;
  let angle = 0;
  let angleIncrement = (2 * Math.PI) / 11;
  let radius = 0.2;
  let ratio = 0.75;
  let height = 1;
  let x = 0,
    y = 0,
    z = 0;
  let id = 0;

  function generate(id, depth, angle, radius, height, x, y, z) {
    if (depth === 0) {
      return;
    }
    branches.push(
      <Branch
        radiusS={radius * ratio}
        radiusE={radius}
        height={height}
        angle={angle}
        x={x}
        y={y}
        z={z}
      />
    );
    y += height * Math.cos(angle);
    x -= height * Math.sin(angle);
    radius *= ratio;
    height *= ratio;
    depth -= 1;

    generate(id, depth, angle + angleIncrement, radius, height, x, y, z);
    generate(id, depth, angle - angleIncrement, radius, height, x, y, z);
  }

  generate(id, depth, angle, radius, height, x, y, z);
  return branches;
}
