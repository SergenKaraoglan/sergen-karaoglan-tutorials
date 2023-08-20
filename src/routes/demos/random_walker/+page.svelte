<script>
    import { onMount } from 'svelte';
    let canvas
    let x;
    let y;
    onMount(() => {
        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;
        x = width / 2;
        y = height / 2;
        setInterval(() => {
            ctx.fillStyle = '#000000';
            ctx.fillRect(x, y, 1, 1);
            x += Math.floor(Math.random() * 3) - 1;
            y += Math.floor(Math.random() * 3) - 1;
            x = x % width;
            y = y % height;
            x = Math.max(x, 0);
            y = Math.max(y, 0);

        }, 10)
    })
</script>
<canvas bind:this={canvas} class="mx-auto screen-1/2 w-full"></canvas>