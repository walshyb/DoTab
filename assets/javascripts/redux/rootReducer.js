import { combineReducers } from 'redux';
import list_manager from './list_manager/list_manager';
import category_list from './category_list/category_list';

const rootReducer = combineReducers({
  list_manager, category_list 
});

export default rootReducer;
