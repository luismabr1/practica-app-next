
const SectionAbout = () => {
    return ( 
        <>
            <div className="container-about">
                <div className="container-about-text">
                    <div className="header">
                        <h1>Sobre Nosotros</h1>
                    </div>
                    <div className="paragraph">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro nostrum accusantium, qui neque hic, unde modi suscipit, quo tempore temporibus aliquid libero praesentium velit amet culpa ex deserunt optio id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet explicabo possimus obcaecati! Fugit, quam obcaecati optio soluta similique velit. Repellendus eius quae accusamus tempore tenetur nobis qui ad dolorem eaque.
                    </div>
                </div>
                <div className="container-about-image">

                </div>
            </div>
            <style>{`
                .container-about{
                    -webkit-box-orient: horizontal;
                    -webkit-box-direction: normal;
                    -webkit-flex-direction: row;
                    -moz-box-direction: row;
                    -ms-flex-direction: row;
                    -js-flex-direction: row;
                    flex-direction: row;
                    margin: 1rem;
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
                .header{
                    margin-top: 20px;
                    font-size: 40px;
                    font-family: Metropolis Black;
                    color: #3c2d82;
                    text-align: left;
                }
                .paragraph{
                    font-size: 21px;
                    color: #3c2d82;
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