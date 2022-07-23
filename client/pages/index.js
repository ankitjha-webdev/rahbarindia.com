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
        <h1 className={styles.title}>
          Welcome to Rahbar India
        </h1>
        <p className={styles.description}>
          We are a travel agency that specializes in tours of the world. We offer a wide variety of tours, from day trips to full day excursions, all designed to make you feel like you are in the area yourself. We can even help you plan your next adventure. We are here to make your trip a fun and adventure filled one.
        </p>
        <div className={styles.grid}>
          <div className={styles.gridItem}>
            {/* <Image
              src="/images/tour.jpg"
              alt="Tour"
              width={400}
              height={400}
              layout="fill"
            /> */}
            <h3>Tours</h3>
            <p>
              We can help you plan your next adventure. We can even help you plan your next adventure. We are here to make your trip a fun and adventure filled one.
            </p>
          </div>
          <div className={styles.gridItem}>
            {/* <Image
              src="/images/hotel.jpg"
              alt="Hotel"
              width={400}
              height={400}
              layout="fill"
            /> */}
            <h3>Hotels</h3>
            <p>
              We can help you plan your next adventure. We can even help you plan your next adventure. We are here to make your trip a fun and adventure filled one.
            </p>
          </div>
          </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/ankitjha-webdev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Develped by Ankit Kumar{' '}
          <span className="items-center justify-center mx-2">
            <Image src="/logo_rahbarindia.png" alt="Rahbar India Logo" width="200" height="34px"  />
          </span>
        </a>
      </footer>
    </div>
  )
}
