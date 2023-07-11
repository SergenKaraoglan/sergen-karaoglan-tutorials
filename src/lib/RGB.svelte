<script>
	$: hex =  "#" + ((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1);
	// calculate luminance
	$: textColor = ((0.2126*red + 0.7152*green + 0.0722*blue) < 128 && alpha > 0.5) ? "#ffffff" : "#000000";
	let red = 255;
	let green = 255;
	let blue = 255;
	let alpha = 1;

	// background image
	// selector
	// height / width
	// box model
</script>

<div class="h-48 w-48 mx-auto flex-center" style="background-color: {hex}; color: {textColor}">
	{hex}
</div>

<div class="mx-auto w-fit mt-3">
<input class="appearance-none bg-red-500 thumb-md-red-500 rounded-lg h-2" type=range min=0 max=255 step=1 bind:value={red}>
<input class="appearance-none bg-green-500 thumb-md-green-500 rounded-lg h-2" type=range min=0 max=255 step=1 bind:value={green}>
<input class="appearance-none bg-blue-500 thumb-md-blue-500 rounded-lg h-2" type=range min=0 max=255 step=1 bind:value={blue}>
</div>

