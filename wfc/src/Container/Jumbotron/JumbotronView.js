import React, { Component } from 'react';
import LoginField from './LoginComponent';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './Jumbotron.css';
injectTapEventPlugin();


class Jumbotron extends Component {
    render() {
        return (
            <div className="jumbo-container">
                <div className="login-box">
                    <LoginField/>
                </div>
            </div>
        );
    }
}

export default Jumbotron;