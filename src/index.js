import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from "./reducers/index.js";
import './index.css';
import Table from '../src/container/Table';
import * as serviceWorker from './serviceWorker';

let store = createStore(reducers, applyMiddleware(thunk))

ReactDOM.render(<Provider store={store}><Table /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
