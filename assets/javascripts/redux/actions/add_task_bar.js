/* Action Type Constants: */

const SET_CURRENT_CATEGORY = 'SET_CURRENT_CATEGORY';
const SET_TASK_TEXT = 'SET_TASK_TEXT';
const ADD_TASK = 'ADD_TASK'; 

const SET_CATEGORY_NAME = 'SET_CATEGORY_NAME';
const ADD_CATEGORY = 'ADD_CATEGORY';

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

const handleSubmit = (event, props) => {
  return {
    type: ADD_TASK,
    payload: { props, event }
  };
};

export const add_task_bar_actions = {
  handleSelectChange, 
  handleInputChange, 
  handleSubmit
};
