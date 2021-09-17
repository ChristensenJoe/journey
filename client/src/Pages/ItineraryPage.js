import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import {
  Box,
  Grid,
  Container,
  Typography,
  Button,
  makeStyles,
  useTheme,
  IconButton
} from '@material-ui/core';

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import ItineraryListItem from '../Components/Modules/ItineraryListItem';
import AddItemDialog from '../Components/Dialogs/AddItemDialog'
import EditItineraryDialog from '../Components/Dialogs/EditItineraryDialog';
import DeleteItineraryConfirmDialog from '../Components/Dialogs/DeleteItineraryConfirmDialog';
import ItineraryMap from '../Components/Maps/ItineraryMap';
import loadingGif from '../Images/loading.gif';

const useStyles = makeStyles(theme => ({
  loadingContainer: {
    width: '100%',
    textAlign: 'center'
  },
  loading: {
    margin: '0 auto',
    paddingTop: '20vh',
    width: '15vw'
  },
  container: {
    padding: "24px",
    height: '90vh',
    overflow: 'auto',
    boxShadow: '10px 0px 24px #ccc',
    [theme.breakpoints.down('sm')]: {
       height: 'auto'
    }
  },
  introContainer: {
    padding: '24px',
    backgroundColor: theme.palette.primary.light,
    margin: '40px 0 16px',
    position: 'relative',
    borderRadius: '10px'
  },
  emoji: {
    fontSize: '80px',
    marginTop: '-80px'
  },
  header: {
    marginBottom: '16px'
  },
  addButton: {
    width: '100%'
  },
  icon: {
    padding: '6px'
  },
  iconContainer: {
    position: 'absolute',
    top: '16px',
    right: '16px'
  }
}))

function ItineraryPage({ user, categories, setItineraryList }) {
  const theme = useTheme();
  const classes = useStyles(theme);
  const { username, itinerary_name } = useParams();
  const [itineraryData, setItineraryData] = useState(null);
  const [itineraryItems, setItineraryItems] = useState(null);
  const [openAddItem, setOpenAddItem] = useState(false);
  const [openEditItinerary, setOpenEditItinerary] = useState(false);
  const [openConfirmDelete, setOpenConfirmDelete] = useState(false);

  const isMyAccount = user.username === username;

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

  function handleOpenDialog() {
    setOpenConfirmDelete(openConfirmDelete => !openConfirmDelete)
  }

  function handleEditDialog() {
    setOpenEditItinerary(openEditItinerary => !openEditItinerary)
  }

  return (
    <div>
      {itineraryData  && itineraryItems ? 
      <Grid container >
        <EditItineraryDialog 
          itineraryData={itineraryData}
          setItineraryData={setItineraryData}
          handleEditDialog={handleEditDialog} 
          open={openEditItinerary}
          user={user}
          setItineraryList={setItineraryList}
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
        <DeleteItineraryConfirmDialog 
          open={openConfirmDelete}
          handleOpenDialog={handleOpenDialog}
          itineraryData={itineraryData}
          user={user}
          setItineraryList={setItineraryList}
        />

        <Grid 
          item 
          xs={12} 
          md={4} 
          className={classes.container}
        >
          <Box 
            className={classes.introContainer}
          >
            <Typography
              className={classes.emoji}
            >
              {itineraryData.category}
            </Typography>
            <Typography 
              variant="h3" 
              className={classes.header}
              color='textPrimary'
            >
              {itineraryData.name}
            </Typography>
            <Typography 
              variant="body1"
            >
              {itineraryData.description}
            </Typography>
            
            {isMyAccount && <div
              className={classes.iconContainer}
            >
              <IconButton 
                className={classes.icon}
                onClick={handleEditDialog}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                className={classes.icon}
                onClick={handleOpenDialog}
              >
                <DeleteIcon />
              </IconButton>
            </div>}
          </Box>

          <Button variant="outlined" className={classes.addButton} onClick={handleAddItemDialog}>Add an itinerary item</Button>

          <Box>
            {itineraryItems.map((itinerary_item, index) => {
              return (
                <ItineraryListItem 
                  key={index}
                  user={user}
                  itemID={itinerary_item.id}
                  name={itinerary_item.name}
                  location={itinerary_item.location}
                  content={itinerary_item.content}
                  time={itinerary_item.time}
                  allCategories={categories}
                  categories={itinerary_item.categories}
                  setItineraryItems={setItineraryItems}
                  isMyAccount={isMyAccount}
                />
              )
            })}
          </Box>
        </Grid>

        <Grid 
          item 
          xs={12} 
          md={8}
          className={classes.map}
        >
          <ItineraryMap 
            itineraryItems={itineraryItems}
          />
        </Grid>
      </Grid> : 
      <Container
        className={classes.loadingContainer}
      >
        <img 
          src={loadingGif}
          alt="loading gif"
          className={classes.loading}
        />
      </Container>}
    </div>
  )
}

export default ItineraryPage