import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//place all css below this line
import './index.css';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
