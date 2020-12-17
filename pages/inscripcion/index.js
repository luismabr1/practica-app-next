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
          .container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 10px;
            grid-auto-flow: row;
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

