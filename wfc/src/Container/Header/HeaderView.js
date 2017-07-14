import React, { Component } from 'react';
import hamburger from '../../Images/Icons/hamburger.svg';
import arrow from '../../Images/Icons/down-arrow.svg';
import magnify from '../../Images/Icons/magnifying-glass.svg';
import text from '../../Images/Icons/chase-text.svg';
import logo from '../../Images/Icons/chase-logo.svg';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-text">
          <div className="header-left">
              <div className="menu-dropdown">
                <img src={hamburger} className="hamburger-bars" />
                 <div className="dropdown">
                 <button className="dropdown-button">
                    <div className="dropdown-text"> 
                      Explore products
                    </div>
                  <img src={arrow} className="menu-dropdown-arrow" />
                  </button>
                  <div className="dropdown-content">
                    
                    <div className="icon-well">
                        <img className='dropdown-icon' src={require
                        ("../../Images/Icons/credit-card-back-symbol.svg")}/>
                        <div className="icon-text">
                          Credit cards
                        </div>
                    </div>
                    
                    <div className="icon-well">
                      <img className='dropdown-icon' src={require("../../Images/Icons/check-with-pen.svg")} />
                        <div className="icon-text">
                          Checking
                        </div>
                    </div>

                    <div className="icon-well">
                      <img className='dropdown-icon' src={require("../../Images/Icons/wallet.svg")} />
                        <div className="icon-text">
                          Savings and CDs
                        </div>
                    </div>
                  
                    <div className="icon-well">
                      <img className='dropdown-icon' src={require("../../Images/Icons/credit-card-with-plus-sign.svg")} />
                        <div className="icon-text">
                          Prepaid cards
                        </div>
                    </div>

                    <div className="icon-well">
                      <img className='dropdown-icon' src={require("../../Images/Icons/house.svg")} />
                        <div className="icon-text">
                          Mortgage & Home Equity
                        </div>
                    </div>

                    <div className="icon-well">
                    <img className='dropdown-icon' src={require("../../Images/Icons/line-chart.svg")} />
                        <div className="icon-text">
                          investing
                        </div>
                    </div>

                       <div className="icon-well">
                      <img className='dropdown-icon' src={require("../../Images/Icons/key.svg")} />
                        <div className="icon-text">
                          Auto loans
                        </div>
                    </div>

                    <div className="icon-well">
                      <img className='dropdown-icon' src={require("../../Images/Icons/briefcase.svg")} />
                        <div className="icon-text">
                          Chase for Business
                        </div>
                    </div>

                    <div className="icon-well">
                      <img className='dropdown-icon' src={require("../../Images/Icons/skyline.svg")} />
                        <div className="icon-text">
                          Commercial Banking
                        </div>
                    </div>

                    <div className="icon-well">
                      <img className='dropdown-icon' src={require("../../Images/Icons/more-button-of-circular-shape.svg")} />
                        <div className="icon-text">
                          See all
                        </div>
                    </div>
                    
                  
                  </div>
                  </div>
            </div>
          </div>
        <div className="header-middle">
          <img src={text} className="chase-text" />
          <img src={logo} className="chase-logo" />
        </div>
          <div className="header-right">
            <div className="atm">ATM & branch</div>
            <div className="español">Español</div>
            <img src={magnify} className="magnifying-glass" />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;

