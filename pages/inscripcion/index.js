/* import {useState, useEffect} from 'react'
import AppLayout from '../../components/AppLayout'
import UsersList from '../../components/UsersList' */
import useUser from '../../hooks/useUser'
import OptionsList from '../../components/OptionsList'
import Form from '../../components/Form'


const Inscripcion = (props) => {
  const timeline = props.preInscritos
  useUser();
  return (
      <>

      <div className="container">
          <Form />
          <OptionsList timeline={timeline} />

      </div>



          <style jsx>{`
          header{
            align-items: center;
            padding-left: 10px;
            background: #ffffffaa;
            backdrop-filter: blur(5px);
            border-botton:1px solid #eee;
            height: 49px;
            position:sticky;
            top:0;
            width: 100%;
        }
          h2{
              font-size: 21px;
              font-weight: 700;
          }

          nav{
              botton:0;
              border-top:1px solid #ccc;
              height: 49px;
              position:fixed;
          }

          .container {
            display: grid;
            grid-template-columns: repeat(3, 200px);
            grid-gap: 10px;
            grid-auto-flow: row;
          }
          .main{
            display: inline-grid;
          }
        .section{
            background: #fff;
            border-radius: 10px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
            overflow-y:auto;
            position:relative;
            height: 500px;
            width:400px;
        }

          `}
          </style>
      </>
  );
}

Inscripcion.getInitialProps = async (ctx) => {
  let res = await fetch(`https://practica-app-next.vercel.app/api/statuses/home_timeline`)
  let preInscritos = await res.json()
  /* const body = JSON.stringify(preInscritos) */
  return  {preInscritos}
}

export default Inscripcion

