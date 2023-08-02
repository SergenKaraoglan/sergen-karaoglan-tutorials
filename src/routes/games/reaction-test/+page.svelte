<script>
	let state = 0;
	let time;
	let timeout;
    let bestTime;
	function run() {
		if (state == 1) {
			clearTimeout(timeout);
			state = 4;
		} else if (state == 2) {
			state = 3;
			time = Date.now() - time;
            bestTime = Math.min(bestTime, time) || time;
		} else {
			state = 1;
			startTime();
		}
	}

	function startTime() {
		timeout = setTimeout(() => {
			state = 2;
			time = Date.now();
		}, Math.random() * 3000 + 1000);
	}
</script>

<div
	class="h-screen w-full flex-center flex-col text-white text-5xl"
    style="background-color: {state == 0 ? 'blue' : state == 1 || state == 4 ? 'red' : '#008000'}; {state == 1 && 'animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;'}"
	on:click={() => run()}
	on:keydown={() => run()}
	on:touchend={() => run()}
>
	{#if state == 0}
		Test your reaction time!
		<p class="text-lg">Click anywhere to start</p>
	{:else if state == 1}
		Wait for green!
	{:else if state == 2}
		Click now!
	{:else if state == 3}
		Your reaction time is {time}ms
		<p class="text-lg">Click anywhere to restart</p>
	{:else}
		Too early!
        <p class="text-lg">Try again</p>
	{/if}
</div>

<p class="w-fit mx-auto text-3xl mt-3">Best time: {bestTime ? bestTime : '____'}ms</p>

<style>
    @keyframes pulse {
    50% {
        opacity: .5;
    }
}
</style>