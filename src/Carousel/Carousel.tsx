import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material';

interface Item{
    name: string;
    description:string;
    imageUrl: string;
}

interface ItemProps { 
    item: Item
}

const MyCarousel: React.FC = () => {
    const items: Item[] = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            imageUrl: "https://picsum.photos/800/300?random=2"
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            imageUrl: "https://picsum.photos/800/300?random=3"
        },
        {
            name: "Random Name #3",
            description: "Hello World!",
            imageUrl: "https://picsum.photos/800/300?random=4"
        },
        {
            name: "Random Name #4",
            description: "Hello World!",
            imageUrl: "https://picsum.photos/800/300?random=5"
        },
    ];

    return (

        <Carousel
            animation="slide" //animación (slide, fade, zoom, etc.)
            interval={5000} // Configura el intervalo en milisegundos entre cambios de slide
            duration={2800} // Configura la duración de la animación en milisegundos
        >
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    );
}

const Item: React.FC<ItemProps> = ({item})=>(
        <Paper>
            <img src={item.imageUrl} alt='crousel-item' style={{width: 
            '100%', height:'45vh' }}/>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
        </Paper>
    )

    export default MyCarousel;
