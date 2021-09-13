import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import {
  ThemeProvider
} from '@material-ui/core'

import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home';
import Login from './Pages/Login';
import SearchPage from './Pages/SearchPage';
import UserRoutes from './Components/Routes/UserRoutes';
import theme from './Theme/theme.js';


function App() {

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>

          <Route path="/search">
            <SearchPage />
          </Route>

          <Route path="/:username">
            <UserRoutes />
          </Route>
          
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
