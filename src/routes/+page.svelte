<script>
  import treeimage from "$lib/assets/fractal-tree.png"

const project_list = [
  {
    title: "Fractal Tree",
    image: treeimage,
    technologies: ["Tailwind", "Babylon.js", "Svelte"],
    description:
      "Interact with and learn to create fractal trees.",
    demo: "/fractal-tree",
    github: "https://github.com/SergenKaraoglan/sergen-karaoglan-portfolio/blob/main/src/components/fractal-tree.jsx",
    type: "Procedural art",
  },
];
</script>

<svelte:head>
    <title>Home | Sergen Karaoglan</title>
    <meta name="description" content="Portfolio homepage of Sergen Karaoglan" />
</svelte:head>

<div
    class="relative overflow-hidden min-h-screen w-full pb-16 sm:pb-24 lg:pb-32"
  >
    <video
      class="h-full w-full object-cover absolute inset-0 -z-20"
      autoplay
      loop
      muted
      playsinline
    >
      <source src="/manim_montage.mp4" type="video/mp4" />Your browser does not
      support the video tag.
    </video>
    <div class="px-6 lg:px-8">
      <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div class="text-center">
          <h1
            class="text-4xl font-medium tracking-tight text-white sm:text-6xl"
          >
            Interactive tutorials on STEM, games and procedural art
          </h1>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#featured-projects"
              class="rounded-md bg-blue-500 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
            >
              Projects
            </a>
            <a
              href="#footer-heading"
              class="text-sm font-semibold leading-6 text-white"
            >
              Contact <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="featured-projects" class="mx-auto max-w-4xl py-20 sm:py-28 lg:py-36">
    <h2
      class="text-center text-3xl font-medium tracking-tight text-black sm:text-4xl py-7"
    >
      Projects
    </h2>
    <ul class="grid grid-cols-1 gap-6 sm:grid-cols-2">
      {#each project_list as data}
      <li
        class="col-span-2 divide-y divide-gray-200 rounded-lg bg-white shadow"
      >
        <div class="flex w-full items-center justify-between space-x-6 p-6">
          <div class="flex-1">
            <div class="flex items-center space-x-3">
              <h3 class="text-base font-medium text-gray-900">
                {data.title}
              </h3>
            </div>
            <p class="mt-1 text-sm text-gray-500">
              {data.technologies.join(", ")}
            </p>
            <p class="mt-1 text-sm text-gray-900">
              {data.description}
            </p>
          </div>
          <div class="h-auto w-1/4 flex-shrink-0">
          <img
            src={data.image}
            alt={data.title}
            >
          </div>
        </div>
        <div>
          <div class="-mt-px flex divide-x divide-gray-200">
            <div class="flex w-0 flex-1">
              <a
                href={data.demo}
                class="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
                    clip-rule="evenodd"></path>
                  <path
                    fill-rule="evenodd"
                    d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
                    clip-rule="evenodd"></path>
                </svg>
                <span class="ml-3">Demo</span>
              </a>
            </div>
            <div class="-ml-px flex w-0 flex-1">
              <a
                href={data.github}
                class="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.25 2A2.25 2.25 0 002 4.25v11.5A2.25 2.25 0 004.25 18h11.5A2.25 2.25 0 0018 15.75V4.25A2.25 2.25 0 0015.75 2H4.25zm4.03 6.28a.75.75 0 00-1.06-1.06L4.97 9.47a.75.75 0 000 1.06l2.25 2.25a.75.75 0 001.06-1.06L6.56 10l1.72-1.72zm4.5-1.06a.75.75 0 10-1.06 1.06L13.44 10l-1.72 1.72a.75.75 0 101.06 1.06l2.25-2.25a.75.75 0 000-1.06l-2.25-2.25z"
                    clip-rule="evenodd"></path>
                </svg>
                <span class="ml-3">Code</span>
              </a>
            </div>
          </div>
        </div>
      </li>
        {/each}
    </ul>
  </div>

