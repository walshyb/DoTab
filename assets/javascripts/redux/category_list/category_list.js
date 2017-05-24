/* Actions */
const ADD_TASK = 'ADD_TASKS';

const addTask = (taskText, tasks) => {
  return { type: ADD_TASK, payload: { taskText }}
};

export const category_list_actions = {
  addTask
};

/* Reducer */

const initial_state = {
};

export default ( old_state = initial_state, action ) => {
  switch ( action.type ) {
    case ADD_TASK:
      console.log(old_state);
      return old_state;
      
    default:
      return old_state;
  }
}
