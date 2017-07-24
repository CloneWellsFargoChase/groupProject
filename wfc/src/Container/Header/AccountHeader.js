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
                  <img classname="account-header-icon" src={hamburger} alt="menu"/>
                  <img classname="account-header-icon" src={comment} alt="comment"/>
                  <img classname="account-header-icon" src={flag} alt="flag"/>
                </div>
                <div className="AccountHeaderUpperCenter">
                  <img classname="account-header-icon" src={chaseL} />
                </div>
                <div className="AccountHeaderUpperRight">
                    <img classname="account-header-icon" src={magnify} alt="search"/>
                    <img classname="account-header-icon" src={user} alt="user"/>
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
