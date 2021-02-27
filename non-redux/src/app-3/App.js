import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import FeedPage from './components/FeedPage/FeedPage';
import HomePage from './components/HomePage/HomePage';
import AppState from './context/AppState';

const App = () => {
    return (
      <div>
        <h1>Context Example</h1>

        <Router>
          <nav>
            <ul>
              <li>
                <Link to='/home'>Home</Link>
              </li>
              <li>
                <Link to='/feed'>Feed</Link>
              </li>
            </ul>
          </nav>
          <AppState>
            <Switch>
              <Route exact path='/home' component={HomePage} />
              <Route exact path='/feed' component={FeedPage} />
            </Switch>
          </AppState>
        </Router>
      </div>
    );
}

export default App
