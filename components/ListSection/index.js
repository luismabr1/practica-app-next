import UsersList from '../UsersList'

const ListSection = (props) =>{
const timeline = props.timeline
return(
    <>
        <div className="main">
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
        </div>

        <style jsx>{`
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
    )
}

export default ListSection