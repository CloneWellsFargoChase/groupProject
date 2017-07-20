
import React, { Component } from 'react';
import hamburger from '../../Images/Icons/Header-icons/hamburger.svg';
import arrow from '../../Images/Icons/Header-icons/down-arrow.svg';
import magnify from '../../Images/Icons/Header-icons/magnifying-glass.svg';
import text from '../../Images/Icons/Header-icons/chase-text.svg';
import logo from '../../Images/Icons/Header-icons/chase-logo.svg';
import './Header.css';

// const styles = { 
//       transition: 'all 1s ease-in'
// };

class Header extends Component {

//   constructor(){
//     super();
//     this.state = {
//       opacity:0
//     };
//   }

//   onShow()
//   {
//     this.setState({
//       opacity: 1
//     })
// }

  render() {
    return (
      <div className="header">
        <div className="header-text">
          <div className="header-left">
              <div className="menu-dropdown">
                <img src={hamburger} className="hamburger-bars" />
                 <div className="dropdown">
                 <button className="dropdown-button" 
                 /*onHover={this.onShow(this)} */
                 >
                    <div className="dropdown-text"> 
                      Explore products
                    </div>
                  <img src={arrow} className="menu-dropdown-arrow" />
                  </button>
                  <div className="dropdown-content">
                    
                    <div className="icon-well">
                        <img className='dropdown-icon' src={require
                        ("../../Images/Icons/Header-icons/credit-card-back-symbol.svg")} 
                        /*style={{...styles, opacity: this.state}}*/
                        />
                        <div className="icon-text">
                          Credit cards
                        </div>
                    </div>
                    
                    <div className="icon-well">
                      <img className='dropdown-icon' src={require("../../Images/Icons/Header-icons/check-with-pen.svg")} />
                        <div className="icon-text">
                          Checking
                        </div>
                    </div>

                    <div className="icon-well">
                      <img className='dropdown-icon' src={require("../../Images/Icons/Header-icons/wallet.svg")} />
                        <div className="icon-text">
                          Savings and CDs
                        </div>
                    </div>
                  
                    <div className="icon-well">
                      <img className='dropdown-icon' src={require("../../Images/Icons/Header-icons/credit-card-with-plus-sign.svg")} />
                        <div className="icon-text">
                          Prepaid cards
                        </div>
                    </div>

                    <div className="icon-well">
                      <img className='dropdown-icon' src={require("../../Images/Icons/Header-icons/house.svg")} />
                        <div className="icon-text">
                          Mortgage & Home Equity
                        </div>
                    </div>

                    <div className="icon-well">
                    <img className='dropdown-icon' src={require("../../Images/Icons/Header-icons/line-chart.svg")} />
                        <div className="icon-text">
                          investing
                        </div>
                    </div>

                       <div className="icon-well">
                      <img className='dropdown-icon' src={require("../../Images/Icons/Header-icons/key.svg")} />
                        <div className="icon-text">
                          Auto loans
                        </div>
                    </div>

                    <div className="icon-well">
                      <img className='dropdown-icon' src={require("../../Images/Icons/Header-icons/briefcase.svg")} />
                        <div className="icon-text">
                          Chase for Business
                        </div>
                    </div>

                    <div className="icon-well">
                      <img className='dropdown-icon' src={require("../../Images/Icons/Header-icons/skyline.svg")} />
                        <div className="icon-text">
                          Commercial Banking
                        </div>
                    </div>

                    <div className="icon-well">
                      <img className='dropdown-icon' src={require("../../Images/Icons/Header-icons/more-button-of-circular-shape.svg")} />
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
          <img src={logo} className="chase-logo" alt="test" />
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

