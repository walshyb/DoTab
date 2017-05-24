/* Actions */

const ADD_TASKS = 'ADD_TASKS';

const addTask = (taskText) => {
  return { type: ADD_TASKS, payload: taskText };
};

export const add_task_actions = {
  addTask
};

/* Reducer */

const initial_state = {
};

export default ( old_state = initial_state, action ) => {
  switch ( action.type ) {
    case ADD_TASKS:
      console.log(old_state);
      return old_state;
    default: 
      return old_state;
  }
};
