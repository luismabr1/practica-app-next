import { loginWithGoogle, onAuthStateChanged } from "../../firebase/client";
import HomeLayout from '../../components/HomeLayout'
import CommentSection from '../../components/CommentSection'
import Loader from '../../components/Loader'
import useUser, {USER_STATES} from '../../hooks/useUser'
import SectionInfo from '../../components/SectionInfo';
import SectionAbout from '../../components/SectionAbout'


const HomePage = () => {
  const user = useUser();

  const handleClick = () => {
    loginWithGoogle()
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(user);


    return (
        <>
        <HomeLayout>

        <SectionAbout />
        <SectionInfo />
{/* La doble negacion !!: en este caso lo use para transformar el objeto de user en true (que trajo algo) en vez del objeto en si, para que, si hay algo dentro de la variable,  hacer una comparacion directamente entre booleanos */}
                        {!!user === USER_STATES.LOGGED && ( <div className="comment">   
                                <CommentSection />
                        </div>
                        )}
                        {user === USER_STATES.NOT_KNOWN && USER_STATES.LOGGED && <Loader/>}


        </HomeLayout>

            <style jsx>{`
            .comment {
                width: 40vh;
                height: 50vh;
                overflow-y:auto;
                box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
                background: #fff;
              }

            h2{
                font-size: 21px;
                font-weight: 700;
                padding:15px;
            }
            section{
                background: rgba(250, 250, 250, 0.3);
                border-radius: 10px;
                box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
                position:relative;
                width: auto;
                margin: 30px;
                z-index: -1;
            }
            `}
            </style>
        </>
    );
}

export default HomePage;