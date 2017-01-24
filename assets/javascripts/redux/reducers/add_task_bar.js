/* AddTaskBar Reducer */

const SET_CURRENT_CATEGORY = 'SET_CURRENT_CATEGORY';
const SET_INPUT_VALUE = 'SET_INPUT_VALUE';
const ADD_CATEGORY = 'ADD_CATEGORY'; 

const initial_state = {
  inputValue: '',
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
          displayAddCategoryField: true
        };
      } else {
        return {
          ...old_state,
          currentCategory: value,
          displayAddCategoryField: false
        };
      }

    case SET_INPUT_VALUE:
      return {
        ...old_state,
        inputValue: action.payload.inputValue
      };
    case ADD_CATEGORY:
      action.payload.event.preventDefault();
      var categories = action.payload.props.categories;
      var props = action.payload.props;

      categories.map((category) => {
        var name = Object.keys(category)[0];
        if (name === old_state.currentCategory) {

          var tasks = category[name];
          tasks.push(props.inputValue);
          props.updateCategory(name, tasks);

          return {
            ...old_state,
            inputValue: ''
          };
        } else {
          return old_state;
        }
      });
    default:
      return old_state;
  };
};
