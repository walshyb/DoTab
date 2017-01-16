import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class CategoryListItem extends Component {
  render() {
    const category = this.props.category;

    return (
      <article className='category' id={category}>
        <h2> {category} </h2>
      </article>
    );
  };  
}
