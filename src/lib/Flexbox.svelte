<script>
 let flexDirection
 let justifyContent
 let alignItems
</script>

<div class="flex w-60 h-60 bg-blue-600 m-auto" style="flex-direction:{flexDirection}; justify-content:{justifyContent}; align-items:{alignItems}">
    <div class="w-16 h-16 border bg-blue-400 text-white flex-center">1</div>
    <div class="w-16 h-16 border bg-blue-400 text-white flex-center">2</div>
    <div class="w-16 h-16 border bg-blue-400 text-white flex-center">3</div>
</div>
<select bind:value={flexDirection} class="block m-auto mt-5">
    <option>Row</option>
    <option>Row-reverse</option>
    <option>Column</option>
    <option>Column-reverse</option>
</select>

<select bind:value={justifyContent} class="block m-auto mt-5">
    <option>Flex-start</option>
    <option>Flex-end</option>
    <option>Center</option>
    <option>Space-between</option>
    <option>Space-around</option>
    <option>Space-evenly</option>
</select>

<select bind:value={alignItems} class="block m-auto mt-5">
    <option>Flex-start</option>
    <option>Flex-end</option>
    <option>Center</option>
</select>