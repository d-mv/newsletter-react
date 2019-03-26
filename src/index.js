import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';

// reducers
import postsReducer from './reducers/posts_reducer';
import sourcesReducer from './reducers/sources_reducer';
import addSourceReducer from './reducers/add_source_reducer';
import updatePostReducer from './reducers/update_post_reducer';
import selectPostReducer from './reducers/select_post_reducer';
// import selectModuleReducer from './reducers/select_module_reducer';
import sourceCreateModuleReducer from './reducers/source_create_module_reducer.js';

import WebFont from 'webfontloader';

// load components
import App from './components/App/App';
import './index.scss';
import * as serviceWorker from './serviceWorker';

// loading fonts
WebFont.load({
  google: {
    families: ['Aleo:300,300i,400,400i,700', 'IBM Plex Mono:300,400']
  }
});

const initialState = {
  posts: [],
  sources: [],
  addSource: '',
  updatePost: '',
  selectPost: '',
  // selectModule: 'Home',
  sourceCreateModule: true
};

// Define reducers
const reducers = combineReducers({
  posts: postsReducer,
  sources: sourcesReducer,
  addSource: addSourceReducer,
  updatePost: updatePostReducer,
  selectPost: selectPostReducer,
  // selectModule: selectModuleReducer,
  sourceCreateModule: sourceCreateModuleReducer
});
// Add logger
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(reduxPromise, logger));

ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
