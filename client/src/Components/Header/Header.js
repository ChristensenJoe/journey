import { NavLink } from "react-router-dom";
import {
  AppBar,
  Button
} from '@material-ui/core'

function Header() {
  return(
    <AppBar color="secondary">
      <Button color="primary" component={NavLink} to="/login">Login</Button>
    </AppBar>
  )
}

export default Header;