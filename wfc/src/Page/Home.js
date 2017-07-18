import React, { Component } from 'react';
import Jumbotron from '../Container/Jumbotron/JumbotronView';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Slider from '../Container/Slider/SliderView';

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
                <div>
                   <Slider/>
                </div>
            </div>
        </MuiThemeProvider>
        );
    }
}

export default Home;