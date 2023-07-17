<script>
    import Transforms from "$lib/CSSTransforms.svelte";
    import CSS3D from "$lib/CSS3D.svelte";
    import Animations from "$lib/CSSAnimations.svelte";
    import ZIndex from "$lib/ZIndex.svelte";
    import '$lib/styles/vscode-dark.css';
</script>

<svelte:head>
	<title>Advanced CSS | Sergen Karaoglan</title>
	<meta name="description" content="Learn to do more with CSS" />
</svelte:head>

<article class="max-md:mx-4 prose lg:prose-xl m-auto pt-16">

** Under construction **

# Advanced CSS

So you learnt the basics of CSS and probably styled at least a webpage but now want to do more *cool* things with CSS. Well this is the right place, as I will be covering
some more advanced concepts in CSS which aren't technically complicated but still go at least a bit beyond the absolute basics of CSS. This article is a bit of an exception as it wasn't designed to be read from top to bottom, so feel free to go through the headings and go through whatever peaks your interest.

## Transitions

Transitions are a powerful yet extremely simple to use. I'm going to immediately jump into an example so you first get the idea of what one is.
Interact with the red div below to see it transition to different property values in pure CSS.

<div class="h-32 w-32 mx-auto flex-center">
    <div class="transition-all duration-500 rounded-none bg-red-700 h-32 w-32 mx-auto hover:bg-red-500 hover:rounded-3xl hover:h-24 hover:w-24 hover:text-sm text-white flex-center">
        Press/Hover!
    </div>
</div>

So how is this done? Well using the conveniently named **transition** property. With the transition property we can provide the name of other properties such as height and background-color as values. Once the values for the properties we include change, we see the transition effect. In the above example I am using the value 'all' to apply a transition affect to all properties.

We can further customise our transitions by providing different animation durations such as 500ms or 100ms.

## Transforms

CSS gives a number of ways to transform our elements, to rotating, translating, scaling and skewing.
All these methods are self explanatory if you play with them but one thing you might be wondering is, why use transform for say translating when you can do that with top, left, bottom, right properties? Well that's because using transform is [more performant](https://stackoverflow.com/questions/7108941/css-transform-vs-position).

<Transforms />

We can even add transitions to our transforms, all with just CSS.

<div class="transition-all duration-500 text-white flex-center mx-auto w-32 h-32 bg-blue-500 hover:scale-x-150 hover:scale-y-150 hover:rotate-180 hover:translate-x-28 rounded">
Press/Hover!
</div>

### 3D Transforms
And as an extra bonus we can even perform 3D transformations. With 3D transformations we can tweak the X and Y values for a transformation as before and now also a Z value.
With the function **translate3d** we can input values for x,y,z where z controls the depth of an element. For example, an element with a Z value of 10 will be placed in front of elements with a Z value under 10. Not only can we translate across 3 dimensions, we also have an extra dimension for rotating elements. Below is a demonstration of these concepts.

<ZIndex />
<CSS3D />

## Animations
Keyframes, timing functions.

CSS provides an **animation** property which is comparable to transitions, in that they both help achieve the effect of smoothly changing the state of an element to another state. But the animation property gives us an extra number of tools. Firstly, we don't need an event such as a hover to trigger the changes in our element. We can also have more than just a start and end state, using an important feature often found in animation software called **keyframes**.

With keyframes we can add several states our element can transition through using the following:

<Animations />

## Grid and Flexbox

## End



</article>