import { fonts, colors, breakpoints } from "../../styles/themes.js";
import { addOpacityToColor } from "../../styles/utils";
import confLogo from '../../public/LOGO-MOVENU-BLANCO.png';
import Navbar from '../Navbar';

const backgroundColor = addOpacityToColor(colors.primary, 0.3);
const HomeLayout = ({children}) => {
  
    return (
        <>

              <div className="Badges">
                  <div className="Badges__hero">
                      <div className="Badges__container">
                          <img
                              className="Badges_conf-logo"
                              src={confLogo}
                              alt="Conf Logo"
                              />
                      </div>
                  </div>
              </div>
            <Navbar/>

            <div className="container">

                {children}

            </div>


            



            <style jsx>{`
            .container{
              display:grid;
              width: 100%;
              margin: 1rem;
              padding: 1rem;
              justify-content: center;
              flex-direction: columns;
            }
            @media (min-width: 50rem) {
              .container {
                grid-template-columns: auto auto;
                justify-items: center;
              }
            }

            .Badges{
              width: 100%;
            }

      .Badges__hero {
        width: 100%;
        height: 55%;
        padding: 2rem 0;
        background: url('../Icons/Stars.js'), #1B1B25;
        background-repeat: repeat;
      }
      .Badges__hero>.Badges__container {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      
      .Badges__container {
        width: 100%;
        height: auto;
        text-align: center;
        margin: 0;
      }  
      
      
      .Badges__list__container>.form-group{
        display: inline-block;
        width: 50%;
        padding: 10px;
      }
      
      
      .Badges_conf-logo {
        margin-bottom: 2rem;
        width: 260px;
      }
      
      .Badges__buttons a {
        padding: 10px 10px 10px 10px; 
        width: 33%;
        text-decoration: none;
      }
      
      
      .Badges__buttons_two {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 1rem;
      }
     
  `}</style>
  <style jsx global>
        {`
          html,
          body {
            background-image: radial-gradient(
                ${backgroundColor} 1px,
                transparent 1px
              ),
              radial-gradient(${backgroundColor} 1px, transparent 1px);
            background-position: 0 0, 25px 25px;
            background-size: 50px 50px;
            padding: 0;
            margin: 0;
            font-family: ${fonts.base};
          }
        `}
      </style>
        </>
    );
}

export default HomeLayout;