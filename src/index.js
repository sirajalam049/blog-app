import React from 'react';
import ReactDOM from 'react-dom';

import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

import rootReducer from './reducers/index';

import App from './App';

const store = createStore(rootReducer);

export default store;

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);