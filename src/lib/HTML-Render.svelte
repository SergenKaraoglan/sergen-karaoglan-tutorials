<script>
	let html = '';
	let html1 = `<html >
        <head>
        <style>
            * {
                border: solid;
            }
            </style>
    </head>
    <body>
    </body>
  </html>
`;

	let html2 = `<html >
        <head>
        <style>
            * {
                border: solid;
            }
            </style>
    </head>
    <body >
        <h1 >Pikachu</h1>
        <p >Pokemon number 25</p> 
    </body>
  </html>
`;

	let html3 = `<html >
        <head>
        <style>
            * {
                border: solid;
            }
            </style>
    </head>
    <body >
        <h1 >Pikachu</h1>
        <p >Pokemon number 25</p> 
        <img src="https://upload.wikimedia.org/wikipedia/en/a/a6/Pok%C3%A9mon_Pikachu_art.png" >
    </body>
  </html>
`;

	let html4 = `<html >
    <head>
        <style>
            * {
                border: solid;
            }
            </style>
    </head>
    <body>
        <div >
        <h1 >Pikachu</h1>
        <p >Pokemon number 25</p> 
    </div>
        <img src="https://upload.wikimedia.org/wikipedia/en/a/a6/Pok%C3%A9mon_Pikachu_art.png" >
    </body>
  </html>
`;

let time = 1500
	function animate() {
		html = html1;
		setTimeout(() => {
			html = html2;
		}, time);

		setTimeout(() => {
			html = html3;
		}, (time * 2));

		setTimeout(() => {
			html = html4;
		}, (time * 3));
	}

    animate();
    setInterval(() => animate(), (time * 4));
</script>

<iframe class="mx-auto h-96 w-96 my-5" srcdoc={html} title="HTML example" />
