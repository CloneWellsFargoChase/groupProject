import React, { Component } from 'react';
import './Footer.css'
// import '../../../node_modules/font-awesome/css/font-awesome.min.css';

class Footer extends Component {
    render() {
        return (
            <div className='followUs'>
                <div className='followContainer'>
                    <p>Follow us:</p>
                    <a href='https://www.facebook.com/chase'><i className="fa fa-facebook-square fa-2x" aria-hidden="true"></i></a>
                    <a href='https://www.instagram.com/chase/t'><i className="fa fa-instagram fa-2x" aria-hidden="true"></i></a>
                    <a href='https://twitter.com/chase'><i className="fa fa-twitter fa-2x" aria-hidden="true"></i></a>
                    <a href='https://www.youtube.com/chase'><i className="fa fa-youtube-play fa-2x" aria-hidden="true"></i></a>
                    <a href='https://www.linkedin.com/company-beta/163001/'><i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></a>
                    <a href='https://www.pinterest.com/explore/chase-bank/'><i className="fa fa-pinterest fa-2x" aria-hidden="true"></i></a>
                </div>
            </div>
        );
    }
}

export default Footer;
