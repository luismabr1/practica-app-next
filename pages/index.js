import Head from 'next/head'
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <Head>
      <title>Practica 2020</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="../js/bootstrap.js"/>
      </Head>

      <Navbar/>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )


}
