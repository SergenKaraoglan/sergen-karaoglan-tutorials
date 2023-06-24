<script>
import DOMTree from "$lib/DOM-Tree.svelte";
import RGB from "$lib/RGB.svelte";
</script>

<svelte:head>
	<title>HTML and CSS Fundamentals | Sergen Karaoglan</title>
	<meta name="description" content="Learn the fundamentals of CSS and HTML" />
</svelte:head>

<DOMTree />

<article class="max-sm:mx-4 prose lg:prose-xl m-auto pt-16">
# HTML and CSS Fundamentals

Let me just start by saying there are 3 fundamental concepts about CSS that you only need to understand to be able create pretty much any website with any styling you want. It is common for a tutorial to bore you with syntax details or for a beginner to get lost with the breadth of features that CSS provides. I mean CSS provides enough features that you can build your own [game](https://codeburst.io/mario-kart-css-7572bd2ce608) without any JavaScript.


mario

Lets start with a div element containing "Hello World". This div like many other HTML elements is made up of an anatomy called the box model.

<div class="h-48 w-48 border mx-auto flex-center">Hello World</div>

<div class="my-3">
  <RGB />
</div>


## Resources
### HTML
[DOM Tree](https://bioub.github.io/dom-visualizer/)
[DOM CSS Tree](https://fritscher.ch/dom-css/)
### CSS
[W3Schools](https://www.w3schools.com/css/),
[Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS),
[Web.dev](https://web.dev/learn/css/)

</article>