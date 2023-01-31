<script lang="ts">
	import { page } from '$app/stores';
	import { getReasonPhrase } from 'http-status-codes';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
</script>

<main>
	<header>
		ERROR {$page.status}: {getReasonPhrase($page.status)}
	</header>
	<p>
		Try refreshing your page or <a href="/">click here to go home</a>.
	</p>
</main>

<style scoped lang="scss">
	$color2: #ca6463;
	$color3: #f0917d;
	main {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;

		header {
			font-family: 'Poppins', sans-serif;
			font-weight: 700;
			font-size: 4rem;
			color: #f0907dea;
		}
		p > a {
			color: #fff;
		}
	}
</style>
