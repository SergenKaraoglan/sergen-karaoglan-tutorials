<script>
    import image from "$lib/assets/astronaut.png"
    import { page } from '$app/stores';
</script>
<div class="relative isolate h-screen">
    <img
      src={image}
      alt="astronaut floating in space"
      class="absolute inset-0 -z-10 h-full w-full object-cover object-top opacity-50"
    />
    <div class="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
      <p class="text-base font-semibold leading-8 text-black">{$page.status}</p>
      <h1 class="mt-4 text-3xl font-bold tracking-tight text-black sm:text-5xl">
        {$page.error.message}
      </h1>
      <p class="mt-4 text-base text-black/70 sm:mt-6"></p>
      <div class="mt-10 flex justify-center">
        <a href="/" class="text-sm font-semibold leading-7 text-black">
          <span aria-hidden="true">&larr;</span> Back to home
        </a>
      </div>
    </div>
</div>