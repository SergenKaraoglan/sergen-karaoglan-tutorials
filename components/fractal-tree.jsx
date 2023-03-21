import Head from "next/head";
import React, { Suspense, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls, Html } from "@react-three/drei";
import * as THREE from "three/src/materials/MeshLambertMaterial";

const royalblue = new THREE.MeshLambertMaterial({ color: "royalblue" });

export default function FractalTreeCanvas({ is3D, initDepth }) {
  const [depth, setDepth] = useState(initDepth);
  const [angleIncrement, setAngleIncrement] = useState(0.5);
  const [shape, setShape] = useState("cylinder");

  function handleDepth(e) {
    setDepth(e.target.value);
  }

  function handleAngleIncrement(e) {
    setAngleIncrement(e.target.value);
  }

  function handleShape(inputShape) {
    setShape(inputShape);
  }

  return (
    <>
      <Canvas frameloop="demand">
        <PerspectiveCamera makeDefault position={[0, 4, 9]} fov={50} />
        <OrbitControls enableZoom={false} />
        <hemisphereLight
          intensity={0.5}
          skyColor={0xffffbb}
          groundColor={"#080820"}
          position={[0, 1, 0]}
        />
        <Suspense fallback={Loading}>
          <FractalTree
            depth={depth}
            angleIncrement={angleIncrement}
            shape={shape}
            is3D={is3D}
          />
        </Suspense>
      </Canvas>
      <DepthAngleUI
        depth={depth}
        handleDepth={handleDepth}
        angleIncrement={angleIncrement}
        handleAngleIncrement={handleAngleIncrement}
      />
    </>
  );
}

function FractalTree({ depth, angleIncrement, shape, is3D }) {
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
        shape={shape}
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
    let angleZL = (angleZ * 10 + angleIncrement * 10) / 10;
    let angleZR = (angleZ * 10 - angleIncrement * 10) / 10;
    id += 1;

    generate(depth, angleZL, 0, radius, height, x, y, z);
    generate(depth, angleZR, 0, radius, height, x, y, z);
    if (is3D) {
      generate(depth, 0, angleZL, radius, height, x, y, z);
      generate(depth, 0, angleZR, radius, height, x, y, z);
    }
  }

  generate(depth, angleZ, angleX, radius, height, x, y, z);
  return branches;
}

// branch of a fractal tree
function Branch({ radiusS, radiusE, height, x, y, z, angleZ, angleX, shape }) {
  return (
    <group position={[x, y, z]} rotation={[angleX, 0, angleZ]}>
      <mesh position={[0, height / 2, 0]} material={royalblue}>
        {shape === "cylinder" ? (
          <cylinderGeometry
            attach="geometry"
            args={[radiusS, radiusE, height, 32]}
          />
        ) : shape === "cube" ? (
          <boxGeometry attach="geometry" args={[height, height, height]} />
        ) : shape === "sphere" ? (
          <sphereGeometry attach="geometry" args={[height / 2]} />
        ) : (
          <dodecahedronGeometry attach="geometry" args={[height / 2]} />
        )}
      </mesh>
    </group>
  );
}

// GUI
function DepthAngleUI({
  depth,
  handleDepth,
  angleIncrement,
  handleAngleIncrement,
}) {
  return (
    <div className="mx-auto w-72 sm:w-96 flex justify-between">
      <div className="flex flex-col">
        <label htmlFor="depth-slider" className="my-2">
          Depth
        </label>
        <input
          id="depth-slider"
          className="appearance-none bg-blue-500 rounded-lg h-1 thumb-lg-blue-600"
          type="range"
          min="1"
          max="10"
          value={depth}
          onChange={(e) => handleDepth(e)}
        />
      </div>
      <div className="flex flex-col ">
        <label htmlFor="angle-slider" className="my-2">
          Angle
        </label>
        <input
          id="angle-slider"
          className="appearance-none bg-blue-500 rounded-lg h-1 thumb-lg-blue-600"
          type="range"
          min="0.1"
          max="1.5"
          step="0.1"
          value={angleIncrement}
          onChange={(e) => handleAngleIncrement(e)}
        />
      </div>
    </div>
  );
}

function ShapeUI({ handleShape }) {
  return (
    <div className="mx-auto w-72 sm:w-96 flex justify-between my-3">
      <button
        className="rounded-md bg-blue-500 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-blue-400"
        onClick={() => handleShape("cylinder")}
      >
        Cylinder
      </button>
      <button
        className="rounded-md bg-blue-500 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-blue-400"
        onClick={() => handleShape("cube")}
      >
        Cube
      </button>
      <button
        className="rounded-md bg-blue-500 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-blue-400"
        onClick={() => handleShape("sphere")}
      >
        Sphere
      </button>
      <button
        className="rounded-md bg-blue-500 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-blue-400"
        onClick={() => handleShape("Dodecahedron")}
      >
        Dodecahedron
      </button>
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
