import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './containers/App';
//import todoApp from './reducers';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
