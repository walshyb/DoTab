import { combineReducers } from 'redux';
import list_manager from './list_manager/list_manager';
import add_task from './add_task_bar/add_task_bar';
import add_task_bar from './add_task/add_task';
import category_list from './category_list/category_list';
import add_category from './add_category/add_category';

const rootReducer = combineReducers({
  list_manager, add_task, add_task_bar, category_list, add_category
});

export default rootReducer;
