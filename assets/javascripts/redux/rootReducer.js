import { combineReducers } from 'redux';
import list_manager from './reducers/list_manager';
import add_task from './reducers/add_task_bar';
import add_task_bar from './reducers/add_task';

const rootReducer = combineReducers({
  list_manager, add_task, add_task_bar
});

export default rootReducer;
