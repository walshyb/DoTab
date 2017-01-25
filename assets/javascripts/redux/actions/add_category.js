/* Action Type Constants: */

const SET_CATEGORY_NAME = 'SET_CATEGORY_NAME';
const ADD_CATEGORY = 'ADD_CATEGORY';

const handleChange = (event) => {
  return {
    type: SET_CATEGORY_NAME,
    payload: {
      event
    }
  };
};

const handleAddCategoryClick = (event, props) => {
  return {
    type: ADD_CATEGORY,
    payload: {
      event, props
    }
  };
};

export const add_category_actions  = {
  handleChange, handleAddCategoryClick
};
