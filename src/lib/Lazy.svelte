<script>
	import viewport from '$lib/scripts/useViewportAction';
	import loadingImage from "$lib/assets/loading.svg";

	let loadComponent;
	export { loadComponent as this };

	let isShowingComponent = false;
	let componentPromise;
</script>

{#if !isShowingComponent}
	<div
		use:viewport
		on:enterViewport={() => {
			componentPromise = loadComponent();
			isShowingComponent = true;
		}}
	/>
{:else}
	{#await componentPromise}
		<img src={loadingImage} class="h-48 w-48 animate-pulse" alt="loading screen">
	{:then { default: Component }}
		<slot name="component" {Component} />
	{/await}
{/if}
