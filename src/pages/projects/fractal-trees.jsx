import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls, Grid } from "@react-three/drei";

export default function FractalTrees() {
  return (
    <div className="w-auto h-screen-4/5 m-auto">
      <Canvas>
        <color attach="background" args={["grey"]} />
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        <OrbitControls />
        <ambientLight />
        <Grid infiniteGrid={true} />
        <FractalTree />
      </Canvas>
    </div>
  );
}

// branch of a fractal tree
function Branch({ radius = 0.2, height = 1, x = 0, y = 0, z = 0, angle = 0 }) {
  const myMesh = React.useRef();
  return (
    <mesh ref={myMesh}>
      <cylinderGeometry
        args={[radius, radius, height, 32]}
        position={[x, y, z]}
        rotation={[angle, 0, 0]}
      />
      <meshBasicMaterial color="royalblue" />
    </mesh>
  );
}

function FractalTree() {
  let branches = [];
  const depth = 1;
  let angle = 0;
  let angleIncrement = 0.1;
  let radius = 0.2;
  let height = 1;
  let x = 0,
    y = 0,
    z = 0;

  function generate() {
    for (let i = 0; i < depth; i++) {
      branches.push(<Branch />);
    }
  }
  generate();

  return <>{branches.map((branch) => branch)}</>;
}
