const SectionInfo = () => {
    return(
        <>  

            <section className="Container">
                <div className="image"></div>
                <div className="sumary">
                    <div className="header-container">
                        <h1 className="header-text">Mi titulo! Este titulo es largo porque quiero probar el wrap</h1>
                    </div>
                    <div className="paragraph-container">
                        <p className="paragraph-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam sit asperiores esse aut veniam tempore atque ad, eius consequatur inventore voluptatem. Harum, error sed facilis corporis maxime facere fuga accusantium!</p>
                    </div>
                </div>
            </section>
        <style>
            {`
            .Container{
                margin: 0;
                display:flex;
                -webkit-box-orient: horizontal;
                -webkit-box-direction:normal;
                flex-direction: row;
            }
            .image{
                min-width: 468px;
                width: 100%;
                background-image: url();
                background-size: cover;
                background-position: top;
            }
            .sumary{
                background-image: linear-gradient(180deg,rgba(118,103,157,0),#423664 70%),
                background-size: 100% auto;
                padding: 60px;
                background: #1c3643;
            }
            .header-text{
                font-size: 24px;
                font-family: Metropolis Black;
                font-style: italic;
                color: #fff;
                margin-bottom: 20px;
                text-align: left;
            }
            .header-text h1{
                font-weight: 700;
            }
            .paragraph-container{

            }
            .paragraph-text{
                color: #fff;
                padding: px;
                font-size: 21px;
                font-weight: 400;
            }


            }
            
            `}
        </style>
        </>
    )
}
export default SectionInfo
