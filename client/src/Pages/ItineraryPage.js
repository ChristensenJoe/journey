import { useParams, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';


import {
  Box,
  Grid,
  Typography,
  Button,
  makeStyles,
  IconButton
} from '@material-ui/core';

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import ItineraryListItem from '../Components/Modules/ItineraryListItem';
import AddItemDialog from '../Components/Dialogs/AddItemDialog'
import EditItineraryDialog from '../Components/Dialogs/EditItineraryDialog';

const useStyles = makeStyles(theme => ({
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

function ItineraryPage({ user, categories }) {
  const classes = useStyles();
  const history = useHistory();
  const { username, itinerary_name } = useParams();
  const [openAddItem, setOpenAddItem] = useState(false);
  const [itineraryData, setItineraryData] = useState(null);
  const [itineraryItems, setItineraryItems] = useState(null);
  const [openEditItinerary, setOpenEditItinerary] = useState(false)

  useEffect(() => {
    let newItineraryName = itinerary_name.split("-").join("_")
    fetch(`/itineraries?name=${newItineraryName}`)
      .then(res => res.json())
      .then(itineraries => {
        const itinerary = itineraries.find((itinerary) => {
          return itinerary.owner === username
        });

        fetch(`/itineraries/${itinerary.id}`)
          .then(res => res.json())
          .then(data => {
            const newName = data.name.split(" ").map((word) => word[0].toUpperCase() + word.substring(1)).join(" ")
            data.name = newName;
            setItineraryData(data)
            setItineraryItems(data.itinerary_items)
          })
      })
  }, [])

  function handleAddItemDialog() {
    setOpenAddItem(openAddItem => !openAddItem)
  }

  function handleDelete() {
    fetch(`/itineraries/${itineraryData.id}`, {
      method: 'DELETE'
    })
    history.push(`/${user.username}`)
  }

  function handleEditDialog() {
    setOpenEditItinerary(openEditItinerary => !openEditItinerary)
  }


  return (
    <div>
      {itineraryData  && itineraryItems && <Grid container >
        <EditItineraryDialog 
          itineraryData={itineraryData}
          setItineraryData={setItineraryData}
          handleEditDialog={handleEditDialog} 
          open={openEditItinerary}
          user={user}
        />
        <AddItemDialog
          handleAddItemDialog={handleAddItemDialog}
          open={openAddItem}
          itineraryItems={itineraryItems}
          setItineraryItems={setItineraryItems}
          itinerary_id={itineraryData.id}
          user={user}
          categories={categories}
        />

        <Grid item xs={12} sm={4} className={classes.container}>
          <Box 
            className={classes.introContainer}
          >
            <Typography 
              variant="h3" 
              className={classes.header}
            >
              {itineraryData.name}
            </Typography>
            <Typography 
              variant="body1"
            >
              {itineraryData.description}
            </Typography>
            <IconButton 
            onClick={handleEditDialog}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              onClick={handleDelete}
            >
              <DeleteIcon />
            </IconButton>
          </Box>

          <Button variant="outlined" className={classes.addButton} onClick={handleAddItemDialog}>Add an itinerary item</Button>

          <Box>
            {itineraryItems.map((itinerary_item, index) => {
              return (
                <ItineraryListItem 
                  key={index}
                  name={itinerary_item.name}
                  location={itinerary_item.location}
                  content={itinerary_item.content}
                  time={itinerary_item.time}
                  categories={itinerary_item.categories}
        
                />
              )
            })}
          </Box>
        </Grid>

        <Grid item xs={12} sm={8} className={classes.map}>
          {/* MapBox goes here */}
        </Grid>
      </Grid>}
    </div>
  )
}

export default ItineraryPage