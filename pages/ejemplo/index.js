import Options from '../../components/Options'
const Menu = () => {
    return(
        <>
        <div className="inventory">
            <div className="Menu">
                    <Options />
            </div>
            <div className="Menu_results"></div>
        </div>

            <style jsx>{`
            .inventory{
                display: flex;
                flex-wrap: wrap;
                width: 100%;
                height: 700px;
                justify-content: space-between;
                
            }
            .Menu{
                border: 1px solid black;
                flex: 50%;
                height: 200px;
                text-decoration: none;
                justify-text:center;
            }
            .Menu_results{
                border: 1px solid red;
                flex: 50%;
                height: 200px;
            }
            @media (max-width: 800px) {
                .Menu, .Menu_results {
                  flex: 100%;
                }
              }

              ul li {
                  text-decoration: none
            }

            `}
            </style>
        </>
    )
}
export default Menu;