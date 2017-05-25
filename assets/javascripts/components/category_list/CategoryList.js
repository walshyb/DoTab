import React, { Component } from 'react';
import CategoryListItem from './CategoryListItem';
import { util } from '../../utils';

export default class CategoryList extends Component {
  render() {
    const categoryItems = Object.keys(this.props.categories).map(function(categoryName){
      var tasks = this.props.categories[categoryName];
      var id = util.generateId();
      return (
        <CategoryListItem 
          key={id}
          id={id}
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
