import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import styles from '../styles/Home.module.css'
import HomePage from './Home/HomePage'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rahbar India a Travel Agency</title>
        <meta name="description" content="Developed by Ankit Kumar " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className={styles.main}>
        <HomePage/>
        {/* <h1 className={styles.title}>
          Welcome to Rahbar India
        </h1>
        <p className={styles.description}>
          We are a travel agency that specializes in tours of the world. We offer a wide variety of tours, from day trips to full day excursions, all designed to make you feel like you are in the area yourself. We can even help you plan your next adventure. We are here to make your trip a fun and adventure filled one.
        </p>
        <div className={styles.grid}>
          <div className={styles.gridItem}>
      
            <h3>Tours</h3>
            <p>
              We can help you plan your next adventure. We can even help you plan your next adventure. We are here to make your trip a fun and adventure filled one.
            </p>
          </div>
          <div className={styles.gridItem}>
          
            <h3>Hotels</h3>
            <p>
              We can help you plan your next adventure. We can even help you plan your next adventure. We are here to make your trip a fun and adventure filled one.
            </p>
          </div>
        </div> */}
      </main>
      <Footer />
    </div>
  )
}
