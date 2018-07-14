import React from 'react';
import ReactDOM from 'react-dom';

import {createStore, combineReducers} from 'redux';
import rootReducer from './reducers/index';

import App from './App';

const store = createStore(rootReducer);

export default store;

ReactDOM.render(<App />, document.getElementById('root'));

