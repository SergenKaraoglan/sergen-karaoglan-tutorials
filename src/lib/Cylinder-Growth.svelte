<script>
	import * as BABYLON from 'babylonjs';
	import { onMount } from 'svelte';

	// setup babylon
	let canvas;
	let engine;
	let scene;
	const cylinders = [];
	const num_cylinders = 5;
	let j = 0;
	onMount(() => {
		engine = new BABYLON.Engine(canvas, true);
		scene = new BABYLON.Scene(engine);

		scene.clearColor = new BABYLON.Color4(0, 0, 0, 0);
		const light = new BABYLON.HemisphericLight('HemiLight', new BABYLON.Vector3(0, 1, 0), scene);
		const camera = new BABYLON.ArcRotateCamera(
			'Camera',
			Math.PI / 2,
			Math.PI / 2,
			8,
			new BABYLON.Vector3(0, 4, 10),
			scene
		);
		camera.fov = Math.PI / 5;
		camera.attachControl(canvas, true);
		camera.lowerRadiusLimit = 8;
		camera.upperRadiusLimit = 8;

		let observer = new IntersectionObserver(
			function (entries) {
				entries.forEach(function (entry) {
					if (entry.isIntersecting) {
						// If the canvas is visible, start the engine
						engine.runRenderLoop(function () {
							scene.render();
						});
					} else {
						// If the canvas is not visible, stop the engine
						engine.stopRenderLoop();
					}
				});
			},
			{ threshold: 0.1 }
		);
		observer.observe(canvas);

		window.addEventListener('resize', function () {
			engine.resize();
		});

		// material
		const c_mat = new BABYLON.StandardMaterial('mat', scene);
		c_mat.diffuseColor = new BABYLON.Color3(0, 0, 1);
		c_mat.freeze();

		let height = 2;
		let diameter = 1;
		let angle = 0;
		let x = 0;
		let y = 0;
		const ratio = 0.8;
		for (let i = 0; i < num_cylinders; i++) {
			const cylinder = BABYLON.MeshBuilder.CreateCylinder(
				'cylinder' + i,
				{ height: height, diameterTop: diameter * ratio, diameterBottom: diameter },
				scene
			);
			cylinder.isVisible = false;
			cylinder.material = c_mat;
			cylinders.push(cylinder);

			// pivot
			const pivot = new BABYLON.TransformNode('pivot');
			cylinder.parent = pivot;
			pivot.position = new BABYLON.Vector3(x, y, 0);
			cylinder.position = new BABYLON.Vector3(0, height / 2, 0);
			pivot.rotation = new BABYLON.Vector3(0, 0, angle);

			x -= height * Math.sin(angle);
			y += height * Math.cos(angle);
			diameter *= ratio;
			height *= ratio;
			angle += 0;
			
		}

		setInterval(function () {
			for (let i = 0; i <= j; i++) {
				cylinders[i].isVisible = true;
			}
			for (let i = j + 1; i < num_cylinders; i++) {
				cylinders[i].isVisible = false;
			}
			j = (j + 1) % num_cylinders;
		}, 1000);
	});
</script>

<canvas class="mx-auto h-80 w-80 sm:h-96 sm:w-96" bind:this={canvas} />
