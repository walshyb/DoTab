import ChromePromise from 'chrome-promise';

const chromep = new ChromePromise();

/* Action Type Constants: */

const UPDATE_CATEGORIES = 'UPDATE_CATEGORIES';
const UPDATE_CATEGORY = 'UPDATE_CATEGORY';

/* Action Creators: */

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

// update all categories in chrome storage
const updateCategories = () => {
  return function(dispatch) {
    getAllCategories(dispatch);
  }
};

// update individual category in chrome storage
const updateCategory = ( categoryName, tasks) => {
  return function(dispatch) {
    var data = { [categoryName]: tasks };
    chromep.storage.sync.set(data).then(getAllCategories(dispatch));
  }
};

export const task_manager_actions = {
  updateCategories, updateCategory
};
