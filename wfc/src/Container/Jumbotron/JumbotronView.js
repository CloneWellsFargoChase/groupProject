import React, { Component } from 'react';
import bg from '../../Images/Icons/jumbotron-bg.jpg';
import './Jumbotron.css';
import UserLoginContainer from './LoginComponent';
import {Link} from 'react-router-dom';
import './Jumbotron.css';


class Jumbotron extends Component {
    
    render() {
        return (
 
            <div className="bg">
                <img src={bg} alt=""/>
            </div>
            <div className="jumbo-container">
                <div className="login-box">
                    <UserLoginContainer />
                    <p>Forgot username/password?</p>
                    <p>Not entrolled?<Link to="/signup">Sign up now</Link></p>
                </div>
            </div>
        );
    }
}

export default Jumbotron;
