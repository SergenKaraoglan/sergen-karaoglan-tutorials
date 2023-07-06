<script>
import DOMTree from "$lib/DOM-Tree.svelte";
import HTMLatt from "$lib/HTML-Attributes.svelte";
import HTMLrender from "$lib/HTML-Render.svelte";
</script>

<svelte:head>
	<title>HTML Fundamentals| Sergen Karaoglan</title>
	<meta name="description" content="Learn the fundamentals of HTML" />
</svelte:head>



<article class="max-sm:mx-4 prose lg:prose-xl m-auto pt-16">

# HTML Fundamentals
What your browser just requested and has rendered is a [HyperText Markup Language](https://en.wikipedia.org/wiki/HTML) (HTML) document or more specifically [HTML5](https://en.wikipedia.org/wiki/HTML5), which is the current [markup language](https://en.wikipedia.org/wiki/Markup_language) for browsers used for structuring and determining the behaviour of a webpage also commonly refferered to as the building blocks of a webpage. Whether it is a link, an image or a video, this is done using HTML. Now there are a countless number of HTML tutorials out there but I wanted to try something different and give a bit more context to HTML than usual and show a bit on how it works behind the scenes. HTML is written using a series of tags that look like the following: ```<tagname> content </tagname>```, respectively known as the opening and closing tag. In this example I just used a placeholder name but for recognised tags you will recieve different outputs within the browser. 



There are over 100 HTML which can all be found from a [reference](https://www.w3schools.com/tags/) but before that intimadates you, it is worth specifying a few things. Many tutorials will go through many individual tags with an explanation, though you can easily skim through a reference and find out about all tags and their respective output. Trying to remember them before wrtiting a webpage is not a requirement and you will mostly be using only a subset of HTML tags. If you have a desired output in mind such as displaying a video, it is more than effective to look through a reference.

Now lets get to an example. This example also includes attributes that allow you to modify how the browser renders your page.
<HTMLatt />

[WHATWG](https://en.wikipedia.org/wiki/WHATWG)
[W3C](https://en.wikipedia.org/wiki/World_Wide_Web_Consortium)

If all you want to do is build a static site without styiling, you already have the basics and the reference to do so. You might even be surprised by how much can be done with just HTML. Saying that, I will give a bit more context to those interested, so it all seems a little less like magic. HTML needs to be defined by someone, or some group of people for which then browser vendors (Chrome, Safari, Firefox, etc.) can then implement so we have a consistently functioning web across diferrent devices and different browsers. For those interested in what's going on behind the scenes in browsers, you can take a look at thr repository of Chromium which is an open source browser that Chrome, Edge, Brave and more use a fork of. 

To following is important to know for those who want to include interactivity and styiling. HTML builds something known as the [Document Object Model](https://en.wikipedia.org/wiki/Document_Object_Model) (DOM)

<div class="w-fit m-auto p-5">
<DOMTree />
</div>

Now, unless you are already famillar, you might be saying "how do I style a page, or give it functionallity such as showing a modal". Well this is done using other lanugages understood by your browser which are Cascading Style Sheets (CSS), and JavaScript which won't be covered here but also heavily build on top of the concept of the DOM Tree and HTML elements, so definitely take the time to understand it because if you do you have alredy covered an important topic that matters at all levels of expereience and something I especially wanted to highlight. As a quick side note, browsers are typically implemented using C++.

Eventough I said, I won't be going through a bunch of tags, I think showing some of the current best practices is still important to get started. Feel free to write whatever you want and watch as the DOM tree updates and HTML renders live in your browser.

<!-- API -->

I have included a border so you can visualise more specifically how the browser is rendering the tags.
Containers

<HTMLrender />

[Browser engine](https://en.wikipedia.org/wiki/Browser_engine)
## Resources
[W3Schools](https://www.w3schools.com/html/default.asp)

[Mozilla](https://developer.mozilla.org/en-US/docs/Web/HTML)

[web.dev](https://web.dev/learn/html/)
</article>