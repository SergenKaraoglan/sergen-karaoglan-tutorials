<script>
import DOMTree from "$lib/DOM-Tree.svelte";
</script>

<svelte:head>
	<title>HTML | Sergen Karaoglan</title>
	<meta name="description" content="Learn the fundamentals of HTML" />
</svelte:head>



<article class="max-sm:mx-4 prose lg:prose-xl m-auto pt-16">

# HTML
What your browser just requested and has rendered is a HyperText Markup Language ([HTML](https://en.wikipedia.org/wiki/HTML)) page or more specifically [HTML5](https://en.wikipedia.org/wiki/HTML5), which is the current [markup language](https://en.wikipedia.org/wiki/Markup_language) for browsers used for structuring and determining the behaviour of a webpage. Whether it is link, an image or a video, this is done using HTML. Now there are a countless number of HTML tutorials out there but I wanted to try something different and give a bit more context to HTML than usual and show a bit on how it works behind the scenes. HTML is written using a series of tags that look like the following: "<tagname> content </tagname>. In this example I just used a placeholder name but depending on the name, a specified behaviour will be performed. 

Now, here is where I insert my own style of teaching. There are over 100 HTML which can all be found from a [reference](https://www.w3schools.com/tags/). Many tutorials will go through a bunch of individual tags with an explanation, but you can easily skim through and find out but trying to remember them before wrtiting a webpage is pointless. If you have a desired behaviour in mind, it is more than effective to look through the reference and see if it is available.

Now that you probably have a decent grasp of HTML, I will give a bit more context to those interested, so it seems a little less like magic. HTML needs to be defined by someone, or some group of people for which then browser vendors (Chrome, Safari, Firefox, etc.) can then implement so we have a consistently functioning web across diferrent devices and different browsers. For those interested in what's going on behind the scenes in browsers, you can take a look at thr repository of Chromium which is an open source browser that Chrome, Edge, Brave and more use a fork of. 

Now here is an important detail every web developer should be famillar with. HTML builds something known as the [Document Object Model](https://en.wikipedia.org/wiki/Document_Object_Model)

<div class="w-fit m-auto p-5">
<!-- <DOMTree /> -->
</div>

Now, unless you are already famillar, you might be saying "how do I style a page, or give it functionallity such as showing a modal". Well this is done using other lanugages understood by your browser which are Cascading Style Sheets (CSS), and JavaScript which won't be covered here but also heavily build on top of the concept of the DOM Tree and HTML elements, so definitely take the time to understand it because if you do you have alredy covered an important topic that matters at all levels of expereience and something I especially wanted to highlight. As a quick side note, browsers are typically implemented using C++.

Eventough I said, I won't be going through a bunch of tags, I think showing some of the current best practices is still important to get started. Feel free to write whatever you want and watch as the DOM tree updates and HTML renders live in your browser.

## Resources
[W3Schools](https://www.w3schools.com/html/default.asp)

[Mozilla](https://developer.mozilla.org/en-US/docs/Web/HTML)

[web.dev](https://web.dev/learn/html/)
</article>