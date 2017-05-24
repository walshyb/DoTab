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


/* AddTaskBar Reducer */

const initial_state = {
  currentCategory: '',
  displayAddCategoryField: false
};

export default ( old_state = initial_state, action ) => {
  switch ( action.type ) {
    case SET_CURRENT_CATEGORY:
      var value = action.payload.event.target.value;

      if(value !== '' && value !== 'add-category') {
        return {
          ...old_state,
          currentCategory: value,
          displayAddCategoryField: false
        };
      } else if (value === 'add-category') {
        return {
          ...old_state,
          currentCategory: value,
          displayAddCategoryField: true,
          categoryFieldValue: ''
        };
      } else {
        return {
          ...old_state,
          currentCategory: value,
          displayAddCategoryField: false
        };
      }
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
    case UPDATE_CURRENT_CATEGORY:
      return {
        ...old_state,
        currentCategory: action.payload.categoryName,
        displayAddCategoryField: false
      };

    default:
      return old_state;
  };
};
