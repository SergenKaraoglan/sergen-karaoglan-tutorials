<script>
	let html = ``;

	let elements = [
		{ id: 0, value: '<h1>Chipmunk</h1>' },
		{ id: 1, value: '<p>Pixel art</p>' },
		{ id: 2, value: '<img src="https://i.imgur.com/3FmEZ67.jpg">' }
	];

	function drop(event) {
		event.preventDefault();
		let data = event.dataTransfer.getData('text');
		event.target.innerHTML += elements[data].value;
		html = `<html><head></head> <body>` + elements[data].value + `</body> </html>`;
		console.log(html);
	}
</script>

<iframe class="mx-auto h-96 w-80 sm:w-96 my-5 border" srcdoc={html} title="HTML game" />

<div class="flex w-fit mx-auto gap-5 my-7">
	<div class="border w-64 h-64 mx-auto flex flex-col gap-2">
		{#each elements as element}
			<div
				id={element.id}
				class="rounded-xl w-full bg-black text-white h-10 text-center"
				draggable="true"
				on:dragstart={(event) => event.dataTransfer.setData('text', event.target.id)}
			>
				{element.value}
			</div>
		{/each}
	</div>

	<div
		class="border w-64 h-64 mx-auto flex flex-col gap-2 overflow-hidden"
		on:dragover={(event) => event.preventDefault()}
		on:drop={(event) => drop(event)}
	/>
</div>
