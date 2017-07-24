import React, { Component } from 'react';
import AccountHeader from '../Container/Header/AccountHeader';
import AccountBodyMain from '../Container/Body/AccountBodyMain';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Footer from '../Container/Footer/FooterView'

class Account extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <AccountHeader />
                    <AccountBodyMain />
                    <Footer />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default Account;
