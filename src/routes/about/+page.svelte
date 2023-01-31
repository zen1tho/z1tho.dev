<main>
	<header>About Me</header>
	<div class="Bio">
		<div>
			<p>
				Hello, World! My name is zen1tho. I've been programming ever since I was eight years old.
			</p>
			<p>I started with web development, then to dotnet and from there I moved to Rust.</p>
			<p>I have experience with many areas of programming, but these are my main interests:</p>
			<ul>
				<li>Cryptography 🔏</li>
				<li>Cybersecurity 🔒</li>
				<li>Privacy 🔑</li>
				<li>Hacking 🔐</li>
				<li>Web development 👷</li>
				<li>Linux 🐧</li>
			</ul>
		</div>
	</div>
</main>

<svelte:head>
	<title>zen1tho's blog</title>
</svelte:head>

<style scoped lang="scss">
	main {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		height: 60%;
		width: 60%;
		header {
			font-size: 4rem;
			font-family: 'Poppins', sans-serif;
			font-weight: 700;
			color: #d8dee9;
		}
		.Bio {
			font-size: 1.2rem;
			ul {
				list-style-type: circle;
			}
		}
	}
</style>
