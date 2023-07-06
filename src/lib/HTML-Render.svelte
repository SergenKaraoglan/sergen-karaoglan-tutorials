<script>
	let html = `<html style="border: solid">
  </html>
`;

	let html2 = `<html style="border: solid">
    <body style="border: solid">
    </body>
  </html>
`;

	let html3 = `<html style="border: solid">
    <body style="border: solid">
        <h1 style="border: solid">Pikachu</h1>
        <p style="border: solid">Pokemon number 25</p> 
    </body>
  </html>
`;

	let html4 = `<html style="border: solid">
    <body style="border: solid">
        <h1 style="border: solid">Pikachu</h1>
        <p style="border: solid">Pokemon number 25</p> 
        <img src="https://upload.wikimedia.org/wikipedia/en/a/a6/Pok%C3%A9mon_Pikachu_art.png" style="border: solid">
    </body>
  </html>
`;

	let html5 = `<html style="border: solid">
    <body style="border: solid">
        <div style="border: solid">
        <h1 style="border: solid">Pikachu</h1>
        <p style="border: solid">Pokemon number 25</p> 
    </div>
        <img src="https://upload.wikimedia.org/wikipedia/en/a/a6/Pok%C3%A9mon_Pikachu_art.png" style="border: solid">
    </body>
  </html>
`;

	setTimeout(() => {
		html = html2;
	}, 1000);

	setTimeout(() => {
		html = html3;
	}, 2000);

	setTimeout(() => {
		html = html4;
	}, 3000);

	setTimeout(() => {
		html = html5;
	}, 4000);
</script>

<iframe class="mx-auto h-96 w-96 my-5" srcdoc={html} title="HTML example" />
