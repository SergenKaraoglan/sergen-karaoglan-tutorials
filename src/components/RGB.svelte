<script>
	import "../styles/global.css"

	$: hex =  "#" + ((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1);
	let red = 0;
	let green = 0;
	let blue = 0;
	
</script>

<div class="h-32 w-32 mx-auto flex justify-center items-center" style={"background-color:" + hex}>
	{hex}
</div>

<div class="mx-auto w-fit">
<input type=range min=0 max=255 step=1 bind:value={red}>
<input type=range min=0 max=255 step=1 bind:value={green}>
<input type=range min=0 max=255 step=1 bind:value={blue}>
</div>