import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '../src/Link';
import ProTip from '../src/ProTip';
import Copyright from '../src/Copyright';
import NavBar from '../src/NavBar';
import MyCarousel from '../src/Carousel/Carousel';

export default function Home() {
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          my: 4,
          display: 'block',
          }}
      > 
        <NavBar/>
        <MyCarousel/>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
