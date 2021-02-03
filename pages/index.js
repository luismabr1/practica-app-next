import * as React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import HomeLayout from '../components/HomeLayout'
import ProTip from '../src/ProTip';
import Link from '../src/Link';


export default function Index() {
  return (
    <HomeLayout>
      <Container maxWidth="sm">
        <Box sx={{ my: 5 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            MOVENU 2020
          </Typography>
          <Link href="/about" color="secondary">
            Go to the about page
          </Link>
          <ProTip />
        </Box>
      </Container>
    </HomeLayout>
  );
}
