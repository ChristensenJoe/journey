import { useState } from "react";
import { useHistory } from "react-router-dom";
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
  }
}));

function SignupForm({ setUser, toggleLogin }) {
  const classes = useStyles();
  const history = useHistory();
  const [createFormData, setCreateFormData] = useState({
    username: "",
    email: "",
    password: "",
    password_confirmation: ""
  });

  function onHandleChangeForm(event) {
    setCreateFormData((createFormData)=>({
      ...createFormData,
      [event.target.name]: event.target.value
    }))
  }

  async function onSubmitCreateForm(e) {
    e.preventDefault()

    let newUser = {}

    for (const key in createFormData) {
      if (createFormData[key] !== "") {
        newUser[key] = createFormData[key]
      } 
    }

    const response = await fetch("/signup",{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    })

    if (response.ok) {
      response.json()
      .then(data=> {
        setUser(data)
        history.push(`/${data.username}`)
      })
    }
    else {
      response.json()
      .then(data=>alert(data.errors))
    }
  }

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
        onSubmit={onSubmitCreateForm}
      >
        <Container className={classes.inputContainer}>
          <label 
            htmlFor="username" 
            className={classes.inputLabel}
          >
            Username
          </label>
          <input 
            type="text" 
            name="username"
            value={createFormData.username}
            className={classes.input} 
            onChange={onHandleChangeForm} 
            required 
          />
        </Container>
        <Container className={classes.inputContainer}>
          <label 
            htmlFor="email" 
            className={classes.inputLabel}
          >
            Email
          </label>
          <input 
            type="text" 
            name="email"
            value={createFormData.email}
            className={classes.input} 
            onChange={onHandleChangeForm} 
            required 
          />
        </Container>
        <Container className={classes.inputContainer}>
          <label 
            htmlFor="password" 
            className={classes.inputLabel}
          >
            Password
          </label>
          <input 
            type="password" 
            name="password"
            value={createFormData.password}
            className={classes.input} 
            onChange={onHandleChangeForm} 
            required 
          />
        </Container>
        <Container className={classes.inputContainer}>
          <label 
            htmlFor="password_confirmation" 
            className={classes.inputLabel}
          >
            Confirm Password
          </label>
          <input 
            type="password" 
            name="password_confirmation"
            value={createFormData.password_confirmation}
            className={classes.input} 
            onChange={onHandleChangeForm} 
            required 
          />
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