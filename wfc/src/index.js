import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router} from 'react-router-dom';
import {AppContainer} from './AppContainer';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './Store/Store';


//place all css below this line
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';


const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <AppContainer />
        </Router>
    </Provider>, 
    document.getElementById('root'));

registerServiceWorker();
