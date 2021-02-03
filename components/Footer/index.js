import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Copyright from '../../src/Copyright';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
      },
      container: {
        flexGrow: 1,
        margin: "auto",
        fontSize: "30",
        },
    },
  }));

export default function Footer() {
    const classes = useStyles();
    const preventDefault = (event) => event.preventDefault();

  return (
    <div className={classes.root}>
      <AppBar position="sticky" color="primary">
          <Toolbar>
            <Container variant="h6" align="center" maxWidth="sm">
                <Copyright />
            </Container>
          </Toolbar>
      </AppBar>
    </div>
  );
}