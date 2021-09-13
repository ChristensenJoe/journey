import { useState } from "react";

import {
  Box,
  Grid,
  Paper,
  makeStyles
} from '@material-ui/core' 

import Image from '../Images/paper_plane_PNG20.png';

import LoginForm from '../Components/Forms/LoginForm';
import SignupForm from '../Components/Forms/SignupForm';

const useStyles = makeStyles(theme=> ({
  gridContainer: {
    padding: '10vh 0 20vh',
  },
  imageContainer: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
  image: {
    width: '45vw',
    top: '10vh'
  }
}))

function Login() {
  const [showLogin, setShowLogin] = useState(true)
  const classes=useStyles()

  function toggleLogin() {
    setShowLogin(()=>!showLogin)
  }

  return(
    <Box bgcolor="primary.main" justify = "center" justifyContent="center">
      <Grid container>
        <Grid item xs={12} sm={6} className={classes.gridContainer}>
          <Paper className={classes.imageContainer}>
            <img src={Image} alt="paper-plane-doodle" className={classes.image}/>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.gridContainer}>
          {showLogin ? 
            <LoginForm toggleLogin={toggleLogin}/> : 
            <SignupForm toggleLogin={toggleLogin} />
          }
        </Grid>
      </Grid>
    </Box>
  )
}

export default Login