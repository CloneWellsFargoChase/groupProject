import React, { Component } from 'react';
import './AccountHeader.scss';
import chaseL from '../../Images/chaseL.png';

export default class AccountHeader extends Component {
    render() {
        return (
            <div className="AccountHeaderParent">
              <div className="AccountHeaderUpper">
                <div className="AccountHeaderUpperLeft">
                  <div>Ha</div>
                  <div>Pl</div>
                  <div>Fl</div>
                </div>
                <div className="AccountHeaderUpperCenter">
                  <img src={chaseL} />
                </div>
                <div className="AccountHeaderUpperRight">
                  <div>Srch</div>
                  <div>Prsn</div>
                  <div>SignO</div>
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
