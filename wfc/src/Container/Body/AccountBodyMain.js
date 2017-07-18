import React, { Component } from 'react';
import AccountBodyLeft from './AccountBodyLeft';
import AccountBodyRight from './AccountBodyRight';
import './AccountBodyMain.css';

export default class AccountBodyMain extends Component {
    render() {
        return (
            <div>
              <div className="AccountBodyMainDiv">
                <AccountBodyLeft className="AccountBodyLeft" />
                <AccountBodyRight className="AccountBodyRight" />
                </div>
            </div>
        );
    }
}
