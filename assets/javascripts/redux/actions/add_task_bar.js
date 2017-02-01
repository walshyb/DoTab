/* Action Type Constants: */

const SET_CURRENT_CATEGORY = 'SET_CURRENT_CATEGORY';
const UPDATE_CURRENT_CATEGORY = 'UPDATE_CURRENT_CATEGORY';
const SET_TASK_TEXT = 'SET_TASK_TEXT';
const ADD_TASK = 'ADD_TASK'; 

const handleSelectChange = (event) => {
  return { 
    type: SET_CURRENT_CATEGORY, 
    payload: { event } 
  };
};

const handleInputChange = (event) => {
  return {
    type: SET_TASK_TEXT,
    payload: { taskFieldValue: event.target.value }
  };
};

const handleSubmit = (taskText, props) => {
  return {
    type: ADD_TASK,
    payload: { taskText, props }
  };
};

const updateCategoryOption = (categoryName) => {
  return {
    type: UPDATE_CURRENT_CATEGORY,
    payload: { categoryName }
  };
};

export const add_task_bar_actions = {
  handleSelectChange, 
  handleInputChange, 
  handleSubmit,
  updateCategoryOption
};
