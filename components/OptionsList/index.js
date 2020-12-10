import React, {useEffect, useState} from 'react';


const OptionsList= (props) =>{
/*     const {comite, setComite} = useState([])
      const [timeline, setTimeline] = useState([]) */
    var data = [{
        "id":"1",
        "name": 'crisis',
      },
      {
        "id":"2",
        "name": 'ag',
        },
        {
        "id":"3",
        "name": 'security',
        }
    ]
   /*  useEffect((timeline)=>{
        fetch('https://practica-app-next.vercel.app/api/statuses/home_timeline')
        .then(res=>res.json())
        .then(setTimeline)
    }) */


    const handleClick = (x) => {
        console.log(x)

    }
    return (
        <>
            <div className="Options">
                <ul>
                    {data.map(options=>{
                        return(
                                <li key={data.id}  onClick={()=>  handleClick(options.name) }>{options.name}</li>
                            )
                        })
                    }
                </ul>
            </div>

            {/* <div className="main">
                <div className="section">
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
                </div>
          </div> */}



        <style jsx>{`
            .Options{
                background: #fff;
                width: 200px;
                display: inline-grid;
            }
            ul li{
                /* nunca supe porque no pude quitarle la decoracion con text-decoration:none 1/12/2020 */
                list-style-type: none;
                padding: 10px;
                margin-bottom: 5px;
                border: 1px solid black;
                transition: background-color .5s;
            }
            ul li:hover{
                background-color: red;
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

export default OptionsList;