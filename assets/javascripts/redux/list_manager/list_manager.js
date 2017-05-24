import ChromePromise from 'chrome-promise';

const chromep = new ChromePromise();

/* Action Type Constants: */

const UPDATE_CATEGORIES = 'UPDATE_CATEGORIES';
const UPDATE_CATEGORY = 'UPDATE_CATEGORY';
const ADD_CATEGORY = 'ADD_CATEGORY';

/* Util Functions */

// update 'categories' state with new categories and their tasks
// reusable function to get all categories and return them 
const getAllCategories = (dispatch) => {
  // start chrome promise to get all categories and their tasks
  chromep.storage.sync.get(null).then(function(categories) { 

    var categoryArray = [];

    for(var categoryName in categories) {  // for every key
      var data = { [categoryName] : categories[categoryName] }; // assemble object
      categoryArray.push(data); // push to new array
    }

    return {   
      categories: categoryArray // return array
    };

  }).then(
    response => dispatch({
      type: UPDATE_CATEGORIES,
      payload: { categories: response.categories },
    }),
    error => dispatch({   // shouldn't ever get here
      type: UPDATE_CATEGORIES,
      error: true,
      payload: error
    })
  );
};

/* Action Creators: */

// update all categories in chrome storage
const updateCategories = () => {
  return function(dispatch) {
    getAllCategories(dispatch); // call to update all categories
  }
};

// update individual category in chrome storage
const updateCategory = ( categoryName, tasks) => {
  return function(dispatch) {
    var data = { [categoryName]: tasks };

    // update category with new tasks, then update 'categories' state
    chromep.storage.sync.set(data).then(getAllCategories(dispatch));
  }
};

const addCategory = ( categoryName ) => {
  return { type: ADD_CATEGORY, payload: categoryName};
};

export const list_manager_actions = {
  updateCategories, updateCategory, addCategory
};

/* List Manager Reducer */

const initial_state = {
  categories: {}
};

/* Not much logic here because UPDATE_CATEGORIES and UPDATE_CATEGORY action creators are asynchronous, so the logic is there and a promise with the result gets sent here */
export default ( old_state = initial_state, action ) => {
  switch ( action.type ) {
    case UPDATE_CATEGORIES:
      return {
        categories: action.payload.categories
      };
    case UPDATE_CATEGORY:
      return {
        categories: action.payload.categories
      };
    case ADD_CATEGORY: 
      var categoryName = action.payload;
      // return new state with new category appended on end of categories object
      // TODO: if user inputs an existing categoryName, prompt to overwrite
      return {
        categories: {
          ...old_state.categories,
          [categoryName]: {}
        }
        
      };
    default:
      return old_state;
  };
};
