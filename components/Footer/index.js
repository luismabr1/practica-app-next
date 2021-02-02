

const Footer = () =>{
    return(
        <>
            <div className="Footer">
                <div className="Autor">
                    <span><a href="www.linkedin.com/in/luismabr">Luis Brito</a> </span>
                </div>
            </div>


            <style jsx>{`
                .Footer{
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 1.3em;
                    min-height: 26px;
                    padding: 0.3rem 4rem;
                    position: -webkit-sticky;
                    position: sticky;
                    botton: 0px;
                    padding: 1rem 0;
                    padding-left: 15px;
                    background-color: #1c3643;
                }
                .autor{
                    width: 100px;

                }


                `}
            </style>
        </>
    )

}

export default Footer;