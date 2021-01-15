import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import cakeReducer from './reducers/cakeReducer';
import iceCreamReducer from './reducers/iceCreamReducer';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension'
import userReducer from './reducers/userReducer';
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: userReducer
});

let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'))