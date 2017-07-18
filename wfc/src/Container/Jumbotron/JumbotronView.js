import React, { Component } from 'react';
import bg from '../../Images/Icons/jumbotron-bg.jpg';
import './Jumbotron.css';

class Jumbotron extends Component {
  render() {
    return (
      <div className="bg">
        <img src={bg} alt=""/>
      </div>
    );
  }
}

export default Jumbotron;
