import React, { Component } from 'react';
import AccountHeader from '../Container/Header/AccountHeader';
import AccountBodyMain from '../Container/Body/AccountBodyMain';

class Account extends Component {
    render() {
        return (
            <div>
                <AccountHeader />
                <AccountBodyMain />
            </div>
        );
    }
}

export default Account;
