import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  makeStyles
} from '@material-ui/core';

import RecentItinerariesModule from '../Components/Modules/RecentItinerariesModule';

const useStyles = makeStyles(theme=>({
  container: {
    padding: '40px'
  }
}))

function Home({ user, itineraryList }) {
  const classes = useStyles();

  return(
    <Container
      className={classes.container}
    >
      {/* <RecentItinerariesModule 
        user={user}
        itineraryList={itineraryList}
      /> */}
      <p>This is the home</p><p>This is the home</p><p>This is the home</p><p>This is the home</p>
    </Container>
  )
}

export default Home;