<script>
    import PixelGoldfish from '$lib/assets/pixel-fishbowl.webp';
	let height = 120;
	let width = 120;
</script>

<div class="w-48 h-48 m-auto flex-center">
	<div class="border-2 flex-center m-auto" style="height:{height}px; width:{width}px">
		<img src={PixelGoldfish} class="h-3/4 w-3/4 " />
	</div>
</div>

<div class="m-auto w-fit mt-3">
	<input class="w-36" type="range" min="50" max="200" bind:value={height} />
	<input class="w-36" type="range" min="50" max="200" bind:value={width} />
</div>
