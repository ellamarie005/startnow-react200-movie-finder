import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import reducers from './reducer';
import App from './app';

// so instead of having to create a file called rootStore(from weather app), the items in it is called in here
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//add "reducers" next to composeEnhancers
const store = createStore(reducers, composeEnhancers(
  applyMiddleware(
    promiseMiddleware()
  )
));


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
