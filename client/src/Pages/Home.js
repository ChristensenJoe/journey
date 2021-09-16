import {
  Box,
  Grid,
  Typography,
  Button,
  makeStyles
} from '@material-ui/core';

import { Link } from 'react-router-dom'
import RecentItinerariesModule from '../Components/Modules/RecentItinerariesModule';
import Grow from '@material-ui/core/Grow';

const useStyles = makeStyles(theme=>({
  header: {
    width: '60vw'
  },
  introContainer: {
    marginTop: '40px',
    marginBottom: '120px',
    height: '30vh',
    padding: '40px'

  },
  signupContainer: {
    background: "linear-gradient(0deg, rgba(238,236,231,1) 0%, rgba(238,236,231,1) 82%, rgba(238,236,231,0) 100%)",
    height: '400px',
    width: '100vw',
    padding: '40px'
  },
  imgContainer: {
    width: '50vw',
    height: 'auto',
    textAlign: 'right',
    float: 'right',
    marginTop: '-40px',
    overflow: 'auto',
    "& img": {
      width: '100%'
    }
  }
}))

function Home({ user, itineraryList }) {
  const classes = useStyles();

  return(

    <Box>
      <Box
        className={classes.introContainer}
      >
        <Grow 
          in={true}
          appear={true}
          timeout={1000}
        >
          <Typography
            variant="h1"
            className={classes.header}
          >
            Plan your next trip with Journey
          </Typography>

        </Grow>

        <Grow 
          in={true}
          appear={true}
          timeout={2000}
        >
          <div
            className={classes.imgContainer}
          >
            <img
              src="https://p69.f3.n0.cdn.getcloudapp.com/items/8Lu5NEJd/fafc3d87-49db-4d34-8c53-a0a75d3239a1.jpg?source=viewer&v=fde715e6f1f56b0aa5f48f700deb1062"
            />
          </div>
        </Grow>


        </Box>
        {!user && 
          <Box
            className={classes.signupContainer}
          >
            <p>Sign up with us!</p>
            <Button
              variant="contained"
              color="secondary"
              disableElevation
              component={Link} 
              to="/login"
            >
            Sign Up
            </Button>
          </Box>}

      {/* Map picture */}
      {/* Signup for an account area */}
      {/* Sample of an itinerary */}
     
    </Box>
  )
}

export default Home;