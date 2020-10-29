

const Options = () => {
    const opciones = ['Inventario', "Ventas", "Mermas", "Empleados", "Metas"]
    return (
        <>

            <ul className="Element">
                {opciones.map( opc =><li>{opc}</li>)}
            </ul>


        <style jsx>{`

            .Element li{
                text-decoration: none;
                size: 50px;
                color: blue;
                border: 1px solid #000;
                transition: 0.5;
            }

            .Element li:hover{
                color: red
                background-color: gray;
            }
        `}
        </style>
        </>

    )
}

export default Options;