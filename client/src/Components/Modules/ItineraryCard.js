import { Link } from "react-router-dom";


import {
  Box,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core'

const useStyles = makeStyles(theme=>({
  gridContainer: {
    backgroundColor: "#f5f5f5",
    borderRadius: '10px',
    padding: '24px',
    textDecoration: 'none',
    boxShadow: '0px 8px 8px #ddd',
    cursor: 'pointer',
    flexGrow: 1,
    justifyContent: 'space-between',

  },
  cardEmoji: {
    fontSize: '48px',
    marginBottom: '16px'
  },
  cardHeader: {
    marginBottom: '16px'
  },
  cardDescription: {
    marginBottom:  '16px'
  },
  cardSaved: {
  }
}))

function ItineraryCard({ user, itinerary }) {
  const classes = useStyles();

  return(
    <Grid
      item
      xs={12}
      md={6}
      className={classes.gridContainer}
      component={Link}
      to={`/${user.username}/${itinerary.name.split(" ").join("-")}`}
    >
      <Typography
        variant="h3"
        color="textPrimary"
        className={classes.cardEmoji}
      >
        {itinerary.category}
      </Typography>

      <Typography
        variant="h3"
        color="textPrimary"
        className={classes.cardHeader}
      >
        {itinerary.name}
      </Typography>

      <Typography
        variant="body1"
        color="textSecondary"
        className={classes.cardDescription}
        nowrap
      >
        {itinerary.description}
      </Typography>

      <Typography
        variant="body1"
        color="secondary"
        className={classes.cardSaved}
        nowrap
      >
        {itinerary.itinerary_items.length} saved items
      </Typography>
    </Grid>
  )
}

export default ItineraryCard;