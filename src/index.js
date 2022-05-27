import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// keep tracks of store which is gloabl  state. we can acess store form anywhere
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers   from './reducer';
import App from './App';

const store = createStore( reducers, compose(applyMiddleware(thunk)))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}><App /></Provider>,
);