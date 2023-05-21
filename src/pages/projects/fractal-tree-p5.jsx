import dynamic from "next/dynamic";

const Sketch = dynamic(() => import("react-p5").then((mod) => mod.default), {
  ssr: false,
});

let x = 50;
let y = 50;
export default function FractalTree() {
  const setup = (p5, canvasParentRef) => {
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)
    p5.createCanvas(500, 500).parent(canvasParentRef);
    p5.frameRate(30);
    p5.background(51);
    p5.stroke(255);
  };

  const draw = (p5) => {
    p5.line(0, 0, 499, 499);
  };

  return (
    <div className="mx-auto w-fit my-3">
      <Sketch setup={setup} draw={draw} />
    </div>
  );
}
