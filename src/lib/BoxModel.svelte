<script>
	let padding = 0;
	let margin = 0;
</script>

<div class="mx-auto w-fit flex-center">
    <span class="sm:h-32 sm:w-32 h-10 w-10 mx-5 flex-center border">hello</span>
	<span
		class="sm:h-32 sm:w-32 h-10 w-10 flex-center border"
		style="padding-left: {padding}px; padding-right: {padding}px; margin-left: {margin}px; margin-right: {margin}px;"
		>Hello</span
	>
    <span class="sm:h-32 sm:w-32 h-10 w-10 mx-5 flex-center border">hello</span>
</div>

<div class="mx-auto w-fit mt-3 sm:hidden block">
    <input type="range" min="0" max="50" step="1" bind:value={padding} />
    <input type="range" min="0" max="50" step="1" bind:value={margin} />
</div>
<div class="mx-auto w-fit mt-3 sm:block hidden">
    <input type="range" min="60" max="100" step="1" bind:value={padding} />
    <input type="range" min="0" max="100" step="1" bind:value={margin} />
</div>