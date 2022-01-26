import Head from 'next/head'
import Sidebar from '../components/sidebar'
import styles from '../styles/home.module.css'
import Intro from '../components/intro'



export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
      </Head>
      <Sidebar></Sidebar>

      <main className={styles.main}>
      <Intro></Intro>

        </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Matt Kulling
          <span className={styles.logo}>
          </span>
        </a>
      </footer>
    </div>
  )
}

