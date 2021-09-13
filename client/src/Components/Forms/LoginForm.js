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

function LoginForm({ setUser, toggleLogin }) {
  const classes = useStyles();
  const history = useHistory();
  
  const [loginFormData, setLoginFormData] = useState({
    username: "",
    password: ""
  })

  function onHandleChangeForm(e) {
    setLoginFormData((loginFormData)=>({
      ...loginFormData,
      [e.target.name]: e.target.value
    }))
  }

  async function onSubmitLoginForm(e) {
    e.preventDefault()

    let newUser = {}

    for (const key in loginFormData) {
      if (loginFormData[key] !== "") {
        newUser[key] = loginFormData[key]
      } 
    }

    const response = await fetch("/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    })

    if (response.ok) {
      response.json()
      .then(data=>{
        setUser(data)
        history.push(`/${data.username}`)
      })
    } else {
      response.json()
      .then(data=> alert(data.errors))
    }
  }

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
        onSubmit={onSubmitLoginForm}
        className={classes.gridContainer}
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
            value={loginFormData.username}
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
            value={loginFormData.password}
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