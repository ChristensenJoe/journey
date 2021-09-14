import { useParams } from 'react-router-dom';
import { useState } from 'react';

import {
  Box,
  Grid,
  Typography,
  Button,
  makeStyles
} from '@material-ui/core';

import ItineryListItem from '../Components/Modules/ItineryListItem';
import AddItemDialog from '../Components/Dialogs/AddItemDialog'

const useStyles = makeStyles(theme=> ({
  container: {
    padding: "24px",
    height: '90vh',
    overflow: 'auto',
    boxShadow: '10px 0px 24px #ccc'
  },
  introContainer: {
    padding: '24px',
    backgroundColor: '#f5f5f5',
    marginBottom: '16px'
  },
  map: {
    backgroundImage: `url(https://assets.website-files.com/5e832e12eb7ca02ee9064d42/5f7db426b676b95755fb2844_Group%20805-p-1600.jpeg)`,
    height: '90vh',
    backgroundSize: 'auto 100%'
  },
  header: {
    marginBottom: '16px'
  },
  addButton: {
    width: '100%'
  }
}))

function ItineraryPage() {
  const { username, itinerary_name } = useParams();
  const [open, setOpen] = useState(false);
  const classes = useStyles()

  function handleClickOpen() {
    setOpen(true)
  }

  function handleClose() {
    setOpen(false)
  }
  
  return(
    <Grid container >      
      <AddItemDialog 
        handleClose={handleClose} 
        open={open} 
      />

      <Grid item xs={12} sm={4} className={classes.container}>
        <Box bgColor="primary" className={classes.introContainer}>
          <Typography variant="h3" className={classes.header}>{itinerary_name}</Typography>
          <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec libero ut libero blandit sollicitudin. </Typography>
        </Box>
        
        <Button variant="outlined" className={classes.addButton} onClick={handleClickOpen}>Add an itinerary item</Button>
        
        <Box>
          <ItineryListItem />
          <ItineryListItem />
          <ItineryListItem />
          <ItineryListItem />
          <ItineryListItem />
          <ItineryListItem />
        </Box>
      </Grid>

      <Grid item xs={12} sm={8} className={classes.map}>
        {/* MapBox goes here */}
      </Grid>
    </Grid>
  )
}

export default ItineraryPage