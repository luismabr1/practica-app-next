import * as React from 'react';
import Container from '@material-ui/core/Container';
import HomeLayout from '../components/HomeLayout'
import About from '../components/About'
import Conference from '../components/Conference'
import Carousel from '../components/Carousel'
import Comite from '../components/Comite'



export default function Index() {
  return (
    <HomeLayout>
      <Container maxWidth="xl" >
        <About />
        <Conference/>
        <Comite />
        <Carousel/>
      </Container>
    </HomeLayout>
  );
}
