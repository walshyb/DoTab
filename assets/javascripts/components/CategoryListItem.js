import React, { Component } from 'react';

export default class CategoryListItem extends Component {
  render() {
    const tasks = this.props.tasks.map(function(task, i) {
      return <li key={`${this.props.categoryName}${i}`}>  {task} </li>;
    }.bind(this));
    return (
      <article className='category' id={this.props.categoryName}>
        <h2> {this.props.categoryName} </h2>
        <ul> { tasks } </ul>
      </article>
    );
  };  
}
