<script>
import Rotation from "$lib/rotation-points.svelte";
import Lazy from "$lib/Lazy.svelte";
import '$lib/styles/vscode-dark.css';
</script>

<svelte:head>
	<title>Fractal Trees | Sergen Karaoglan</title>
	<meta name="description" content="Build and learnt about fractal trees with a interactive 3D fractal tree generator." />
</svelte:head>

<article class="max-sm:mx-4 prose lg:prose-xl m-auto pt-16">

# Fractal Tree

## What is a Fractal Tree

A treelike structure can be built [recursively](https://en.wikipedia.org/wiki/Recursion_(computer_science)) using only a single type of geometry and simple rules. This is known as a [fractal tree](https://en.wikipedia.org/wiki/Fractal_canopy) and by the end of this post you will learn how to build one with React Three Fiber (R3F) by walking through the process I took to build one. As you might have guessed, fractal trees purely serve as art but similar patterns can be found in nature besides trees from within our respiratory system to our blood veins showing that even our everyday lives are governed by these simple patterns. They are also a type of geometry known as a [fractal](https://en.wikipedia.org/wiki/Fractal) which often posess the property of [self-similarity](https://en.wikipedia.org/wiki/Self-similarity).

Below is a fractal tree that is intentionally left with only the first [mesh](https://en.wikipedia.org/wiki/Polygon_mesh) drawn. Increase the range of the slider to see how the tree is recursively built.


<div class="m-auto mb-20 h-80 w-80 sm:h-96 sm:w-96">
  <Lazy
	this={() => import("$lib/fractal-tree.svelte")}
	>
	<div slot="loading">Loading...</div>
	<svelte:fragment slot="component" let:Component>
		<Component showDepth={true} curDepth={0} />
	</svelte:fragment>
</Lazy>
</div>

A convenient property of procedurally generated art is that you can tweak the parameters to customise the appearance with ease. The recursive depth here is limited at 10 but you can edit the code to go as far as your hardware can handle. Another property is the angle. Each branch (cylinder) splits at a fixed angle from the previous branch.
Try the slider below to see how the angle changes the appearance of our fractal tree.

<div class="m-auto mb-20 h-80 w-80 sm:h-96 sm:w-96">
  <Lazy
	this={() => import("$lib/fractal-tree.svelte")}
	>
	<div slot="loading">Loading...</div>
	<svelte:fragment slot="component" let:Component>
		<Component showAngle={true} />
	</svelte:fragment>
</Lazy>
</div>

By now you probably have a good idea of what a fractal tree is, in which case we will now begin to build one using R3F.

## Building a 2D Fractal Tree

We can start by first building our "Branch" component that returns a mesh with [cylinder geometry](https://threejs.org/docs/index.html#api/en/geometries/CylinderGeometry). The geometry will take the parameters: radius top, radius bottom, height and radial segments, in that order, that will be modified as the tree 'grows'.

```js
<cylinderGeometry attach="geometry" args={[radiusT, radiusB, height, 32]} />
```

We don't necessarily need to use a cylinder and you can experiment with other shapes such as a cube to possibly get interesting results but we will be sticking with a cylinder to most closely resemble a tree.

### Rotating branches

Next we would like to be able to rotate our mesh but first we need to get into a few specifics with R3F. For convenience, we would like to change the centre of rotation from the centre of the mesh to its endpoint. To achieve this in R3F it is common practice to nest a mesh within a group and use the group as the centre of rotation. We place our mesh above the origin of the group so the centre of rotation of the group meets the endpoint of our mesh. By interacting with the sliders you can see the difference in our desired centre of rotation (left) and the default centre of rotation (right).

<div class="m-auto mb-20 h-80 w-80 sm:h-96 sm:w-96">
<Lazy
	this={() => import("$lib/rotation-points.svelte")}
	>
	<div slot="loading">Loading...</div>
	<svelte:fragment slot="component" let:Component>
		<Component />
	</svelte:fragment>
</Lazy>
</div>
The final Branch component we return is the following and contains the only mesh we need to build our tree.

```js
<group position={[x, y, z]} rotation={[angleX, 0, angleZ]}>
  <mesh position={[0, height / 2, 0]} material={royalblue}>
    <cylinderGeometry attach="geometry" args={[radiusT, radiusB, height, 32]} />
  </mesh>
</group>
```

### Recursively generating our tree

Knowing the pattern repeats we can build a fractal tree using recursion. For every branch, we connect two more branches that split at a fixed angle in opposing directions.
Our termination condition is the depth. The larger the depth the more branches we stack, hence the larger our tree.

```js
function generate(depth ...) {
  if (depth === 0) {
    return;
  }
  depth -= 1
  ...
}
```

We update the height and radius of every branch as we progress by a fixed ratio less than 1 so they decrease in size as the tree progresses. We also increase and decrease the angle by a fixed amount to achieve the effect of our tree growing outwards.

```js
function generate(depth, angleZ, angleX, radius, height, x, y, z) {
  ...
  branches.push(
    <Branch args={[radius, height, angleZ, angleX, x, y, z]} />
  );

  radius *= ratio;
  height *= ratio;
  x = ...
  y = ...
  z = ...
  let angleZL = (angleZ * 10 + angleIncrement * 10) / 10;
  let angleZR = (angleZ * 10 - angleIncrement * 10) / 10;

  generate(depth, angleZL, 0, radius, height, x, y, z);
  generate(depth, angleZR, 0, radius, height, x, y, z);
}

return branches;
```

<figcaption>Full source code is available at the end of the page.</figcaption>

You may have noticed we are converting the angle first to an integer and then dividing, this to avoid [floating point inaccuracies](https://www.w3schools.com/js/tryit.asp?filename=tryjs_numbers_inaccurate3).

#### Using trigonometry to convert polar coordinates to cartesian

We want to connect the branches, to do this we need to know the start point of the previous branch. By knowing the angle we can achieve this using [trigonometry](https://en.wikipedia.org/wiki/Trigonometry.) and update the x,y,z coordinates as we progress along the tree. Remember how we changed the centre of rotation? We did this to rotate by the point each branch is connected by.

```js
// cartesian coordinates
x -= Math.sin(angleZ) * Math.cos(angleX) * height;
y += Math.cos(angleZ) * Math.cos(angleX) * height;
z += Math.sin(angleX) * height;
```

Finally once we have reached the end of recursion we return the array of branches to render our tree on the canvas.

## Building a 3D Fractal Tree

The mesh may be 3D but we are only rotating by the Z axis. We can extend the tree by adding two more branches that rotate by the X axis. You can orbit the tree with a cursor or touchscreen.

<div class="m-auto mb-20 h-80 w-80 sm:h-96 sm:w-96">
    <Lazy
    this={() => import("$lib/fractal-tree.svelte")}
    >
    <div slot="loading">Loading...</div>
    <svelte:fragment slot="component" let:Component>
      <Component curDepth={7} maxDepth={7} is3D={true}  />
    </svelte:fragment>
  </Lazy>
</div>

```js
let angleXL = (angleX * 10 + angleIncrement * 10) / 10;
let angleXR = (angleX * 10 - angleIncrement * 10) / 10;
generate(depth, 0, angleXL, radius, height, x, y, z);
generate(depth, 0, angleXR, radius, height, x, y, z);
```

## Finishing up

You now know what a Fractal Tree is and saw how to build one in R3F. Procedural generation and fractals are both intriguing areas that can be explored much further as this is one of many fractals and arguably the simplest fractal. I thought I would start with a simple algorithm before branching off to more complex algorithms as I learn R3F. That being said, I hope you enjoyed a brief demonstration of a simple yet elegant pattern that can be found across nature.

[Source code](https://github.com/SergenKaraoglan/sergen-karaoglan-portfolio/blob/main/components/fractal-tree.jsx)

## Resources
[Wikipedia](https://en.wikipedia.org/wiki/Fractal_canopy)

[Coding Train](https://www.youtube.com/watch?v=0jjeOYMjmDU)

[Modernescartes](https://www.moderndescartes.com/essays/plants/)
</article>