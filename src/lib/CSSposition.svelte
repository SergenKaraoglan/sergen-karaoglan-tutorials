<script>
	const html = `<html>
    <head>
        <style>
            *{
                font-family: Arial, Helvetica, sans-serif;
            }
             .fixed {
                position: fixed;
                bottom: 0px;
                left: opx;
                background-color: blue;
                color: white;
                padding: 16px;
                border-radius: 8px;
             }
                .relative {
                    position: relative;
                    top: 40px;
                    left: 0;
                    background-color: red;
                    color: white;
                    padding: 16px;
                    border-radius: 8px;
                }
                .sticky {
                    position: sticky;
                    position: -webkit-sticky;
                    bottom: 50px;
                    left: 0;
                    background-color: green;
                    color: white;
                    padding: 16px;
                    border-radius: 8px;
                }
                .static {
                    position: static;
                    background-color: yellow;
                    color: black;
                    padding: 16px;
                    border-radius: 8px;
                }
                .absolute {
                    position: absolute;
                    top: 0;
                    right: 50px;
                    background-color: purple;
                    color: white;
                    padding: 16px;
                    border-radius: 8px;
                }

        </style>
    </head>
    <body>
        <div class="static">static</div>
        <div class="fixed">fixed</div>
        <div class="relative">relative <div class="absolute">absolute</div> </div>
        <div class="sticky">sticky</div>
    </body>
    </html>`;
</script>

<iframe class="mx-auto h-80 w-80 my-5 border" srcdoc={html} title="Position example" />
