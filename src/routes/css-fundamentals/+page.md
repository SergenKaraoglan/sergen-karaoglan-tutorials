<script>
import RGB from "$lib/RGB.svelte";
import BoxModel from "$lib/BoxModel.svelte";
import '$lib/styles/vscode-dark.css';
</script>

<svelte:head>
	<title>CSS Fundamentals | Sergen Karaoglan</title>
	<meta name="description" content="Learn the fundamentals of CSS" />
</svelte:head>

<article class="max-md:mx-4 prose lg:prose-xl m-auto pt-16">

** under construction **
# CSS Fundamentals

[Cascading Style Sheets](https://en.wikipedia.org/wiki/CSS) (CSS) is a language with the purpose of styling a document. Whilst HTML is used for structuring a page and adding content, with CSS we can style our document by for example, changing the background colour of a page or choosing the exact number of pixels of space we want around an element. It is common for a tutorial to expose you to the sheer breadth of features that CSS provides but there are 3 fundamental concepts that you only need to understand to start styling websites in almost anyway you want, excluding animations.

## Box Model
Lets start with a div element. This element like *all* HTML elements is made up of an anatomy called the **box model** that consists of 4 parts.

<div class="h-48 w-48 mx-auto flex-center">Hello World</div>

<div class="h-48 w-48 bg-blue-800 mx-auto flex-center ">
	<div class="h-40 w-40 bg-slate-300 mx-auto flex-center">
		<div class="h-36 w-36 bg-blue-500 mx-auto flex-center">
			<div class="h-28 w-28 bg-slate-800 mx-auto flex-center text-white">Hello World</div>
		</div>
	</div>
</div>

Above you will see the individual parts of the div visualised and consisting of a <span class="text-blue-800">margin</span>, <span class="text-slate-500">border</span>, <span class="text-blue-500">padding</span> and <span class="text-slate-800">content</span>, in that order towards the centre. It is important to note the difference between margin and padding. Margin creates spacing around the element whilst padding creates spacing around the content. The border encapsulates our element which contains the padding and the content. With CSS you can increase or decrease the size of any part of the box model by number of pixels, cm and other units of measurement.

Below I have three elements with their borders visible, one of which the values for margin and padding can be tweaked.

<BoxModel />

Something to note is that the padding and border size affect the size of the element itself.

<!-- <div class="grid grid-cols-2"><div class="border-4 h-32 w-32 flex-center p-20 mx-auto">Hello World</div>
<div class="border-4 h-32 w-32 flex-center mt-12 mx-auto">Hello World</div></div> -->

## Selectors and Basic Styling
The way to style an element comes typically in the following form:

```CSS
div {
	background-color: blue;
}
```

Going back to a div element, this time containing a [hexadecimal](https://en.wikipedia.org/wiki/Hexadecimal) value at the centre. Lets say we want to style this element.
With CSS we have to first specify the element we want to specify, which can be done in multiple ways. One way is simply specifying the type of element we want to specify which in this case is a div element. Next, is choosing the attribute of the element we want to tweak. For this example it will be the background color.

<RGB />

## Positioning

## Style your first webpage 
While this article covers the fundamentals of CSS, it is barely covering all the little things that can be done with CSS. I recommend taking a look at a [reference](https://www.w3schools.com/cssref/index.php) to see all the ways you can style a page for yourself. But as I mentioned in [my HTML article](/html-fundamentals), remembering everything is not a requirement and the purpose of this article is to give you enough grounding to get started styling your HTML documents. Your skill, knowledge and understanding of CSS will grow as you experiment and style more pages.

### Resources
[W3Schools](https://www.w3schools.com/css/),
[Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS),
[Web.dev](https://web.dev/learn/css/)

</article>