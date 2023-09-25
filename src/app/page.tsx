import Image from "next/image";
import styles from "./page.module.css";
export default function Home() {
  return (
    <div>
      <h1>Garam Blog</h1>
      <section className={styles.headingMd}>
        <p>[Garam Han Introduction]</p>
        <p>(This is a website)</p>
      </section>
      <section className={`${styles.headingMd} ${styles.padding1px}`}>
        <h2 className={styles.headingLg}>BLOG</h2>
        <ul className={styles.list}></ul>
      </section>
    </div>
  );
}
