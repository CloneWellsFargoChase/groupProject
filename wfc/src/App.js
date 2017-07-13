//the App.js file will serve as a routing app

import React, { Component } from 'react';
import Header from './Container/Header/HeaderView';
import Slider from './Container/Slider/SliderView'


class App extends Component {
  render() {
    return (
      <div>
        GROUP PROJECT!!!

        <Slider />
      </div>
    );
  }
}

export default App;
