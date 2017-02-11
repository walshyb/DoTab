const ADD_TASKS = 'ADD_TASKS';

const addTask = (taskText) => {
  return { type: ADD_TASKS, payload: taskText };
};

export const add_task_actions = {
  addTask
};
