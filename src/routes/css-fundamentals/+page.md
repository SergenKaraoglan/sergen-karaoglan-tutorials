<script>
import RGB from "$lib/RGB.svelte";
import BoxModel from "$lib/BoxModel.svelte";
import Positioning from "$lib/CSSposition.svelte";
import AbsoluteLength from "$lib/AbsoluteLength.svelte";
import RelativeLength from "$lib/RelativeLength.svelte";
import CSSMontage from "$lib/CSSMontage.svelte";
import '$lib/styles/vscode-dark.css';
import GithubStar from "$lib/GithubStar.svelte";
</script>

<svelte:head>
	<title>CSS Fundamentals | Sergen Karaoglan</title>
	<meta name="description" content="Learn the fundamentals of CSS" />
</svelte:head>

<article class="max-md:mx-4 prose lg:prose-xl m-auto pt-16">

# CSS Fundamentals

Whilst HTML is used for structuring a page and adding content, with [Cascading Style Sheets](https://en.wikipedia.org/wiki/CSS) (CSS) we can style our document by for example, changing the background colour of a page or choosing the exact number of pixels of space we want around an element. It is common for a tutorial to expose you to the sheer breadth of features that CSS provides but we will only be covering fundamental concepts to quickly get started with styling webpages and have a foundation to quickly learn more.

## Box Model
Let's start with a div element. This element like *all* HTML elements is made up of an anatomy called the **box model** that consists of 4 parts.

<div class="h-48 w-48 mx-auto flex-center">Hello World</div>

<div class="h-48 w-48 bg-blue-800 mx-auto flex-center ">
	<div class="h-40 w-40 bg-slate-300 mx-auto flex-center">
		<div class="h-36 w-36 bg-blue-500 mx-auto flex-center">
			<div class="h-28 w-28 bg-slate-800 mx-auto flex-center text-white">Hello World</div>
		</div>
	</div>
</div>

Above you will see the individual parts of the div visualised called <span class="text-blue-800">margin</span>, <span class="text-slate-500">border</span>, <span class="text-blue-500">padding</span> and <span class="text-slate-800">content</span>, in that order towards the centre. The border encapsulates our element which contains the padding and the content. Margin creates spacing around the element whilst padding creates spacing around the content. With CSS you can increase or decrease the size of any part of the box model by number of pixels, cm and other units of measurement.

Below I have three image elements with the centre image contained within a div. The left, right margin and padding values can be changed for the div with the sliders below.

<figure>
	<BoxModel />
</figure>

The key thing to note is how the padding affects the size of the element itself as well as create spacing around the content whilst margin creates spacing around the element itself.

## Selector
The way to style an element typically comes in the following form:

```CSS
/* selector */
div {
	/* declaration block */
	background-color: blue;
}
```

With CSS we have to first select the element we want to style, using a **selector**. We can select element(s) in a number of ways but one way is simply by specifying a tag name, which in this case is div. Now that we have a selected element, we choose the **property** we want to change, such as the element's background colour. Finally, we specify the **value** we want for the property such as blue.

In the above example *all* div elements of a page will have the background colour blue. But what if we wanted to select an individual div element or a subset of div elements?
Going back to learning a bit about HTML, every element can possess the attributes **id** and **class** with a name as the value. We can then select elements based on the id or class name with **#** for id and **.** for class. You can see these selectors in the following style element:

```HTML
<html>
	<head>
		<style>
			#div1 {
				border-style: solid;
			}
			.BlueDiv {
				background-color: blue;
				height: 100px;
                width: 100px;
			}
		</style>
	</head>
	<body>
		<div id="div1" class="BlueDiv"></div>
		<div id="div2" class="BlueDiv"></div>
	</body>
</html>
```

We have two div elements with the same class but different id's. Both div's will have the background color blue with a height and width of 100 pixels, whereas only our first div "div1" will have a solid border.

## Positioning
When we add a block element it will be placed in the next available line and to the left but what if we want more control on how we position our element?
There are a number of ways to do this, but here I will be covering the **position** property. What you have below is a document with three div elements each with a different position property that I have labelled them with.

Static is the default position value, which means it is positioned according to the normal layout flow of the document. Other position attributes allow us to position our elements using the properties top, left, bottom, right as is done with the elements below.

If you scroll the document you will notice how the 'Fixed' element remains at the same position. That's because elements with the position value fixed are positioned relative to the viewport.

Elements with value sticky remain in a fixed position once it is scrolled to a given position.

<figure>
	<Positioning />
</figure>

## Colour
Below is div with a [hexadecimal](https://en.wikipedia.org/wiki/Hexadecimal) value at its centre. To change the background colour of the element we can simply set the background-color property with a value such as "orange", "purple", "green". But we can have much finer grain of control than that. Each pixel of your screen is made up of red, green and blue (RGB) subpixels, which in combination make a single colour. With CSS we can modify the value of each individual colour using the values 0-255 or using a single hexadecimal value. Try experimenting with the RGB values below and see how the colour and hexadecimal value changes. 

<figure>
	<RGB />
</figure>

As a small fun fact, HTML even has its own colour picker built in that you can use by pressing the following:
<input class="h-20 w-20 mx-auto block" type="color">

## Units of Measurement
### Absolute
There are many absolute units of measurements that allow to adjust our elements to the exact number of pixels we want displayed on the screen:

<figure>
	<AbsoluteLength />
</figure>

### Relative
With relative units, our value is well [relative](https://en.wiktionary.org/wiki/relative#English)... Which means our measurement is dependent on another value. Let's take a look at the following concrete example:
What we have is an img element nested in a div. The height and width of the image is relative to its parent div or more specifically for this example, 3 quarters the height and width using the style: ```height: 75%; width: 75%```. '%' being one of the many relative units of measurements.

Below you can *only* control the height/width of the parent element but watch as the nested image automatically adjusts to remain at 75% of the parent div.

<figure>
	<RelativeLength />
</figure>

Some of the other relative units include units such as 'vw', 'vh' that output values relative to to the [viewport](https://en.wikipedia.org/wiki/Viewport) width and height respectively.
Something you might do is set a div to 100vh so it always fills 100% of the height of the browser viewport whether it is on a small mobile screen or a large monitor.

## Style your first webpage 
While this article covers the fundamentals of CSS, it is barely covering all the little things that can be done with CSS. I recommend taking a look at a [reference](https://www.w3schools.com/cssref/index.php) to see all the ways you can style a page for yourself. But as I mentioned in my [HTML article](/html-fundamentals), remembering everything is not a requirement and the purpose of this article is to give you enough grounding to get started styling your HTML documents. Your skill, knowledge and understanding of CSS will grow as you experiment, style and coordinate your elements to create a stylised webpage.

<figure>
	<CSSMontage />
</figure>

### Resources
[W3Schools](https://www.w3schools.com/css/),
[Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS),
[Web.dev](https://web.dev/learn/css/)

___

<GithubStar />

</article>