/* Task Manager Reducer */

const UPDATE_CATEGORIES = 'UPDATE_CATEGORIES';
const UPDATE_CATEGORY = 'UPDATE_CATEGORY';

const initial_state = {
  categories: []
};

/* Not much logic here because UPDATE_CATEGORIES and UPDATE_CATEGORY action creators are asynchronous, so the logic is there and a promise with the result gets sent here */
export default ( old_state = initial_state, action ) => {
  switch ( action.type ) {
    case UPDATE_CATEGORIES:
      return {
        categories: action.payload.categories
      };
    case UPDATE_CATEGORY:
      return {
        categories: action.payload.categories
      };
    default:
      return old_state;
  };
};
