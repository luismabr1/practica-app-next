import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '../../src/Link';
import ProTip from '../../src/ProTip';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(5),
    textAlign: 'center',
    color: theme.palette.text.secondary,

  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>

        <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
                <Typography color="inherit" variant="body1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, excepturi enim voluptatem harum ipsa itaque dicta. Qui magni, reprehenderit eveniet, unde eos aspernatur adipisci porro pariatur, libero deleniti facilis repellat. ipsum, dolor sit amet consectetur adipisicing elit. Sunt nihil pariatur modi accusamus suscipit? In consectetur eius, molestiae facere adipisci, recusandae non ipsam dolorem eum ullam, consequatur nisi nemo impedit. ipsum dolor sit amet consectetur adipisicing elit. Praesentium tenetur dolor sunt reiciendis, veniam veritatis debitis provident cupiditate architecto odio obcaecati inventore itaque, assumenda aperiam consequuntur minus, fuga dicta at? ipsum dolor sit amet, consectetur adipisicing elit. Quae velit earum dignissimos odit error aperiam autem, architecto unde molestias modi sapiente soluta porro doloribus optio nemo illum quas fuga enim. ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ad quod maxime praesentium ea sunt velit autem sed, ipsum, adipisci deleniti in natus omnis, dicta eos ipsa minus eveniet deserunt.
                </Typography>
            </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        MOVENU 2020
                    </Typography>
                    <Link href="/about" color="secondary">
                        Go to the about page
                    </Link>
                    <ProTip />
            </Paper>
        </Grid>
    </Grid>
    </div>
  );
}