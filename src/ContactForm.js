import React, { useState } from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FilledInput from '@material-ui/core/FilledInput';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  button: {
    margin: theme.spacing(1),
  },
  main:{
    width: '50%',
    alignSelf: 'center'
  }
}));

const Formulario = () => {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  })
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleClick = () => {
    setOpen(true);
  };
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setOpen(true)
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      })
      setInputs({
        name: '',
        email: '',
        message: '',
      })
    } else {
      setStatus({
        info: { error: true, msg: msg },
      })
    }
  }
  const handleOnChange = (e) => {
    e.persist()
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }))
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    })
  }
  const handleOnSubmit = async (e) => {
    e.preventDefault()
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }))
    await axios({
      method: 'POST',
      url: 'https://formspree.io/f/xvovnwyn',
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          'Thank you, your message has been submitted.'
        )
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error)
      })
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const classes = useStyles();
  return (

      <Paper elevation={5} style={{ padding: 16 }} className={classes.main}>
      <h1>Contactanos!</h1>
      <hr />
      <form onSubmit={handleOnSubmit}>
        <Grid container alignItems="flex-start" spacing={5}>
        <Grid item xs={3}>
          <FormControl variant="filled">
            <InputLabel htmlFor="name">Name</InputLabel>
            <FilledInput id="name" value={inputs.name} onChange={handleOnChange} />
          </FormControl>
        </Grid>

        <Grid item xs={4}>
          <FormControl variant="filled" fullWidth>
            <InputLabel htmlFor="email">Email</InputLabel>
            <FilledInput id="email" value={inputs.email} onChange={handleOnChange}/>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <FormControl variant="filled" fullWidth>
            <InputLabel htmlFor="message">Mensaje</InputLabel>
            <FilledInput id="message" value={inputs.message} onChange={handleOnChange} />
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <Button
              variant="contained"
              color="primary"
              className={classes.button}
              type="submit"
              disabled={status.submitting}
            >
                {!status.submitting
                  ? !status.submitted
                    ? 'Submit'
                    : 'Submitted!'
                  : 'Submitting...'}
          </Button>
        </Grid>

          
        </Grid>
      </form>
    </Paper>
  )
}

export default Formulario;