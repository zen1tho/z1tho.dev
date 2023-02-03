<script lang="ts">
	import zen1thodev from '../../assets/zenscr.png';
</script>

<svelte:head>
	<title>zen1tho's projects</title>

	<meta name="description" content="zen1tho's projects." />
	<meta name="keywords" content="zen1tho, projects, portfolio, programming, coding, linux" />
	<meta name="author" content="zen1tho" />
</svelte:head>

<main>
	<h1>Projects</h1>
	<p>Here's a list of ongoing projects I'm developing:</p>
	<div class="Projects">
		<div class="Project">
			<div
				class="cover"
				style={`background-image: url('${zen1thodev}'); background-size: 125%; background-position: center 50%`}
			/>
			<h4>z1tho.dev</h4>
		</div>
	</div>
</main>

<style scoped lang="scss">
	main {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		height: 60%;
		width: 60%;
		h1 {
			font-size: 4rem;
			font-family: 'Poppins', sans-serif;
			font-weight: 700;
			color: #ebcb8b;
			margin: 0;
		}
		.Projects {
			width: 100%;
			display: flex;
			justify-content: flex-start;
			align-items: flex-start;
			height: 20vh;
			.Project {
				display: flex;
				width: 20vw;
				height: 100%;
				border: solid #f0917d 2px;
				background-color: #f0917d99;
				border-radius: 3px;
				align-items: flex-end;
				justify-content: flex-start;
				padding: 1rem;
				font-family: 'Poppins', sans-serif;
				color: #d8dee9;
				.cover {
					position: absolute;
					top: 0;
					bottom: 0;
					width: 80%;
					height: 80%;
					background-repeat: no-repeat;
					background-position: center center;
					background-size: contain;
				}
				h4 {
					margin: 0;
				}
			}
		}
	}
</style>
