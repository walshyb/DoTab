/* Action Type Constants: */

const SET_TASK_TEXT = 'SET_TASK_TEXT';
const ADD_TASK = 'ADD_TASK'; 

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

export const add_task_bar_actions = {
  handleInputChange, 
  handleSubmit
};


/* AddTaskBar Reducer */

const initial_state = {
  displayAddCategoryField: false
};

export default ( old_state = initial_state, action ) => {
  switch ( action.type ) {
    case ADD_TASK:
      action.payload.event.preventDefault();
      var categories = action.payload.props.categories;
      var props = action.payload.props;

      categories.map((category) => {
        var name = Object.keys(category)[0];
        if (name === old_state.currentCategory) {

          var tasks = category[name];
          tasks.push(action.play.load.taskText);
          props.updateCategory(name, tasks);

          return {
            ...old_state,
            taskFieldValue: ''
          };
        } else {
          return old_state;
        }
      });
    default:
      return old_state;
  };
};
