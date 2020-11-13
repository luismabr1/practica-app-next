import {useState, useEffect} from 'react'
import AppLayout from '../../components/AppLayout'
import UsersList from '../../components/UsersList'
import useUser from '../../hooks/useUser'
import OptionsList from '../../components/OptionsList'


const Inscripcion = () => {
  const [timeline, setTimeline] = useState([]) 


  useUser();
    useEffect((timeline)=>{
      fetch('https://practica-app-next.vercel.app/api/statuses/home_timeline')
      .then(res=>res.json())
      .then(setTimeline)
  })  
  return (
      <>
      <OptionsList />
      <AppLayout>
              <section>
              <header>
                  <h2>Inicio</h2>
              </header>
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
        </AppLayout>

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
            section {
                        background: #fff;
                        border-radius: 10px;
                        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
                        overflow-y:auto;
                        position:relative;
                        height:100%;
                        width: 100%;
            }

          h2{
              font-size: 21px;
              font-weight: 700;
          }
          .Options{
            display: grid;

              background: #fff;
              border-radius: 10px;
              box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
          }
          .wrapper{
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: 100px 100px;
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

