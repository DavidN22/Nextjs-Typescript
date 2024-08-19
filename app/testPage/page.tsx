import styles from './testPage.module.css';
export default async function Home() {
  const response = await fetch("http://localhost:3000/api");
  const data = await response.json();

  return (
    <main className={styles.main}>
    <h1 className={styles.title}>Welcome to Next.js 15!</h1>
    <p className={styles.text}>{data.message}</p>
  </main>
  );
}
