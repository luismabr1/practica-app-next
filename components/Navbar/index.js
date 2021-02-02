import {useState, useEffect} from 'react'
import Link from "next/link";
import Button from '../Button'
import Google from '../Icons/Google'
/* import { loginWithGoogle, onAuthStateChanged } from "../../firebase/client"; */
import Menu from '../Icons/Menu';

/* import logo from '../public/LOGO-MOVENU-BLANCO.png'; */
const USER_STATES = {
  NOT_LOGGED: null,
  NOT_KNOWN: undefined
}


const Navbar = () => {
  const [user, setUser] = useState(USER_STATES.NOT_KNOWN);


/*   useEffect(() => {
    onAuthStateChanged(setUser);
  }, []);

  const handleClick = () => {
    loginWithGoogle()
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(user); */

  return (
    <div className="Navbar">
      <div className="Navbar_items">
        <div className="Navbar__brand">
          <Link href="/">
            <a>
              {/* <img className="Navbar__brand-logo" src={logo} alt="Logo" /> */}
              <span className="font-weight-light">MOVENU</span>
              <span className="font-weight-bold">2020</span>
            </a>
          </Link>
        </div>
          <div className="Navbar__options">
                <Link href="/" color="secondary">
                  <a className="font-weight-light Navbar__links" href="/unicameral">
                    Home
                  </a>
                </Link>
                <Link href="/">
                  <a className="font-weight-light Navbar__links" href="/bicameral">
                  ¿Quienes somos?
                  </a>
                </Link>
                <Link href="/">
                  <a className="font-weight-light Navbar__links" href="/security">
                  Conferencia 2020
                  </a>
                </Link>
                <Link href="/">
                  <a className="font-weight-light Navbar__links" href="/security">
                  Comités
                  </a>
                </Link>
                <Link href="/">
                  <a className="font-weight-light Navbar__links" href="/security">
                  Contacto
                  </a>
                </Link>
                <Link href="/">
                  <a className="font-weight-light Navbar__links" href="/security">
                  Links
                  </a>
                </Link>
            </div>
          <div className="Navbar__login">
              <span>
                {user===USER_STATES.NOT_LOGGED && <Button onClick={handleClick}>
                        <Google width={24} height={24} />
                        Login
                  </Button>
                }
              </span>
          </div>
            </div>
        

        <div className="Navbar_menu">
              <Menu />
        </div>


      <style jsx>{`
      .Navbar{
        width: 100%;
        font-size: 1.3em;
        min-height: 26px;
        padding: 0.3rem 4rem;
        position: -webkit-sticky;
        position: sticky;
        top: 0px;
        backdrop-filter: blur(5px);
        padding: 1rem 0;
        padding-left: 15px;
        background-color: #1c3643;
       }

      }
      .Navbar_menu{
        display: none;
      }
      .Navbar__options {
        display: grid;
        color: #fff;
        padding: 2px;
        grid-template-columns: 0.7fr 0.7fr 0.7fr 0.7fr 0.7fr 0.7fr;
        grid-gap: 6em;
        float:left;
      }
      .Navbar__links {
        color: #fff;
        text-decoration: none;
        transition: .5s;
      }

      .Navbar__links:hover {
        color: red;
        text-decoration: none;
      }

        .Navbar_items {
          display:grid;
          justify-items: center;
          text-align: center;
        }

        .Navbar__login{
          padding: 8px;
          margin-right: 15px;
        }
        
        .Navbar__brand {
            color: #ffffff;
            display: inline-flex;
            align-items: center;
            text-decoration: none;
            margin: 10px;

        }
              .Navbar__brand:hover {
                color: #ffffff;
                text-decoration: none;
              }


        @media(min-width: 50rem){
          .Navbar_items{
            grid-template-columns: 1fr auto auto;
            justify-items: start;
          }
        }
        @media (max-width: 50rem) {
          .Navbar_menu{
            display: grid;
            grid-template-columns: 1fr auto auto;
            justify-items: start;
          }
          .Navbar{
            padding: 0.5rem 0;
            padding-left: 15px;
            background-color: #1c3643;
          }
          .Navbar_items{
            display: none;
          }
          
        }
        .font-weight-light {
          font-weight: 300 !important;

        }
        .font-weight-bold {
          font-weight: 700 !important;
}


      `}</style>
    </div>
  );
};

export default Navbar;
