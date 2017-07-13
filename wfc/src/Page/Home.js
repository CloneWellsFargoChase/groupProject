import React, { Component } from 'react';
import Jumbotron from '../Container/Jumbotron/JumbotronView';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

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
                    { /*slider goes here*/}
                </div>
            </div>
        </MuiThemeProvider>
        );
    }
}

export default Home;