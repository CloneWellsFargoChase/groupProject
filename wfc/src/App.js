//the App.js file will serve as a routing app

import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import Account from './Page/Account';
import Home from './Page/Home';
import SignUp from './Page/SignUp';
import Transfer from './Page/Transfer';


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

class App extends Component {
  render() {
    return (
      <div>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/account" component={Account}/>
            <Route path="/transfer" component={Transfer}/>
            <Route path="/signup" component={SignUp}/>
          </Switch>
      </div>
    );
  }
}

export default App;
