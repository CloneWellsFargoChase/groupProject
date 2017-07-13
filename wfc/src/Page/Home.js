import React, { Component } from 'react';
import Jumbotron from '../Container/Jumbotron/JumbotronView';

class Home extends Component {
    render() {
        return (
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
        );
    }
}

export default Home;