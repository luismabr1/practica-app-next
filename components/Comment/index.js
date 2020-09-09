const Comment = ({username, name, comentario, id}) => {
    return (
        <>
            <article>
                <div>
                    {name}
                </div>
                <section>
                    <strong>{username}</strong>
                    <p> {comentario} </p>
                </section>
            </article>
            <style jsx> {`
                article{
                    border-bottom: 2px solid #eee;
                    display:flex;
                    padding:10px 15px;
                }
                div{
                    padding-right:10px;
                }
                p{
                    line-height: 1.3125;
                    margin:0;
                }
            `} </style>
        </>
       
    );
}

export default Comment;