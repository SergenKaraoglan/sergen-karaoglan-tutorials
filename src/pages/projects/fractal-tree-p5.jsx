import dynamic from "next/dynamic";
import { useState } from "react";

const Sketch = dynamic(() => import("react-p5").then((mod) => mod.default), {
  ssr: false,
});

const height = 500;
const width = 500;
const branchHeight = 10;
const ratio = 0.75;
const angleIncrement = 20;

export default function Main() {
  const [depth, setDepth] = useState(5);
  function handleDepth(e) {
    setDepth(e.target.value);
  }

  return (
    <div className="mx-auto w-fit my-3">
      <FractalTree depth={depth} />
      <DepthSlider depth={depth} handleDepth={handleDepth} />
    </div>
  );
}

function FractalTree({ depth }) {
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(width, height).parent(canvasParentRef);
    p5.frameRate(30);
    p5.stroke(255);
  };

  const draw = (p5) => {
    p5.background(51);
    drawBranch(p5, width / 2, height, -90, depth);
  };

  function drawBranch(p5, x1, y1, angle, depth) {
    if (depth > 0) {
      let x2 = x1 + p5.cos(p5.radians(angle)) * depth * 10.0;
      let y2 = y1 + p5.sin(p5.radians(angle)) * depth * 10.0;
      p5.line(x1, y1, x2, y2);
      drawBranch(p5, x2, y2, angle - angleIncrement, depth - 1);
      drawBranch(p5, x2, y2, angle + angleIncrement, depth - 1);
    }
  }

  return <Sketch setup={setup} draw={draw} />;
}

function DepthSlider({ depth, handleDepth }) {
  return (
    <div className="mx-auto w-fit flex justify-center my-3">
      <label className="sr-only">Depth</label>
      <input
        type="range"
        min="1"
        max="10"
        value={depth}
        onChange={(e) => handleDepth(e)}
        className="appearance-none bg-blue-500 rounded-lg h-1 thumb-lg-blue-600"
      />
    </div>
  );
}
