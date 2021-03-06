import React, { Component } from 'react';
import Header from '../Container/Header/HeaderView';
import Jumbotron from '../Container/Jumbotron/JumbotronView';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import SimpleSlider from '../Container/Slider/Slider';
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
                    <Header />
                </div>
                   { /*header goes here*/}  

                <div>
                    <Jumbotron />
                </div>
                <div>
                    <SimpleSlider />
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

export default Home