import React, { Component } from 'react';
import LoginField from './LoginComponent';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Button} from 'react-bootstrap';
import './Jumbotron.css';
injectTapEventPlugin();


class Jumbotron extends Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
        };
    }


    render() {
        return (
            <div className="jumbo-container">
                <div className="login-box">
                    <LoginField/>
                    <Button bsStyle="primary" className="login-button">Login</Button>
                </div>
            </div>
        );
    }
}

export default Jumbotron;