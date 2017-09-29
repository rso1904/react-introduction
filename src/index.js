import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { App, Login } from './containers';
//import todoApp from './reducers';

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <div>
                <Route exact path="/" component={App}/>
                <Route path="/login" component={Login}/>
            </div>
        </Provider>
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
