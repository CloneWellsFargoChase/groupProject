import React, { Component } from 'react';
import hamburger from './hamburger.svg';
import arrow from './down-arrow.svg';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-text">
          <div className="header-left">
              <div className="menu-dropdown">
                <img src={hamburger} className="hamburger-bars" />
                  Explore products
              <img src={arrow} className="menu-dropdown-arrow" />
            </div>
          </div>
        <div className="header-middle">
        </div>
        <div className="header-right"></div>
        </div>
      </div>
    );
  }
}

export default Header;

