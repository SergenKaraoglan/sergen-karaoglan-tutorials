<script>
    import * as BABYLON from 'babylonjs';
    import { onMount } from 'svelte';
    import "../styles/global.css";

    // setup babylon
    let canvas;
    let engine;
    let scene;
    let angle = 0;
    onMount(() => {
        engine = new BABYLON.Engine(canvas);
        scene = new BABYLON.Scene(engine);

        scene.clearColor = new BABYLON.Color4(0, 0, 0, 0);
        const light = new BABYLON.HemisphericLight("HemiLight", new BABYLON.Vector3(0, 1, 0), scene);
        const camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 8, new BABYLON.Vector3(0, 2, 5), scene,);
        camera.fov = Math.PI / 5;
        camera.attachControl(canvas, true);

        engine.runRenderLoop(function(){
            scene.render();
        });
    
        window.addEventListener('resize', function(){
            engine.resize();
        });

        // material
        const height = 2;
        const c_mat = new BABYLON.StandardMaterial("mat", scene);
        c_mat.diffuseColor = new BABYLON.Color3(0, 0, 1);
        c_mat.freeze();
        // cylinder 1
        const cylinder1 = BABYLON.MeshBuilder.CreateCylinder("cylinder1", {height: height}, scene);
        cylinder1.position = new BABYLON.Vector3(0, height/2, 0);
        const pivot1 = new BABYLON.TransformNode("pivot1");
        pivot1.position = new BABYLON.Vector3(2, 0, 0);
        cylinder1.parent = pivot1;
        cylinder1.material = c_mat;

        //cylinder 2
        const cylinder2 = BABYLON.MeshBuilder.CreateCylinder("cylinder2", {height: height}, scene);
        cylinder2.position = new BABYLON.Vector3(-2, height/2, 0);
        cylinder2.material = c_mat;
    })

    function rotate(){
        const pivot1 = scene.getTransformNodeByName("pivot1");
        const cylinder2 = scene.getMeshByName("cylinder2");
        pivot1.rotation.z = angle;
        cylinder2.rotation.z = angle;
    }
</script>

<canvas class="mx-auto h-96 w-96" bind:this={canvas}></canvas>
<div class="mx-auto w-fit mt-3">
    <input class="appearance-none bg-blue-500 rounded-lg h-1 thumb-lg-blue-600" type="range" min="0" max={Math.PI * 2} step="0.01" bind:value={angle} on:input={rotate}>
</div>