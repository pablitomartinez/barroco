import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material';

export default function MyCarousel(props) {
    const items = [
        // {
        //     name: "Random Name #1",
        //     description: "Probably the most random thing you have ever seen!",
        //     image: "https://picsum.photos/800/300?random=1"
        // },
        // {
        //     name: "Random Name #2",
        //     description: "Hello World!",
        //     image: "https://picsum.photos/800/300?random=2"
        // }
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ];

    return (
        // <Carousel>
        //     {items.map((item, i) => (
        //         <Paper key={i}>
        //             <img src={item.image} alt={item.name} />
        //             <p>{item.description}</p>
        //         </Paper>
        //     ))}
        // </Carousel>
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    );
}

function Item(props)
{
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}