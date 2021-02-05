import React from 'react';
import Carousel from 'react-material-ui-carousel'
import {Paper} from '@material-ui/core'
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';




function Example(props)

{
    var items = [
        {
            url:"https://static.wixstatic.com/media/ff3819_cd7c191511854c90becbc9706439ab7b~mv2.jpg/v1/fill/w_979,h_500,al_c,q_85,usm_0.66_1.00_0.01/ff3819_cd7c191511854c90becbc9706439ab7b~mv2.webp",
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            url: "https://static.wixstatic.com/media/ff3819_4876b2708c7b4e6fb771be91c461a5ad~mv2.jpg/v1/fill/w_979,h_500,al_c,q_85,usm_0.66_1.00_0.01/ff3819_4876b2708c7b4e6fb771be91c461a5ad~mv2.webp",
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]

    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Container>
            <Paper>
                <img src={props.item.url} alt="Foto aleatoria" width="100%"/>
                <h2>{props.item.name}</h2>
                <p>{props.item.description}</p>

                <Button className="CheckButton">
                    Check it out!
                </Button>
            </Paper>
        </Container>
    )
}


const CarouselComponent = () => {

    return(
        <>
            <Container maxWidth="lg">
                <Example/>
            </Container>

        </>
    )
}

export default CarouselComponent;