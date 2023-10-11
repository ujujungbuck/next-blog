import Image from "next/image";
import styles from "./page.module.css";
import { GetStaticProps } from "next";
import { getSortedPostsData } from "../../lib/post";
import Link from "next/link";

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
  return (
    <div className={styles.container}>
      <Link href={"/posts"}>posts</Link>
      <h1>Garam Blog</h1>

      <section className={styles.headingMd}>
        <p>[Garam Han Introduction]</p>
        <p>(This is a website)</p>
      </section>
      <section className={`${styles.headingMd} ${styles.padding1px}`}>
        <h2 className={styles.headingLg}>BLOG</h2>
        <ul className={styles.list}></ul>
        {allPostsData?.map(({ id, title, date }) => (
          <li className={styles.listItem} key={id}>
            <a>{title}</a>
            <br />
            <small className={styles.lightText}>{date}</small>
          </li>
        ))}
      </section>
    </div>
  );
}

// export const getStaticProps: GetStaticProps = async () => {
//   const allPostsData = getSortedPostsData();
//   return {
//     props: {
//       allPostsData,
//     },
//   };
// };

export async function fetchData() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
