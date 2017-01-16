import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CategoryListItem from './CategoryListItem';

export default class CategoryList extends Component {


  render() {
    const categoryItems = this.props.categories.map(function(categoryName){
      return <CategoryListItem key={categoryName} category={categoryName} />;
    });

    return (
      <div id='category-list'> 
        {categoryItems}
      </div>
    );
  };
}

