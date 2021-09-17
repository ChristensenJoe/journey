import { NavLink, useHistory } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  makeStyles
} from '@material-ui/core'

import logo from '../../Images/journey-logo.png'

const useStyles = makeStyles(theme => ({
  container: {
    padding: '16px 40px',
    minHeight: '48px'
  },
  flexLogo: {
    flexGrow: '1',
    padding: '0'
  },
  logo: {
    width: '100px'
  },
  profilePic: {
    width: '40px',
    marginLeft: '24px',
    borderRadius: '50px'
  },
  headerItems: {
    marginLeft: '24px'
  },
  headerProfileName: {
    marginLeft: '16px'
  },
  searchInput: {
    width: '100%',
    backgroundColor: '#EEECE7',
    padding: '24px 40px',
    border: 'none',
    outline: 'none',
    fontSize: '18px',
    fontWeight: '500'
  }
}))

function Header({ user, setUser }) {
  const history = useHistory();
  const classes = useStyles();

  function logoutUser() {
    fetch("/logout", {
      method: "DELETE"
    })
    setUser(false);
    history.push(`/`);
  }

  return(
    <>
      <AppBar 
        color="primary" 
        position="relative" 
        elevation={0}
      >
        <Toolbar 
          className={classes.container}
        >
          <Box 
            className={classes.flexLogo} 
            component={NavLink} 
            to="/"
          >
            <img 
              src={logo} 
              alt="journey brand logo"
              className={classes.logo} 
            />
          </Box>          
          {user ? 
            <>
              <img 
                src={user.profile_img} 
                alt="user profile"
                className={classes.profilePic} 
              />
              <Typography 
                variant="h4" 
                color="contrastText" 
                component={NavLink} 
                to={`/${user.username}`} 
                className={classes.headerProfileName}
              >
                {user.username}
              </Typography>
              <Typography 
                variant="h4" 
                color="contrastText" 
                className={classes.headerItems} 
                onClick={logoutUser}
              >
                Logout
              </Typography> 
            </>  
              :
            <Typography 
              variant="h4" 
              color="contrastText" 
              component={NavLink} 
              to="/login" 
              className={classes.headerItems}
            >
              Login
            </Typography>
          }
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header;