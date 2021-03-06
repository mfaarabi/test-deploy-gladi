import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Profile from 'components/profile';
import ProfileEdit from "components/profile/edit";
import logo from 'logo.svg';
import 'App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <Link className="App-link" to="/profile">
                Profile
              </Link>
            </header>
          </div>
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route path="/profile/edit">
          <ProfileEdit />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
