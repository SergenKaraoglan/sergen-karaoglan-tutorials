<script>
	function createHTML(s) {
		let html =
			`<html >
        <head>
        <style>
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
	let html2 = createHTML('<h1 >Pikachu</h1>');

	let html3 = createHTML(`
        <h1 >Pikachu</h1>
        <p >Pokemon number 25</p> 
`);

	let html4 = createHTML(`
        <h1 >Pikachu</h1>
        <p >Pokemon number 25</p> 
        <img src="https://upload.wikimedia.org/wikipedia/en/a/a6/Pok%C3%A9mon_Pikachu_art.png" >
`);

	let html5 = createHTML(`
    <body>
        <div >
        <h1 >Pikachu</h1>
        <p >Pokemon number 25</p> 
    </div>
        <img src="https://upload.wikimedia.org/wikipedia/en/a/a6/Pok%C3%A9mon_Pikachu_art.png" >
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
