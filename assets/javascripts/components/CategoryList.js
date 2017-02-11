import React, { Component } from 'react';
import CategoryListItem from './CategoryListItem';
import { connect } from 'react-redux';
import { category_list_actions } from '../redux/actions/category_list'

export class CategoryList extends Component {
   render() {
     this.props.addTask('','');
    const categoryItems = this.props.categories.map(function(category){
      var categoryName = Object.keys(category)[0];
      var tasks = category[categoryName];
  
      return (
        <CategoryListItem 
          key={`${categoryName}${Date.now()}`} 
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

export default connect(
  // map state to props
  function( state ) { return {}; },
  // map dispatch actions to props
  category_list_actions
)( CategoryList );
