/* Actions */

const ADD_CATEGORY = 'ADD_CATEGORY';

const addCategory = (categoryName) => {
  return { type: ADD_CATEGORY, payload: categoryName };
};

export const add_category_actions = {
  addCategory
};

/* Reducer */

const initial_state = {
  categoryName: ''
};

export default ( old_state = initial_state, action) => {
  switch( action.type ) {
    case ADD_CATEGORY:
      return {
        categoryName: action.payload
      };
    default:
      return old_state;
  }
};
