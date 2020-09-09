import {useState, useEffect} from 'react'
import AppLayout from '../../components/AppLayout'
import UsersList from '../../components/UsersList'


const Inscripcion = () => {
  const [timeline, setTimeline] = useState([])

  useEffect(()=>{
      fetch('http://localhost:3000/api/statuses/home_timeline')
      .then(res=>res.json())
      .then(setTimeline)
  })
  return (
      <>
      <AppLayout>
              <header>
                  <h2>Inicio</h2>
              </header>
              <section>
                  {timeline.map(users =>{
                      return (
                          <UsersList key={users.id}
                          username={users.username}
                          name = {users.name}
                          comentario= {users.company.catchPhrase}
                          id={users.id}
                          />
                      )
                  })}
              </section>
              <nav>

              </nav>
              </AppLayout>

          <style jsx>{`
          header{
              align-items: center;
              padding-left: 10px;
              border-botton:1px solid #ccc;
              height: 49px;
              position:sticky;
              top:0;
              width: 100%;
          }
          h2{
              font-size: 21px;
              font-weight: 700;
          }
          section{
              height: 100%;
          }
          nav{
              botton:0;
              border-top:1px solid #ccc;
              height: 49px;
              position:fixed;

          }
          `}
          </style>
      </>
  );
}

export default Inscripcion;