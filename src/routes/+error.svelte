<script lang="ts">
	import { page } from '$app/stores';
	import { getReasonPhrase } from 'http-status-codes';
</script>

<main>
	<header>
		ERROR {$page.status}: {getReasonPhrase($page.status)}
	</header>
	<p>Try refreshing your page or getting outta here.</p>
</main>

<style scoped lang="scss">
	header {
		font-family: 'Poppins', sans-serif;
		font-weight: 700;
		font-size: 4rem;
	}
	main {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
</style>
