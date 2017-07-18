//the App.js file will serve as a routing app

import React, { Component } from 'react';
import Header from './Container/Header/HeaderView';
import Slider from './Container/Slider/SliderView'
import Jumbotron from './Container/Jumbotron/JumbotronView'


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {/*<Jumbotron />*/}
        {/*<Slider />*/}
      </div>
    );
  }
}

export default App;
