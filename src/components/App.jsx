import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import HomePage from './Pages/Home'
import SignInPage from './Pages/Sign-in'
import SignUpPage from './Pages/Sign-up'

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/auth/signin">Connexion</Link>
          </li>
          <li>
            <Link to="/auth/signup">Inscription</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Switch>
            <Route path="/auth/signin">
              <SignInPage />
            </Route>
            <Route path="/auth/signup">
              <SignUpPage />
            </Route>
          </Switch>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
