import React, { Component } from 'react';
import Transaction from '../Container/Transaction/Transaction';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Transfer extends Component {
    render() {
        return (
           <MuiThemeProvider>
                <div>
                    <Transaction/>
                </div>
             </MuiThemeProvider>
        );
    }
}

export default Transfer;