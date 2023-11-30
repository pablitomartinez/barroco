import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import ProTip from '../src/ProTip';
import Copyright from '../src/Copyright';
import NavBar from '../src/NavBar';
import MyCarousel from '../src/Carousel/Carousel';
import ContactForm from './contacto';
import FixedContainer from './Proximos-Eventos';
import SobreNosotros from './sobre-nosotros';
import Experiencias from './experiencias';


export default function Home() {
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          my: 4,
          display: 'block',
          }}
      > 
        <NavBar />
        <MyCarousel/>
        <SobreNosotros/>
        <Experiencias/>
        <FixedContainer/>
        <ContactForm/>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
