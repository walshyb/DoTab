/* Action Type Constants: */

const UPDATE_CATEGORIES = 'UPDATE_CATEGORIES';
const UPDATE_CATEGORY = 'UPDATE_CATEGORY';

/* Action Creators: */

// update all categories in chrome storage
const updateCategories = () => {
  return { type: UPDATE_CATEGORIES };
};

// update individual category in chrome storage
const updateCategory = ( categoryName, tasks) => {
  return { type: UPDATE_CATEGORY };
};
