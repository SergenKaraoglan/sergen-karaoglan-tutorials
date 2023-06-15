<script>
    import "../styles/global.css"
    let value = 0;
</script>

<div class="mx-auto my-3 w-fit">
    <div class="w-52 h-52 flex justify-center items-center text-5xl border-2">
        {value}
    </div>
    <div class="flex justify-center my-3">
      <input
        class="appearance-none bg-blue-500 rounded-lg h-1 thumb-lg-blue-600"
        type="range"
        min="-5"
        max="5"
        step="0.1"
        bind:value={value}
      />
    </div>
  </div>