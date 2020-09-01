import {useState, useEffect} from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import AppLayout from '../components/AppLayout';
import {colors} from '../styles/themes'
import Button from '../components/Button';
import Google from '../components/Icons/Google';
import {loginWithGoogle, onAuthStateChanged} from '../firebase/client';

export default function Home() {
  const [user, setUser] = useState(undefined)

  useEffect(() => {
    onAuthStateChanged(setUser)
  }, [])

  
  const handleClick = () => {
    loginWithGoogle()
    .then(setUser).catch(err => {
      console.log(err)
    })
  }
  console.log(user)

  return (
    <div>
      <Head>
      <title>Practica 2020</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

        <AppLayout>
          <section>
            <img src='/LOGO-MOVENU-ABRA-NORMAL.PNG' alt="logo"/> 
            <h1>MOVENU 2020</h1>
            <div>
              {
                user === null && <Button onClick={handleClick}>
                  <Google width={24} height={24} />
                  Login with Google
                </Button>
                }
                {
                 user && user.avatar && <div>
                  <img src={user.avatar} alt=""/>
                  <strong>{user.name}</strong>
                </div>
                }
            </div>
          </section>

        </AppLayout>

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
      <style jsx>{`
      section{
        display:grid;
        height:100%;
        place-content:center;
        place-items:center;
      }
        img{
          width:400px;
        }
        h1{
          color:${colors.primary};
          font-weight:800;
          margin-bottom:0;
        }

        div{
          margin-top:16px;
        }

      `}

      </style>
    </div>
  )


}
