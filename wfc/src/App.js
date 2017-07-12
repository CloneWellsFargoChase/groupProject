//the App.js file will serve as a routing app

import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Account from './Page/Account';
import Home from './Page/Home';
import SignUp from './Page/SignUp';
import Transfer from './Page/Transfer';

class App extends Component {
  render() {
    return (
      <div>
      GroupProject!
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/account" component={Account}/>
            <Route path="/transfer" component={Transfer}/>
            <Route path="/signup" component={SignUp}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
