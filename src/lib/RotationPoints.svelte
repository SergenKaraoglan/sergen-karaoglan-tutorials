<script>
	import * as BABYLON from 'babylonjs';
	//import '@babylonjs/core/Engines/WebGPU/Extensions/'
	import { onMount } from 'svelte';

	// setup babylon
	let canvas;
	let engine;
	let scene;
	let angle = 0;
	onMount(() => {
		engine = new BABYLON.Engine(canvas, true);
		// async function init_engine(){
		//     engine = new BABYLON.WebGPUEngine(canvas);
		//     await engine.initAsync();
		// }
		// init_engine();
		scene = new BABYLON.Scene(engine);

		scene.clearColor = new BABYLON.Color4(0, 0, 0, 0);
		const light = new BABYLON.HemisphericLight('HemiLight', new BABYLON.Vector3(0, 1, 0), scene);
		const camera = new BABYLON.ArcRotateCamera(
			'Camera',
			Math.PI / 2,
			Math.PI / 2,
			8,
			new BABYLON.Vector3(0, 2, 5),
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
							//console.log('a');
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
		const height = 2;
		const c_mat = new BABYLON.StandardMaterial('mat', scene);
		c_mat.diffuseColor = new BABYLON.Color3(0, 0, 1);
		c_mat.freeze();
		// cylinder 1
		const cylinder1 = BABYLON.MeshBuilder.CreateCylinder('cylinder1', { height: height }, scene);
		cylinder1.position = new BABYLON.Vector3(0, height / 2, 0);
		const pivot1 = new BABYLON.TransformNode('pivot1');
		pivot1.position = new BABYLON.Vector3(2, 0, 0);
		cylinder1.parent = pivot1;
		cylinder1.material = c_mat;

		const s_mat = new BABYLON.StandardMaterial('s_mat', scene);
		s_mat.diffuseColor = new BABYLON.Color3(0, 1, 1);
		const cor = BABYLON.MeshBuilder.CreateSphere('cor', { diameter: 0.5 }, scene);
		cor.position = new BABYLON.Vector3(2, 0, 0.3);
		cor.material = s_mat;

		//cylinder 2
		const cylinder2 = BABYLON.MeshBuilder.CreateCylinder('cylinder2', { height: height }, scene);
		cylinder2.position = new BABYLON.Vector3(-2, height / 2, 0);
		cylinder2.material = c_mat;
		const cor2 = BABYLON.MeshBuilder.CreateSphere('cor2', { diameter: 0.5 }, scene);
		cor2.position = new BABYLON.Vector3(-2, height / 2, 0.3);
		cor2.material = s_mat;

		scene.registerBeforeRender(function () {
			pivot1.rotation.z += 0.05;
			cylinder2.rotation.z += 0.05;
		});
	});
</script>

<canvas class="mx-auto h-80 w-80 sm:h-96 sm:w-96" bind:this={canvas} />
