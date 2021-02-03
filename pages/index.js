import * as React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import HomeLayout from '../components/HomeLayout'
import ProTip from '../src/ProTip';
import About from '../components/About'
import Link from '../src/Link';


export default function Index() {
  return (
    <HomeLayout>
      <Container maxWidth="xl" >

        <About />

      </Container>
    </HomeLayout>
  );
}
