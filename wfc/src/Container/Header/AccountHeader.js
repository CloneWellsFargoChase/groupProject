import React, { Component } from 'react';
import './AccountHeader.css';
import chaseL from '../../Images/Icons/Header-icons/white-logo.svg';
import hamburger from '../../Images/Icons/Header-icons/hamburger.svg';
import comment  from '../../Images/Icons/account-header-icons/add-comment.svg';
import flag from '../../Images/Icons/account-header-icons/flag.svg';
import magnify from '../../Images/Icons/Header-icons/magnifying-glass.svg';
import user from '../../Images/Icons/account-header-icons/user.svg'
import {Button,ButtonToolbar} from 'react-bootstrap';
import {connect} from 'react-redux';
import {withRouter,Redirect} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {logOut} from '../../Actions/userLogin';

class HeadAccount extends Component {

    constructor(props){
      super(props);
      this.state={};
      this.onLogout=this.onLogout.bind(this);
      this.userName=this.userName.bind(this);
    }

    onLogout(){
        this.props.logOut();
        return this.props.history.push({ pathname: '/'});
    }

    userName(data){
        var firstName = data.f_name;
        var lastName = data.l_name;

        return `${firstName} ${lastName}`;
    }

    render() {
        return (
            <div className="AccountHeaderParent">
              <div className="AccountHeaderUpper">
                <div className="AccountHeaderUpperLeft">

                  <a href="#"><img className="account-header-icon" src={hamburger} alt="menu"/></a>
                  <a href="#"><img className="account-header-icon" src={comment} alt="comment"/></a>
                  <a href="#"><img className="account-header-icon" src={flag} alt="flag"/></a>

                  {this.props.login.profile.map(this.userName)}
                </div>
                <div className="AccountHeaderUpperCenter">
                  
                    <a href="/"><img className="account-header-icon" src={chaseL} /></a>
                </div>
                <div className="AccountHeaderUpperRight">

                    <a href="#"><img className="account-header-icon" src={magnify} alt="search"/></a>
                    <a href="#"> <img className="account-header-icon" src={user} alt="user"/></a>
                    <button className="sign-out-tab">Sign out</button>
                  <ButtonToolbar>
                    <Button bsStyle="danger" type="submit" onClick={this.onLogout}>Logout</Button>
                  </ButtonToolbar>
                </div>
              </div>
            </div>
        );
    }
}


function mapDispatchToProps(dispatch){
    return bindActionCreators({logOut},dispatch);
}

function mapStateToProps({login}){
  return {login};
}

var AccountHeader = withRouter(connect(mapStateToProps,mapDispatchToProps)(HeadAccount));

export default AccountHeader;
