<script>
    import Transforms from "$lib/CSSTransforms.svelte";
    import CSS3D from "$lib/CSS3D.svelte";
    import Animations from "$lib/CSSAnimations.svelte";
    import ZIndex from "$lib/ZIndex.svelte";
	import Flexbox from "$lib/Flexbox.svelte";
    import '$lib/styles/vscode-dark.css';
</script>

<svelte:head>
	<title>Advanced CSS | Sergen Karaoglan</title>
	<meta name="description" content="Learn to do more with CSS" />
</svelte:head>


# Advanced CSS

So you learnt the basics of CSS and probably styled at least a webpage but now want to do more *awesome* things with CSS. Well this is the right place, as I will be covering
some more advanced concepts in CSS which aren't technically complicated but still go at least a bit beyond the absolute basics of CSS. As a side note, this article is a bit of an exception in that it wasn't designed to be read from top to bottom, so feel free to go through the headings and read through whatever peaks your interest.

## Transitions

**Transition** is a powerful yet extremely simple to use property in CSS. I'm going to immediately jump into an example so you first get the idea of what it is.
Interact with the red square below to see it transition from one style to another just using CSS.

<div class="h-32 w-32 mx-auto flex-center">
    <div class="transition-all duration-500 rounded-none bg-red-700 h-32 w-32 mx-auto hover:bg-red-500 hover:rounded-3xl hover:h-24 hover:w-24 hover:text-sm text-white flex-center">
        Press/Hover!
    </div>
</div>

With the transition property we can provide the name of properties such as height and background-color as values. Once the values for these properties change, we will see the transition in effect. In the above example I am using the value 'all' to apply a transition affect to all properties.

We can even further customise our transitions by providing different animation durations such as 500ms or 100ms to the property **transition-duration**.

## Transforms

CSS gives a number of ways to transform our elements, to rotating, translating, scaling and skewing.
All these methods are self explanatory if you play with them but one thing you might be wondering is, why use transform for say translating when you can do that with position properties? Well that's because using transform is [more performant](https://stackoverflow.com/questions/7108941/css-transform-vs-position). You can change the type of transformation below.

<figure>
	<Transforms />
</figure>

We can even add transitions to our transforms, all with just CSS.

<div class="transition-all duration-500 text-white flex-center mx-auto w-28 h-28 bg-blue-500 hover:scale-x-150 hover:scale-y-150 hover:rotate-180 hover:translate-x-28 rounded">
Press/Hover!
</div>

### 3D Transforms
As a bonus we can even perform 3D transformations. With 3D transformations we can tweak the X and Y values for a transformation, same as before and now also a Z value.
With the function **translate3d** we can input values for x,y,z where z controls the depth of an element. For example, an element with a Z value of 10 will be placed in front of elements with a Z value under 10. Not only can we translate across 3 dimensions, we also have an extra dimension for rotating elements. Below is a demonstration of these concepts.

<figure>
	<ZIndex />
</figure>

<CSS3D />

## Animations
CSS provides an **animation** property which is comparable to transitions, in that they both help achieve the effect of smoothly changing the state of an element to another state. But the animation property gives us an extra number of tools. Firstly, we don't need an event such as a hover to trigger the changes in our element. We can also have more than just a start and end state.

To create an animation we first define an animations **[Keyframes](https://en.wikipedia.org/wiki/Key_frame)**. In the example below, an animation called 'pulse' is created with two states. The first state is defined as '0%' meaning the beginning of our animation which contains opacity: 0 meaning our animation starts with an opacity of 0. At the end of our animation or at '100%' our element will transition to full opacity and a scale of 1.3%. The animation can be seen below the code.
```CSS
@keyframes pulse {
		0% {
			opacity: 0;
		}
		100% {
			transform: scale(1.3);
			opacity: 1 ;
		}
	}
```

<Animations />

The animation duration in this case is set to infinite, which means the animation will forever continue to loop. We can also choose other keyframe values such as 50% to have a state to transition to midway through the animation.

## Flexbox

In the [CSS fundamentals article](css-fundamentals) I talked about the **position** property which takes different values such as relative which gives us control on the relative position of an element using the properties top, bottom, right, left. While it can 'get the job done' it can be rather tedious to position elements using four different properties with specified values. What if for example, all we wanted to do was centre evenly spaced elements within a div? You would need to position each element individually while making sure they don't overlap whereas with flexbox this can be achieved with a few CSS properties with just the div.

The main goal of flexbox is to organise items in a single dimension such as links within a navigation bar. Flexbox can be divided into two parts, firstly the flex container using the declaration ```display: flex``` and secondly the flex items. Flex items are child elements of a flex container and do not require a declaration to be treated as such.

Below is a flex container with three flex items. Play around with the settings to see the different ways you can organise items in one dimension with ease.

<Flexbox />

You might be thinking, well what about organising multiple column and row of items? This can be achieved with CSS grid which I will talk about in another section.
<!-- ## Make your own animation!
CSS provides surprisingly simple yet powerful tools that can be taken far depending on how creative you decide to be with it.  -->

### Resources
[W3Schools](https://www.w3schools.com/css/),
[Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS),
[Web.dev](https://web.dev/learn/css/)

___