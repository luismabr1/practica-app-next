import Comment from '../Comment';
import {useEffect, useState} from 'react'
const CommentSection = () => {
    const [timeline, setTimeline] = useState([])

    useEffect(()=>{
        fetch('http://localhost:3000/api/statuses/home_timeline')
        .then(res=>res.json())
        .then(setTimeline)
    }, [])
    return (
        <>

            <section>
                <header>
                        <h2>Comentarios</h2>
                </header>
                            {timeline.map(users =>{
                                return (
                                    <Comment key={users.id}
                                    username={users.username}
                                    name = {users.name}
                                    comentario= {users.company.catchPhrase}
                                    id={users.id}
                                    />
                                )
                            })}
            </section>

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
        `}</style>
        </>
    );
}

export default CommentSection;