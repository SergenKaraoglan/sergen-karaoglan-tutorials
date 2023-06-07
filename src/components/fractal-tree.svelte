<script>
    import * as BABYLON from 'babylonjs';
    import { onMount } from 'svelte';
    import "../styles/global.css"
    
    let canvas;
    let engine;
    let scene;
    let angle = 0.5;
    const ratio = 0.75;
    let maxDepth = 10;
    const branches = [];
    const instanceMeshes = [];
    onMount(() => {
        engine = new BABYLON.Engine(canvas);
        scene = new BABYLON.Scene(engine);
        //scene.performancePriority = BABYLON.ScenePerformancePriority.Aggressive;
        scene.clearColor = new BABYLON.Color4(0, 0, 0, 0);
        const light = new BABYLON.HemisphericLight("HemiLight", new BABYLON.Vector3(0, 1, 0), scene);
        const camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 8, new BABYLON.Vector3(0, 3, 0), scene, );
        camera.attachControl(canvas, true);

        engine.runRenderLoop(function(){
            scene.render();
        });
    
        window.addEventListener('resize', function(){
            engine.resize();
        });
    
        genFractalTree();

    });

    function genFractalTree(depth=0, angleZ = 0, angleX = 0, diameter = 0.4, height = 1, x = 0, y = 0, z = 0){
            if(depth === maxDepth){
                return;
            }

            // instance
            if (instanceMeshes.length == depth) {
                const instanceMesh = BABYLON.MeshBuilder.CreateCylinder("instance", {height: height, diameter: diameter, diameterTop:diameter*ratio}, scene);
                const instanceMesh_mat = new BABYLON.StandardMaterial("instanceMat", scene);
                instanceMesh_mat.diffuseColor = new BABYLON.Color3(0, 0, 1);
                instanceMesh_mat.freeze();
                instanceMesh.material = instanceMesh_mat;
                instanceMesh.freezeWorldMatrix();
                instanceMesh.isVisible = false;
                instanceMeshes.push(instanceMesh);
            }
            const branch = instanceMeshes[depth].createInstance("branch");
            branches.push(branch);

            const pivot = new BABYLON.TransformNode("pivot");
            pivot.position = new BABYLON.Vector3(x, y , z);
            branch.parent = pivot;
            branch.position = new BABYLON.Vector3(0, height / 2, 0);
            pivot.rotation = new BABYLON.Vector3(angleX, 0, angleZ);
    
            x -= Math.sin(angleZ) * Math.cos(angleX) * height;
            y += Math.cos(angleZ) * Math.cos(angleX) * height;
            diameter *= ratio;
            height *= ratio;
    
            genFractalTree(depth + 1, angleZ + angle, angleX, diameter, height, x, y, z);
            genFractalTree(depth + 1, angleZ - angle, angleX, diameter, height, x, y, z);
    }

    function disposeAll(){
        for(let i = 0; i < branches.length; i++){
                branches[i].dispose();
        }
        branches.length = 0;
    }

</script>
    
<canvas bind:this={canvas} class="mx-auto h-screen-1/2 border"></canvas>
<div class="mx-auto w-fit mt-3">
    <input type="range" min="1" max="10" step="1" bind:value={maxDepth} on:input={() => {disposeAll(), genFractalTree()}} >
    <input type="range" min="0" max="2" step="0.05" bind:value={angle} on:input={() => {disposeAll(), genFractalTree()}}>
</div>
