import HomeLayout from '../../../components/HomeLayout';
import Button from '../../../components/Button';
import useUser from '../../../hooks/useUser'
const ComposeTweet = () => {
 const user = useUser(); 
    return (
        <>
        <HomeLayout>
            <div className="box">
                <form action="">
                        <textarea name="" id="" cols="30" rows="10" placeholder="Ingrese la informacion">
                        </textarea>
                        <Button>Ingresar</Button>
                </form>
            </div>

        </HomeLayout>

            <style jsx>{`
                textarea{
                    borde:0;
                    padding:15px;
                    /* manejo del tamaño manual */
                    resize: none;
                    font-size: 21px;
                    width: 100%;
                    /* deliniado del focus */
                    outline: 0;
                }
                .box{
                    padding: 15px;
                }
            `} </style>
        </>
    );
}

export default ComposeTweet;