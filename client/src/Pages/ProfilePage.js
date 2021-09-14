import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import {
  Grid,
  Box,
  Typography,
  Button,
  makeStyles
} from '@material-ui/core'

import CreateItineraryDialog from '../Components/Dialogs/CreateItineraryDialog';
import EditProfileDialog from '../Components/Dialogs/EditProfileDialog';
import FavoritesListModule from '../Components/Modules/FavoritesListModule';

const useStyles = makeStyles(theme=> ({
  container: {
    padding: '40px'
  },
  profileMainSection: {
    padding: '40px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    textAlign: 'center',
    marginBottom: '24px'
  },
  profileImg: {
    height: '120px',
    width: 'auto',
    borderRadius: '100px',
    marginBottom: '40px'
  },
  addItineraryButton: {
    width: '100%'
  },
  editLink: {
    marginTop: '24px',
    width: '100%',
    backgroundColor: '#efefef'
  }
}))

function ProfilePage({ user, setUser }) {
  const classes = useStyles();

  const { username } = useParams();
  const [openCreate, setOpenCreate] = useState(false);
  const [openEditProfile, setOpenEditProfile] = useState(false);
  const [pageUserData, setPageUserData] = useState({});
  const isMyAccount = user.username === username;

  useEffect(()=>{
    fetch('/me')
    .then(res=>res.json())
    .then(setPageUserData)
  },[])

  function handleClickOpenCreate() {
    setOpenCreate(true)
  }

  function handleCloseCreate() {
    setOpenCreate(false)
  }

  function handleClickOpenEditProfile() {
    setOpenEditProfile(true)
  }

  function handleCloseEditProfile() {
    setOpenEditProfile(false)
  }
  
  return(
    <Grid container>
      <CreateItineraryDialog 
        handleClose={handleCloseCreate} 
        open={openCreate}
        user={user}
      />
      
      <EditProfileDialog 
        handleClose={handleCloseEditProfile} 
        open={openEditProfile}
        user={user}
      />

      <Grid 
        item 
        xs={12} 
        sm={4} 
        className={classes.container}
      >
        <Box 
          className={classes.profileMainSection}
        >
          <img 
            src={pageUserData.profile_img} 
            className={classes.profileImg} 
          />
          <Typography 
            variant="h2" 
            gutterBottom
          >
            {pageUserData.username}
          </Typography>
          <Typography 
            variant="body1"
            gutterBottom
          >
            {pageUserData.bio}
          </Typography>
          <Typography 
            variant="body1"
            gutterBottom
          >
            5 saved itineraries
          </Typography>
          {isMyAccount && <Button
            // color="secondary.light"
            variant="contained"
            disableElevation
            className={classes.editLink}
            onClick={handleClickOpenEditProfile}
          >
            Edit Profile
          </Button>}
        </Box>
        
        {isMyAccount && <Button 
          color="secondary" 
          variant="contained" 
          disableElevation 
          className={classes.addItineraryButton}
          onClick={handleClickOpenCreate}
        >
          Add New Itinerary
        </Button>}
      </Grid>

      <Grid 
        item 
        xs={12} 
        sm={8}
        className={classes.container}
      >
        <FavoritesListModule 
          user={user}
        />
      </Grid>
    </Grid>
  )
}

export default ProfilePage