import React, { Component } from 'react';
import CategoryListItem from './CategoryListItem';

export default class CategoryList extends Component {
  render() {
    const categoryItems = Object.keys(this.props.categories).map(function(categoryName){
      var tasks = this.props.categories[categoryName];

      return (
        <CategoryListItem 
          key={`${categoryName}${Date.now()}`} 
          tasks={tasks}  
          categoryName={categoryName} 
        />
      );
    }.bind(this));

    return (
      <div id='category-list'> 
        {categoryItems}
      </div>
    );
  };
}
