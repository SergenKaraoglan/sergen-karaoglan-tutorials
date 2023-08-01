<script>
import GithubStar from "$lib/GithubStar.svelte";
import Lazy from "$lib/Lazy.svelte";
import OneD from "$lib/1Dcoor.svelte";
import TwoD from "$lib/2Dcoor.svelte";
</script>

<svelte:head>
	<title>Cartesian coordinates | Sergen Karaoglan</title>
	<meta name="description" content="Learn about cartesian coordinates" />
</svelte:head>

<article class="max-md:mx-4 prose lg:prose-xl m-auto pt-16">

*Under construction*
# Cartesian Coordinate System
The cartesian coordinate system is a system that allows us to locate a point in space using [real numbers](https://en.wikipedia.org/wiki/Cartesian_coordinate_system). This is incredibly helpful in certain fields such as game development for which you want to be able to identify every point space to place objects within a scene and identify their location.

## One Dimension

The one dimensional case can be seen as a number line that contains our real numbers. If you drag the slider below, you can see the position of the tiger change along with a single value. Real numbers can be decimals and positive and negative whole numbers, each number in this case representing a point across a one dimensional space that the tiger will move to.

<OneD />

The starting point in the example is 0 which is identified as the **origin**.

## Two Dimensions
In the two dimensional case we still have real numbers that represents a point in space but now with an extra axis and a pair of real numbers to represent a location.

<TwoD />

## Three Dimensions
<Lazy
	this={() => import("$lib/3Dcoor.svelte")}
	>
	<svelte:fragment slot="component" let:Component>
		<Component />
	</svelte:fragment>
</Lazy>

### Resources
[Wikipedia](https://en.wikipedia.org/wiki/Cartesian_coordinate_system)
___
<GithubStar />
</article>