<script>
</script>

<svelte:head>
	<title>Advanced CSS | Sergen Karaoglan</title>
	<meta name="description" content="Learn to do more with CSS" />
</svelte:head>

<article class="max-md:mx-4 prose lg:prose-xl m-auto pt-16">

# Advanced CSS

So you learnt the basics of CSS and probably styled at least a webpage but now want to do more *cool* things with CSS. Well this is the right place, as I will be covering
some more advanced concepts in CSS which aren't technically complicated but still go at least a bit beyond the absolute basics of CSS. This article is a bit of an exception as it wasn't designed to be read from top to bottom, so feel free to go through the headings and go through whatever peaks your interest.

## Transitions and Transforms

Transitions are a powerful yet extremely simple to use. I'm going to immediately jump into an example so you first get the idea of what one is.
Interact with the red div below to see it transition to different property values in pure CSS.

<div class="h-32 w-32 mx-auto flex-center">
    <div class="transition-all duration-500 rounded-none bg-red-700 h-32 w-32 mx-auto active:bg-red-500 active:rounded active:h-20 active:w-20 active:text-sm hover:bg-red-500 hover:rounded-3xl hover:h-24 hover:w-24 hover:text-sm text-white flex-center">
        Press/Hover!
    </div>
</div>

So how is this done? Well using the conveniently named transition property. With the transition property we can provide the name of other properties such as height and background-color as values. Once the values for the properties we include change, we see the transition effect. In the above example I am using the value 'all' to apply a transition affect to all properties.

We can further customise our transitions by providing different animation durations such as 500ms or 100ms.

## Animations

## Grid and Flexbox

## End



</article>