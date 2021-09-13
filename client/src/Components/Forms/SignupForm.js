import {
  Box,
  Typography,
  Container,
  Button,
  makeStyles
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  gridContainer: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: theme.spacing(4),
  },
  inputLabel: {
    display: 'inline-block',
    marginBottom: theme.spacing(2),
    textAlign: 'left',
    width: 'calc(50% + 12px)',
    fontSize: '14px'
  },
  input: {
    display: 'inline',
    width: '50%',
    backgroundColor: 'white',
    border: 'none',
    padding: '8px'
  },
  title: {
    paddingBottom: theme.spacing(6)
  },
  createButton: {
    width: '50%',
    color: '#fff',
    borderRadius: '0'
  },
  loginButton: {
    textTransform: 'capitalize',
    display: 'block',
    margin: '16px auto 0',
    '&:hover': {
      background: 'none'
    }
  },
  
}));

function SignupForm({ toggleLogin }) {
  const classes = useStyles()

  return(
    <Box>
      <Typography 
        variant="h2"
        align="center"
        className={classes.title}
      >
        Create an Account
      </Typography>

      <form 
        noValidate 
        autoComplete="off" 
        className={classes.gridContainer}
      >
        <Container className={classes.inputContainer}>
          <label for="create-username" className={classes.inputLabel}>Username</label>
          <input type="text" name="create-username" className={classes.input} required />
        </Container>
        <Container className={classes.inputContainer}>
          <label for="create-email" className={classes.inputLabel}>Email</label>
          <input type="text" name="create-email" className={classes.input} required />
        </Container>
        <Container className={classes.inputContainer}>
          <label for="create-password" className={classes.inputLabel}>Password</label>
          <input type="text" name="create-password" className={classes.input} required />
        </Container>
        <Button 
          variant="contained" 
          type="submit" 
          color="secondary" 
          disableElevation 
          className={classes.createButton}
        >
          Create
        </Button>
      </form>
      
      <Button onClick={toggleLogin} className={classes.loginButton}>I already have an account</Button>
    </Box>
  )
}

export default SignupForm;