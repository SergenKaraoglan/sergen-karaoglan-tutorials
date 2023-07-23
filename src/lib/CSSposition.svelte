<script>
	const html = `<html>
    <head>
        <style>
            body {
                margin: 0;
                padding: 0;
            }
            div{
                font-family: Arial, Helvetica, sans-serif;
                padding: 16px;
                border-radius: 8px;
                width: fit-content;
                margin-top: 10px;
            }
             .fixed {
                position: fixed;
                bottom: 0px;
                right: 0px;
                background-color: blue;
                color: white;
                
             }
            .relative {
                position: relative;
                top: 130px;
                left: 0;
                background-color: red;
                color: white;
            }
            .sticky {
                position: sticky;
                position: -webkit-sticky;
                top: 40%;
                left: 30%;
                background-color: green;
                color: white;
            }
            .static {
                position: static;
                background-color: red;
                color: white;
            }
            .absolute {
                position: absolute;
                top: 0;
                right: 50px;
                background-color: purple;
                color: white;
            }
            .spacer {
                height: 500px;
            }

        </style>
    </head>
    <body>
        <div class="static">Static</div>
        <div class="fixed">Fixed</div>
        
        <div class="sticky">Sticky</div>
        <div class="spacer"></div>
    </body>
    </html>`;
</script>

<iframe class="mx-auto h-60 w-60 my-5 border" srcdoc={html} title="Position example" />
