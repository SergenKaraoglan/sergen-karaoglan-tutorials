<script>
	import "../styles/global.css"

	$: hex =  "#" + ((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1);
	// calculate luminance
	$: textColor = ((0.2126*red + 0.7152*green + 0.0722*blue) < 128 && alpha > 0.5) ? "#ffffff" : "#000000";
	let red = 0;
	let green = 0;
	let blue = 0;
	let alpha = 1;

</script>

<div class="h-48 w-48 mx-auto flex justify-center items-center" style="background-color: {hex}; color: {textColor}">
	{hex}
</div>

<div class="mx-auto w-fit mt-3">
<input type=range min=0 max=255 step=1 bind:value={red}>
<input type=range min=0 max=255 step=1 bind:value={green}>
<input type=range min=0 max=255 step=1 bind:value={blue}>
</div>