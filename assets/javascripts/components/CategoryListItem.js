import React, { Component } from 'react';
import Task from './Task';

export default class CategoryListItem extends Component {
  render() {
    const tasks = this.props.tasks.map(function(task, i) {
      return <Task key={`${this.props.categoryName}${i}`} text={task}/>;
    }.bind(this));
    return (
      <article className='category' id={this.props.categoryName}>
        <h2> {this.props.categoryName} </h2>
        <ul> { tasks } </ul>
      </article>
    );
  };  
}
