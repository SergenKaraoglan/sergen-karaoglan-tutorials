<script>
	import viewport from '$lib/scripts/useViewportAction';

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
		<img src="./loading.svg" class="h-48 w-48">
	{:then { default: Component }}
		<slot name="component" {Component} />
	{/await}
{/if}
