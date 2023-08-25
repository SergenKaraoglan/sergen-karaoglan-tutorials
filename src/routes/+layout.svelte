<script>
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });

	import '../app.css';
	const navigation = {
		social: [
			{
				name: 'GitHub',
				href: 'https://github.com/SergenKaraoglan',
				svg: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
			},
			// {
			// 	name: 'LinkedIn',
			// 	href: 'https://www.linkedin.com/in/sergen-karaoglan',
			// 	svg: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'
			// }
			{
				name: 'Twitter',
				href: 'https://twitter.com/SergenKaraogla2',
				svg: 'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84'
			}
			// {
			//   name: "YouTube",
			//   href: "https://www.youtube.com/@sergenkaraoglan/featured",
			//   svg: "M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z",
			// },
		]
	};

	const email = 'sergenkaraoglan@outlook.com';
	let showTip = false;
	function copyEmail() {
		navigator.clipboard.writeText(email);
		showTip = true;
		setTimeout(() => {
			showTip = false;
		}, 1000);
	}
</script>

<nav class="bg-black">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<div class="flex-shrink-0">
				<a data-sveltekit-reload href="/">
					<img class="block h-3 w-auto sm:hidden" src="/logo.svg" alt="Sergen Karaoglan logo" />
					<img class="hidden h-4 w-auto sm:block" src="/logo.svg" alt="Sergen Karaoglan logo" />
				</a>
			</div>
		</div>
	</div>
</nav>
<main>
	<slot />
</main>
<footer aria-labelledby="footer-heading">
	<h2 id="footer-heading" class="sr-only">Footer</h2>
	<div class="mx-auto max-w-7xl px-6 pb-8 pt-10 lg:px-8 lg:pt-16">
		<div class="border-t border-gray-900/10 pt-8 lg:flex lg:items-center lg:justify-between">
			<div>
				<h3 class="text-sm font-semibold leading-6 text-gray-900">Contact</h3>
				<p class="mt-2 text-sm leading-6 text-gray-600">
					Open to feedback, questions and discussion.
				</p>
			</div>
			<button
				on:click={copyEmail}
				class="relative flex items-center mt-4 max-w-fit lg:mt-0 rounded-md bg-blue-700 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 shadow-blue-400"
			>
				<p>{email}</p>
				<div class="ml-2 sm:ml-4 sm:flex-shrink-0">
					<svg
						id="clipboard"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z"
						/>
					</svg>
				</div>
				{#if showTip}
					<span
						class="absolute bottom-full m-auto right-0 left-0 max-w-fit rounded bg-gray-800 p-2 text-xs text-white"
					>
						Copied
						<svg
							class="absolute text-black h-2 w-full left-0 top-full"
							x="0px"
							y="0px"
							viewBox="0 0 255 255"
						>
							<polygon class="fill-current" points="0,0 127.5,127.5 255,0" />
						</svg>
					</span>
				{/if}
			</button>
		</div>
		<div class="mt-8 border-t border-gray-900/10 pt-8 md:flex md:items-center md:justify-between">
			<div class="flex space-x-6 md:order-2">
				{#each navigation.social as item}
					<a href={item.href} class="text-gray-500 hover:text-gray-400">
						<span class="sr-only">{item.name}</span>
						<svg fill="currentColor" viewBox="0 0 24 24" class="h-6 w-6" aria-hidden="true">
							<path fill-rule="evenodd" d={item.svg} clip-rule="evenodd" />
						</svg>
					</a>
				{/each}
			</div>
			<p class="mt-8 text-xs leading-5 text-gray-500 md:order-1 md:mt-0">
				&copy; 2023 Sergen Karaoglan.
			</p>
		</div>
	</div>
</footer>
