<script>
    import PixelPlanet from '$lib/assets/pixel-planet.webp';
    let width = 100;
</script>

<div class="h-52 w-52 m-auto flex flex-center p-5">
<img src={PixelPlanet} width={width} alt="an image is supposed to be here!">
</div>

<code class="m-auto flex flex-center">&ltimg src='img.png' width=<input class="border" type="text" minlength="4" maxlength="8" size="10" bind:value={width}>&gt</code>
