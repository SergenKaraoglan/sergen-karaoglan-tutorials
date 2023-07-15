<script>
	import PixelTiger from '$lib/assets/pixel-tiger.webp';
	let value = 0;
</script>

<div class="mx-auto my-3 w-fit">
	<img
		src={PixelTiger}
		alt="Pixel Tiger"
		class="relative w-32 h-32 mx-auto my-3"
		style="left:{value * 20}px;"
	/>
	<div class="mx-auto w-10 h-10 flex-center text-5xl">
		{value}
	</div>
	<input
		class="block mx-auto appearance-none bg-blue-500 rounded-lg h-1 thumb-lg-blue-700 my-5"
		type="range"
		min="-5"
		max="5"
		step="0.1"
		bind:value
	/>
</div>
