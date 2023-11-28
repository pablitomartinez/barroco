import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CardEvents from '../src/CardEvents';

export default function FixedContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh', display: 'flex', justifyContent: 'space-around' }}>
            <CardEvents
                title="Travesía Barroca por los Valles Calchaquíes"
                subheader="Fecha 29/11/2023"
                image="/static/images/cards/event1.jpg"
                description="Esta travesía combina la belleza natural de los Valles Calchaquíes con la riqueza histórica del período barroco."
                description2= "Experimentarán la fusión única de la arquitectura barroca con la naturaleza, sumergiéndose en la historia de la región a medida que avanzan por senderos antiguos."
                description3= "Los participantes recorrerán antiguos caminos empedrados que conectan las misiones jesuíticas, admirando las iglesias y capillas barrocas que se alzan en medio de paisajes impresionantes."
                method="Trekking Cultural"
                masInfo="Algo"
            />
            <CardEvents
                title="Evento 2"
                subheader="Fecha 2"
                description2= "Experimentarán la fusión única de la arquitectura barroca con la naturaleza, sumergiéndose en la historia de la región a medida que avanzan por senderos antiguos."
                description3= "Los participantes recorrerán antiguos caminos empedrados que conectan las misiones jesuíticas, admirando las iglesias y capillas barrocas que se alzan en medio de paisajes impresionantes."
                image="/static/images/cards/event2.jpg"
                description="Descripción del Evento 2"
                method="Método del Evento 2"
                masInfo="Algo"
            />
            <CardEvents
                title="Evento 3"
                description2= "Experimentarán la fusión única de la arquitectura barroca con la naturaleza, sumergiéndose en la historia de la región a medida que avanzan por senderos antiguos."
                description3= "Los participantes recorrerán antiguos caminos empedrados que conectan las misiones jesuíticas, admirando las iglesias y capillas barrocas que se alzan en medio de paisajes impresionantes."
                subheader="Fecha 3"
                image="/static/images/cards/event3.jpg"
                description="Descripción del Evento 3"
                method="Método del Evento 3"
                masInfo="Algo"
            />
            </Box>
      </Container>
    </React.Fragment>
  );
}