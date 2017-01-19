/* Action Type Constants: */

const UPDATE_CATEGORIES = 'UPDATE_CATEGORIES';
const UPDATE_CATEGORY = 'UPDATE_CATEGORY';

/* Action Creators: */

// update all categories in chrome storage
const getCategories = (categories) => {
  return { type: UPDATE_CATEGORIES, categories};
};

const updateCategories = () => {
  return function(dispatch) {

    chrome.storage.sync.get(null, function(categories) { 

      var categoryArray = [];     // categories will go here

      for(var categoryKey in categories) {  

        var data = { [categoryKey] : categories[categoryKey] };  
        categoryArray.push(data);     // push to array 
      }

      // TODO: implement thunk
      return {   
        categories: categoryArray             
      };

    }).then(
      response => dispatch({
        type: UPDATE_CATEGORIES,
        payload: response.categories,
      }),
      error => dispatch({
        type: UPDATE_CATEGORIES,
        error: true,
        payload: error
      })
    );

  }
};

// update individual category in chrome storage
const updateCategory = ( categoryName, tasks) => {
  return { type: UPDATE_CATEGORY, payload: { categoryName, tasks } };
};

export const task_manager_actions = {
  updateCategories, updateCategory
};
