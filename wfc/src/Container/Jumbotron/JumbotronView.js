import React, { Component } from 'react';
import UserLoginContainer from './LoginComponent';
import {Button} from 'react-bootstrap';
import './Jumbotron.css';



class Jumbotron extends Component {
    
    render() {
        return (
            <div className="jumbo-container">
                <div className="login-box">
                    <UserLoginContainer />
                </div>
            </div>
        );
    }
}

export default Jumbotron;