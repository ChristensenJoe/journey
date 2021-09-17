import {
  Box,
  Grid,
  Typography,
  Button,
  useTheme,
  makeStyles
} from '@material-ui/core';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import RecentItinerariesModule from '../Components/Modules/RecentItinerariesModule';
import Grow from '@material-ui/core/Grow';

const useStyles = makeStyles(theme=>({
  header: {
    width: '60vw',
    [theme.breakpoints.down('sm')]: {
       fontSize: '40px'
    }
  },
  introContainer: {
    marginTop: '40px',
    marginBottom: '120px',
    height: '30vh',
    padding: '40px',
    [theme.breakpoints.down('sm')]: {
       paddingTop: '16px',
    }
  },
  imgContainer: {
    width: '50vw',
    height: 'auto',
    textAlign: 'right',
    float: 'right',
    position: 'fixed',
    right: '40px',
    marginTop: '-40px',
    boxShadow: '0px 0px 10px #ccc',
    overflow: 'auto',
    "& img": {
      width: '100%'
    },
    [theme.breakpoints.down('sm')]: {
       width: '75vw',
       position: 'absolute',
       marginTop: '24px'
    }
  },
  imgContainerUnfixed: {
    width: '50vw',
    height: 'auto',
    textAlign: 'right',
    float: 'right',
    position: 'fixed',
    right: '40px',
    bottom: '280px',
    marginTop: '-40px',
    boxShadow: '0px 0px 10px #ccc',
    overflow: 'auto',
    "& img": {
      width: '100%'
    },
    [theme.breakpoints.down('sm')]: {
       width: '75vw',
       position: 'absolute',
       marginTop: '24px'
    }
  },
  benefitsContainer: {
    background: "linear-gradient(0deg, rgba(238,236,231,1) 0%, rgba(238,236,231,1) 75%, rgba(238,236,231,0) 100%)",
    padding: '30vh 40px',
    [theme.breakpoints.down('sm')]: {
       padding: '30vh 40px 10vh'
    }
  },
  benefitHeader: {
    fontSize: '20px',
    fontWeight: '700',
    width: '35vw',
    [theme.breakpoints.down('sm')]: {
       width: '100%'
    }
  },
  benefitDescription: {
    fontSize: '16px',
    width: '35vw',
    [theme.breakpoints.down('sm')]: {
       width: '100%'
    }
  },
  comingSoon: {
    padding: '8px 16px',
    borderRadius: '10px',
    background: '#A2B5BA',
    display: 'inline-block',
    marginBottom: '16px'
  },
  moreBenefitsContainer: {
    background: theme.palette.primary.main,
    padding: '30vh 40px',
    [theme.breakpoints.down('sm')]: {
       padding: '5vh 40px'
    }
  },
  signupContainer: {
    background: theme.palette.primary.main,
    padding: '30vh 40px'
  },
  signupHeader: {
    display: 'inline-block',
  }
}))

function Home({ user, itineraryList }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  const [isSticky, setIsSticky] = useState(false)

  useEffect(()=>{
    const scrollFunction = (e) => {
      var scrollTop = e.path[1].window.pageYOffset

      if (scrollTop >= 2620) {
        setIsSticky(false)
      } else {
        setIsSticky(true)
      }
    }

    window.addEventListener('scroll', scrollFunction);

    return () => {window.removeEventListener('scroll', scrollFunction)}
  },[])

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
            id="home-img"
            className={isSticky ? classes.imgContainer : classes.imgContainerUnfixed}
          >
            <img
              src="https://p69.f3.n0.cdn.getcloudapp.com/items/8Lu5NEJd/fafc3d87-49db-4d34-8c53-a0a75d3239a1.jpg?source=viewer&v=fde715e6f1f56b0aa5f48f700deb1062"
            />
          </div>
        </Grow>
        </Box>

        <Box
          className={classes.benefitsContainer}
        >
          <Typography
            variant="h3"
            gutterBottom
            className={classes.benefitHeader}
          >
            1. Create an itinerary to get started.
          </Typography>
          <Typography
            variant="body1"
            className={classes.benefitDescription}
          >
            How exciting! 🍎 Start a new itinerary from your profile.
          </Typography>
        </Box>

        <Box
          className={classes.moreBenefitsContainer}
        >
          <Typography
            variant="h3"
            gutterBottom
            className={classes.benefitHeader}
          >
            2. Add itinerary items to your trip
          </Typography>
          <Typography
            variant="body1"
            className={classes.benefitDescription}
          >
            Add details about your trip to the 🗽 Statue of Liberty on your upcoming New York City trip. 
          </Typography>
        </Box>

        <Box
          className={classes.moreBenefitsContainer}
        >
          <Typography
            variant="h3"
            gutterBottom
            className={classes.benefitHeader}
          >
            3. Plan your entire schedule
          </Typography>
          <Typography
            variant="body1"
            className={classes.benefitDescription}
          >
            Keep track of your 🕒 itinerary schedule with our handy time feature.
          </Typography>
        </Box>
        
        <Box
          className={classes.moreBenefitsContainer}
        >
          <Typography
            variant="h4"
            gutterBottom
            className={classes.comingSoon}
          >
            Coming Soon
          </Typography>
          <Typography
            variant="h3"
            gutterBottom
            className={classes.benefitHeader}
          >
            Share the itinerary with your friends
          </Typography>
          <Typography
            variant="body1"
            className={classes.benefitDescription}
          >
            Going on a large trip? 🗺 Our upcoming feature will allow everyone to view, edit, and delete from the same itinerary. 
          </Typography>
        </Box>

        {!user && 
          <Box
            className={classes.signupContainer}
          >
            <Typography
              variant="h2"
              gutterBottom
              className={classes.benefitHeader}
            >
              Lets get started!
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              className={classes.benefitDescription}
            >
              It's completely free, so you have nothing to lose! 🥰
            </Typography>
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