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

**under construction**

# CSS Fundamentals

[Cascading Style Sheets](https://en.wikipedia.org/wiki/CSS) (CSS) is a language with the purpose of styling a document. Whilst HTML is used for structuring a page and adding content, with CSS we can style our document by for example, changing the background colour of a page or choosing the exact number of pixels of space we want around an element. It is common for a tutorial to expose you to the sheer breadth of features that CSS provides but there are 4 fundamental concepts that you only need to understand to start styling websites in almost anyway you want, excluding animations.

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

Above you will see the individual parts of the div visualised and consisting of a <span class="text-blue-800">margin</span>, <span class="text-slate-500">border</span>, <span class="text-blue-500">padding</span> and <span class="text-slate-800">content</span>, in that order towards the centre. The border encapsulates our element which contains the padding and the content. Margin creates spacing around the element whilst padding creates spacing around the content. With CSS you can increase or decrease the size of any part of the box model by number of pixels, cm and other units of measurement.

Below I have three image elements with centre image contained within a div. The left, right margin and padding values can be changed for the div with the sliders below.

<BoxModel />

The key thing to note is how the padding affects the size of the element itself as well as create spacing around the content.

## Selector
The way to style an element typically comes in the following form:

```CSS
/* selector */
div {
	/* declaration block */
	background-color: blue;
}
```

With CSS we have to first select the element we want to style, using a **selector**. We can select an element in a number of ways but one way is simply specifying the type of an element, which in this case is a div. Now that we have a selected element, we choose the **property** we want to change, such as the element's background colour. Finally we specify the **value** we want for the property.

In the above example *all* div elements of a page will have the background colour blue. But what if we wanted to select an individual div element or a subset of div elements?
Going back to learning a bit about HTML, every element can possess the attributes id and class with a name as the value. We can then select elements based on the id or class name with '#' for id and '.' for class. You can see these selectors in the following:

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
So we covered the box model and how to select and change the properties of our elements but how do we change the position of an element?

## Colour
Below is div with a [hexadecimal](https://en.wikipedia.org/wiki/Hexadecimal) value at its centre. To change the background colour of the element we can simply set the background-color property with a value such as "red", "blue", "green". But we can have much finer grain of control than that. The hexadecimal value shown is the value of the current background colour of our div that can be changed through the three sliders below. 
<RGB />

## Units of Measurement

## Style your first webpage 
While this article covers the fundamentals of CSS, it is barely covering all the little things that can be done with CSS. I recommend taking a look at a [reference](https://www.w3schools.com/cssref/index.php) to see all the ways you can style a page for yourself. But as I mentioned in [my HTML article](/html-fundamentals), remembering everything is not a requirement and the purpose of this article is to give you enough grounding to get started styling your HTML documents. Your skill, knowledge and understanding of CSS will grow as you experiment and style more pages.

### Resources
[W3Schools](https://www.w3schools.com/css/),
[Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS),
[Web.dev](https://web.dev/learn/css/)

</article>