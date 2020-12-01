import React from 'react';

const OptionsList= () =>{
    var data = [{
        id:'1',
        name: 'Compras',
      },
      {
        id:'2',
        name: 'Ventas',
        },
        {
        id:'3',
        name: 'Inventario',
        }
    ]
    return (
        <>
            <div className="Options">
            {data.map(options=>{
                return(
                    <ul>
                        <li key={data.id}>{options.name}</li>
                    </ul>
                )
            })
            }
        </div>

        <style jsx>{`
            .Options{
                background: #fff;
                border-radius: 10px;
                padding: 15px;
                box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
                height:300px;
                width: 200px;
                display: inline-grid;
            }
            ul li{
                text-decoration: none;
            }
        `}
        </style>
        
    </>
    );
}

export default OptionsList;