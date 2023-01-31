<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import anime from 'animejs';
	import BrandLogos from '../components/BrandLogos.svelte';

	onMount(() => {
		anime({
			targets: 'main',
			translateY: ['-10%', '0%'],
			opacity: [0, 1],
			duration: 3000,
			easing: 'easeOutExpo'
		});
	});
</script>

<main class="Home">
	<div class="Profile">
		<div class="Avatar" />
		<span>zen1tho</span>
	</div>
	<div class="Bio">
		<p>Welcome to my website.</p>
		<p>I'm primarily a web developer, but I have experience in many areas of programming</p>

		<BrandLogos />
	</div>
</main>

<style lang="scss">
	.Home {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 25%;
		height: 70%;
		background-color: rgba(255, 255, 255, 0.1);
		outline: solid #ffffff99 2px;
		border-radius: 2px;
		padding: 1rem;
		.Profile {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100%;
			height: 50%;
			font-size: 2.5rem;
			font-family: 'Open Sans', sans-serif;
			flex-direction: column;
			gap: 2vh;
			.Avatar {
				height: 60%;
				aspect-ratio: 1/1;
				background-image: url('../assets/zen1tho.jpg');
				border-radius: 50%;
				outline: solid 3px #fff;
				background-size: 120%;
				background-position: center center;
				background-repeat: no-repeat;
			}
		}
		.Bio {
			height: 50%;
			width: 100%;
		}
	}
</style>
