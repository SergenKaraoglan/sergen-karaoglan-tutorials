<script>
	import { onMount } from 'svelte';
	import * as subject_graph from '$lib/scripts/subjects.json';

	let nodes;
	let svg_canvas;
	const width = 500;
	const height = 500;

	const subjects = subject_graph.subjects;
	const links = subject_graph.links;
	const rx = 50;
	const ry = 30;
	onMount(() => {
		let cx;
		let cy;
		for (const subject of subjects) {
			cx = Math.random() * (width - rx * 2.5) + rx;
			cy = Math.random() * (height - ry * 2.5) + ry;
			// no overlap
			for (const node of nodes.children) {
				const x = node.cx.baseVal.value;
				const y = node.cy.baseVal.value;
				while (Math.abs(x - cx) < (rx * 4) && Math.abs(y - cy) < (ry * 4)) {
					cx = Math.random() * (width - rx * 2.5) + rx;
					cy = Math.random() * (height - ry * 2.5) + ry;
				}
			}
			const ellipse = createEllipse(rx, ry, cx, cy);
			nodes.append(ellipse);
			// const textNode = createText(subject.name, 250, 250);
			// svg_canvas.append(textNode);
		}
	});

	function createEllipse(rx, ry, cx, cy) {
		const ellipse = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
		ellipse.setAttribute('rx', rx);
		ellipse.setAttribute('ry', ry);
		ellipse.setAttribute('cy', cy);
		ellipse.setAttribute('cx', cx);
		return ellipse;
	}

	function createText(text, x, y) {
		const textElement = document.createElementNS('http://www.w3.org/2000/svg', 'text');
		textElement.textContent = text;
		textElement.setAttribute('fill', 'black');
		textElement.setAttribute('font-size', '20px');
		textElement.setAttribute('x', x);
		textElement.setAttribute('y', y);
		return textElement;
	}
</script>

<svg bind:this={svg_canvas} class="m-auto outline" {width} {height}>
	<!-- <line x1="10" x2="50" y1="110" y2="150" stroke="black" stroke-width="5"/> -->
	<g bind:this={nodes} stroke="blue" fill="blue" stroke-width="5">
		<!-- <ellipse cx="250" cy="250" rx="50" ry="30" /> -->
	</g>
</svg>
