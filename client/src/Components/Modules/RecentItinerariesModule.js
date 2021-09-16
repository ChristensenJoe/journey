import {
  Box,
  Typography,
  Grid,
  makeStyles
} from '@material-ui/core'

import ItineraryCard from '../Modules/ItineraryCard';

const useStyles = makeStyles(theme=> ({
  header: {
    paddingBottom: '16px',
    borderBottom: '1px solid black',
    marginBottom: '24px',
    gap: '15'
  },
  container: {

  }
}))

function RecentItinerariesModule({ user, itineraryList }){
  const classes = useStyles();

  return(
    <div>
      {itineraryList &&
        <Box>
        <Typography 
          variant="h2"
          className={classes.header}
        >
          Recent Itineraries
        </Typography>
        <div
          className={classes.divContainer}
        >
        <Grid
          container
          spacing={2}
          className={classes.container}
        >
          {itineraryList.map((itinerary)=>{
            return <ItineraryCard 
              key={itinerary.id}
              user={user}
              itinerary={itinerary}
            />
          })}
        </Grid>
        </div>
      </Box>}
    </div>
  )
}

export default RecentItinerariesModule;