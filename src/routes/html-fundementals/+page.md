<script>
import DOMTree from "$lib/DOM-Tree.svelte";
import HTMLatt from "$lib/HTML-Attributes.svelte";
import HTMLele from "$lib/HTML-Element.svelte";
import Lazy from "$lib/Lazy.svelte";
import '$lib/styles/vscode-dark.css';
</script>

<svelte:head>
	<title>HTML Fundamentals| Sergen Karaoglan</title>
	<meta name="description" content="Learn the fundamentals of HTML" />
</svelte:head>



<article class="max-sm:mx-4 prose lg:prose-xl m-auto pt-16">

# HTML Fundamentals
What your browser just requested and has rendered is a [HyperText Markup Language](https://en.wikipedia.org/wiki/HTML) (HTML) document or more specifically [HTML5](https://en.wikipedia.org/wiki/HTML5), which is the current [markup language](https://en.wikipedia.org/wiki/Markup_language) for browsers used for structuring and determining the behaviour of a webpage also commonly referred to as the building blocks of a webpage. Whether it is a link, an image or a video, this is implemented using HTML. Now there are a countless number of HTML tutorials out there but I wanted to try something different and give a bit more context to HTML than usual and show a bit on how it works behind the scenes but first lets go straight to covering some basics. HTML is written using what are known as elements that mostly look like the following: ```<tagname> content </tagname>```. Elements are made up of tags usually involving an opening ```<>``` and closing tag ```</>``` with content nested between. In this example I just used a placeholder name but for recognised tag names you will receive different outputs within the browser.

Below is an example of a 'h1' element that includes the content HTML. The 'h1' element tells the browser to render text you include within it as a heading.
<HTMLele />

Moving on to a slightly less trivial example. This example also includes attributes that allow you to modify the behaviour of the element. In this example you have an img element which displays an image. One attribute is called "src" which takes a link to an image, the other attribute is the width which I have made available to modify. Give it a try.

<HTMLatt />

Each time you change the value, HTML is re-rendering the image to the specified width. You can swap the 'img' element to a 'video' element if you want to instead insert a video and so forth.

There are over 100 HTML elements which can all be found from a [reference](https://www.w3schools.com/tags/) but before that intimidates you, know that memorising elements before writing a webpage is not a requirement and you will mostly be using only a subset of HTML elements. If you have a desired output in mind such as displaying a video, it is more than effective to look through a reference to find out which element is appropriate.

Now, in order for you browser to understand how to render the content it needs to builds a [Document Object Model](https://en.wikipedia.org/wiki/Document_Object_Model) using the specified elements first.
Below is a self-contained HTML page that renders a heading (h1), paragraph (p) and an image (img) with its DOM represented in a tree structure containing each element as node. Each element can be nested within another element to make it a 'child' element. As we see all content is nested within the 'html' element and the rendered content is nested in a 'body' element which specifies all the content that should be rendered. You can see this structure represented within the DOM tree with nodes branching from other nodes and represented in the order they are written. The content is rendered according to the tree structure.

Feel free to write whatever you want and watch as the DOM tree updates and HTML renders live in your browser. If you want an example try ```<p>Electric type</p>``` which is a paragraph element with the content "Electric type".

<div class="w-fit m-auto p-5">
<DOMTree />
</div>

I have included a border around each element with the elements sequentially being included so you can visualise more specifically how the browser is rendering the content.

<Lazy
	this={() => import("$lib/HTML-Render.svelte")}
	>
	<svelte:fragment slot="component" let:Component>
		<Component />
	</svelte:fragment>
</Lazy>

You can see how each content creates a container around itself and how some content is contained together if they are a child of another element. There is even an element just for grouping elements and is one of the most used elements called 'div' which I used to group the heading and paragraph in the last sequence of the animation.

If all you want to do is build a static site without styling, you already have the basics and the reference to do so. If you want to move straight to learning how to style or make a page interactive, you will need to learn [CSS](https://en.wikipedia.org/wiki/CSS) and [JavaScript](https://en.wikipedia.org/wiki/JavaScript) respectively which build on the concepts here but you might be surprised by how much can be done with just HTML. Check out the resources below if you want to find out more about HTML and try building your first static site.

To get started here is a template:

```HTML
<!DOCTYPE html>
<html lang="en">
	<head>
		<title> title </title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width" />
	</head>
	<body>
		content
	</body>
</html>
```

## Resources
[W3Schools](https://www.w3schools.com/html/default.asp)

[Mozilla](https://developer.mozilla.org/en-US/docs/Web/HTML)

[web.dev](https://web.dev/learn/html/)

<!-- The group that specifies HTML and the DOM is called [WHATWG](https://en.wikipedia.org/wiki/WHATWG) and use to be the [W3C](https://en.wikipedia.org/wiki/World_Wide_Web_Consortium). The [browser engine](https://en.wikipedia.org/wiki/Browser_engine) is responsible for what is responsible for rendering HTML into a webpage and needs to be developed by browser vendors (Chrome, Safari, Firefox etc.) to match the HTML specification so we have a consistently functioning web pages across diferrent devices and different browsers. -->

</article>