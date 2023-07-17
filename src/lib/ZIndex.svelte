<script>
    let z = 0;
</script>

<div class="w-32 h-32 relative flex-center m-auto">
    <div class="absolute w-28 h-28 bg-blue-500 opacity-60 -translate-y-5"></div>
    <div class="absolute w-28 h-28 bg-red-500 opacity-100 flex-center text-white text-md" style="z-index: {z};">Z: {z}</div>
</div>
<input class="m-auto block mt-2" type="range" step="1" min="-1" max="0" bind:value={z} />
