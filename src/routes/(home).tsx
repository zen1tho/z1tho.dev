import { Title } from "solid-start";
import Counter from "~/components/Counter";
import styles from "~/styles/Home.module.scss";
import anime from "animejs";
import { onMount } from "solid-js";

export default function Home() {
  onMount(() => {
    anime({
      targets: "main",
      translateY: ["-10%", "0%"],
      opacity: [0, 1],
      duration: 2500,
      easing: "easeOutExpo",
    });
  });
  return (
    <main class={styles.Home}>
      <div class={styles.Profile}>
        <div class={styles.Avatar} />
        <span>zen1tho</span>
      </div>
      <div class={styles.Bio}>
        <p>Welcome to my home.</p>
        <p>
          I'm primarily a web developer, but I have experience in many areas of
          programming
        </p>
      </div>
    </main>
  );
}
