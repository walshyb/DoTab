import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CategoryListItem from './CategoryListItem';

export default class CategoryList extends Component {
  render() {
    return (
      <ul>
        {this.props.categories}
      </ul>
    );
  };
}

