import {useState, useEffect} from 'react'
import Link from "next/link";
import Button from '../Button'
import Google from '../Icons/Google'
import { loginWithGoogle, onAuthStateChanged } from "../../firebase/client";
import {useRouter} from 'next/router'
import Menu from '../Icons/Menu';

/* import logo from '../public/LOGO-MOVENU-BLANCO.png'; */
const USER_STATES = {
  NOT_LOGGED: null,
  NOT_KNOWN: undefined
}


const Navbar = () => {
  const [user, setUser] = useState(USER_STATES.NOT_KNOWN);


  useEffect(() => {
    onAuthStateChanged(setUser);
  }, []);




  const handleClick = () => {
    loginWithGoogle()
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(user);

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
          <div>
                <Link href="/">
                  <a className="font-weight-light Navbar__items" href="/unicameral">
                    Contenido1
                  </a>
                </Link>
                <Link href="/">
                  <a className="font-weight-light Navbar__items" href="/bicameral">
                  Contenido1
                  </a>
                </Link>
                <Link href="/">
                  <a className="font-weight-light Navbar__items" href="/security">
                  Contenido1
                  </a>
                </Link>
            </div>
            </div>
        
        <div>
            <span>
              {user===USER_STATES.NOT_LOGGED && <Button onClick={handleClick}>
                      <Google width={24} height={24} />
                      Login with Google
                </Button>
              }
            </span>
        </div>

        <div className="Navbar_menu">
              <Menu />
        </div>


      <style jsx>{`
      .Navbar > div{
        font-size: 1.6em;
        min-height: 25px;
        padding: 0.1rem 4rem;
      }
      .Navbar_menu{
        display: none;
      }
      .Navbar{
        padding: 0.5rem 0;
        padding-left: 15px;
        background-color: #1c3643;
      }
        .Navbar_items {
          justify-items: center;
          display:grid;
          text-align: center;
        }
                      .Navbar__brand {
                color: #ffffff;
                display: inline-flex;
                align-items: center;
                text-decoration: none;
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
