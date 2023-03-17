import React, { Suspense, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  PerspectiveCamera,
  OrbitControls,
  Html,
  Stats,
} from "@react-three/drei";

export default function FractalTrees() {
  return <FractalTreeCanvas />;
}

function FractalTreeCanvas() {
  const [depth, setDepth] = useState(10);
  const [angleIncrement, setAngleIncrement] = useState((2 * Math.PI) / 11);

  function handleDepth(e) {
    setDepth(e.target.value);
  }

  function handleAngleIncrement(e) {
    setAngleIncrement(e.target.value);
  }

  return (
    <div className="w-auto h-screen-4/5 m-auto ">
      <Canvas frameloop="demand">
        <PerspectiveCamera makeDefault position={[0, 3, 9]} />
        <OrbitControls enableZoom={false} />
        <hemisphereLight
          intensity={1}
          skyColor={0xffffbb}
          groundColor={"#080820"}
          position={[0, 5, 0]}
        />
        <Stats showPanel={0} className="stats" />
        <Suspense fallback={Loading}>
          <FractalTree
            depth={depth}
            angleIncrement={angleIncrement}
            is3D={false}
          />
          <Backdrop />
          <GroundPlane />
        </Suspense>
      </Canvas>
      <GUI
        depth={depth}
        handleDepth={handleDepth}
        angleIncrement={angleIncrement}
        handleAngleIncrement={handleAngleIncrement}
      />
    </div>
  );
}

function FractalTree({ depth, angleIncrement, is3D }) {
  const branches = [];
  const ratio = 0.75;
  let angleZ = 0;
  let angleX = 0;
  let radius = 0.2;
  let height = 1;
  let x = 0,
    y = 0,
    z = 0;
  let id = 0;

  function generate(depth, angleZ, angleX, radius, height, x, y, z) {
    if (depth === 0) {
      return;
    }
    branches.push(
      <Branch
        radiusS={radius * ratio}
        radiusE={radius}
        height={height}
        angleZ={angleZ}
        angleX={angleX}
        x={x}
        y={y}
        z={z}
        key={id}
      />
    );
    // cartesian coordinates
    x -= Math.sin(angleZ) * Math.cos(angleX) * height;
    y += Math.cos(angleZ) * Math.cos(angleX) * height;
    z += Math.sin(angleX) * height;
    radius *= ratio;
    height *= ratio;
    depth -= 1;
    id += 1;
    //console.log(angle);

    generate(depth, angleZ + angleIncrement, 0, radius, height, x, y, z);
    generate(depth, angleZ - angleIncrement, 0, radius, height, x, y, z);
    if (is3D) {
      generate(depth, 0, angleX + angleIncrement, radius, height, x, y, z);
      generate(depth, 0, angleX - angleIncrement, radius, height, x, y, z);
    }
  }

  generate(depth, angleZ, angleX, radius, height, x, y, z);
  return branches;
}

// branch of a fractal tree
function Branch({ radiusS, radiusE, height, x, y, z, angleZ, angleX }) {
  return (
    <group position={[x, y, z]} rotation={[angleX, 0, angleZ]}>
      <mesh position={[0, height / 2, 0]}>
        <cylinderGeometry
          attach="geometry"
          args={[radiusS, radiusE, height, 32]}
        />
        <meshStandardMaterial attach="material" color="#008000" />
      </mesh>
    </group>
  );
}

// GUI
function GUI({ depth, handleDepth, angleIncrement, handleAngleIncrement }) {
  return (
    <div className="mx-auto w-72 sm:w-96 flex justify-between">
      <div className="flex flex-col">
        <label>Depth</label>
        <input
          className="appearance-none bg-blue-500 rounded-lg h-1 my-3 thumb-lg-blue-600"
          type="range"
          min="1"
          max="10"
          value={depth}
          onChange={(e) => handleDepth(e)}
        />
      </div>
      <div className="flex flex-col ">
        <label>Angle</label>
        <input
          className="appearance-none bg-blue-500 rounded-lg h-1 my-3 thumb-lg-blue-600"
          type="range"
          min="0.1"
          max="0.6"
          step="0.1"
          value={angleIncrement}
          onChange={(e) => handleAngleIncrement(e)}
        />
      </div>
    </div>
  );
}

function Loading() {
  return (
    <Html center>
      <h1 className="text-4xl">Loading...</h1>
    </Html>
  );
}

function Backdrop() {
  return (
    <mesh position={[0, 0, -5]}>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial color="#000000" />
    </mesh>
  );
}

function GroundPlane() {
  return (
    <mesh position={[0, 0, 0]} rotation={[-(Math.PI / 2), 0, 0]}>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial color="#000000" />
    </mesh>
  );
}
