import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import TaskManager from './components/TaskManager';
import reducers from './redux/rootReducer';

//const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
//const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// TODO: add check to see if env is production or development and implement redux dev 
// tools code appropriately
var initialState = { task_manager: reducers.task_manager, add_task_bar:  {
  inputValue: '',
  currentCategory: '',
  displayAddCategoryField: false
} };

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  }) :
  compose;
const enhancer = composeEnhancers(
  applyMiddleware(thunk)
);

const store = createStore(reducers, initialState, enhancer);

ReactDOM.render(
  <Provider store={ store  }>
    <TaskManager />
  </Provider>
  , document.getElementById('app'));

