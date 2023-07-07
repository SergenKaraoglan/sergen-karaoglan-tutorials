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
What your browser just requested and has rendered is a [HyperText Markup Language](https://en.wikipedia.org/wiki/HTML) (HTML) document or more specifically [HTML5](https://en.wikipedia.org/wiki/HTML5), which is the current [markup language](https://en.wikipedia.org/wiki/Markup_language) for browsers used for structuring and determining the behaviour of a webpage also commonly refferered to as the building blocks of a webpage. Whether it is a link, an image or a video, this is done using HTML. Now there are a countless number of HTML tutorials out there but I wanted to try something different and give a bit more context to HTML than usual and show a bit on how it works behind the scenes. HTML is written using a series of tags that look like the following: ```<tagname> content </tagname>```, respectively known as the opening and closing tag. In this example I just used a placeholder name but for recognised tags you will recieve different outputs within the browser. 


There are over 100 HTML which can all be found from a [reference](https://www.w3schools.com/tags/) but before that intimadates you, it is worth specifying a few things. Many tutorials will go through many individual tags with an explanation, though you can easily skim through a reference and find out about all tags. Trying to remember them before wrtiting a webpage is not a requirement and you will mostly be using only a subset of HTML tags. If you have a desired output in mind such as displaying a video, it is more than effective to look through a reference.

Instead I will show you a single example. This example also includes attributes that allow you to modify how the content is rendered. In this example you have an img tag which displays an image. One attribute is called "src" which take a link to an image which is rendered, the other attribute is the width which I have made available to modify. Give it a try.

<HTMLatt />

Each time you change the value, HTML is rerendering the image to the specified width.

Now, unless you are already famillar, you might be asking "ok so HTML allows you to insert and structure content on page but how do I style a page, or make it interactive?". Well this is done using other lanugages understood by your browser which are [Cascading Style Sheets](https://en.wikipedia.org/wiki/CSS) (CSS), and [JavaScript](https://en.wikipedia.org/wiki/JavaScript) which won't be covered here but build on top of the concept of the [Document Object Model](https://en.wikipedia.org/wiki/Document_Object_Model) (DOM) and HTML elements.

Below is a self-contained HTML page that renders an image, title, and a paragraph. Each tag can be nested within another tag which makes it the 'child' of the elemented it is nested in. As we see the rendered content is nested in a 'body' tag which specifies all the content that should be rendered. Within the DOM tree you can see three nodes that branch out from the 'body' node. In order for you browser to understand how to render the content it builds a DOM tree first. <!-- id, class -->
Feel free to write whatever you want and watch as the DOM tree updates and HTML renders live in your browser. If you want an example try ```<p>Electric type</p>``` which is a paragraph tag with the content "Electric type".

<div class="w-fit m-auto p-5">
<DOMTree />
</div>


I have included a border so you can visualise more specifically how the browser is rendering the content.

  <Lazy
	this={() => import("$lib/HTML-Render.svelte")}
	>
	<svelte:fragment slot="component" let:Component>
		<Component />
	</svelte:fragment>
</Lazy>

You can see how each content creates a container around itself and how you can group content together. There is even a tag just for grouping elements and is one of the most used tags called the 'DIV' tag.

If all you want to do is build a static site without styiling, you already have the basics and the reference to do so. You might even be surprised by how much can be done with just HTML. With that said, I will now move on to giving a bit more context to those interested, so it all seems a little less like magic. HTML needs to be defined by someone, or some group of people. The [browser engine](https://en.wikipedia.org/wiki/Browser_engine) for browsers (Chrome, Safari, Firefox etc.) is responsible for rendering HTML into a webpage and needs to be developed to match the specification so we have a consistently functioning web pages across diferrent devices and different browsers. For HTML today, the group that specifies HTML is called [WHATWG](https://en.wikipedia.org/wiki/WHATWG) and use to be the [W3C](https://en.wikipedia.org/wiki/World_Wide_Web_Consortium). 
For those interested in the technical details on what's going on behind the scenes in browsers, you can take a look at the repository of [Chromium](https://github.com/chromium/chromium) which is an open source browser that Chrome, Edge, Brave and more use a [fork](https://en.wikipedia.org/wiki/Fork_(software_development)) of.

## Resources
[W3Schools](https://www.w3schools.com/html/default.asp)

[Mozilla](https://developer.mozilla.org/en-US/docs/Web/HTML)

[web.dev](https://web.dev/learn/html/)
</article>