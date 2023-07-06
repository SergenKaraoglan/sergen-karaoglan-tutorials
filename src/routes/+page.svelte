<script>
	import treeimage from '$lib/assets/fractal-tree.png';
	import htmlimage from '$lib/assets/HTML5.svg';
	const project_list = [
		{
			title: 'Fractal Tree',
			image: treeimage,
			topics: ['Procedural Art', 'Fractals', 'Trigonometry', '3D Graphics', 'Recursion'],
			description: 'Interact with and learn to create fractal trees.',
			demo: '/fractal-tree'
		},
		{
			title: 'HTML',
			image: htmlimage,
			topics: ['HTML', 'DOM', 'Markup'],
			description: 'Learn the basics of HTML.',
			demo: '/html-fundementals'
		}
	];
</script>

<svelte:head>
	<title>Home | Sergen Karaoglan</title>
	<meta name="description" content="Portfolio homepage of Sergen Karaoglan" />
</svelte:head>

<div class="relative overflow-hidden min-h-screen w-full pb-16 sm:pb-24 lg:pb-32">
	<video class="h-full w-full object-cover absolute inset-0 -z-20" autoplay loop muted playsinline>
		<source src="/manim_montage.mp4" type="video/mp4" />Your browser does not support the video tag.
	</video>
	<div class="px-6 lg:px-8">
		<div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
			<div class="text-center">
				<h1 class="text-4xl font-medium tracking-tight text-white sm:text-6xl">
					Interactive tutorials on STEM, games and procedural art
				</h1>
				<div class="mt-10 flex items-center justify-center gap-x-6">
					<a
						href="#featured-projects"
						class="rounded-md bg-blue-500 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
					>
						Projects
					</a>
					<a href="#footer-heading" class="text-sm font-semibold leading-6 text-white">
						Contact <span aria-hidden="true">→</span>
					</a>
				</div>
			</div>
		</div>
	</div>
</div>
<div id="featured-projects" class="mx-auto max-w-4xl py-20 lg:py-32">
	<ul class="grid grid-cols-1 gap-6 sm:grid-cols-2">
		{#each project_list as data}
			<li class="col-span-2 divide-y divide-gray-200 rounded-lg bg-white shadow">
				<a href={data.demo} class="block hover:bg-gray-50">
					<div class="flex w-full items-center justify-between space-x-6 p-6">
						<div class="flex-1">
							<div class="flex items-center space-x-3">
								<h3 class="text-base font-medium text-gray-900">
									{data.title}
								</h3>
							</div>
							<p class="mt-1 text-sm text-gray-500">
								{data.topics.join(', ')}
							</p>
							<p class="mt-1 text-sm text-gray-900">
								{data.description}
							</p>
						</div>
						<div class="h-auto w-1/4 flex-shrink-0">
							<img class="mx-auto h-20 sm:h-32" src={data.image} alt={data.title} />
						</div>
					</div>
				</a>
			</li>
		{/each}
	</ul>
</div>
