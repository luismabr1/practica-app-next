import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="sticky" color="primary">
        <Toolbar>
          <Hidden smUp>
          <IconButton edge="start" className={classes.menuButton}  color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          </Hidden>
          <Typography variant="h6" className={classes.title}>
            MOVENU 2020
          </Typography>
          <Hidden smDown>
          <Typography variant="subtitle1" className={classes.title}>
            Quienes Somos
          </Typography>
          </Hidden>
          <Hidden smDown>
          <Typography variant="subtitle1" className={classes.title}>
            Conferencia 2020
          </Typography>
          </Hidden>
          <Hidden smDown>
          <Typography variant="subtitle1" className={classes.title}>
            Comites
          </Typography>
          </Hidden>
          <Hidden smDown>
          <Typography variant="subtitle1" className={classes.title}>
          Contacto
          </Typography>
          </Hidden>
          <Hidden smDown>
          <Typography variant="subtitle1" className={classes.title}>
          links
          </Typography>
          </Hidden>

          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}