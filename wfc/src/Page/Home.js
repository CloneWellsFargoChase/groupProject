import React, { Component } from 'react';
import Jumbotron from '../Container/Jumbotron/JumbotronView';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Slider from '../Container/Slider/SliderView'
import Filler from '../Container/HomeFiller/HomeFillerView';
import News from '../Container/News/News';
import Footer from '../Container/Footer/FooterView';

injectTapEventPlugin();

class Home extends Component {
    render() {
        return (
        <MuiThemeProvider>
            <div>
                <div>
                   { /*header goes here*/}  
                </div>
                <div>
                    <Jumbotron />
                </div>
                <div className='spacing'>
                    <Slider />
                </div>
                <div>
                    <Filler />
                </div>
                <div>
                    <News />
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        </MuiThemeProvider>
        );
    }
}

export default Home;