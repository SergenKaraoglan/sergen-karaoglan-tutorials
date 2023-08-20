<script>
	import * as BABYLON from 'babylonjs';
	import 'babylonjs-loaders/';
	import { onMount } from 'svelte';

	import astronaut from '$lib/3Dassets/astronautA.glb';

	// setup babylon
	let canvas;
	let engine;
	let scene;
	let astro;
	let x = 0;
	let y = 0;
	let z = 0;
	$: if (astro) {
		astro.position = new BABYLON.Vector3(x, y, z);
	}
	onMount(() => {
		engine = new BABYLON.Engine(canvas, true);
		scene = new BABYLON.Scene(engine);
		scene.clearColor = new BABYLON.Color4(0, 0, 0, 0);
		const light = new BABYLON.HemisphericLight('HemiLight', new BABYLON.Vector3(0, 1, 0), scene);
		// camera
		const cameraRadius = 10;
		const camera = new BABYLON.ArcRotateCamera(
			'Camera',
			0,
			Math.PI / 4,
			cameraRadius,
			new BABYLON.Vector3(0, 0, 0),
			scene
		);
		camera.attachControl(canvas, true);
		camera.fov = Math.PI / 2;
		// disable zoom
		camera.lowerRadiusLimit = cameraRadius;
		camera.upperRadiusLimit = cameraRadius;

		// only run when in view
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

		// main
		const axisViewer = new BABYLON.AxesViewer(scene, 5);

		// 3D asset url
		const astroURL = astronaut.split('/');
		const url = astroURL.slice(0, -1).join('/') + '/';
		const filename = astroURL[astroURL.length - 1];
		BABYLON.SceneLoader.ImportMesh('', url, filename, scene, function (newMeshes) {
			astro = newMeshes[0];
			//camera.target = astro;
			// const localAxes = new BABYLON.AxesViewer(scene, 1);
			// localAxes.xAxis.parent = astro;
			// localAxes.yAxis.parent = astro;
			// localAxes.zAxis.parent = astro;
			astro.scaling = new BABYLON.Vector3(5, 5, 5);
			astro.position = new BABYLON.Vector3(0, 0, 0);
			// const pointerDragBehavior = new BABYLON.PointerDragBehavior({
			// 	dragAxis: new BABYLON.Vector3(0, 1, 0)
			// });
			// astro.addBehavior(pointerDragBehavior);
			// pointerDragBehavior.onDragObservable.add((event) => {
			// 	console.log('drag');
			// 	console.log(event);
			// 	x = Math.round(event.dragPlanePoint.x);
			// 	y = Math.round(event.dragPlanePoint.y);
			// 	z = Math.round(event.dragPlanePoint.z);
			// });
		});
	});
</script>

<canvas bind:this={canvas} class="mx-auto w-80 h-80 sm:w-96 sm:h-96" />
<div class="mx-auto w-fit">
	<input type="range" min="-10" max="10" step="0.1" bind:value={x} />
	<input type="range" min="-10" max="10" step="0.1" bind:value={y} />
	<input type="range" min="-10" max="10" step="0.1" bind:value={z} />
</div>
<div class="mx-auto w-fit text-lg">X:{x} Y:{y} Z:{z}</div>