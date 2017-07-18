import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import SignUpComponent from '../Container/SignUp/SignUpView';



class SignUp extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <SignUpComponent />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default SignUp;