import {
  Box,
  Typography,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(theme=> ({  
  container: {
    marginTop: '24px',
    paddingBottom: '24px',
    borderBottom: '1px solid #ccc'
    
  },
  category: {
    padding: '6px 12px',
    backgroundColor: '#efefef',
    display: 'inline-block',
    marginBottom: '16px',
    borderRadius: '5px'
  },
  time: {
    color: '#A2B5BA',
    fontWeight: 'bold',
    marginTop: '12px'
  }
}))

function ItineraryListItem() {
  const classes=useStyles()

  return(
    <Box className={classes.container}>
      <Typography className={classes.category} variant="h4">Food</Typography>
      <Typography variant="h5">Happy Bones</Typography>
      <Typography variant="body1" noWrap>Stylish, minimalist coffee shop with specialty coffee, local art & global publications on display.</Typography>
      <Typography variant="body1" className={classes.time}>Time: Saturday, Dec 14 8:00AM</Typography>
    </Box>
  )
}

export default ItineraryListItem