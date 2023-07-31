<script>
	import { onMount } from 'svelte';
	import PixelTiger from '$lib/assets/pixel-tiger.webp';

	let image;
	let canvas;
	let x;
	let y;
	let startAnim;
	let animationFrame;

	onMount(() => {
		const ctx = canvas.getContext('2d');
		const width = canvas.width;
		const height = canvas.height;

		ctx.lineWidth = 5;
		//ctx.strokeStyle = "blue";
		ctx.lineCap = 'round';

		const cursor = {
			x: width / 2,
			y: height / 2
		};

		canvas.addEventListener('mousemove', (e) => {
			cursor.x = e.offsetX;
			cursor.y = e.offsetY;
		});

    canvas.addEventListener('touchmove', (e) => {
      cursor.x = e.touches[0].clientX;
      cursor.y = e.touches[0].clientY;
    });

		function draw() {
			x = cursor.x;
			y = cursor.y;
			// draw image
			ctx.drawImage(image, cursor.x - 25, cursor.y - 30, 60, 60);

			// draw x and y axis lines
			ctx.moveTo(0, 0);
			ctx.lineTo(0, height);
			ctx.stroke();

			ctx.moveTo(0, height);
			ctx.lineTo(width, height);
			ctx.stroke();

			// draw x and y axis
			ctx.fillText('X', 15, height - 5);
			ctx.fillText('Y', 5, height - 15);
		}

		draw();
		startAnim = function anim() {
			animationFrame = requestAnimationFrame(anim);
			ctx.clearRect(0, 0, width, height);
			draw();
		};
		//anim();
	});

	function endAnim() {
		cancelAnimationFrame(animationFrame);
	}
</script>

<img bind:this={image} src={PixelTiger} alt="Pixel Tiger" class="hidden" />
<canvas
	bind:this={canvas}
	on:mousedown={() => startAnim()}
	on:mouseup={() => endAnim()}
	on:pointerleave={() => endAnim()}
	on:touchstart={() => startAnim()}
	on:touchend={() => endAnim()}
	width="300"
	height="300"
	class="border-2 mx-auto my-5"
/>
<div class="mx-auto w-fit text-lg">X:{x} Y:{Math.abs(y - 300)}</div>
