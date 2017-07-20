import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import CreateAccount from '../Container/SignUp/SignUpView';



class SignUp extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <CreateAccount />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default SignUp;