import {fonts, colors, breakpoints} from '../../styles/themes.js';
import {addOpacityToColor} from '../../styles/utils';

//utilidad para cambiar la opacidad del background que se puede utilizar para otros colores (titulos, texto, fondos, etc)
const backgroundColor = addOpacityToColor(colors.primary, 0.3)
const AppLayout = ({children}) => {
    return (
        <>
            <div>
                <main>
                    {children}
                </main>
            </div>
            <style jsx>{`
            div{
                display:grid;
                height: 100vh;
                place-items: center;
            }

            main{
                background: #fff;
                border-radius:10px;
                box-shadow: 0 10px 25px rgba(0,0,0, .3);
                height: 100%;
                width: 100%;
            }
            @media (min-width: ${breakpoints.mobile}){
                main{
                    height: 90vh;
                    width: ${breakpoints.mobile};
                }
            }
            `}

            </style>
            <style jsx global>{`
                html,
                body{
                    background-image:
                        radial-gradient(${backgroundColor} 1px, transparent 1px),
                        radial-gradient(${backgroundColor} 1px, transparent 1px);
                    background-position: 0 0, 25px 25px;
                    background-size: 50px 50px;
                    padding:0;
                    margin:0;
                    font-family: ${fonts.base}
                }
            `}

            </style>
        </>
    );
}    

export default AppLayout;