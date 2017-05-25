import { util } from '../../utils';
/* Action Type Constants: */

const ADD_CATEGORY = 'ADD_CATEGORY';
const ADD_TASK = 'ADD_TASK';

/* Action Creators: */

const addCategory = ( categoryName ) => {
  return { type: ADD_CATEGORY, payload: { categoryName } };
};

const addTask = ( categoryName, taskText ) => {
  return { type: ADD_TASK, payload: { categoryName, taskText } };
};

export const list_manager_actions = {
  addCategory, addTask
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
    default:
      return old_state;
  };
};
