import {
  useState,
  useEffect
} from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import {
  ThemeProvider
} from '@material-ui/core'

import './App.css';
import theme from './Theme/theme.js'


function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch('/hello')
      .then(res => res.json())
      .then(data => setCount(data.count))
  }, []);


  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/testing">
              <h1>Test route</h1>
            </Route>
            <Route path="/">
              <h1>Page Count: {count}</h1>
            </Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
