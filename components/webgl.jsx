import { useEffect, useRef } from "react";


export function MinimalCanvas() {
  const canvasRef = useRef(null);
  function main() {
    const canvas = canvasRef.current;
    const gl = canvas.getContext("webgl");

    if (gl === null) {
      alert(
        "Unable to initialize WebGL. Your browser or machine may not support it."
      );
      return;
    }

    gl.clearColor(1, 0, 0, 1); // red
    gl.clear(gl.COLOR_BUFFER_BIT);
  }

  useEffect(() => {
    main();
  });

  return (
    <canvas
      ref={canvasRef}
      width="640"
      height="480"
      className="m-auto mt-3"
    ></canvas>
  );
}



// https://webgl2fundamentals.org/
