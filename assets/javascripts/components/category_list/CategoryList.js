import React, { Component } from 'react';
import CategoryListItem from './CategoryListItem';
import { util } from '../../utils';

export default class CategoryList extends Component {
  render() {
    const categoryItems = Object.keys(this.props.categories).map(function(categoryName){
      var tasks = this.props.categories[categoryName].active;
      var id = util.generateId();
      return (
        <CategoryListItem 
          key={id}
          id={id}
          tasks={tasks}
          categoryName={categoryName} 
          archiveTask={this.props.archiveTask}
          removeCategory={this.props.removeCategory}
          renameCategory={this.props.renameCategory}
        />
      );
    }.bind(this));

    return (
      <div className='category-list'> 
        {categoryItems}
      </div>
    );
  };
}
