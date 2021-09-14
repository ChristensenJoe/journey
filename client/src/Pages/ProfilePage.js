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
    width: '120px',
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
  const isMyAccount = user.username === username;

  function handleCreateDialog() {
    setOpenCreate((openCreate) => !openCreate)
  }

  function handleEditProfileDialog() {
    setOpenEditProfile((openEditProfile) => !openEditProfile)
  }
  
  return(
    <Grid container>
      <CreateItineraryDialog 
        handleChangeCreate={handleCreateDialog} 
        open={openCreate}
        user={user}
      />
      
      <EditProfileDialog 
        handleChangeEditProfile={handleEditProfileDialog} 
        open={openEditProfile}
        user={user}
        setUser={setUser}
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
            src={user.profile_img} 
            className={classes.profileImg} 
          />
          <Typography 
            variant="h2" 
            gutterBottom
          >
            {user.username}
          </Typography>
          <Typography 
            variant="body1"
            gutterBottom
          >
            {user.bio}
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
            onClick={handleEditProfileDialog}
          >
            Edit Profile
          </Button>}
        </Box>
        
        {isMyAccount && <Button 
          color="secondary" 
          variant="contained" 
          disableElevation 
          className={classes.addItineraryButton}
          onClick={handleCreateDialog}
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