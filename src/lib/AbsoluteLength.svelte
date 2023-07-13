<script>
	let width = 100;
    $: cm = Math.round(width * 0.0264583333 * 100) / 100;
    $: mm = Math.round(width * 0.264583333 * 100) / 100;
    $: inch = Math.round(width * 0.0104166667 * 100) / 100;
    $: pt = Math.round(width * 0.75 * 100) / 100;
    
</script>

<div class="grid grid-cols-5 gap-1">
	<div class="text-sm sm:text-xl font-bold">
		{width}px
	</div>
	<div class="text-sm sm:text-xl font-bold">
		{cm}cm
	</div>
	<div class="text-sm sm:text-xl font-bold">
		{mm}mm
	</div>
	<div class="text-sm sm:text-xl font-bold">
		{inch}in
	</div>
	<div class="text-sm sm:text-xl font-bold">
		{pt}pt
	</div>
</div>
<div class="bg-black h-2 rounded-md my-5" style="width: {width}px;" />
<input class="block mx-auto" type="range" min="0" max="300" bind:value={width} />
