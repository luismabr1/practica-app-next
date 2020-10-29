

const Options = () => {
    const opciones = ['Inventario', "Ventas", "Mermas", "Empleados", "Metas"]
    return (
        <>
            <ul>
                {opciones.map( opc =><li>{opc}</li>)}
            </ul>

        <style jsx>{`
            ul{
                text-decoration: none;
                size: 50px;
                color: blue;
            }
        `}
        </style>
        </>

    )
}

export default Options;