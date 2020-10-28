
import Head from "next/head";
import AppLayout from "../components/AppLayout";
import { colors } from "../styles/themes";

import Button from '../components/Button'
import Google from '../components/Icons/Google'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Practica 2020</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <AppLayout>
        <section>
          <img src="/LOGO-MOVENU-ABRA-NORMAL.PNG" alt="logo" />
          <h1>MOVENU 2020</h1>
          <div>
            
              <Button /* onClick={handleClick} */>
                <Google width={24} height={24} />
                Login with Google
              </Button>

          </div>
        </section>
      </AppLayout>

      <style jsx>
        {`
          section {
            display: grid;
            height: 100%;
            place-content: center;
            place-items: center;
          }
          img {
            width: 400px;
          }
          h1 {
            color: ${colors.primary};
            font-weight: 800;
            margin-bottom: 0;
          }

          div {
            margin-top: 16px;
          }
        `}
      </style>
    </div>
  );
}
