import ContactForm from '../../src/ContactForm';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
    main:{
        display: 'flex',
        justifyContent:'center',
        alignItems: 'center',
      }
  }));

const ContactFormCard = (props) =>{
    const classes = useStyles()
    return (
        <Container maxWidth="lg" className={classes.main}>
            <ContactForm />
        </Container>
    );
}

export default ContactFormCard;