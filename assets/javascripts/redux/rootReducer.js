import { combineReducers } from 'redux';
import task_manager from './reducers/task_manager';
import add_task_bar from './reducers/add_task_bar';

const rootReducer = combineReducers({
  task_manager, add_task_bar
});

export default rootReducer;
