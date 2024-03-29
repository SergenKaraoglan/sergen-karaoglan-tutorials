<script>
import Lazy from "$lib/Lazy.svelte";
import '$lib/styles/vscode-dark.css';
</script>

<svelte:head>
	<title>Fractal Trees | Sergen Karaoglan</title>
	<meta name="description" content="Build and learnt about fractal trees with a interactive 3D fractal tree generator." />
</svelte:head>

# Fractal Tree

## What is a Fractal Tree

A treelike structure can be built [recursively](https://en.wikipedia.org/wiki/Recursion_(computer_science)) using only a single type of geometry and simple rules. This is known as a [fractal tree](https://en.wikipedia.org/wiki/Fractal_canopy) and by the end of this article you will learn how to build one. I used [Babylon.js](https://www.babylonjs.com/) but the concepts shown can be generalised to your 3D rendering engine and language of choice. A fractal tree is a type of procedural art but similar patterns found in fractal trees can be found in nature from within our respiratory system to our blood veins. As the name suggests, they are also a type of geometry known as a [fractal](https://en.wikipedia.org/wiki/Fractal) which often possess the property of [self-similarity](https://en.wikipedia.org/wiki/Self-similarity) as you will soon see.

Below is a fractal tree that is intentionally left with only the first [mesh](https://en.wikipedia.org/wiki/Polygon_mesh) drawn. Increase the slider to see how the tree is recursively built.

<figure class="m-auto mb-20 h-80 w-80 sm:h-96 sm:w-96">
  <Lazy
	this={() => import("$lib/fractal-tree.svelte")}
	>
	<svelte:fragment slot="component" let:Component>
		<Component showDepth={true} curDepth={0} />
	</svelte:fragment>
  </Lazy>
</figure>

A convenient property of procedurally generated art is that you can tweak the parameters to customise the appearance with ease. The recursive depth here is limited at 10 but you can edit the code to go as far as your hardware can handle. Another modifiable property is the angle. Move the slider below to see how the angle changes the appearance of our fractal tree.

<figure class="m-auto mb-20 h-80 w-80 sm:h-96 sm:w-96">
  <Lazy
	this={() => import("$lib/fractal-tree.svelte")}
	>
	<svelte:fragment slot="component" let:Component>
		<Component showAngle={true} />
	</svelte:fragment>
</Lazy>
</figure>

By now you probably have a good idea of what a fractal tree is, in which case we will now begin to build one.

## Building a 2D Fractal Tree

To build a branch we can stack together mesh's with cylinder geometry. The geometry will take the parameters: height, diameter bottom and diameter top, that will change as the tree 'grows'.
Below is an example of a single branch.

<figure class="m-auto mb-20 h-80 w-80 sm:h-96 sm:w-96">
  <Lazy
	this={() => import("$lib/Cylinder-Growth.svelte")}
	>
	<svelte:fragment slot="component" let:Component>
		<Component />
	</svelte:fragment>
</Lazy>
</figure>

You can see the cylinder decrease in height and diameter as we stack more cylinders with the top diameter shorter than the bottom to more closely resemble a branch. Each cylinder needs to be rotated as well which will be covered next.

### Centre of Rotation

We want to rotate our mesh by the end that meets the previous mesh, but by default it is likely that the centre of rotation, is well, the centre of the mesh. To change the centre of rotation, one way is to create and use an object as the parent of each cylinder to use that as the centre of transformation. If we place our mesh above the object so the endpoint of the cylinder meets the object, then by rotating the object we rotate the cylinder by its endpoint. You can see the difference in our desired centre of rotation (left) and the default centre of rotation (right). In this example I have also rendered the centre of rotation.

<figure class="m-auto mb-20 h-80 w-80 sm:h-96 sm:w-96">
<Lazy
	this={() => import("$lib/RotationPoints.svelte")}
	>
	<svelte:fragment slot="component" let:Component>
		<Component />
	</svelte:fragment>
</Lazy>
</figure>

Once we have our cylinder and pivot we have the ingredients to build our tree.

### Recursively generating our tree

Knowing the pattern repeats we can build a fractal tree using recursion with a chosen maximum depth as our termination condition. At each depth we are stacking a pair of cylinders to the current top set of cylinders.

```jsx
const maxDepth = 10;
function generate(depth ...) {
  // recursion break point
  if (depth > maxDepth) {
		return;
  }
  depth += 1;
  ...
}
```

Each call to the generate function is responsible for creating a single cylinder at a specified angle, and x,y,z coordinate. We then call the function twice more to create two more branches that we will stack with a reduced height and diameter and angles that decrease and increase by a fixed amount to achieve the affect of splitting branches.

```jsx
function generate(depth, angleZ, angleX, radius, height, x, y, z) {
  // check depth
  ...
  // create branch and pivot
  ...
  // update branch values for next depth
  radius *= ratio;
  height *= ratio;
  // cartesian coordinates
  x = ...
  y = ...
  z = ...
  generate(depth, angleZ + angle, angleX, radius, height, x, y, z);
  generate(depth, angleZ - angle, angleX, radius, height, x, y, z);
}
```

#### Using trigonometry to convert polar coordinates to cartesian

We want to connect the branches by their endpoints, to do this we need to know the start point of the previous branch. By knowing the angle we can achieve this using [trigonometry](https://en.wikipedia.org/wiki/Trigonometry.) and update the x,y,z coordinates as we progress along the tree. Remember how we changed the centre of rotation to the endpoint? We did this to rotate by the point each branch is connected by.

```jsx
// cartesian coordinates
x -= Math.sin(angleZ) * Math.cos(angleX) * height;
y += Math.cos(angleZ) * Math.cos(angleX) * height;
z += Math.sin(angleX) * height;
```

Finally once we have reached the end of recursion our fractal tree will be displayed.

## Building a 3D Fractal Tree

As a bonus lets build a 3D fractal. The mesh may be 3D but we were only rotating by the Z axis. We can add more volume to our tree by simply adding two more branches that instead rotate by the X axis. This totals to 4 generate function calls per generation which means we are now adding 4 branches for every branch until we reach the depth limit. You can orbit the tree by dragging it.

<figure class="m-auto mb-20 h-80 w-80 sm:h-96 sm:w-96">
    <Lazy
    this={() => import("$lib/fractal-tree.svelte")}
    >
    <svelte:fragment slot="component" let:Component>
      <Component curDepth={6} maxDepth={6} is3D={true} showDepth={true}/>
    </svelte:fragment>
  </Lazy>
</figure>

## Finishing up

You now know what a fractal tree is and saw how to build one. Procedural generation and fractals are both intriguing areas that can be explored much further as this is one of many fractals and arguably the simplest fractal. I hope you enjoyed a brief demonstration of a simple yet elegant pattern that can be found across nature.

### Resources

[Wikipedia](https://en.wikipedia.org/wiki/Fractal_canopy),
[The Coding Train](https://www.youtube.com/watch?v=0jjeOYMjmDU),
[Modernescartes](https://www.moderndescartes.com/essays/plants/)

___
