<script>
    import * as BABYLON from 'babylonjs';
    import { onMount } from 'svelte';
    import "../styles/global.css"
    
    let canvas;
    let engine;
    onMount(() => {
        engine = new BABYLON.Engine(canvas);
        
        run();
    });
let scene;
function run(){
        if(scene){
            scene.dispose();
        }
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

        const ratio = 0.75;
        const depth = document.getElementById('depth').value;
        const angle = 0.5;
        const root = BABYLON.MeshBuilder.CreateCylinder("root", {height: 1, diameter: 0.4, diameterTop:0.4*ratio}, scene);
        root.isVisible = false;
        function genFractalTree(depth, angleZ = 0, angleX = 0, diameter = 0.4, height = 1, x = 0, y = 0, z = 0){
            if(depth === 0){
                return;
            }

            // instance
            const branch = BABYLON.MeshBuilder.CreateCylinder("branch", {height: height, diameter: diameter, diameterTop:diameter*ratio}, scene);
            const branch_mat = new BABYLON.StandardMaterial("branchMat", scene);
            branch_mat.diffuseColor = new BABYLON.Color3(0, 0, 1);
            branch_mat.freeze();
            branch.material = branch_mat;
            branch.freezeWorldMatrix();

            const pivot = new BABYLON.TransformNode("pivot");
            pivot.position = new BABYLON.Vector3(x, y , z);
            branch.parent = pivot;
            branch.position = new BABYLON.Vector3(0, height / 2, 0);
            pivot.rotation = new BABYLON.Vector3(angleX, 0, angleZ);
    
            x -= Math.sin(angleZ) * Math.cos(angleX) * height;
            y += Math.cos(angleZ) * Math.cos(angleX) * height;
            diameter *= ratio;
            height *= ratio;
    
            genFractalTree(depth - 1, angleZ + angle, angleX, diameter, height, x, y, z);
            genFractalTree(depth - 1, angleZ - angle, angleX, diameter, height, x, y, z);
        }
    
        genFractalTree(depth);
        //scene.dispose();
    
        
    }
</script>
    
<canvas bind:this={canvas} class="mx-auto h-screen-1/2 border"></canvas>
<input type="range" min="1" max="10" step="1" value="10" id="depth" on:input={run}>