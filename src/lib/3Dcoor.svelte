<script>
	import * as BABYLON from 'babylonjs';
	import 'babylonjs-loaders/';
	import { onMount } from 'svelte';

	// setup babylon
	let canvas;
	let engine;
	let scene;
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
		new BABYLON.AxesViewer(scene, 5);

		const box = BABYLON.MeshBuilder.CreateBox('box', {});
		const localAxes = new BABYLON.AxesViewer(scene, 1);
		localAxes.xAxis.parent = box;
		localAxes.yAxis.parent = box;
		localAxes.zAxis.parent = box;

        BABYLON.SceneLoader.ImportMesh("", "src/lib/3Dassets/", "astronautA.glb", scene, function (newMeshes) {
        camera.target = newMeshes[0];
        });
	});
</script>

<canvas bind:this={canvas} class="mx-auto w-96 h-96" />
