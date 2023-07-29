<script>
	import image from '$lib/assets/astronaut.png';
	import { page } from '$app/stores';
</script>

<div class="relative isolate h-screen">
	<img
		src={image}
		alt="astronaut floating in space"
		class="absolute inset-0 -z-10 h-full w-full object-cover object-top opacity-100"
	/>
	<div class="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
		<p class="text-base font-semibold leading-8 text-white">{$page.status}</p>
		<h1 class="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
			{$page.error.message}
		</h1>
		<div class="mt-8 flex justify-center">
			<a href="/" class="text-sm font-semibold leading-7 text-white">
				<span aria-hidden="true">&larr;</span> Back to home
			</a>
		</div>
	</div>
</div>
