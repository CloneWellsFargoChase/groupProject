import React, { Component } from 'react';
import bg from '../../Images/Icons/bg.jpg';
import './Jumbotron.css';
import UserLoginContainer from '../userLogin/LoginComponent';
import {Link} from 'react-router-dom';
import './Jumbotron.css';


class Jumbotron extends Component {
    
    render() {
        return (
            <div className="all-Jumbotron">
            <div className="bg">
                <img src={bg} alt=""/>
                </div>
            <div className="jumbo-container">
                <div className="login-box">
                    <UserLoginContainer />
                    <a>Forgot username/password? ></a> <br/>
                    <a>Not enrolled?<Link to="/signup"> Sign up now ></Link></a>
                </div>
            </div>
            </div>
        );
    }
}

export default Jumbotron;
