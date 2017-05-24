import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import ListManager from './components/ListManager';
import reducers from './redux/rootReducer';
import { util } from './utils/';

//const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
//const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// TODO: add check to see if env is production or development and implement redux dev 
// tools code appropriately

chrome.storage.sync.get('state', function(s) {
  const { state } = s;
  var initialState = state;

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) :
    compose;
  const enhancer = composeEnhancers(
    applyMiddleware(thunk)
  );

  const store = createStore(reducers, initialState, enhancer);
  store.subscribe(() => { 
    util.saveState(store.getState()) 
  });

  ReactDOM.render(
    <Provider store={ store  }>
      <ListManager />
    </Provider>
    , document.getElementById('app'));

});
