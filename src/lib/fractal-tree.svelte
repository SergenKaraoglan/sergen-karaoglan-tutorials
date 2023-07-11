<script>
	import * as BABYLON from 'babylonjs';
	import { onMount } from 'svelte';

	export let showAngle = false;
	export let showDepth = false;
	let canvas;
	let engine;
	let scene;
	let angle = 0.5;
	export let maxDepth = 10;
	export let curDepth = 10;
	export let is3D = false;
	const ratio = 0.75;
	const branches = [];
	const instanceMeshes = [];
	let instanceMesh_mat;
	let id = 0;
	onMount(() => {
		engine = new BABYLON.Engine(canvas, true);
		scene = new BABYLON.Scene(engine);
		scene.skipPointerMovePicking = true;
		//scene.debugLayer.show();

		scene.clearColor = new BABYLON.Color4(0, 0, 0, 0);
		const light = new BABYLON.HemisphericLight('HemiLight', new BABYLON.Vector3(0, 1, 0), scene);
		const camera = new BABYLON.ArcRotateCamera(
			'Camera',
			Math.PI / 2,
			Math.PI / 2,
			8,
			new BABYLON.Vector3(0, 2, 0),
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
		instanceMesh_mat = new BABYLON.StandardMaterial('instanceMat', scene);
		instanceMesh_mat.diffuseColor = new BABYLON.Color3(0, 0, 1);
		instanceMesh_mat.freeze();
		genFractalTree();
	});

	function genFractalTree(
		depth = 0,
		angleZ = 0,
		angleX = 0,
		diameter = 0.4,
		height = 1,
		x = 0,
		y = 0,
		z = 0
	) {
		if (depth === maxDepth) {
			return;
		}
		if (instanceMeshes.length == depth) {
			const instanceMesh = BABYLON.MeshBuilder.CreateCylinder(
				'instance',
				{ height: height, diameter: diameter, diameterTop: diameter * ratio },
				scene
			);
			instanceMesh.material = instanceMesh_mat;
			instanceMesh.freezeWorldMatrix();
			instanceMesh.isVisible = false;
			instanceMeshes.push(instanceMesh);
		}

		let branch;
		let pivot;
		// check if branch already exists
		if (branches.length > id) {
			branch = branches[id];
			pivot = branch.parent;
		} else {
			branch = instanceMeshes[depth].createInstance('branch');
			branch.material.freeze();
			branches.push(branch);
			pivot = new BABYLON.TransformNode('pivot');
			branch.parent = pivot;
		}

		if (depth > curDepth) {
			branch.isVisible = false;
		} else {
			branch.isVisible = true;
		}
		pivot.position = new BABYLON.Vector3(x, y, z);
		branch.position = new BABYLON.Vector3(0, height / 2, 0);
		pivot.rotation = new BABYLON.Vector3(angleX, 0, angleZ);

		x -= Math.sin(angleZ) * Math.cos(angleX) * height;
		y += Math.cos(angleZ) * Math.cos(angleX) * height;
		z += Math.sin(angleX) * height;
		diameter *= ratio;
		height *= ratio;
		id++;
		genFractalTree(depth + 1, angleZ + angle, 0, diameter, height, x, y, z);
		genFractalTree(depth + 1, angleZ - angle, 0, diameter, height, x, y, z);
		if (is3D) {
			genFractalTree(depth + 1, 0, angleX + angle, diameter, height, x, y, z);
			genFractalTree(depth + 1, 0, angleX - angle, diameter, height, x, y, z);
		}
	}
	function checkFPS() {
		console.log(engine.getFps());
	}
</script>

<canvas class="mx-auto h-80 w-80 sm:h-96 sm:w-96" bind:this={canvas} />
<div class="mx-auto w-fit mt-3">
	{#if showDepth}
		<input
			class="appearance-none bg-blue-500 rounded-lg h-1 thumb-lg-blue-700"
			type="range"
			min="0"
			max="10"
			step="1"
			bind:value={curDepth}
			on:input={() => {
				(id = 0), genFractalTree();
			}}
		/>
	{/if}
	{#if showAngle}
		<input
			class="appearance-none bg-blue-500 rounded-lg h-1 thumb-lg-blue-700"
			type="range"
			min="0"
			max="2"
			step="0.1"
			bind:value={angle}
			on:input={() => {
				(id = 0), genFractalTree();
			}}
		/>
	{/if}
</div>
