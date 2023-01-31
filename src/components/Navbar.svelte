<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import anime from 'animejs';
	import { onMount, setContext } from 'svelte';
	import { writable } from 'svelte/store';

	const routes = ['about', 'blog', 'projects', 'portfolio'];
	let activeRoutes = [] as string[];
	let navInput = writable($page.url.pathname.slice(1));
	setContext('navInput', navInput);
	let navEl: any;
	let path: string = $page.url.pathname;
	let mouseOverNav = false;

	onMount(() => {
		// It doesn't work otherwise...
		navEl.addEventListener('input', () => {
			activeRoutes = filterRoutes($navInput);
		});
		window.addEventListener('click', () => {
			mouseOverNav || (() => (activeRoutes = []))();
		});
		anime({
			targets: 'nav',
			translateY: ['-20%', '0%'],
			opacity: [0, 1],
			duration: 1000,
			easing: 'easeOutExpo'
		});
	});

	function filterRoutes(input: string) {
		return routes.filter((route: string) => {
			if (route === input) {
				return false;
			}
			return route.startsWith(input);
		});
	}
	$: $navInput = $page.url.pathname.slice(1);
	$: console.log(mouseOverNav);
</script>

<nav class="NavBar">
	<div style="display: flex; 'flex-direction': row; width: 100% ">
		~/
		<div>
			<input
				class="Input"
				bind:this={navEl}
				bind:value={$navInput}
				on:click={(e) => {
					if (!e.currentTarget.value) {
						activeRoutes = routes;
					}
				}}
				on:keydown={(e) => {
					if (e.key === 'Tab') {
						e.preventDefault();
						if (activeRoutes.length >= 1) {
							e.currentTarget.value = activeRoutes[0];
						}
					} else if (e.key === 'Enter') {
						e.preventDefault();
						activeRoutes = [];
						goto(e.currentTarget.value || '/');
					}
				}}
				on:mouseenter={() => {
					mouseOverNav = true;
				}}
				on:mouseleave={() => {
					mouseOverNav = false;
				}}
			/>
			<ul>
				{#each activeRoutes as route}
					<li><a href={`/${route}`}>{route}</a></li>
				{/each}
			</ul>
		</div>
	</div>
</nav>

<style lang="scss">
	@keyframes opac-list {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	.NavBar {
		display: flex;
		flex-direction: column;
		padding: 0;
		margin: 0;
		position: fixed;
		top: 2%;
		left: 2%;
		font-size: 1.2rem;
		font-family: 'JetBrains Mono', sans-serif;
		width: 8rem;
		z-index: 3;
		.Input {
			background-color: transparent;
			color: inherit;
			font-size: inherit;
			font-family: inherit;
			border: none;
			outline: none;
			padding: 0;
			margin: 0;
			width: 100%;
			height: 100%;
			z-index: 4;
		}
		ul {
			position: absolute;
			top: 0;
			margin: 0;
			padding: 0;
			list-style-type: none;
			color: #cfcfcf;
			cursor: default;
			li > a {
				color: inherit;
				text-decoration: none;
				transition: color 0.3s;

				animation: opac-list 0.2s ease-in-out;
			}
			li > a:hover {
				color: #ffffff;
			}
		}
	}
</style>
