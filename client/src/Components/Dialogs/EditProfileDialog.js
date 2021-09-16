import {
  Dialog,
  Container,
  Button,
  Typography,
  makeStyles
} from '@material-ui/core'

import { useState } from 'react'

const useStyles = makeStyles(theme=> ({
  container: {
      width: '50vw',
      minWidth: '400px',
      padding: '40px'
  },
  header: {
      marginBottom: '32px'
  },
  label: {
      display: 'block',
      marginBottom: theme.spacing(2),
      textAlign: 'left',
      fontSize: '14px'
  },
  uneditableBody: {
    fontWeight: '600',
    marginBottom: '16px'
  },
  input: {
      display: 'block',
      width: 'calc(100% - 16px)',
      maxWidth: '490px',
      backgroundColor: '#efefef',
      border: 'none',
      padding: '8px',
      marginBottom: '16px'
  },
  description: {
      height: '64px',
      display: 'block',
      width: 'calc(100% - 16px)',
      maxWidth: '490px',
      backgroundColor: '#efefef',
      border: 'none',
      padding: '8px',
      marginBottom: '16px'
  },
  profileImgPreview: {
    width: '80px',
    height: 'auto',
    borderRadius: '100px'
  },
  submitButton: {
      width: '100%',
      maxWidth: '506px',
      marginTop: '24px'
  }
}))

function EditProfileDialog({ handleChangeEditProfile, open, user, setUser}) {
  const classes = useStyles();

  const [profileDataForm, setProfileDataForm] = useState({
    username: user.username,
    email: user.email,
    profile_img: user.profile_img,
    bio: user.bio
  })

  function handleFormChange(e) {
    setProfileDataForm((profileDataForm) => ({
      ...profileDataForm,
      [e.target.name]: e.target.value
    }))
  }

  async function handlePatchProfile(e) {
    e.preventDefault()

    const response = await fetch(`/users/${user.id}`, {
      method: "PATCH",
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(profileDataForm)
    })
    if (response.ok) {
        response.json()
        .then(data=>{
          setUser(data)
          handleChangeEditProfile()
        })
    }
  }

  return(
    <Dialog
      open={open}
      onClose={handleChangeEditProfile}
    >
        <Container 
            className={classes.container}
        >
            <Typography 
              variant="h2" 
              className={classes.header}
            >
              Edit profile
            </Typography>
            
            <form onSubmit={handlePatchProfile}>
              <label 
                  htmlFor="username" 
                  className={classes.label}
              >
                  Username
              </label>
              <Typography 
                variant="body1"
                className={classes.uneditableBody}
              >
                {profileDataForm.username}
              </Typography>

              <label 
                  htmlFor="email" 
                  className={classes.label}
              >
                  Email
              </label>
              <Typography 
                variant="body1"
                className={classes.uneditableBody}
              >
                {profileDataForm.email}
              </Typography>

              <label 
                  htmlFor="profile_img" 
                  className={classes.label}
              >
                  Profile Image
              </label>
              <img 
                src={profileDataForm.profile_img} 
                alt="profile-img-preview" 
                className={classes.profileImgPreview}  
              />
              <input
                  type="text"
                  name="profile_img"
                  value={profileDataForm.profile_img}
                  className={classes.input} 
                  onChange={handleFormChange}
              />

              <label 
                  htmlFor="bio" 
                  className={classes.label}
              >
                  Bio
              </label>
              <input
                  type="text"
                  name="bio"
                  value={profileDataForm.bio}
                  className={classes.description} 
                  onChange={handleFormChange}
              />

              <Button 
                  variant="contained" 
                  type="submit" 
                  color="secondary" 
                  disableElevation 
                  className={classes.submitButton}
              >
                  Save Changes
              </Button>
            </form>
        </Container>
    </Dialog>
  )
}

export default EditProfileDialog;