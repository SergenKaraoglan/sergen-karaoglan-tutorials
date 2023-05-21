import dynamic from "next/dynamic";
import { useState } from "react";

const Sketch = dynamic(() => import("react-p5").then((mod) => mod.default), {
  ssr: false,
});

const height = 500;
const width = 500;
let clear = false;
export default function FractalTree() {
  const [depth, setDepth] = useState(5);

  function handleDepth(e) {
    setDepth(e.target.value);
    clear = true;
  }
  
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(width, height).parent(canvasParentRef);
    p5.frameRate(30);
    p5.background(51);
    p5.stroke(255);
  };

  const draw = (p5) => {
    // draw fractal tree
    drawBranch(p5, width / 2, height, -90, depth, 20);
    if (clear) {
      p5.clear();
      p5.background(51);
      p5.stroke(255);
      clear = false;
    }
  };

  function drawBranch(p5, x1, y1, angle, depth, increment) {
    if (depth > 0) {
      let x2 = x1 + p5.cos(p5.radians(angle)) * depth * 10.0;
      let y2 = y1 + p5.sin(p5.radians(angle)) * depth * 10.0;
      p5.line(x1, y1, x2, y2);
      drawBranch(p5, x2, y2, angle - increment, depth - 1, increment);
      drawBranch(p5, x2, y2, angle + increment, depth - 1, increment);
    }
  }

  return (
    <>
      <div className="mx-auto w-fit my-3">
        <Sketch setup={setup} draw={draw} />
      </div>
      <DepthSlider depth={depth} handleDepth={handleDepth} />
    </>
  );
}

function DepthSlider({ depth, handleDepth }) {
  return (
    <div className="flex flex-col">
      <label className="text-white">Depth</label>
      <input
        type="range"
        min="1"
        max="10"
        value={depth}
        onChange={(e) => handleDepth(e)}
        className="w-40"
      />
    </div>
  );
}
