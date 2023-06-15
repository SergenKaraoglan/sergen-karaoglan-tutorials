<script>
  import {onMount} from "svelte";

  let canvas;
   onMount(() => {
    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;

    ctx.lineWidth = 5;
    //ctx.strokeStyle = "blue";
    ctx.lineCap = "round";

    const cursor = {
      x: width / 2,
      y: height / 2,
    };

    canvas.addEventListener("mousemove", (e) => {
      cursor.x = e.offsetX;
      cursor.y = e.offsetY;
    });

    function draw() {
      // draw x and y axis lines
      ctx.moveTo(0, 0);
      ctx.lineTo(0, height);
      ctx.stroke();

      ctx.moveTo(0, height);
      ctx.lineTo(width, height);
      ctx.stroke();

      // draw x and y axis
      ctx.fillText("X", 15, height - 5);
      ctx.fillText("Y", 5, height - 15);

      // draw circle
      ctx.beginPath();
      ctx.arc(cursor.x, cursor.y, 5, 0, 2 * Math.PI);
      ctx.fill();
    }

    function anim() {
      requestAnimationFrame(anim);
      ctx.clearRect(0, 0, width, height);
      draw();
    }
    anim();
  });
</script>

<canvas bind:this={canvas} width="300" height="300" class="border-2 mx-auto my-5"></canvas>
