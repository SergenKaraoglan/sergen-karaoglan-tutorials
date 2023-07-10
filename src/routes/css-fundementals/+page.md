<script>
import RGB from "$lib/RGB.svelte";
import BoxModel from "$lib/BoxModel.svelte";
</script>

<svelte:head>
	<title>CSS Fundamentals | Sergen Karaoglan</title>
	<meta name="description" content="Learn the fundamentals of CSS" />
</svelte:head>

<article class="max-sm:mx-4 prose lg:prose-xl m-auto pt-16">

# CSS Fundamentals

Let me just start by saying there are 3 fundamental concepts about CSS that you only need to understand to style websites in almost anyway you want not including animations. It is common for a tutorial to bore you with syntax details or for a beginner to get lost with the breadth of features that CSS provides. I mean CSS provides enough features that you can build your own [game](https://codeburst.io/mario-kart-css-7572bd2ce608) without any JavaScript.

Lets start with a div element containing "Hello World". This div like many other HTML elements is made up of an anatomy called the box model.

<div class="h-48 w-48 mx-auto flex-center">Hello World</div>

<div class="mt-4" ><BoxModel /></div>

The box is made up of the <span class="text-blue-700">margin</span>, <span class="text-blue-600">border</span>, <span class="text-blue-500">padding</span> and <span class="text-blue-400">content</span>, in that order towards the centre.

### Resources
[W3Schools](https://www.w3schools.com/css/),
[Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS),
[Web.dev](https://web.dev/learn/css/)

</article>