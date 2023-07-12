<script>
	function createHTML(s) {
		let html =
			`<html >
        <head>
        <style>
			img {
				width: 250px;
				height: 250px;
			}
            * {
                border: solid;
            }
            * {
                margin: 5px;
            }
            </style>
    </head>
    <body>` +
			s +
			`</body>
  </html>
`;
		return html;
	}

	let html = '';
	let html1 = createHTML('');
	let html2 = createHTML('<h1>Pixel art Chipmunk</h1>');

	let html3 = createHTML(`
	<h1>Pixel art Chipmunk</h1>
		<p>Generated using Dalle</p> 
`);

	let html4 = createHTML(`
	<h1>Pixel art Chipmunk</h1>
		<p>Generated using Dalle</p> 
		<img src="https://openailabsprodscus.blob.core.windows.net/private/user-WqZKZrMs9xF112uwS6xnbMHP/generations/generation-xMP7pzRv5de7VgrMNuMCskW4/image.webp?st=2023-07-12T18%3A36%3A42Z&se=2023-07-12T20%3A34%3A42Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/webp&skoid=15f0b47b-a152-4599-9e98-9cb4a58269f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-07-12T18%3A30%3A58Z&ske=2023-07-19T18%3A30%3A58Z&sks=b&skv=2021-08-06&sig=sPjs%2BhCldrF8aYyE7JXnqet/SkVhfR2q9IzwzQG%2BdBY%3D">
`);

	let html5 = createHTML(`
    <body>
        <div >
			<h1>Pixel art Chipmunk</h1>
		<p>Generated using Dalle</p> 
    </div>
	<img src="https://openailabsprodscus.blob.core.windows.net/private/user-WqZKZrMs9xF112uwS6xnbMHP/generations/generation-xMP7pzRv5de7VgrMNuMCskW4/image.webp?st=2023-07-12T18%3A36%3A42Z&se=2023-07-12T20%3A34%3A42Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/webp&skoid=15f0b47b-a152-4599-9e98-9cb4a58269f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-07-12T18%3A30%3A58Z&ske=2023-07-19T18%3A30%3A58Z&sks=b&skv=2021-08-06&sig=sPjs%2BhCldrF8aYyE7JXnqet/SkVhfR2q9IzwzQG%2BdBY%3D">
`);

	let time = 1000;
	function animate() {
		html = html1;
		setTimeout(() => {
			html = html2;
		}, time);

		setTimeout(() => {
			html = html3;
		}, time * 2);

		setTimeout(() => {
			html = html4;
		}, time * 3);

		setTimeout(() => {
			html = html5;
		}, time * 4);
	}

	animate();
	setInterval(() => animate(), time * 5);
</script>

<iframe class="mx-auto h-96 w-80 sm:w-96 my-5" srcdoc={html} title="HTML example" />
