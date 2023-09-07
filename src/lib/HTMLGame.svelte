<script>
	// Initialize variables for tracking the drag-and-drop state
	let inputContainer;
	let container;
	let isDragging = false;
	let initialX, initialY;
	let x, y;

	let html = ``;

	let elements = [
		{ id: 0, value: '<h1>Chipmunk</h1>', display: '<h1>Chipmunk</h1>' },
		{ id: 1, value: '<p>Pixel art</p>', display: '<p>Pixel art</p>' },
		{ id: 2, value: '<img src="https://i.imgur.com/3FmEZ67.jpg">', display: '<img src=img.png>' }
	];

	function updateHTML(){
		const s = [];
		for (let i = 0; i < inputContainer.children.length; i++) {
			s.push(elements[inputContainer.children[i].id].value);
		}
		html =
			`<html><head>
            <style>img{height: 128px; width: 128px;}</style>
            </head> 
        <body>` +
			s.join('') +
			`</body></html>`;
	}

	function drop(event) {
		event.preventDefault();
		let id = event.dataTransfer.getData('text');
		event.target.appendChild(document.getElementById(id));
		updateHTML();
	}

	function touchStartDrag(e) {
		isDragging = true;
		initialX = e.touches[0].clientX;
		initialY = e.touches[0].clientY;
		e.preventDefault();
	}

	function touchDrag(e) {
		if (!isDragging) return;
		x = e.touches[0].clientX;
		y = e.touches[0].clientY;
		const offsetX = x - initialX;
		const offsetY = y - initialY;
		e.target.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
		e.preventDefault();
	}

	function touchDragEnd(e) {
		isDragging = false;
		const droppableRect = inputContainer.getBoundingClientRect();
		const centerX = x
		const centerY = y
		e.target.style.transform = `translate(0px, 0px)`;
		if (
			centerX >= droppableRect.left &&
			centerX <= droppableRect.right &&
			centerY >= droppableRect.top &&
			centerY <= droppableRect.bottom
		) {
			console.log('dropped');
			inputContainer.appendChild(e.target);
		} else {
			console.log('not dropped');
			container.appendChild(e.target);
		}
		updateHTML();
	}
</script>

<iframe class="mx-auto h-80 w-80 my-5 border" srcdoc={html} title="HTML game" />

<div class="flex w-fit mx-auto gap-5 my-7">
	<div
		bind:this={container}
		class="border w-40 h-36 sm:w-64 sm:h-64 mx-auto flex flex-col gap-2"
		on:dragover={(event) => event.preventDefault()}
		on:drop={(event) => drop(event)}
	>
		{#each elements as element}
			<div
				id={element.id}
				class="rounded-xl w-full bg-black text-white border-2 h-10 flex-center"
				draggable="true"
				on:dragstart={(event) => event.dataTransfer.setData('text', event.target.id)}
				on:dragover={(event) => event.stopPropagation()}
				on:touchstart={(event) => touchStartDrag(event)}
				on:touchmove={(event) => touchDrag(event)}
				on:touchend={(event) => touchDragEnd(event)}
				on:touchcancel={(event) => touchDragEnd(event)}
			>
				{element.display}
			</div>
		{/each}
	</div>

	<div
		class="border w-40 h-36 sm:w-64 sm:h-64 mx-auto flex flex-col gap-2"
		bind:this={inputContainer}
		on:dragover={(event) => event.preventDefault()}
		on:drop={(event) => drop(event)}
	/>
</div>
