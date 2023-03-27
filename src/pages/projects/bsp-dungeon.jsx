import * as THREE from "three";
import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { getProject } from "@theatre/core";
import studio from "@theatre/studio";
import extension from "@theatre/r3f/dist/extension";
import { editable as e, SheetProvider, PerspectiveCamera } from "@theatre/r3f";

// our Theatre.js project sheet, we'll use this later
const demoSheet = getProject("Demo Project").sheet("Demo Sheet");

if (process.env.NODE_ENV === "development" && typeof window !== "undefined") {
  studio.initialize();
  studio.extend(extension);
  studio.ui.restore();
}

export default function BSPDungeon() {
  return (
    <div className="h-screen">
      <Canvas>
        <SheetProvider sheet={getProject("Demo Project").sheet("Demo Sheet")}>
          <PerspectiveCamera
            theatreKey="Camera"
            makeDefault
            position={[5, 5, -5]}
            fov={75}
          />
          <ambientLight />
          <e.pointLight theatreKey="Light" position={[10, 10, 10]} />
          <e.mesh theatreKey="Cube">
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="orange" />
          </e.mesh>
        </SheetProvider>
      </Canvas>
    </div>
  );
}
