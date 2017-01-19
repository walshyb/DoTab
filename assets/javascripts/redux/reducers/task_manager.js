/* Task Manager Reducer */

const UPDATE_CATEGORIES = 'UPDATE_CATEGORIES';
const UPDATE_CATEGORY = 'UPDATE_CATEGORY';

const initial_state = {
  categories: []
};

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
