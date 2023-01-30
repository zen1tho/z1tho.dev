import { Title } from "solid-start";
import Counter from "~/components/Counter";
import styles from "~/styles/Home.module.scss";

export default function Home() {
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
