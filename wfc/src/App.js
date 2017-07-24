//the App.js file will serve as a routing app

import React, { Component } from 'react';
import Jumbotron from './Container/Jumbotron/JumbotronView'

import {Switch,Route} from 'react-router-dom';
import Account from './Page/Account';
import Home from './Page/Home';
import SignUp from './Page/SignUp';
import Transfer from './Page/Transfer';
import {connect} from 'react-redux';
import {withRouter,Redirect} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {loginSuccess} from './Actions/userLogin';


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

class AppComponent extends Component {

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

function mapDispatchToProps(dispatch){
    return loginSuccess;
}

function mapStateToProps({login}){
  return {login};
}

var App = withRouter(connect(mapStateToProps,mapDispatchToProps)(AppComponent));

export default App;
