<!--create box-->
<div id="box" class="m-auto flex-center h-48 w-48 relative">
	<div class="absolute w-48 h-32 bg-blue-500 rounded m-auto text-white flex-center opacity-50" style="transform: translate3d(30px, 0px, -100px) rotateY(180deg);;">The 3rd dimension</div>
    <div class="absolute w-48 h-32 bg-red-500 rounded m-auto text-white flex-center opacity-50" style="transform: translate3d(30px, 0px, 100px);">The 3rd dimension</div>
    <div class="absolute w-48 h-32 bg-green-500 rounded m-auto text-white flex-center opacity-50" style="transform: translate3d(-70px, 0px, 0px) rotateY(-90deg);">The 3rd dimension</div>
    <div class="absolute w-48 h-32 bg-yellow-500 rounded m-auto text-white flex-center opacity-50" style="transform: translate3d(130px, 0px, 0px) rotateY(90deg);">The 3rd dimension</div>
</div>

<style>
	#box {
		animation: rotate 5s linear infinite;
		transform-style: preserve-3d;
	}
	@keyframes rotate {
		0% {
			transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
		}
		100% {
			transform: rotateY(360deg);
		}
	}
</style>
