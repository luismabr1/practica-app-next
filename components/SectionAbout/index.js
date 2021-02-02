import Logo from '../../public/LOGO-MOVENU-BLANCO.png'

const SectionAbout = () => {
    return (
        <>
            <div className="container-about">
                <div className="container-about-text">
                    <div className="header">
                        <h1>Sobre Nosotros</h1>
                    </div>
                    <div className="paragraph">
                        Con gran entusiasmo rediseñamos nuestra web para que tengas una mejor perspectiva de todo lo nuevo que trae MOVENU para nuestro proximo evento POST-pandemia
                    </div>
                </div>
                <div className="container-about-button">
                    <div className="image-button">
                        <img src={Logo} alt="Logo blanco movenu" />
                    </div>
                    <a className="text-button">
                        Echa un vistazo!
                    </a>
                </div>
                <div className="container-about-image">

                </div>
            </div>
            <style>{`
            @media screen and (min-width: 960px){
                .container-about{
                    -webkit-box-orient: horizontal;
                    -webkit-box-direction: normal;
                    -webkit-flex-direction: row;
                    -moz-box-direction: row;
                    -ms-flex-direction: row;
                    -js-flex-direction: row;
                    flex-direction: row;
                    margin: 4rem auto;
                }
            }
            .container-about{
                display: flex;
                max-width: 1440px;
                margin: 10rem auto;
            }
                .container-about-text{
                    display: flex;
                    -webkit-box-orient: vertical;
                    -webkit-box-direction: normal;
                    -webkit-flex-direction: column;
                    -moz-box-direction: column;
                    -ms-flex-direction: column;
                    -js-flex-direction: column;
                    flex-direction: column;
                    -webkit-flex: 1;
                    -ms-flex: 1;
                    flex: 1;
                    -js-flex: 1;
                }
                .container-about-button{
                    width: 100%;
                    padding: 40px;
                    display: flex;
                    margin: 10px;
                    -webkit-box-orient: vertical;
                    -webkit-box-direction: normal;
                    -webkit-flex-direction: column;
                    -moz-box-direction: column;
                    -ms-flex-direction: column;
                    -js-flex-direction: column;
                    flex-direction: column;
                    -webkit-justify-content: center;
                    -ms-flex-pack: center;
                    -js-flex-pack: center;
                    justify-content: center;
                    -webkit-align-items: center;
                    -ms-flex-align: center;
                    -js-flex-align: center;
                    align-items: center;
                    border: 1px solid black;
                }
                text-button{
                    color: #fff;
                    padding: 5px 10px;
                    font-size: 18px;
                    font-weight: 700;
                    line-height: 33px;
                    background-color: #f8521c;
                    margin-top: 20px;
                }
                .image-button img{
                    width: 200px;
                }
                .header{
                    margin-top: 20px;
                    font-size: 40px;
                    font-family: Metropolis Black;
                    color: #3c2d82;
                    text-align: center;
                    border: 1px solid black;
                    width: 40rem;
                }
                .paragraph{
                    font-size: 21px;
                    color: #3c2d82;
                    margin-left: 20px;
                }

                .container-about-image{
                    display: flex;
                    -webkit-align-items: center;
                    -ms-flex-align: center;
                    -js-flex-align: center;
                    align-items: center;
                    -webkit-box-orient: vertical;
                    -webkit-box-direction: normal;
                    -webkit-flex-direction: column;
                    -moz-box-direction: column;
                    -ms-flex-direction: column;
                    -js-flex-direction: column;
                    flex-direction: column;
                    margin: 2em 0;
                }

            `}</style>
        </>
     );
}
 
export default SectionAbout;