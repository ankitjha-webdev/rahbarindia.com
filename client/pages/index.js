import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header/Header'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rahbar India a Travel Agency</title>
        <meta name="description" content="Developed by Ankit Kumar " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <Header/>
      <main className={styles.main}>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/ankitjha-webdev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Develped by Ankit Kumar{' '}
          <span className={styles.logo}>
            <Image src="/logo_rahbarindia.png" alt="Rahbar India Logo" width="200" height="34px"  />
          </span>
        </a>
      </footer>
    </div>
  )
}
