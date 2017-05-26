import omit from 'lodash.omit';
import { util } from '../../utils';
/* Action Type Constants: */

const ADD_CATEGORY = 'ADD_CATEGORY';
const ADD_TASK = 'ADD_TASK';
const REMOVE_TASK = 'REMOVE_TASK';
const REMOVE_CATEGORY = 'REMOVE_CATEGORY';
const UPDATE_CATEGORY_NAME = 'UPDATE_CATEGORY_NAME';

/* Action Creators: */

const addCategory = ( categoryName ) => {
  return { type: ADD_CATEGORY, payload: { categoryName }};
};

const addTask = ( categoryName, taskText ) => {
  return { type: ADD_TASK, payload: { categoryName, taskText }};
};

const removeTask = ( categoryName, taskId ) => {
  return { type: REMOVE_TASK, payload: { categoryName, taskId }};
};

const removeCategory = ( categoryName ) => {
  return { type: REMOVE_CATEGORY, payload: { categoryName }};
};

const updateCategoryName = ( oldCategoryName, newCategoryName ) => {
  return { type: UPDATE_CATEGORY_NAME, payload: { oldCategoryName, newCategoryName }};
};

export const list_manager_actions = {
  addCategory, addTask, removeTask, removeCategory, updateCategoryName
};

/* List Manager Reducer */

const initial_state = {
  categories: {}
};

/* Not much logic here because UPDATE_CATEGORIES and UPDATE_CATEGORY action creators are asynchronous, so the logic is there and a promise with the result gets sent here */
export default ( old_state = initial_state, action ) => {
  switch ( action.type ) {
     case ADD_CATEGORY: 
      var categoryName = action.payload.categoryName;
      // return new state with new category appended on end of categories object
      // TODO: if user inputs an existing categoryName, prompt to overwrite
      return {
        categories: {
          ...old_state.categories,
          [categoryName]: {}
        }

      };
    case ADD_TASK: 
      var taskId = util.generateId();
      var taskText = action.payload.taskText;
      var categoryName = action.payload.categoryName;
      return {
        categories: {
          ...old_state.categories,
          [categoryName]: {
            ...old_state.categories[categoryName],
            [taskId]: taskText
          }
        }
      };
    case REMOVE_TASK: 
      var categoryName = action.payload.categoryName;
      var taskId = action.payload.taskId;
      return {
        categories: {
          ...old_state.categories,
          [categoryName]: omit(old_state.categories[categoryName], taskId)
        }
      }
    case REMOVE_CATEGORY:
      return {
        categories: omit(old_state.categories, action.payload.categoryName)
      };
    case UPDATE_CATEGORY_NAME:
      var oldCategoryName = action.payload.oldCategoryName;
      var newCategoryName = action.payload.newCategoryName;
      var categoryTasks = old_state.categories[oldCategoryName];
      var categoriesWithoutOld = omit(old_state.categories, oldCategoryName);
      return {
        categories: {
          ...categoriesWithoutOld,
          [newCategoryName]: categoryTasks
        }
      };
    default:
      return old_state;
  };
};
