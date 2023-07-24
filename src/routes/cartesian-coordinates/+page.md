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

# Cartesian Coordinates
## One Dimension
<OneD />

## Two Dimensions
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
___
<GithubStar />
</article>