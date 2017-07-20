import React, { Component } from 'react';
import AccountHeader from '../Container/Header/AccountHeader';
import AccountBodyMain from '../Container/Body/AccountBodyMain';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Account extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <AccountHeader />
                    <AccountBodyMain />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default Account;
