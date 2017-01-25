/* AddCategory Reducer */

const SET_CATEGORY_NAME = 'SET_CATEGORY_NAME';
const ADD_CATEGORY = 'ADD_CATEGORY';

const initial_state = { inputValue: '' }

export default ( old_state = initial_state, action ) => {
  switch ( action.type ) {
    case SET_CATEGORY_NAME:
      return {
        ...old_state,
        inputValue: action.payload.event.target.value
      };
    case ADD_CATEGORY:
      var key = old_state.inputValue;
      var data = { [key] : [] };
      var props = action.payload.props;

      props.updateCategory(key, []);
      //props.setCategoryOption(key);

      return {
        ...old_state,
        inputValue: ''
      };
    default:
      return old_state;
  };
};
