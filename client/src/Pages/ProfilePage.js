import { useParams } from 'react-router-dom';
import { useState } from 'react';

import {
  Grid,
  Box,
  Container,
  Typography,
  Button,
  makeStyles
} from '@material-ui/core'

import CreateItineraryDialog from '../Components/Dialogs/CreateItineraryDialog';
import EditProfileDialog from '../Components/Dialogs/EditProfileDialog';
import RecentItinerariesModule from '../Components/Modules/RecentItinerariesModule';
import loadingGif from '../Images/loading.gif';

const useStyles = makeStyles(theme=> ({
  container: {
    padding: '40px'
  },
  profileMainSection: {
    padding: '40px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    textAlign: 'center',
    marginBottom: '24px',
    boxShadow: '0px 0px 10px #ccc'
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
  },
  loadingContainer: {
    width: '100%',
    textAlign: 'center'
  },
  loading: {
    margin: '0 auto',
    paddingTop: '20vh',
    width: '15vw'
  }
}))

function ProfilePage({ user, setUser, itineraryList, setItineraryList }) {
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
    <div>
      {user && itineraryList ? 
      <Grid container>
      <CreateItineraryDialog 
        handleChangeCreate={handleCreateDialog} 
        open={openCreate}
        user={user}
        setItineraryList={setItineraryList}
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
        md={4} 
        className={classes.container}
      >
        <Box 
          className={classes.profileMainSection}
        >
          <img 
            src={user.profile_img} 
            alt="profile-img"
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
        md={8}
        xs={12} 
        className={classes.container}
      >
      <RecentItinerariesModule 
        user={user}
        itineraryList={itineraryList}
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
      </Container>
      
    }
    </div>
  )
}

export default ProfilePage