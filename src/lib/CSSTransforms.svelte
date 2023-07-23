<script>
    let selected;
	let tx = 0;
	let ty = 0;
    let sx = 1;
    let sy = 1;
    let rotate = 0;
    let skewX = 0;
    let skewY = 0;
</script>

<div class="m-auto w-48 h-48 flex-center">
	<div class="rounded bg-blue-500 h-12 w-12" style="transform: translate({tx}rem, {ty}rem) rotate({rotate}deg) scale({sx}, {sy}) skew({skewX}deg, {skewY}deg);" />
</div>

<select bind:value={selected} class="mx-auto mb-5 mt-3 block">
    <option value="translate">Translate</option>
    <option value="scale">Scale</option>
    <option value="rotate">Rotate</option>
    <option value="skew">Skew</option>
</select>


<div class="m-auto w-fit">
    {#if selected == "translate"}
	<input type="range" step="0.25" min="-5" max="5" bind:value={tx} />
	<input type="range" step="0.25" min="-5" max="5" bind:value={ty} />
    {:else if selected == "scale"}
    <input type="range" step="0.25" min="0" max="3" bind:value={sx} />
    <input type="range" step="0.25" min="0" max="3" bind:value={sy} />
    {:else if selected == "rotate"}
    <input type="range" step="1" min="0" max="360" bind:value={rotate} />
    {:else if selected == "skew"}
    <input type="range" step="1" min="-30" max="30" bind:value={skewX} />
    <input type="range" step="1" min="-30" max="30" bind:value={skewY} />
    {/if}
</div>
