import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger'


let initialState = {
  feeling: '',
  understanding: '',
  support: '',
  comments: ''
}

let feedback = (state = initialState, action) => {
  // action.payload  => for example: '4'
  // console.log('feedback reducer triggered')
  //check action for proper type
  switch (action.type) {
    case 'SET_FEELING':
      return { ...state, feeling: action.payload }
    case 'SET_UNDERSTANDING':
      return { ...state, understanding: action.payload }
    case 'SET_SUPPORT':
      return { ...state, support: action.payload }
    case 'SET_COMMENTS':
      return { ...state, comments: action.payload }
    case 'RESET':
      return initialState
    default: 
      return state
  }
}

let store = createStore(
  //reducers
  combineReducers({
    feedback
  }),
  //logger/middlewares
  applyMiddleware(
    logger
  )
)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
