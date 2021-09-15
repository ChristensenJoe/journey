import {
  Box,
  Typography,
  makeStyles,
  IconButton
} from '@material-ui/core';

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

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

function ItineraryListItem({name, location, content, time, categories, itemID, setItineraryItems, itineraryItems}) {
  const classes=useStyles()

  function handleDelete() {
    fetch(`/itinerary_items/${itemID}`, {
      method: "DELETE"
    })
    setItineraryItems((itineraryItems) => {
      return itineraryItems.filter((item) => item.id !== itemID)
    })
  }

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
      <IconButton 
        // onClick={handleEditDialog}
        >
          <EditIcon />
        </IconButton>
        <IconButton
          onClick={handleDelete}
        >
          <DeleteIcon />
        </IconButton>
    </Box>
  )
}

export default ItineraryListItem