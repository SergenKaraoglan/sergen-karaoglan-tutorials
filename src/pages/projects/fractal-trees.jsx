import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls, Grid } from "@react-three/drei";

export default function FractalTrees() {
  return (
    <div className="w-auto h-screen-4/5 m-auto">
      <Canvas>
        <color attach="background" args={["grey"]} />
        <PerspectiveCamera makeDefault position={[0, 10, 10]} />
        <OrbitControls />
        <axesHelper args={[5]} />
        <ambientLight />
        {/* <Grid infiniteGrid={true} /> */}
        <FractalTree />
      </Canvas>
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
        <meshBasicMaterial color="royalblue" />
      </mesh>
    </group>
  );
}

function FractalTree() {
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
  console.log(branches);
  return branches;
}
