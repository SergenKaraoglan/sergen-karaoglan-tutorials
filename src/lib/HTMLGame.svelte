<script>
	let html = ``;

	let elements = [
		{ id: 0, value: '<h1>Chipmunk</h1>' },
		{ id: 1, value: '<p>Pixel art</p>' },
		{ id: 2, value: '<img src="https://i.imgur.com/3FmEZ67.jpg">' }
	];

	function drop(event) {
		event.preventDefault();
		let id = event.dataTransfer.getData('text');
		event.target.appendChild(document.getElementById(id));
        const s = [];
        for (let i = 0; i < input.children.length; i++) {
            s.push(elements[input.children[i].id].value);
        }
		html = `<html><head>
            <style>img{height: 128px; width: 128px;}</style>
            </head> 
        <body>` + s.join('') + `</body></html>`;
	}
</script>

<iframe class="mx-auto h-96 w-80 sm:w-96 my-5 border" srcdoc={html} title="HTML game" />

<div class="flex w-fit mx-auto gap-5 my-7">
	<div
		class="border w-40 h-36 sm:w-64 sm:h-64 mx-auto flex flex-col gap-2"
		on:dragover={(event) => event.preventDefault()}
		on:drop={(event) => drop(event)}
	>
		{#each elements as element}
			<div
				id={element.id}
				class="rounded-xl w-full bg-black text-white h-10 flex-center"
				draggable="true"
				on:dragstart={(event) => event.dataTransfer.setData('text', event.target.id)}
                on:dragover={(event) => event.stopPropagation()}
			>
				{element.value}
			</div>
		{/each}
	</div>

	<div
		class="border w-40 h-36 sm:w-64 sm:h-64 mx-auto flex flex-col gap-2 overflow-hidden"
        id = "input"
		on:dragover={(event) => event.preventDefault()}
		on:drop={(event) => drop(event)}
	/>
</div>
