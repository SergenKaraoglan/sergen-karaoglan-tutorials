<script>
  let colour = "#000000";
  let borderRadius = 0;
  let borderStyle = "solid";
  let fontFamily = "sans-serif";
    setInterval(() => {
        colour = "#" + Math.floor(Math.random() * 16777215).toString(16);
        borderRadius = Math.floor(Math.random() * 100);
        borderStyle = ["solid", "dashed", "double"][Math.floor(Math.random() * 3)];
        fontFamily = ["sans-serif", "serif", "monospace", "cursive", "fantasy"][Math.floor(Math.random() * 5)];
    }, 500);

  
  
</script>
<div class="m-auto h-36 w-40 border-2 border-gray-800 flex-center text-white" 
    style="background-color: {colour}; border-radius: {borderRadius}px; border-style: {borderStyle}; font-family:{fontFamily};">
    CSS
</div>