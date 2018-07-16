import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import {createStore, applyMiddleware, /*compose*/} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers/index';

import {App} from './App';

const md = applyMiddleware(thunk);

const store = createStore(rootReducer, md);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);