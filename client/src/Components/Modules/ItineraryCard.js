import { Link } from "react-router-dom";
import Grow from '@material-ui/core/Grow';

import {
  Box,
  Typography,
  makeStyles
} from '@material-ui/core'

const useStyles = makeStyles(theme=>({
  cardContainer: {
    padding: '24px',
    width: 'calc(50% - 64px);',
    backgroundColor: '#f5f5f5',
    boxShadow: '0px 8px 8px #ddd',
    cursor: 'pointer',
    display: 'inline-block',
    margin: '8px',
    textDecoration: 'none'
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
    <Grow 
      in={true}
      appear={true}
      timeout={1000}
    >
    <Box
      component={Link}
      to={`/${user.username}/${itinerary.name.toLowerCase().split(" ").join("-")}`}
      className={classes.cardContainer}
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
        {itinerary.name.split(" ").map((word) => word[0].toUpperCase() + word.substring(1)).join(" ")}
      </Typography>

      <Typography
        variant="body1"
        color="secondary"
        className={classes.cardSaved}
        nowrap
      >
        {itinerary.itinerary_items.length} saved items
      </Typography>
    </Box>
    </Grow>
  )
}

export default ItineraryCard;