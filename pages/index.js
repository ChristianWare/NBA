import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home({ teams }) {
  console.log(teams);

  return (
    <div className={styles.container}>
      <Head>
        <title>Next NBA</title>
        <link rel='icon' href='/favicon.io' />
      </Head>
      <main>
        <h1>NBA Teams</h1>
        {teams.data.map((team) => (
          <li key={team.id}>{team.name}</li>
        ))}
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  const res = await fetch("https://www.balldontlie.io/api/v1/teams");
  const teams = await res.json();

  return {
    props: { teams },
  };
}
