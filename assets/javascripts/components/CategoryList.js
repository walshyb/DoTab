import React, { Component } from 'react';
import CategoryListItem from './CategoryListItem';

export default class CategoryList extends Component {
   render() {
    const categoryItems = this.props.categories.map(function(category){
      var categoryName = Object.keys(category)[0];
      var tasks = category[categoryName];
  
      return (
        <CategoryListItem 
          key={categoryName} 
          tasks={tasks}  
          updateCategory={this.props.updateCategory}
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

