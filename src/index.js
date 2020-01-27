import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';


import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';


const feelingType = (state = '', action) => {
    if (action.type === 'ADD_FEELING') {
        return action.payload
    }
    console.log('This is your delivery type', state)
    return state;
}

const understandingType = (state = '', action) => {
    if (action.type === 'ADD_UNDERSTANDING') {
        return action.payload
    }
    console.log('This is your delivery type', state)
    return state;
}

const supportType = (state = '', action) => {
    if (action.type === 'ADD_SUPPORT') {
        return action.payload
    }
    console.log('This is your delivery type', state)
    return state;
}

const commentsType = (state = '', action) => {
    if (action.type === 'ADD_COMMENTS') {
        return action.payload
    }
    console.log('This is your delivery type', state)
    return state;
}


const storeInstance = createStore(
    combineReducers({
        feelingType,
        understandingType,
        supportType,
        commentsType,
    }),
    applyMiddleware(logger),
)


// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
