import { NavLink } from "react-router-dom";
import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Container,
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
  headerItems: {
    marginLeft: '24px'
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

function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const classes = useStyles()

  function renderSearchOpen() {
    setSearchOpen(()=>!searchOpen)
  }

  return(
    <>
      <AppBar color="primary" position="relative" elevation={0}>
        <Toolbar className={classes.container}>
          <Container className={classes.flexLogo} component={NavLink} to="/">
            <img src={logo} alt="journey-logo" className={classes.logo} />
          </Container>
          <Typography variant="h4" color="contrastText" onClick={renderSearchOpen}>Search</Typography>
          <Typography variant="h4" color="contrastText" component={NavLink} to="/login" className={classes.headerItems}>Login</Typography>
        </Toolbar>
      </AppBar>
      {searchOpen ? <input type="text" placeholder="Where would you like to go?" className={classes.searchInput} /> : null}
    </>
  )
}

export default Header;