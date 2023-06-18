<script>
	import { onMount } from 'svelte';
	import * as subject_graph from '$lib/scripts/subjects.json';

	let svg_canvas;
	const width = 500;
	const height = 500;

	const subjects = subject_graph.subjects;
	const links = subject_graph.links;
	const rx = 70;
	const ry = 40;
	onMount(() => {
		const nodes = document.createElementNS('http://www.w3.org/2000/svg', 'g');
		nodes.setAttribute('stroke', 'blue');
		nodes.setAttribute('fill', 'blue');
		nodes.setAttribute('stroke-width', '1');

		const text_nodes = document.createElementNS('http://www.w3.org/2000/svg', 'g');
		text_nodes.setAttribute('fill', 'white');
		text_nodes.setAttribute('font-size', '16');
		text_nodes.setAttribute('font-family', 'sans-serif');
        text_nodes.setAttribute('text-anchor', 'middle');

        const link_nodes = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        link_nodes.setAttribute('stroke', 'grey');
        link_nodes.setAttribute('stroke-width', '1');
        
		let cx;
		let cy;
		for (const subject of subjects) {
			// no overlap
			while (true) {
				let finished = true;
				cx = Math.round(Math.random() * (width - rx * 2) + rx);
				cy = Math.round(Math.random() * (height - ry * 2) + ry);
				for (const node of nodes.children) {
					const x = node.cx.baseVal.value;
					const y = node.cy.baseVal.value;

					if (Math.abs(x - cx) < rx * 2.5 && Math.abs(y - cy) < ry * 2.5) {
						finished = false;
						break;
					}
				}
				if (finished) {
					subject.cx = cx;
					subject.cy = cy;
					break;
				}
			}

			const ellipse = createEllipse(rx, ry, cx, cy);
            const anode = document.createElementNS('http://www.w3.org/2000/svg', 'a');
            anode.setAttribute('href', '/');
            anode.append(ellipse);
            svg_canvas.append(anode);
			//nodes.append(ellipse);
			const textNode = createText(subject.name, cx, cy);
			text_nodes.append(textNode);
		}

		for (const link of links) {
			let source;
			let target;
			for (const subject of subjects) {
				if (subject.name === link.source) {
					source = subject;
				}
				if (subject.name === link.target) {
					target = subject;
				}
			}
			const x1 = source.cx;
			const y1 = source.cy;
			const x2 = target.cx;
			const y2 = target.cy;
			const line = createLine(x1, y1, x2, y2);
			link_nodes.append(line);
		}
        svg_canvas.append(link_nodes);
		svg_canvas.append(nodes);
        svg_canvas.append(text_nodes);
        
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
		textElement.setAttribute('x', x);
		textElement.setAttribute('y', y);
		return textElement;
	}

	function createLine(x1, y1, x2, y2) {
		const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
		line.setAttribute('x1', x1);
		line.setAttribute('x2', x2);
		line.setAttribute('y1', y1);
		line.setAttribute('y2', y2);
		return line;
	}
</script>

<svg bind:this={svg_canvas} class="m-auto bg-black" {width} {height} />
