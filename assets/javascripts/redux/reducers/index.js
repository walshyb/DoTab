import { combineReducers } from 'redux';
import task_manager from '../reducers/task_manager';

const rootReducer = combineReducers({
  task_manager
});

export default rootReducer;
