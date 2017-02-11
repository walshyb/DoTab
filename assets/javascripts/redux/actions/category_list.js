const ADD_TASK = 'ADD_TASKS';

const addTask = (taskText, tasks) => {
  return { type: ADD_TASK, payload: { taskText }}
};

export const category_list_actions = {
  addTask
};
