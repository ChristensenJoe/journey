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

function ItineraryListItem({name, location, content, time, categories}) {
  const classes=useStyles()

  return(
    <Box className={classes.container}>
      {categories.map((category) => {
        return (
          <Typography className={classes.category} variant="h4">{category.name}</Typography>
        )
      })}
      <Typography variant="h5">{name}</Typography>
      <Typography variant="body1" noWrap>{content}</Typography>
      <Typography variant="body1" className={classes.time}>Time: {time}</Typography>
    </Box>
  )
}

export default ItineraryListItem