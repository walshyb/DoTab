import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import TaskManager from './components/TaskManager';
import reducers from './redux/reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

//const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={ createStoreWithMiddleware(reducers) }>
    <TaskManager />
  </Provider>
  , document.getElementById('app'));

