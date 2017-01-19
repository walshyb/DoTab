/* Task Manager Reducer */

const UPDATE_CATEGORIES = 'UPDATE_CATEGORIES';
const UPDATE_CATEGORY = 'UPDATE_CATEGORY';

const initial_state = {
  categories: []
};

export default ( old_state = initial_state, action ) => {
  switch ( action.type ) {

    case UPDATE_CATEGORIES:
      return {
        categories: action.payload.categories
      };

    case UPDATE_CATEGORY:
      var data = {};
      data[action.payload.categoryName] = action.payload.tasks;
      chrome.storage.sync.set(data);

      chrome.storage.sync.get(null, function(categories) {
        var categoryArray = [];

        for(var categoryKey in categories) {
          var data = {};
          data[categoryKey] = categories[categoryKey];
          categoryArray.push(data);
        }

        return Object.assign({}, old_state, {
          categories: categoryArray
        });
      });

    default:
      return old_state;
  };
};
