<script>
import RGB from "$lib/RGB.svelte";
</script>

<svelte:head>
	<title>CSS Fundamentals | Sergen Karaoglan</title>
	<meta name="description" content="Learn the fundamentals of CSS" />
</svelte:head>

<article class="max-sm:mx-4 prose lg:prose-xl m-auto pt-16">

# CSS Fundamentals

Lets jump straight to it, CSS which stands for [Cascading Style Sheets](https://en.wikipedia.org/wiki/CSS) is a language with the purpose of styling a document. Whilst HTML is used for structuring a page and adding content, with CSS we can further customise our document by changing the background color or choosing the exact number of pixels of space we want around our content. It is common for a tutorial to expose you to the sheer breadth of features that CSS provides but there are 3 fundamental concepts that you only need to understand to start styling websites in almost anyway you want, excluding animations.

## CSS Box Model
Lets start with a div element containing "Hello World" at its centre. This div like **all** HTML elements is made up of an anatomy called the box model that consists of 4 parts.

<div class="h-48 w-48 mx-auto flex-center">Hello World</div>

Below you will see the div is made up of a <span class="text-blue-700">margin</span>, <span class="text-blue-600">border</span>, <span class="text-blue-500">padding</span> and <span class="text-blue-400">content</span>, in that order towards the centre. While the content and the border are self-explanatory, it is important to note the difference between margin and padding. Margin creates spacing between elements whilst padding creates spacing around the content.

<div class="h-48 w-48 bg-blue-700 mx-auto flex-center ">
	<div class="h-40 w-40 bg-blue-600 mx-auto flex-center">
		<div class="h-36 w-36 bg-blue-500 mx-auto flex-center">
			<div class="h-28 w-28 bg-blue-400 mx-auto flex-center text-white">Hello World</div>
		</div>
	</div>
</div>

The differences become evident when you only display the border and the content while individually tweaking the margin and padding values.

<!-- <div class="grid grid-cols-2"><div class="border-4 h-32 w-32 flex-center p-20 mx-auto">Hello World</div>
<div class="border-4 h-32 w-32 flex-center mt-12 mx-auto">Hello World</div></div> -->


### Resources
[W3Schools](https://www.w3schools.com/css/),
[Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS),
[Web.dev](https://web.dev/learn/css/)

</article>