<script>
import DOMTree from "$lib/DOM-Tree.svelte";
import HTMLatt from "$lib/HTML-Attributes.svelte";
import Lazy from "$lib/Lazy.svelte";
</script>

<svelte:head>
	<title>HTML Fundamentals| Sergen Karaoglan</title>
	<meta name="description" content="Learn the fundamentals of HTML" />
</svelte:head>



<article class="max-sm:mx-4 prose lg:prose-xl m-auto pt-16">

# HTML Fundamentals
What your browser just requested and has rendered is a [HyperText Markup Language](https://en.wikipedia.org/wiki/HTML) (HTML) document or more specifically [HTML5](https://en.wikipedia.org/wiki/HTML5), which is the current [markup language](https://en.wikipedia.org/wiki/Markup_language) for browsers used for structuring and determining the behaviour of a webpage also commonly refferered to as the building blocks of a webpage. Whether it is a link, an image or a video, this is implemented into a page using HTML. Now there are a countless number of HTML tutorials out there but I wanted to try something different and give a bit more context to HTML than usual and show a bit on how it works behind the scenes but first lets go straight to covering some basics. HTML is written using what are known as elements that mostly look like the following: ```<tagname> content </tagname>```. Elements are made up of tags usually involing an opening and closing tag with content nested between. In this example I just used a placeholder name but for recognised tag names you will recieve different outputs within the browser.

There are over 100 HTML elements which can all be found from a [reference](https://www.w3schools.com/tags/) but before that intimadates you, it is worth specifying a few things. While I can go through many elements with an explanation of what each is responsible for, memorising elements before wrtiting a webpage is not a requirement and you will mostly be using only a subset of HTML elements. If you have a desired output in mind such as displaying a video, it is more than effective to look through a reference to find out which element is appropriate.

Instead I will show you a single example. This example also includes attributes that allow you to modify the behaviour of the element. In this example you have an img element which displays an image. One attribute is called "src" which takes a link to an image, the other attribute is the width which I have made available to modify. Give it a try.

<HTMLatt />

Each time you change the value, HTML is rerendering the image to the specified width. You can swap the 'img' element to a 'video' element if you want to instead insert a video and so forth.

The group that specifies HTML is called [WHATWG](https://en.wikipedia.org/wiki/WHATWG) and use to be the [W3C](https://en.wikipedia.org/wiki/World_Wide_Web_Consortium). The [browser engine](https://en.wikipedia.org/wiki/Browser_engine) is is responsible for rendering HTML into a webpage according to the specification and needs to be developed by browser vendors (Chrome, Safari, Firefox etc.) so we have a consistently functioning web pages across diferrent devices and different browsers.

Now, unless you are already famillar, you might be asking "ok so HTML allows you to insert and structure content on page but how do I style a page, or make it interactive?". Well this is done using other lanugages understood by your browser which are [Cascading Style Sheets](https://en.wikipedia.org/wiki/CSS) (CSS), and [JavaScript](https://en.wikipedia.org/wiki/JavaScript) which won't be covered here but build on top of the concept of the [Document Object Model](https://en.wikipedia.org/wiki/Document_Object_Model) (DOM) and HTML elements. As seen below the DOM is rendered as a tree structure with each part of the page being represented as a node. In order for you browser to understand how to render the content it builds a DOM tree first.

Below is a self-contained HTML page that renders a heading (h1), paragraph (p) and an image (img). Each element can be nested within another element which makes it the 'child' of the elemented it is nested in. As we see all content is nested within the 'html' element and the rendered content is nested in a 'body' element which specifies all the content that should be rendered. Within the DOM tree you can see three nodes h1, p and img branch out from the 'body' node. <!-- id, class -->
Feel free to write whatever you want and watch as the DOM tree updates and HTML renders live in your browser. If you want an example try ```<p>Electric type</p>``` which is a paragraph element with the content "Electric type".

<div class="w-fit m-auto p-5">
<DOMTree />
</div>


I have included a border around each content whith the content sequentially being added so you can visualise more specifically how the browser is rendering the content.

  <Lazy
	this={() => import("$lib/HTML-Render.svelte")}
	>
	<svelte:fragment slot="component" let:Component>
		<Component />
	</svelte:fragment>
</Lazy>

You can see how each content creates a container around itself and how you can group content together. There is even a element just for grouping elements and is one of the most used elements called 'DIV' which I used to group the heading and paragraph in the last sequence of the animation.

If all you want to do is build a static site without styiling, you already have the basics and the reference to do so. If you want to move straight to learning how to style or make a page interactive, you are also ready but you might even be surprised by how much can be done with just HTML. Check out the resources below if you want to find out more about HTML and try building your first static site.

## Resources
[W3Schools](https://www.w3schools.com/html/default.asp)

[Mozilla](https://developer.mozilla.org/en-US/docs/Web/HTML)

[web.dev](https://web.dev/learn/html/)

The group that specifies HTML and the DOM is called [WHATWG](https://en.wikipedia.org/wiki/WHATWG) and use to be the [W3C](https://en.wikipedia.org/wiki/World_Wide_Web_Consortium). The [browser engine](https://en.wikipedia.org/wiki/Browser_engine) is responsible for what is responsible for rendering HTML into a webpage and needs to be developed by browser vendors (Chrome, Safari, Firefox etc.) to match the HTML specification so we have a consistently functioning web pages across diferrent devices and different browsers.

</article>