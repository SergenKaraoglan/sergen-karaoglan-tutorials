<script>
    import PixelGoldfish from '$lib/assets/pixel-fishbowl.webp';
	let height = 100;
	let width = 100;
</script>

<div class="w-48 h-48 m-auto flex-center">
	<div class="border-2 flex-center m-auto" style="height:{height}px; width:{width}px">
		<img src={PixelGoldfish} class="h-1/2 w-1/2 " />
	</div>
</div>

<div class="m-auto w-fit mt-3">
	<input type="range" min="50" max="200" bind:value={height} />
	<input type="range" min="50" max="200" bind:value={width} />
</div>
