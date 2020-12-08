import React from 'react';

const OptionsList= () =>{
    var data = [{
        "id":"1",
        "name": 'Compras',
      },
      {
        "id":"2",
        "name": 'Ventas',
        },
        {
        "id":"3",
        "name": 'Inventario',
        }
    ]
    return (
        <>
            <div className="Options">
                <ul>
                    {data.map(options=>{
                        return(
                                <li key={data.id}>{options.name}</li>
                            )
                        })
                    }
                </ul>
            </div>

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