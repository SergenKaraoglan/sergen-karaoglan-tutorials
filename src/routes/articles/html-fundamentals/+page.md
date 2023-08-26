<script>
import DOMTree from "$lib/DOM-Tree.svelte";
import HTMLatt from "$lib/HTML-Attributes.svelte";
import HTMLele from "$lib/HTML-Element.svelte";
import HTMLGame from "$lib/HTMLGame.svelte";
import Lazy from "$lib/Lazy.svelte";
import '$lib/styles/vscode-dark.css';
</script>

<svelte:head>
	<title>HTML Fundamentals | Sergen Karaoglan</title>
	<meta name="description" content="Learn the fundamentals of HTML" />
</svelte:head>

<HTMLGame />

# HTML Fundamentals
## Elements and Attributes
What your browser just requested and [browser engine](https://en.wikipedia.org/wiki/Browser_engine) has rendered is a document written in [HyperText Markup Language](https://en.wikipedia.org/wiki/HTML) (HTML) or more specifically [HTML5](https://en.wikipedia.org/wiki/HTML5), which is the current [markup language](https://en.wikipedia.org/wiki/Markup_language) for structuring and determining the behaviour of a webpage. Whether it is a link, an image or a video, this is implemented using HTML. Now there are a countless number of HTML tutorials out there but I wanted to give a more concise and interactive tutorial that covers the fundamentals to begin creating your first webpage. 

Starting with the basics, HTML is written using what are known as elements that mostly look like the following: ```<tagname> content </tagname>```. Elements are made up of tags usually involving an opening ```<>``` and closing tag ```</>``` with content nested between. In this example I just used a placeholder name but for recognised tag names you will receive different outputs within the browser.

Below is an example of a 'h1' element that includes the content HTML. The h1 element tells the browser to render text you include within it as a heading which by default renders text with a different style than if you were to insert plain text. I made this h1 element editable, every time you edit it the h1 element will be rendered with the new content.

<figure>
	<HTMLele />
</figure>

Moving on to a slightly less trivial example that doesn't include a closing tag. This example includes attributes that come in the form of ```attribute=``` for which you can insert values to modify the behaviour of the element. Below you have an img element which displays an image with an attribute called "src" which takes a link to an image and another attribute called "width" which I have made available to modify. Give it a try.

<figure>
	<HTMLatt />
</figure>

Each time you change the attribute value, the image matches the specified width. The height also changes in this example to avoid stretching the image.

There are over 100 HTML elements which can all be found on a [reference](https://www.w3schools.com/tags/) but before that intimidates you, know that memorising elements before writing a webpage is not a requirement and in almost all cases you only need a subset of HTML elements. If you have a desired output in mind such as displaying a video, it is more than effective to look through a reference to find out which element is appropriate. For example, you can swap the 'img' element above to the conveniently named element 'video' if you want to instead insert a video and so forth.

## Document Structure
A typical HTML document structure looks like the following:


```HTML
<!DOCTYPE html>
<html>
	<head>
		<title> title </title>
		<link rel="icon" href="/favicon.ico" />
	</head>
	<body>
		<h1>content</h1>
		<p>content</p>
	</body>
</html>
```

Notice that beyond text we can even include elements in other elements to change their behaviour. The ```<html>``` element defines our document which directly includes the elements ```<head>``` and ```<body>```. All content rendered on the screen is placed in body whereas [metadata](https://en.wikipedia.org/wiki/Metadata) such as the title and the icon of the page is placed in head. Understanding the details of [DOCTYPE](https://html.spec.whatwg.org/multipage/syntax.html#the-doctype) is not important at this stage but it is required for our browser to render HTML5 appropriately so you will find it in almost all HTML5 pages.

## Document Object Model
Now, in order for you browser to understand how to render the content it needs to builds a [Document Object Model](https://en.wikipedia.org/wiki/Document_Object_Model) using the specified elements first.
Below is a self-contained HTML page that renders a heading (h1), paragraph (p) and an image (img) with its DOM represented in a tree structure containing each element as node. Each element can be nested within another element to make it a 'child' element. You can see this structure represented within the DOM tree with nodes branching from other nodes and represented in the order they are written. The content is rendered according to the tree structure.

Feel free to write whatever you want and watch as the DOM tree updates and HTML renders live in your browser. If you want an example try ```<p>Member of the Sciuridae family</p>``` which is a paragraph element with the content "Member of the Sciuridae family" but any content works.

<figure class="w-fit m-auto py-5">
	<DOMTree />
</figure>

## Rendering
I have included a border around each element with each element included in sequential order so you can visualise in greater detail how the browser is rendering the content.

<figure>
<Lazy
	this={() => import("$lib/HTML-Render.svelte")}
	>
	<svelte:fragment slot="component" let:Component>
		<Component />
	</svelte:fragment>
</Lazy>
</figure>

You can see how each element is rendered on a new line with a container around its content that fills the available width. Some elements are contained together within another container when they are a child of another element. There is even an element just for grouping elements and is one of the most used elements called 'div' which I used to group the heading and paragraph in the last sequence of the animation.

The above behaviour occurs because the chosen elements in this example are all **block** elements. Elements come in either of two types, that affect how they are rendered known as **block** and **inline**. Block elements are always rendered on a new line and take up the full width available. But if you don't wish for this effect you use an inline element such as ```<span>``` which is the inline equivalent of ```<div>```.

## Build your first webpage
If all you want to do is build a static site without styling, you already have the basics and the reference to do so. If you want to move straight to learning how to style or make a page interactive, you will need to learn [CSS](https://en.wikipedia.org/wiki/CSS) and [JavaScript](https://en.wikipedia.org/wiki/JavaScript) respectively which build on the concepts here, but you might be surprised by how much can be done with just HTML (tables, forms, lists and more). Feel free to check out the resources below if you want to find out more about HTML and try building your first static site.

To get started, below is a template you can save as a HTML document and load in your browser of choice.

```HTML
<!DOCTYPE html>
<html lang="en">
	<head>
		<title> webpage title </title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width" />
	</head>
	<body>
		add content you want displayed here
	</body>
</html>
```

### Resources
[W3Schools](https://www.w3schools.com/html/default.asp),
[Mozilla](https://developer.mozilla.org/en-US/docs/Web/HTML),
[web.dev](https://web.dev/learn/html/)

<!-- The group that specifies HTML and the DOM is called [WHATWG](https://en.wikipedia.org/wiki/WHATWG) and use to be the [W3C](https://en.wikipedia.org/wiki/World_Wide_Web_Consortium). The [browser engine](https://en.wikipedia.org/wiki/Browser_engine) is responsible for what is responsible for rendering HTML into a webpage and needs to be developed by browser vendors (Chrome, Safari, Firefox etc.) to match the HTML specification so we have a consistently functioning web pages across different devices and different browsers.-->

___