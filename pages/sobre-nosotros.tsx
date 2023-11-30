// somos-nosotros.tsx

import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CardEvents from '../src/CardEvents';

const SobreNosotros: React.FC = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" style={{ marginTop: '2rem' }} id='sobre-nosotros'>
        <Typography variant="h4" align="center" gutterBottom>
          Somos Nosotros
        </Typography>
        <Typography variant="body1" paragraph>
          Bienvenidos a "Somos Nosotros", el equipo apasionado detrás de la iniciativa que busca
          traer la riqueza del estilo barroco a la vida en el Noroeste Argentino. Nosotros, un
          grupo de entusiastas culturales, nos dedicamos a la planificación y ejecución de eventos
          que fusionan la historia, la arquitectura y la naturaleza de esta pintoresca región.
        </Typography>
        <Typography variant="body1" paragraph>
          Nuestra misión es simple pero poderosa: resaltar la belleza del barroco a través de
          experiencias significativas. Nos esforzamos por construir puentes entre el pasado y el
          presente, guiando a nuestros participantes a través de travesías culturales y excursiones
          que revelan la magia única de la arquitectura barroca en los Valles Calchaquíes.
        </Typography>
        <Typography variant="body1" paragraph>
          En "Somos Nosotros", creemos en el poder de la cultura para unir a las comunidades y
          enriquecer nuestras vidas. Cada miembro de nuestro equipo comparte una profunda conexión
          con la historia y el arte barroco, y estamos emocionados de compartir esa pasión con
          ustedes. Únanse a nosotros en este viaje cultural, donde la tradición se encuentra con la
          innovación, y la belleza del barroco cobra vida en cada evento que organizamos.
        </Typography>
        <Typography variant="body1" paragraph>
          ¡Gracias por ser parte de nuestra historia!
        </Typography>

        <Typography variant="h4" align="center" style={{ margin: '2rem 0' }} gutterBottom>
          Nuestros Eventos Recientes
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <CardEvents
              title="Evento 1"
              subheader="Fecha 1"
              masInfo='esto tiene algo'
              image="/static/images/cards/event1.jpg"
              description="Descripción del Evento 1"
              method="Método del Evento 1"
              description2= "Experimentarán la fusión única de la arquitectura barroca con la naturaleza, sumergiéndose en la historia de la región a medida que avanzan por senderos antiguos."
              description3= "Los participantes recorrerán antiguos caminos empedrados que conectan las misiones jesuíticas, admirando las iglesias y capillas barrocas que se alzan en medio de paisajes impresionantes."
               
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <CardEvents
              title="Evento 2"
              subheader="Fecha 2"
              image="/static/images/cards/event2.jpg"
              description="Descripción del Evento 2"
              method="Método del Evento 2"
              masInfo='esto tiene algo'
              description2= "Experimentarán la fusión única de la arquitectura barroca con la naturaleza, sumergiéndose en la historia de la región a medida que avanzan por senderos antiguos."
              description3= "Los participantes recorrerán antiguos caminos empedrados que conectan las misiones jesuíticas, admirando las iglesias y capillas barrocas que se alzan en medio de paisajes impresionantes."
               
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <CardEvents
              title="Evento 3"
              masInfo='esto tiene algo'
              subheader="Fecha 3"
              image="/static/images/cards/event3.jpg"
              description="Descripción del Evento 3"
              method="Método del Evento 3"
              description2= "Experimentarán la fusión única de la arquitectura barroca con la naturaleza, sumergiéndose en la historia de la región a medida que avanzan por senderos antiguos."
              description3= "Los participantes recorrerán antiguos caminos empedrados que conectan las misiones jesuíticas, admirando las iglesias y capillas barrocas que se alzan en medio de paisajes impresionantes."
               
            />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default SobreNosotros;
