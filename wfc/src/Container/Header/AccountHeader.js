import React, { Component } from 'react';
import './AccountHeader.css';
import chaseL from '../../Images/Icons/Header-icons/white-logo.svg';
import hamburger from '../../Images/Icons/Header-icons/hamburger.svg';
import comment  from '../../Images/Icons/account-header-icons/add-comment.svg';
import flag from '../../Images/Icons/account-header-icons/flag.svg';
import magnify from '../../Images/Icons/Header-icons/magnifying-glass.svg';
import user from '../../Images/Icons/account-header-icons/user.svg'

export default class AccountHeader extends Component {
    render() {
        return (
            <div className="AccountHeaderParent">
              <div className="AccountHeaderUpper">
                <div className="AccountHeaderUpperLeft">
                  <a href="#"><img classname="account-header-icon" src={hamburger} alt="menu"/></a>
                  <a href="#"><img classname="account-header-icon" src={comment} alt="comment"/></a>
                  <a href="#"><img classname="account-header-icon" src={flag} alt="flag"/></a>
                </div>
                <div className="AccountHeaderUpperCenter">
                  
                    <a href="/"><img className="account-header-icon" src={chaseL} /></a>
                </div>
                <div className="AccountHeaderUpperRight">
                    <a href="#"><img classname="account-header-icon" src={magnify} alt="search"/></a>
                    <a href="#"> <img classname="account-header-icon" src={user} alt="user"/></a>
                    <button className="sign-out-tab">Sign out</button>
                </div>
              </div>
            </div>
        );
    }
}
              // <div className="AccountHeaderLower">
              //   <div>Accounts</div>
              //   <div>Pay & transfer</div>
              // </div>
