import React, { Component } from 'react';
import AccountBodyLeft from './AccountBodyLeft';
import AccountBodyRight from './AccountBodyRight';
import './AccountBodyMain.css';

export default class AccountBodyMain extends Component {
    render() {
        return (
            <div>
              <div className="AccountBodyMainDiv">
                <div className="AccountBodyMainLastDate">
                  some fancy date
                </div>
                <div>
                  <AccountBodyLeft />
                  <AccountBodyRight />
                </div>
              </div>
            </div>
        );
    }
}
