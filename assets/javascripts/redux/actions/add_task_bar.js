/* Action Type Constants: */

const SET_CURRENT_CATEGORY = 'SET_CURRENT_CATEGORY';
const SET_INPUT_VALUE = 'SET_INPUT_VALUE';
const ADD_CATEGORY = 'ADD_CATEGORY'; 

const handleSelectChange = (event) => {
  return { 
    type: SET_CURRENT_CATEGORY, 
    payload: { event } 
  };
};

const handleInputChange = (event) => {
  return {
    type: SET_INPUT_VALUE,
    payload: { inputValue: event.target.value }
  };
};

const handleSubmit = (event, props) => {
  return {
    type: ADD_CATEGORY,
    payload: { props, event }
  };
};

export const add_task_bar_actions = {
  handleSelectChange, handleInputChange, handleSubmit
};
