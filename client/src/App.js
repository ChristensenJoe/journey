import { useState, useEffect } from "react"
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
  const [user, setUser] = useState(false)

  useEffect(()=> {
    fetch("/me")
    .then((r)=> {
      if (r.ok) {
        r.json()
        .then((user) => setUser(user))
      }
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
        <Router>
          <Header 
            user={user}
            setUser={setUser}
          />
          <Switch>
            <Route exact path="/login">
              <Login 
                setUser={setUser}
              />
            </Route>

            <Route path="/search">
              <SearchPage />
            </Route>

            {user && <Route path="/:username">
              <UserRoutes 
                user={user}
                setUser={setUser}
              />
            </Route>}
            
            <Route exact path="/">
              <Home 
                user={user}
              />
            </Route>
          </Switch>
          <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
