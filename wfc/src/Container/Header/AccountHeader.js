import React, { Component } from 'react';
import './AccountHeader.scss';
import chaseL from '../../Images/chaseL.png';
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
                  {this.props.login.profile.map(this.userName)}
                </div>
                <div className="AccountHeaderUpperCenter">
                  <img src={chaseL} />
                </div>
                <div className="AccountHeaderUpperRight">
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
  console.log({login})
  return {login};
}

var AccountHeader = withRouter(connect(mapStateToProps,mapDispatchToProps)(HeadAccount));

export default AccountHeader;