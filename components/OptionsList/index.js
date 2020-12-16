import React, {useState} from 'react';
import ListSection from '../ListSection'


const OptionsList= (props) =>{
    const timeline=props.timeline
    const [comite, setComite] = useState('')
    
    const handleClick = async (props) => {
        await fetch(`https://practica-app-next.vercel.app/api/comites/${props}`, {mode: 'cors'})
        .then(response => response.json())
        .then(data=>setComite(data))
    }


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


    return (
        <>
            <div className="Options">
                <ul>
                    {data.map(options=>{
                        return(

                                <li 
                                    key={options.id}  
                                    onClick={ () => handleClick(options.name) }>
                                    {options.name}
                                </li> 
                            )
                        })
                    }
                </ul>
            </div>

            {comite ?
            <ListSection timeline={comite} />
            :
            <ListSection timeline={timeline} />


            }

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
        `}
        </style>
        
    </>
    );
}

export default OptionsList;