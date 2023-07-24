<script>
	import PixelTiger from '$lib/assets/pixel-tiger.webp';
	let distance = 0;
</script>

<div class="mx-auto my-3 w-fit">
	<div class="mx-auto w-fit relative" style="left:{distance * 20}px;">
		<img src={PixelTiger} alt="Pixel Tiger" class="w-32 h-32 mx-auto my-3" />
		<div class="mx-auto w-10 h-10 flex-center text-5xl">
			{distance}
		</div>
	</div>
	<input
		class="block mx-auto appearance-none bg-blue-500 rounded-lg h-1 thumb-lg-blue-700 my-5"
		type="range"
		min="-5"
		max="5"
		step="0.1"
		bind:value={distance}
	/>
</div>
