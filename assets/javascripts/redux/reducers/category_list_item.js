/* Category List Item Reducer */

const REMOVE_TASK = 'REMOVE_TASK';
const SET_INIT_STATE = 'SET_INIT_STATE';

const initial_state = {
  tasks: []
};

export default (old_state = initial_state, action) => {
  switch ( action.type) {
    case REMOVE_TASK:
      var index = action.payload.tasks.indexOf(task);

      var newArray = action.payload.tasks;

      if (index > -1 ) {
        newArray.splice(index, 1);
        chrome.storage.sync.set({ [this.props.categoryName] : newArray  });
      }

      return newArray;
    case SET_INIT_STATE:
      return {
        tasks: action.payload.tasks
      };
    default: 
      return old_state;
  };
};
