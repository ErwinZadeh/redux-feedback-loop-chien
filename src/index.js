import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';


import { createStore, combineReducers, applyMiddleware } from 'react';
// import { Provider } from 'react-redux';
import logger from 'redux-logger';




// let store = createStore(
//   combineReducers({

//   }),
//   applyMiddleware(logger)
// );


ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
