<script>
	import Chipmunk from '$lib/assets/pixel-chipmunk.webp';
	import * as d3 from 'd3';
	import { onMount } from 'svelte';
	let svg_container;
	let html = `<html>
	<head>
		<style>
			img {
				width: 250px;
				height: 250px;
			}
		</style>
	</head>
    <body>
		<h1>Chipmunk</h1>
		<p>Pixel art</p> 
		<img src="https://i.imgur.com/3FmEZ67.jpg">
    </body>
  </html>
`;

	onMount(() => {
		parseTree();
	});

	function Tree(
		data,
		{
			path,
			id = Array.isArray(data) ? (d) => d.id : null,
			parentId = Array.isArray(data) ? (d) => d.parentId : null,
			children,
			tree = d3.tree,
			sort,
			label = (d) => d.data.tagName, // given a node d, returns the display name
			title, // given a node d, returns its hover text
			link, // given a node d, its link (if any)
			linkTarget = '_blank', // the target attribute for links (if any)
			width = 640, // outer width, in pixels
			height, // outer height, in pixels
			r = 3,
			padding = 1, // horizontal padding for first and last column
			fill = '#999', // fill for nodes
			fillOpacity, // fill opacity for nodes
			stroke = '#555', // stroke for links
			strokeWidth = 1.5,
			strokeOpacity = 0.4,
			strokeLinejoin,
			strokeLinecap,
			halo = '#fff',
			haloWidth = 1,
			curve = d3.curveBumpX
		} = {}
	) {
		// If id and parentId options are specified, or the path option, use d3.stratify
		// to convert tabular data to a hierarchy; otherwise we assume that the data is
		// specified as an object {children} with nested objects (a.k.a. the “flare.json”
		// format), and use d3.hierarchy.
		const root =
			path != null
				? d3.stratify().path(path)(data)
				: id != null || parentId != null
				? d3.stratify().id(id).parentId(parentId)(data)
				: d3.hierarchy(data, children);

		// Sort the nodes.
		if (sort != null) root.sort(sort);

		// Compute labels and titles.
		const descendants = root.descendants();
		const L = label == null ? null : descendants.map((d) => label(d.data, d));

		// Compute the layout.
		const dx = 10;
		const dy = width / (root.height + padding);
		tree().nodeSize([dx, dy])(root);

		// Center the tree.
		let x0 = Infinity;
		let x1 = -x0;
		root.each((d) => {
			if (d.x > x1) x1 = d.x;
			if (d.x < x0) x0 = d.x;
		});

		// Compute the default height.
		if (height === undefined) height = x1 - x0 + dx * 2;

		// Use the required curve
		if (typeof curve !== 'function') throw new Error(`Unsupported curve`);

		const svg = d3
			.create('svg')
			.attr('viewBox', [(-dy * padding) / 2, x0 - dx, width, height])
			.attr('width', width)
			.attr('height', height)
			.attr('style', 'max-width: 100%; height: auto; height: intrinsic;')
			.attr('font-family', 'sans-serif')
			.attr('font-size', 10);

		svg
			.append('g')
			.attr('fill', 'none')
			.attr('stroke', stroke)
			.attr('stroke-opacity', strokeOpacity)
			.attr('stroke-linecap', strokeLinecap)
			.attr('stroke-linejoin', strokeLinejoin)
			.attr('stroke-width', strokeWidth)
			.selectAll('path')
			.data(root.links())
			.join('path')
			.attr(
				'd',
				d3
					.link(curve)
					.x((d) => d.y)
					.y((d) => d.x)
			);

		const node = svg
			.append('g')
			.selectAll('a')
			.data(root.descendants())
			.join('a')
			.attr('xlink:href', link == null ? null : (d) => link(d.data, d))
			.attr('target', link == null ? null : linkTarget)
			.attr('transform', (d) => `translate(${d.y},${d.x})`);

		node
			.append('circle')
			.attr('fill', (d) => (d.children ? stroke : fill))
			.attr('r', r);

		if (title != null) node.append('title').text((d) => title(d.data, d));

		if (L)
			node
				.append('text')
				.attr('dy', '0.32em')
				.attr('x', (d) => (d.children ? -6 : 6))
				.attr('text-anchor', (d) => (d.children ? 'end' : 'start'))
				.attr('paint-order', 'stroke')
				.attr('stroke', halo)
				.attr('stroke-width', haloWidth)
				.text((d, i) => L[i]);

		return svg.node();
	}

	function parseTree() {
		svg_container.innerHTML = '';
		const parser = new DOMParser();
		const example_doc = parser.parseFromString(html, 'text/html');
		let d3_data = d3.hierarchy(example_doc.children[0]);
		let tree_svg = Tree(d3_data);
		// console.log(tree_svg);
		svg_container.append(tree_svg);
	}
</script>

<iframe class="mx-auto h-96 w-80 sm:w-96 my-5" srcdoc={html} title="HTML example" />
<div class="mx-auto my-10 " bind:this={svg_container} />
<textarea bind:value={html} class="mx-auto my-5 flex flex-center border" rows="8" cols="35" on:input={parseTree} />
