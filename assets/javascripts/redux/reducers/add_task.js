const ADD_TASKS = 'ADD_TASKS';

const initial_state = {
  arch: ''
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
