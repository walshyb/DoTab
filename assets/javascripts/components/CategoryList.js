import React, { Component } from 'react';
import CategoryListItem from './CategoryListItem';

export default class CategoryList extends Component {
   render() {
    const categoryItems = this.props.categories.map(function(category){
      var categoryName = Object.keys(category)[0];
      var tasks = category[categoryName];
  
      console.log(categoryName);
      console.log(tasks);

      return (
        <CategoryListItem 
          key={categoryName} 
          tasks={tasks}  
          categoryName={categoryName} 
        />
      );
    });

    return (
      <div id='category-list'> 
        {categoryItems}
      </div>
    );
  };
}

