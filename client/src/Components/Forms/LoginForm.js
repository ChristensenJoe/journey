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
  loginButton: {
    width: '50%',
    color: '#fff',
    borderRadius: '0'
  },
  createAccountButton: {
    textTransform: 'capitalize',
    display: 'block',
    margin: '16px auto 0',
    '&:hover': {
      background: 'none'
    }
  },
  
}));

function LoginForm({ toggleLogin }) {
  const classes = useStyles()

  return(
    <Box>
      <Typography 
        variant="h2"
        align="center"
        className={classes.title}
      >
        Login
      </Typography>

      <form 
        noValidate 
        autoComplete="off" 
        className={classes.gridContainer}
      >
        <Container className={classes.inputContainer}>
          <label for="login-username" className={classes.inputLabel}>Username</label>
          <input type="text" name="login-username" className={classes.input} required />
        </Container>
        <Container className={classes.inputContainer}>
          <label for="login-password" className={classes.inputLabel}>Password</label>
          <input type="text" name="login-password" className={classes.input} required />
        </Container>
        <Button 
          variant="contained" 
          type="submit" 
          color="secondary" 
          disableElevation 
          className={classes.loginButton}
        >
          Login
        </Button>
      </form>
      
      <Button onClick={toggleLogin} className={classes.createAccountButton}>I don't have an account</Button>
    </Box>
  )
}

export default LoginForm;