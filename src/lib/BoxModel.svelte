<script>
	import PixelAstro from '$lib/assets/pixel-astro.webp';
	let padding = 0;
	let margin = 0;
</script>

<div class="mx-auto w-fit flex-center">
	<img src={PixelAstro} class="sm:h-32 sm:w-32 h-10 w-10 mx-5" />
	<div
		class="box-content sm:h-32 sm:w-32 h-10 w-10 mx-5 flex-center border-2"
		style="padding-left: {padding}px; padding-right: {padding}px; margin-left: {margin}px; margin-right: {margin}px;"
	>
		<img src={PixelAstro} />
	</div>
	<img src={PixelAstro} class="sm:h-32 sm:w-32 h-10 w-10 mx-5" />
</div>

<div class="mx-auto w-fit mt-3">
	<input class="w-36" type="range" min="0" max="50" step="1" bind:value={padding} />
	<input class="w-36" type="range" min="0" max="50" step="1" bind:value={margin} />
</div>
