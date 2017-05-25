import React, { Component } from 'react';
import Task from './Task';

export default class CategoryListItem extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    const tasks = Object.keys(this.props.tasks).map(function(task) {
      return <Task 
        key={task} 
        text={this.props.tasks[task]} 
        taskId={task} 
        categoryName={this.props.categoryName}
        removeTask={this.props.removeTask}/>;
    }.bind(this));
    return (
      <article className='category' id={this.props.id}>
        <h2> {this.props.categoryName} </h2>
        <ul> { tasks } </ul>
      </article>
    );
  };  
}
